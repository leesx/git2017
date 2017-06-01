import Picker from 'react-mobile-picker';
import React from 'react';

export default class FoodMarkPicker extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isPickerShow: false,
      valueGroups: {
        title: '含退赠改临套',
      }, 
      optionGroups: {
        title: ['含退赠改临套','退菜', '赠菜', '改价菜','临时菜','套餐'],
      },
      alertList:[
          {key:'含退赠改临套',value:''},
          {key:'退菜',value:'TC'},
          {key:'赠菜',value:'ZC'},
          {key:'改价菜',value:'GJ'},
          {key:'临时菜',value:'LS'},
          {key:'套餐',value:'SC'}
          ]
    };
  }

  // Update the value in response to user picking event
  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));
    let v="";

    for(let obj of this.state.alertList){
      if(obj.key==value){
        v=obj.value;
        break;
      }
    }
    this.props.refreshFoodAlert(v);
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
                <div className="title">菜品类别 
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