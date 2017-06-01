import Picker from 'react-mobile-picker';
import React from 'react';

export default class ChannelPicker extends React.Component{
  constructor(props) {
    super(props);
    let channelData = this.getChannelData(this.props.channelList);
    this.state = {
      ...channelData,
      isPickerShow: false
    };

  }

  componentWillReceiveProps=(nextProps)=>{
    if(this.props.channelList!=nextProps.channelList){
      let channelData = this.getChannelData(nextProps.channelList);
      this.setState({...channelData});
    }
  };

  //计算state中的渠道数据
  getChannelData = (channelLists)=>{

    let channelList = channelLists || []; 

    let optionsGroupTitle=["渠道名称"];
    channelList.map((elem) => {
      optionsGroupTitle.push(elem.Key);
    });

    return {
      channelList:channelList,
      valueGroups: {
        title: "渠道名称",
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

    if(value=="渠道名称"){
        v="全部";
    }

    for(let obj of this.state.channelList){
      if(obj.Key==value){
        v=obj.Value;
        break;
      }
    }

    if(typeof v != undefined){
      this.props.refreshChannel(v);  
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
                <div className="title">渠道名称
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