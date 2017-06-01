
import React from 'react';

export default class DynamicTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rspRecordsList:this.props.rspRecordsList
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
            <table className="table table-bordered table-nowrap table-headmiddle table-headnowrap">
              {generateTableHeader(this.state.rspRecordsList)}
              {generateTableBody(this.state.rspRecordsList)}
            </table>
        </div>
      )
    }
  }
}

function generateTableHeader(recordList){
  let headerArray = recordList[0].row.slice();
  let headerDate = createDynamicTableHeadData(headerArray) || [];

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
};

function generateTableBody(recordList){
  let records=[];

  for(let i=1;i<recordList.length;i++){
    records.push(recordList[i].row.slice());
  }

  return(
      <tbody>
      {
        records.map((elem, index)=>{
          return (
              <tr key={'btr_'+index}>
                 {
                  elem.map((ele, indx)=>{
                    return(
                        <td key={'btd_'+indx}>
                          {elem[indx]}
                        </td>
                      );
                  })
                 }
              </tr>
            );
        })
       }
      </tbody>
    )
}

function createDynamicTableHeadData(headerArray){

  let deep = 1;
  let headerArraySplit=[];
  for(let i=0;i<headerArray.length;i++){
      let thisArr = headerArray[i].split("|");
      headerArraySplit.push(thisArr);
      if(thisArr.length>deep){
        deep = thisArr.length;
      }
  }


  let headerArrayFilter = [];
  for(let j=1;j<=deep;j++){
    let insideArr =[];
    for(let y=0;y<headerArraySplit.length;y++){
      if(headerArraySplit[y].length>=j) {
        var rowspan = 1;
        if(headerArraySplit[y].length==j) rowspan = deep-j+1;
        insideArr.push({
          text:headerArraySplit[y][j-1],
          rowspan:rowspan
        });
      }
    }
    headerArrayFilter.push(insideArr);
  }


  let beforeHeader = [];
  for(let a=0;a<deep;a++){
    beforeHeader.push([]);
  }

  for(let m=0;m<headerArrayFilter.length;m++){

    for(let n=0;n<headerArrayFilter[m].length;n++){
      for(let x=n+1;x<headerArrayFilter[m].length;x++){
        if(headerArrayFilter[m][n].text!=headerArrayFilter[m][x].text){
          var len = x-n;
          var temp = Object.assign({},headerArrayFilter[m][n]);
          temp.colspan = len;
          beforeHeader[m].push(temp);
          n=x-1;
          break;
        }
      }

      if(n==headerArrayFilter[m].length-1){
          let len=0;
          for(let i = n;i>0;i--){
            if(headerArrayFilter[m][n].text==headerArrayFilter[m][i].text){
              len++
            }else{
              var temp = Object.assign({},headerArrayFilter[m][n]);
              temp.colspan = len;
              beforeHeader[m].push(temp);
              break;
            }
          }

      }

    }

  }

  return beforeHeader;
}
