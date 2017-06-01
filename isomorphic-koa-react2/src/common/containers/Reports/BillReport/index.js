import React, { Component, PropTypes } from 'react'
import  {
	DatePicker,
	CashierPicker,
	BillStatusPicker,
	BillCategoryPicker,
	ChannelPicker,
	TimeNamePicker,
	AreaNamePicker,
	PayTypePicker,
} from 'components/Pickers'

import Loading from 'components/common/Loading';
import {fetchData,SiteInfo,DateUtils,transTableDataSource, transColumnsData,mergeColumnsWidth} from 'helpers'
import { message, Icon, Row, Col, Input, Checkbox, Button, Table, Pagination} from 'antd'
const CheckboxGroup = Checkbox.Group;
const Search = Input.Search;
const checkBoxOptions = [
  { label: '反结账', value: 'FJZ' },
  { label: '预结账', value: 'YJZ' },
  { label: '金额异常', value: 'JEYC' },
  { label: '测试单', value: 'CSD' },
  { label: '含退菜', value: 'TC' },
  { label: '含增菜', value: 'ZC' },
  { label: '有改价', value: 'GJ' },
  { label: '有临时菜', value: 'LSC' },
  { label: '有临时套餐', value: 'LSTC' },
];

let columns = [];

export default class BillReport extends Component {

  constructor(props) {
    super(props);
    this.state = {
       cashier:"全部",
       orderStatus:"",
       orderSubType:"",
       channelName:"",
       timeName:"",
       areaName:"",
       payName:"",
       foodAlert:"",
       foodCategoryName:"",
       alertFlag:[],
       keyword: "",
			 tableDataSource:{
				 current:1,
				 pageSize:15,
				 total:0,//总共数据条数
				 dataSource:[], //table数据源
			 },
       startDate:new Date(),
       endDate:new Date(),
       foodName:"",
       reportDictionaryDate:{},
       isLoadingShow:false,
    };
    this.getSiteInfo();
    this.handleSearch();
		this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this)
		this.refreshTextInput = this.refreshTextInput.bind(this)
  }

  getSiteInfo =()=>{
    SiteInfo.getSiteInfo(()=>{
      this.setState({reportDictionaryDate:SiteInfo.info});
    });
  }

  refreshKeyword =(name)=> {
    this.setState({keyword: name});
  };

  refreshCashier =(value)=>{
    this.setState({cashier:value});
  };

  refreshBillStatus =(value)=>{
    this.setState({orderStatus:value});
  };

  refreshBillCategory =(value)=>{
    this.setState({orderSubType:value});
  };

  refreshChannel=(value)=>{
    this.setState({channelName:value});
  };

  refreshTimeName=(value)=>{
    this.setState({timeName:value});
  };

  refreshAreaName=(value)=>{
    this.setState({areaName:value});
  };

  refreshPayType=(value)=>{
    this.setState({payName:value});
  };

  refreshState=(rsp)=>{

      if(rsp.code=="000"){
				const total = rsp.data.recordCount*1
				if(rsp.data.records.length){
					const columnsData = rsp.data.records[0].row

					columns = transColumnsData(columnsData)
					mergeColumnsWidth(columns,{
						'billreport_1':200,
						'billreport_14':300,
						'billreport_35':200,
						'billreport_52':300,
					})
					const dataSource = transTableDataSource(rsp.data.records.slice(1))
					this.setState(Object.assign(this.state.tableDataSource,{
						total,
						dataSource,
					}))
				}
      }
  };

  refreshTextInput(value){
		this.setState({
			foodName: value
		},()=>{
			this.handleSearch()
		})
  }

	handleChangeSearch=(e)=>{
		const foodName = e.target.value.trim()
    this.setState({foodName});
	}

  // 更新复选框
  refreshCheckbox=(state)=>{
    let name = state.name;
    let alertFlag = this.state.alertFlag;

    if(state.checked){
      if(!alertFlag.some((item)=>{return item==name})){
        alertFlag.push(name);
      }
    }else{
      let tempAlertFlag =[];
      for(let i=0;i<alertFlag.length;i++){
        if(alertFlag[i]!=name){
          tempAlertFlag.push(alertFlag[i]);
        }
      }
      alertFlag = tempAlertFlag;
    }
    this.setState({alertFlag:alertFlag});

  }

	handleChangeCheckBox(checkedValues){
		this.setState({
			alertFlag:checkedValues
		});
	}

  updateDateTime=(startOrEnd,dateAndTime)=>{
		const dateField = startOrEnd == "start" ? 'startDate' : 'endDate'
		this.setState({
			[dateField]:DateUtils.newDateNoTime(dateAndTime)
		});
  }

  //更新页码
  handleChangePagination=(current)=>{
		this.setState(Object.assign(this.state.tableDataSource,{
			current
		}))
    this.handleSearch();
  }

  //点击查询按钮
  searchClick=()=>{
		this.setState(Object.assign(this.state.tableDataSource,{
			current:1
		}))
    this.handleSearch();
  }

  //弹出加载动画
  showLoading=(isLoadingShow)=>{
		this.setState({isLoadingShow});
  }


  //查询结果
  handleSearch=()=> {

    let {foodName,cashier,
        alertFlag,orderStatus,orderSubType,channelName,
        timeName,areaName,payName,startDate,endDate} = this.state;
		const date = {
			startDate : DateUtils.transformString(DateUtils.toValueGroupsNoTime(startDate)),
			endDate : DateUtils.transformString(DateUtils.toValueGroupsNoTime(endDate)),
		}
		const { pageSize,current } = this.state.tableDataSource
		const diffTime = startDate.getTime() - endDate.getTime()

		if(diffTime > 0){
			message.warn('开始时间必须小于结束时间,请重新选择',3)
			return false;
		}
			this.showLoading(true)
     //发起ajax请求
     fetchData({
      url:"/saas/order/queryorderdetail.ajax",
      method:"POST",
      data:{
        ...date,
        checkoutBy:cashier,
        orderStatus,
        orderSubType,
        channelName,
        timeName,
        areaName,
        payName,
        foodName,
        alertFlag:alertFlag.join(),
        pageNo:current,
        pageSize,
      }
     })
     .then((rsp) => {
         this.refreshState(rsp);
      })
      .finally(()=>{
        this.showLoading(false)
     });

  }

  render(){
		const {startDate,endDate} = this.state
		const { dataSource, current,total,  pageSize, } = this.state.tableDataSource
    return (
      <div>
        <div className="query-pan" style={{height:'auto',paddingBottom:20}}>
					<Row>
					 <Col xs={8} md={4}>
						 <div className="query-pan-item">
							 <DatePicker
								 updateDateTime={this.updateDateTime}
								 date={this.startDate}
								 startOrEnd="start"
							 />
						 </div>
					 </Col>
					 <Col xs={8} md={4}>
						 <div className="query-pan-item">
							 <DatePicker
							 	updateDateTime={this.updateDateTime}
							 	date={this.endDate}
							 	startOrEnd="end"
							 />
						 </div>
					 </Col>
					 <Col xs={8} md={4}>
						 <CashierPicker
							 cashierList={this.state.reportDictionaryDate.checkoutByLst}
							 refreshCashier = {this.refreshCashier}
						 />
					 </Col>
					 <Col xs={8} md={4}>
						 <BillStatusPicker refreshBillStatus = {this.refreshBillStatus}/>
					 </Col>
					 <Col xs={8} md={4}>
						 <BillCategoryPicker refreshBillCategory ={this.refreshBillCategory}/>
					 </Col>
					 <Col xs={8} md={4}>
						 <ChannelPicker
							 channelList={this.state.reportDictionaryDate.channelLst}
							 refreshChannel = {this.refreshChannel}
							 />
					 </Col>
					 <Col xs={8} md={4}>
						 <TimeNamePicker
							 timeNameList={this.state.reportDictionaryDate.timeNameLst}
							 refreshTimeName = {this.refreshTimeName}
							 />
					 </Col>
					 <Col xs={8} md={4}>
						 <AreaNamePicker
							 areaNameList={this.state.reportDictionaryDate.areaLst}
							 refreshAreaName = {this.refreshAreaName}
							 />
					 </Col>
					 <Col xs={8} md={4}>
						 <PayTypePicker
							 payTypeList={this.state.reportDictionaryDate.paySubjectLst}
							 refreshPayType = {this.refreshPayType}
							 />
					 </Col>
					</Row>
					<div style={{marginTop:10}}>
						<CheckboxGroup
							options={checkBoxOptions}
							onChange={this.handleChangeCheckBox}
							/>
					</div>
					<div style={{marginTop:10}}>
						<Search
							style={{ width: 200,marginRight:10 }}
							onSearch={this.refreshTextInput}
							onChange={this.handleChangeSearch}
							placeholder="请输入菜品名称"
						/>
						<Button type="primary"  onClick={this.searchClick}>查询</Button>
					</div>
        </div>
        <div className="yunpad-table">
						<Table
					    columns={columns}
					    dataSource={dataSource}
					    bordered
              pagination={false}
					    scroll={{ x: '120%', y: 400 }}
					  />
					{
						dataSource && dataSource.length ?
						<Pagination
				      total={total}
				      showTotal={(total, range) => `当前${current}/${Math.ceil(total/pageSize)}页,每页显示${pageSize}条,共 ${total} 条`}
				      pageSize={pageSize}
							onChange={this.handleChangePagination}
				      defaultCurrent={1}
							current={current}
				    /> : null
					}

        </div>
        <Loading isLoadingShow={this.state.isLoadingShow}/>
    </div>
    );
  }
}
