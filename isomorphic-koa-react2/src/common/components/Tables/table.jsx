import React from 'react';

export default class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rspRecordsList:this.props.rspRecordsList,
      tableName:this.props.tableName
    };
  }

  //当初次渲染完毕 设置该组件的属性
  componentDidMount() {
    // this.setState({"firstView": true});
  }

  //当传入的props有变化. 代表数据有更新，需要重新渲染table
  componentWillReceiveProps(nextProps) {
    this.setState({rspRecordsList:nextProps.rspRecordsList});
  }

  formateDate=(dateTxt)=>{
      let year = dateTxt.substring(2,4).length==2?dateTxt.substring(2,4):"--";
      let month = dateTxt.substring(4,6).length==2?dateTxt.substring(4,6):"--";
      let day = dateTxt.substring(6,8).length==2?dateTxt.substring(6,8):"--";
      let hour = dateTxt.substring(8,10).length==2?dateTxt.substring(8,10):"--";
      let minute = dateTxt.substring(10,12).length==2?dateTxt.substring(10,12):"--";
      let second = dateTxt.substring(12,14).length==2?dateTxt.substring(12,14):"--";
      return year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second;
  }

  generateTableHeader=(headerDate)=>{
    var headerDate = headerDate || [];
    return(
          <thead>
          {
            headerDate.map((elem,index)=> {
                return (
                  <tr key={'tr_'+index}>
                    {
                      elem.map((ele,indx)=> {
                        return(
                          <th key={'td_'+indx} rowSpan={ele.rowspan} colSpan={ele.colspan}>
                             {ele.text}
                          </th>
                          );
                      })
                    }
                  </tr>
                  );
            })
          }
          </thead>
      )
  }

  generateTableBody=(rspRecordsList,nameList)=>{
    var  nameList= nameList || [];
    return(
        <tbody>
        {
          rspRecordsList.map((elem, index)=>{
            return (
                <tr key={'btr_'+index}>
                   {
                    nameList.map((ele, indx)=>{
                      if(ele=="createTime" || ele=="endWorkTime"){
                        // return(
                        //   <td key={'btd_'+indx}>
                        //     {this.formateDate(elem[ele])}
                        //   </td>
                        // );
                        return(
                          <td key={'btd_'+indx}>
                            {elem[ele]}
                          </td>
                        );
                      }
                      else if(ele=="paidAmount" || ele=="promotionAmount" || ele=="foodAmount" || ele=="waitCheckoutOrderAmount"){
                        let tdTxt = "";
                        if(elem[ele]){
                          tdTxt = "￥"+elem[ele];
                        }
                        return(
                          <td key={'btd_'+indx}>
                            {tdTxt}
                          </td>
                        );
                      }
                      else if(ele=="isTempFood" || ele=="isSetFood"){
                        if(elem[ele]==1){
                          return(
                            <td key={'btd_'+indx}>
                              {"√"}
                            </td>
                          );
                        }else{
                          return(
                            <td key={'btd_'+indx}>
                              {""}
                            </td>
                          );
                        }
                        
                      }
                      else{
                        return(
                          <td key={'btd_'+indx}>
                            {elem[ele]}
                          </td>
                        );
                      }
                    })
                   }
                </tr>
              );
          })
        }
        </tbody>
      )
  }

  render() {
    if(this.state.rspRecordsList.length==0){
        return(
          <div className="result-table">
              <div className="no-data">
                无结果
              </div>
          </div>
       )
    }else{
      return(
        <div className="result-table">
            <table className="table table-striped table-bordered table-nowrap table-headmiddle table-headnowrap">
              {this.generateTableHeader(headerCfg[this.state.tableName]['headerTextsList'])}
              {this.generateTableBody(this.state.rspRecordsList,headerCfg[this.state.tableName]['nameList'])}
            </table>
        </div>
      )
    }
  }
}

var headerCfg = {
  foodDetail:{
            headerTextsList:[
                [
                    {text:"详情",colspan:6,rowspan:1},
                    {text:"点菜",colspan:3,rowspan:1},
                    {text:"退菜",colspan:4,rowspan:1},
                    {text:"赠菜",colspan:4,rowspan:1},
                    {text:"其他",colspan:4,rowspan:1}
                ],
                [
                    {text:"账单号",colspan:1,rowspan:1},
                    {text:"台牌号",colspan:1,rowspan:1},
                    {text:"日期",colspan:1,rowspan:1},
                    {text:"分类",colspan:1,rowspan:1},
                    {text:"品名",colspan:1,rowspan:1},
                    {text:"规格",colspan:1,rowspan:1},
                    {text:"人员",colspan:1,rowspan:1},
                    {text:"数量",colspan:1,rowspan:1},
                    {text:"时间",colspan:1,rowspan:1},
                    {text:"人员",colspan:1,rowspan:1},
                    {text:"数量",colspan:1,rowspan:1},
                    {text:"时间",colspan:1,rowspan:1},
                    {text:"原因",colspan:1,rowspan:1},
                    {text:"人员",colspan:1,rowspan:1},
                    {text:"数量",colspan:1,rowspan:1},
                    {text:"时间",colspan:1,rowspan:1}, 
                    {text:"原因",colspan:1,rowspan:1}, 
                    {text:"临时菜",colspan:1,rowspan:1},    
                    {text:"套餐标记",colspan:1,rowspan:1},
                    {text:"套餐名",colspan:1,rowspan:1},
                    {text:"要求",colspan:1,rowspan:1}
                ]
            ],
            nameList:["saasOrderKey","tableName","createTime","foodCategoryName","foodName","unit",
                "orderBy","foodNumber","createTime","cancelBy","foodCancelNumber","cancelTime","cancelReason",
                "sendBy","foodSendNumber","sendTime","sendReason","isTempFood","isSetFood","setFoodName","foodRemark"]
           },
  operationLog:{
            headerTextsList:[
            
                [
                    {text:"创建时间",colspan:1,rowspan:1},
                    {text:"操作人员",colspan:1,rowspan:1},
                    {text:"日志类型",colspan:1,rowspan:1},
                    {text:"日志描述",colspan:1,rowspan:1},
                    {text:"设备名称",colspan:1,rowspan:1}
                ]
            ],
            nameList:["createTime","createBy","logSubject","logRemark","deviceName"]
           },
  shiftLog:{
            headerTextsList:[
            
                [
                    {text:"交班人员",colspan:1,rowspan:1},
                    {text:"开始时间",colspan:1,rowspan:1},
                    {text:"交班时间",colspan:1,rowspan:1},
                    {text:"备用金",colspan:1,rowspan:1},
                    {text:"交班备注",colspan:1,rowspan:1}
                ]
            ],
            nameList:["checkoutBy","createTime","endWorkTime","inSpareCashAmount","shiftRemark"]
    },
  currentOperatingState:{
            headerTextsList:[
            
                [
                    {text:"类型",colspan:1,rowspan:1},
                    {text:"单数",colspan:1,rowspan:1},
                    {text:"人数",colspan:1,rowspan:1},
                    {text:"流水",colspan:1,rowspan:1},
                    {text:"待结单数",colspan:1,rowspan:1},
                    {text:"待结金额",colspan:1,rowspan:1},
                    {text:"优惠金额",colspan:1,rowspan:1},
                    {text:"实收金额",colspan:1,rowspan:1}
                ]

            ],
            nameList:["typeName","orderCount","person","foodAmount","waitCheckoutOrderCount","waitCheckoutOrderAmount","promotionAmount","paidAmount"]
  }
}
      
