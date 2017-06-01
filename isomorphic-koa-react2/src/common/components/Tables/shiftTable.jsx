import React from 'react';

export default class ShiftTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rspRecordsList:this.props.rspRecordsList,
      tableName:this.props.tableName
    };
  }

  trClick=(e)=>{
    let printTxt = e.target.parentNode.getAttribute("data-print-txt");
    this.props.trClick(printTxt);
    // console.log(e.target.parentNode.getAttribute("data-print-txt"));
    // console.log(e.target.getAttribute("data-print-txt"));
  }

  //当初次渲染完毕 设置该组件的属性
  componentDidMount() {
    // this.setState({"firstView": true});
  }

  //当传入的props有变化. 代表数据有更新，需要重新渲染table
  componentWillReceiveProps(nextProps) {
    this.setState({rspRecordsList:nextProps.rspRecordsList});
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

  formateDate=(dateTxt)=>{
      let year = dateTxt.substring(2,4).length==2?dateTxt.substring(2,4):"--";
      let month = dateTxt.substring(4,6).length==2?dateTxt.substring(4,6):"--";
      let day = dateTxt.substring(6,8).length==2?dateTxt.substring(6,8):"--";
      let hour = dateTxt.substring(8,10).length==2?dateTxt.substring(8,10):"--";
      let minute = dateTxt.substring(10,12).length==2?dateTxt.substring(10,12):"--";
      let second = dateTxt.substring(12,14).length==2?dateTxt.substring(12,14):"--";
      return year+"/"+month+"/"+day+" "+hour+":"+minute+":"+second;
  }

  generateTableBody=(rspRecordsList,nameList)=>{
    var  nameList= nameList || [];
    return(
        <tbody>
        {
          rspRecordsList.map((elem, index)=>{
            return (
                <tr key={'btr_'+index} ref="tr" data-print-txt={elem.printTxt} onClick={this.trClick}>
                   {
                    nameList.map((ele, indx)=>{
                      if(ele=="createTime" || ele=="endWorkTime"){
                        return(
                          <td key={'btd_'+indx}>
                            {this.formateDate(elem[ele])}
                          </td>
                        );
                      }
                      else if(ele=="inSpareCashAmount"){
                        return(
                          <td key={'btd_'+indx}>
                            {"￥"+elem[ele]}
                          </td>
                        );
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
            <table className="table table-striped table-nowrap table-headmiddle table-headnowrap">
              {this.generateTableHeader(headerCfg[this.state.tableName]['headerTextsList'])}
              {this.generateTableBody(this.state.rspRecordsList,headerCfg[this.state.tableName]['nameList'])}
            </table>
        </div>
      )
    }
  }
}

var headerCfg = {
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
    }
   }
      
