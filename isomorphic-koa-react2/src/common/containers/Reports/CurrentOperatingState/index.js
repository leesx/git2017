import React from 'react';
import Loading from 'components/common/Loading'
import {fetchData} from 'helpers'
import {Table} from 'antd'
const columns = [{
	title:'类型',
	dataIndex:'typeName',
	key:'typeName',
	width:60,
},{
	title:'单数',
	dataIndex:'orderCount',
	key:'orderCount',
	width:60,
},{
	title:'人数',
	dataIndex:'person',
	key:'person',
	width:60,
},{
	title:'流水',
	dataIndex:'foodAmount',
	key:'foodAmount',
	width:100,
},{
	title:'待结单数',
	dataIndex:'waitCheckoutOrderCount',
	key:'waitCheckoutOrderCount',
	width:60,
},{
	title:'待结金额',
	dataIndex:'waitCheckoutOrderAmount',
	key:'waitCheckoutOrderAmount',
	width:60,
},{
	title:'优惠金额',
	dataIndex:'promotionAmount',
	key:'promotionAmount',
	width:60,
},{
	title:'实收金额',
	dataIndex:'paidAmount',
	key:'paidAmount',
	width:60,
}]

export default class CurrentOperatingState extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
			tableDataSource:{
			 dataSource:[], //table数据源
		 },
       isLoadingShow:true
    };
    this.handleSearch();
  }

  refreshState=(rsp)=>{
      if(rsp.code=="000"){
				const dataSource = rsp.data.records
				this.setState(Object.assign(this.state.tableDataSource,{
					dataSource,
				}))
      }
  };

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
     this.showLoading();
     //发起ajax请求
     fetchData({
      url:"/saas/order/queryCurrBizData.ajax",
      method:"POST",
      data:{}
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
		const { dataSource } = this.state.tableDataSource
    return (
      <div className="" style={{height:'100%'}}>
				<div className="yunpad-table">
						<Table
					    columns={columns}
					    dataSource={dataSource}
					    bordered
              pagination={false}
							scroll={{ x: '120%', y: 400 }}
					  />
        </div>

        <Loading isLoadingShow={this.state.isLoadingShow}/>
      </div>
    );

  }
}
