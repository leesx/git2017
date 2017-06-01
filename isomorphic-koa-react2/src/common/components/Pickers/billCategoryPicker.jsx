import Picker from 'react-mobile-picker';
import React from 'react';

export default class BillCategoryPicker extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isPickerShow: false,
      valueGroups: {
        title: "账单类型"
      }, 
      optionGroups: {
        title: ["账单类型","全部","食堂","外卖","自提"]
      },
      optionGroupsObjList:[
                            {key:"账单类型",value:"10"},
                            {key:"全部",value:"10"},
                            {key:"食堂",value:"20"},
                            {key:"外卖",value:"30"},
                            {key:"自提",value:"40"},

                          ]
    };

  }

  // 上下滑动选择项会更新父组件相应的state
  handleChange = (name, value) => {
    this.setState(({valueGroups}) => ({
      valueGroups: {
        ...valueGroups,
        [name]: value
      }
    }));

    let v;
    
    for(let obj of this.state.optionGroupsObjList){
      if(obj.key==value){
        v=obj.value;
        break;
      }
    }

    if(typeof v != undefined){
      this.props.refreshBillCategory(v);  
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
                <div className="title">账单类型
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