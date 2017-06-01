import React from 'react';
import  { DatePicker,CashierPicker } from 'components/Pickers'
import Loading from 'components/common/Loading'
import PrintBtn from 'components/PrintBtn.jsx'
import {fetchData,SiteInfo,DateUtils,transTableDataSource, transColumnsData} from 'helpers'
import {message,Icon, Row, Col, Button, Table, Pagination} from 'antd'

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
	title:'交班人员',
	dataIndex:'checkoutBy',
	key:'checkoutBy',
	width:100,
},{
	title:'开始时间',
	dataIndex:'createTime',
	key:'createTime',
	width:140,
	render(text){
		return regTimeString(text)
	}
},{
	title:'交班时间',
	dataIndex:'endWorkTime',
	key:'endWorkTime',
	width:140,
	render(text){
		return regTimeString(text)
	}
},{
	title:'备用金',
	dataIndex:'inSpareCashAmount',
	key:'inSpareCashAmount',
	width:100,
	render(text){
		return `￥${text}`
	}
},{
	title:'交班备注',
	dataIndex:'shiftRemark',
	key:'shiftRemark',
	width:200,
}]

export default class ShiftLog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       cashier:"全部",
       startDate:new Date(),
       endDate:new Date(),
			 tableDataSource:{
 				current:1,
 				pageSize:15,
 				total:0,//总共数据条数
 				dataSource:[], //table数据源
 			},
       printTxt:"",
       reportDictionaryDate:{},
       isLoadingShow:true
    };
    this.getSiteInfo();
    this.handleSearch();
  }

  getSiteInfo =()=>{
    SiteInfo.getSiteInfo(()=>{
      this.setState({reportDictionaryDate:SiteInfo.info});
    });
  }

  refreshCashier=(value)=>{
    this.setState({"cashier": value});
  };

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

  refreshPrintTxt=(printTxt)=>{
    this.setState({"printTxt": printTxt});
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
    let {cashier,startDate,endDate} = this.state;
		const date = {
			startDateTime : DateUtils.transformString(DateUtils.toValueGroupsNoTime(startDate))+'000000',
			endDateTime : DateUtils.transformString(DateUtils.toValueGroupsNoTime(endDate))+'235959',
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
      url:"/saas/order/queryshiftdata.ajax",
      method:"POST",
      data:{
				...date,
        checkoutBy:cashier,
        // startDateTime:startDate+"000000",
        // endDateTime:endDate+"235959",
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

	//点击行
	handleClickRow=(record, index)=>{
		this.setState({
			printTxt:record.printTxt
		})
	}

    //将打印日志的text转换成html
  formatPrintTxt2Html=(prntTxt='')=> {
    var txt = decodeURIComponent(prntTxt);
    if (isEmptyObject(txt)) return (
			<div className="ant-table-placeholder">
				<span>
					<i className="anticon anticon-frown-o"></i>
					<span>暂无数据</span>
				</span>
			</div>
		);
		const str =txt.replace(/[\n\r]/g,'').replace(/\:<HLLFONT-\d-\d-\d>/g,'')
    const arr = str.split(/\<HLLFONT-\d-\d-\d\>/g).filter((item) => !!item.toString());

    return(
			<div>
		      <div className="print-ticket">
			      {
			        arr.map((lineTxt,index)=>{
			          return(
									<div  key={'p_'+index} >
				            <pre className={(index===0 || index===2) ? 'bold' : null}>
				              {lineTxt}
				            </pre>
				          </div>
								);
			        })
			      }
		      </div>
      		<PrintBtn printTxt = {this.state.printTxt}/>
    	</div>
		)

  };

  render(){
		const {startDate,endDate} = this.state
		const { dataSource, current,total,  pageSize, } = this.state.tableDataSource
    return (
      <div className="" style={{height:'100%'}}>
        <Row className="query-pan">
          <Col xs={24} md={8}>
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
					<Col xs={8} md={4}>
						<CashierPicker
              cashierList={this.state.reportDictionaryDate.checkoutByLst}
              refreshCashier={this.refreshCashier}
            />
					</Col>
          <Col xs={4} md={12}>
            <Button type="primary"  onClick={this.searchClick}>查询</Button>
          </Col>
        </Row>
        <div style={{height:'100%'}}>
          <div className="result-left" style={{height:'100%'}}>
            {this.formatPrintTxt2Html(this.state.printTxt)}
          </div>
          <div className="result-right">
						<div className="yunpad-table">
								<Table
							    columns={columns}
							    dataSource={dataSource}
							    bordered
		              pagination={false}
									onRowClick={this.handleClickRow}
									scroll={{ x: '100%', y: 400 }}
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
          </div>
        </div>

        <Loading isLoadingShow={this.state.isLoadingShow}/>
    </div>
    );
  }
}



//判断对象是否为空
function isEmptyObject(obj){
  for(let o in obj){
    return false;
  }
  return true;
}
