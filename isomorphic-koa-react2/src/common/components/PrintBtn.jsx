import React from 'react';
import ReactDOM from 'react-dom';

export default class PrintBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       printTxt:this.props.printTxt
    };
  }

  //当传入的props有变化. 代表数据有更新
  componentWillReceiveProps(nextProps) {
    this.setState({"printTxt":nextProps});
  }

  togglePrint=()=>{
    print(this.state.printTxt);
  }

  render() {
    return (
      <a className="print-btn">
        <button onClick={this.togglePrint}>打印班结报表</button>
      </a>    
     )
  }
}