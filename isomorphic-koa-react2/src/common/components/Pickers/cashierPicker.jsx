import Picker from 'react-mobile-picker';
import React from 'react';

export default class CashierPicker extends React.Component{
  constructor(props) {
    super(props);
    let cashierData = this.getCashierData(this.props.cashierList);
    this.state = {
      ...cashierData,
      isPickerShow: false
    };

  }

  componentWillReceiveProps=(nextProps)=>{
    if(this.props.cashierList!=nextProps.cashierList){
      let cashierData = this.getCashierData(nextProps.cashierList);
      this.setState({...cashierData});
    }
  };

  //计算state中的收银员数据
  getCashierData = (cashierList)=>{
    let checkoutByLst = cashierList || []; 

    let optionsGroupTitle=["收银人员"];
    checkoutByLst.map((elem) => {
      optionsGroupTitle.push(elem.Key);
    });

    return {
      checkoutByLst:checkoutByLst,
      valueGroups: {
        title: "收银人员",
      }, 
      optionGroups:{
        title:optionsGroupTitle
      }
    }

  }

  // 上下滑动选择项会更新父组件相应的state
  handleChange = (name, value) => {
    let valueGroups = this.state.valueGroups;
    this.setState(() => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));

    let v;

    if(value=="收银人员"){
        v="全部";
    }

    for(let obj of this.state.checkoutByLst){
      if(obj.Key==value){
        v=obj.Value;
        break;
      }
    }

    if(typeof v != undefined){
      this.props.refreshCashier(v);  
    }
  };

  togglePicker = () => {
    this.setState(
      ({isPickerShow}) => ({
        isPickerShow: !isPickerShow
      }),

      ()=>{
        if(this.state.isPickerShow){
          let dom = this.refs.modal;
          let screenWidth = window.screen.width;
          let domX = dom.getBoundingClientRect().left;
          let domW = dom.clientWidth;
          let left = domX+domW - screenWidth;
          if(left>0){
            dom.style.left = -(left+5)+"px";
          }
        }
      }
      );
  };


  render() {
    const {isPickerShow,optionGroups, valueGroups} = this.state;
    const maskStyle = {
      display: isPickerShow ? 'block' : 'none'
    };
    const pickerModalClass = `picker-modal${isPickerShow ? ' picker-modal-show' : ''}`;

    return (
      <div className="query-pan-item">
        <div onClick={this.togglePicker}>
          <a href="javascript:;">
            {valueGroups.title}
          </a>
          <i className="icon iconfont icon-moreunfold"></i>
        </div>
        <div className="picker-modal-container">
          <div className="picker-modal-mask" style={maskStyle} onClick={this.togglePicker}></div>
          <div className={pickerModalClass} ref="modal">
            <div className="icon iconfont icon-shoujiwangye01"></div>
            <header>
                <div className="title">收银人员
                <span onClick={this.togglePicker}>确定</span>
                </div>
            </header>
            <Picker
              optionGroups={optionGroups}
              valueGroups={valueGroups}
              onChange={this.handleChange} />
          </div>
        </div>

      </div>
    );
  }
}