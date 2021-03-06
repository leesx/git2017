import Picker from 'react-mobile-picker';
import React from 'react';

export default class TimeNamePicker extends React.Component{
  constructor(props) {
    super(props);
    let timeNameData = this.getTimeNameData(this.props.timeNameList);
    this.state = {
      ...timeNameData,
      isPickerShow: false
    };

  }

  componentWillReceiveProps=(nextProps)=>{
    if(this.props.timeNameList!=nextProps.timeNameList){
      let timeNameData = this.getTimeNameData(nextProps.timeNameList);
      this.setState({...timeNameData});
    }
  };

  //计算state中的渠道数据
  getTimeNameData = (timeNames)=>{

    let timeNameList = timeNames || []; 

    let optionsGroupTitle=["时段名称"];
    timeNameList.map((elem) => {
      optionsGroupTitle.push(elem.Key);
    });

    return {
      timeNameList:timeNameList,
      valueGroups: {
        title: "时段名称",
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

    if(value=="时段名称"){
        v="全部";
    }

    for(let obj of this.state.timeNameList){
      if(obj.Key==value){
        v=obj.Value;
        break;
      }
    }

    if(typeof v != undefined){
      this.props.refreshTimeName(v);  
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
                <div className="title">时段名称
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