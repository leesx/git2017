import React from 'react';
import  {DatePicker} from 'components/Pickers'
import Loading from 'components/common/Loading'
import {fetchData,DateUtils} from 'helpers'

import { message, Icon, Row, Col, Input, Button, Table, Pagination } from 'antd'
const Search = Input.Search;

/**
 * 将时间字符串转化为标准格式
 * eg. 20170414183412 ---> 2017/04/14 18:34:12
 * @param  {String} timeStr 时间字符串
 * @return {String}
 */
function regTimeString(timeStr){
	if(!timeStr) return ;
	const reg = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/
	const regTextArr = timeStr.match(reg)
	return `${regTextArr[1]}/${regTextArr[2]}/${regTextArr[3]}  ${regTextArr[4]}:${regTextArr[5]}`
}

const columns = [{
	title: '创建时间',
  dataIndex: 'createTime',
  key: 'createTime',
	width:100,
	render(text){
		return regTimeString(text)
	}
},{
	title: '操作人员',
  dataIndex: 'createBy',
  key: 'createBy',
	width:100,
},{
	title: '日志类型',
  dataIndex: 'logSubject',
  key: 'logSubject',
	width:100,
},{
	title: '日志描述',
  dataIndex: 'logRemark',
  key: 'logRemark',
	width:300,
},{
	title: '设备名称',
  dataIndex: 'deviceName',
  key: 'deviceName',
	width:100,
}]

export default class OperationLog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       keyword:"",
       startDate:new Date(),
       endDate:new Date(),
			 tableDataSource:{
				 current:1,
				 pageSize:15,
				 total:0,//总共数据条数
				 dataSource:[], //table数据源
			 },
       rspRecordsList:[],
       isLoadingShow:true
    };
    this.handleSearch();
  }

  refreshTextInput=(value)=>{
		const keyword = value.trim()
		if(!keyword) return;
    this.setState(Object.assign(this.state.tableDataSource,{
			current:1,
			keyword,
		}),()=>{
			this.handleSearch()
		});
  }

  refreshState=(rsp)=>{
      if(rsp.code=="000"){
				const total = rsp.data.recordCount*1
				const dataSource = rsp.data.records
				this.setState(Object.assign(this.state.tableDataSource,{
					total,
					dataSource,
				}))
      }
  };

  //更新日期时间
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

	handleChangeSearch=(e)=>{
		const keyword = e.target.value.trim()
    this.setState({keyword});
	}

  //点击查询按钮
  searchClick=()=>{
		this.setState(Object.assign(this.state.tableDataSource,{
			current:1
		}))
    this.handleSearch();
  }

  //弹出加载动画
  showLoading=()=>{
    if(!this.state.isLoadingShow){
      this.setState({isLoadingShow:true});
    }
  }

  //隐藏加载动画
  hiddenLoading=()=>{
    if(this.state.isLoadingShow){
      this.setState({isLoadingShow:false});
    }
  }

  //查询结果
  handleSearch=()=> {
    let {keyword,startDate,endDate} = this.state;

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
     this.showLoading();
     //发起ajax请求
     fetchData({
      url:"/saas/order/queryLog.ajax",
      method:"POST",
      data:{
				...date,
        keyword,
        pageNo:current,
        pageSize,
      }
     })
     .then((rsp) => {
         this.refreshState(rsp);
      })
     .catch((error) => {
         console.error(error);
     })
     .finally(()=>{
        this.hiddenLoading();
        console.log("done");
     });

  }

  render(){
		const { startDate, endDate} = this.state
		const { dataSource, scrollX, current,total,  pageSize, } = this.state.tableDataSource
    return (
      <div>
				<Row className="query-pan">
					<Col xs={24} md={12}>
						<div className="query-pan-item">
							<DatePicker
								updateDateTime={this.updateDateTime}
								date={startDate}
								startOrEnd="start"
							/>
							<Icon type="minus" className="icon-spliter"/>
							<DatePicker
								updateDateTime={this.updateDateTime}
								date={endDate}
								startOrEnd="end"
							/>
						</div>
					</Col>
					<Col xs={8} md={12}>
						<Search
							style={{ width: 200,marginRight:10 }}
							onSearch={this.refreshTextInput}
							onChange={this.handleChangeSearch}
							placeholder="日志名、内容、设备名、操作员"
						/>
						<Button type="primary"  onClick={this.searchClick}>查询</Button>
					</Col>
				</Row>
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
