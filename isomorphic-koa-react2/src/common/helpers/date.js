
var DateUtils = {

	//将date对象转换成时间数组
	dateFormat:function(date){
	    var date = date || new Date();
	    var year = date.getFullYear()+"/";
	    var month = (date.getMonth()+1)+"/";
	    	month = formatSigleNum(month);
	    var day = date.getDate();
	    	day = formatSigleNum(day);
	    return [year,month,day];
		},

  //将时间数组转换成date对象
  newDate:function(arr){
  		var date = new Date();
  		date.setFullYear(arr[0].replace("/",""));
  		date.setMonth(arr[1].replace("/","")-1);
  		date.setDate(arr[2]);
  		return date;
  },

  newDateTime:(obj)=>{
    let {year,month,day, hour,minute} = obj;
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month-1);
    date.setDate(day);
    date.setHours(hour);
    date.setMinutes(minute);
    return date;
  },

  newDateNoTime:(obj)=>{
		let {year,month,day} = obj;
		let date = new Date();
		date.setFullYear(year);
		date.setMonth(month-1);
		date.setDate(day);
		return date;
  },

	/**
	 * @param  日期对象
	 * @return {
	 * 			year:2016,
	 * 			month:05,
	 * 			day:08,
	 * 			hour:09,
	 * 			minute:22
	 * 		}
	 */
	transformToValueGroups:function(date){
		var date = date || new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
			month = formatSigleNum(month);
		var day = date.getDate();
			day = formatSigleNum(day);

		var hour = date.getHours();
			hour = formatSigleNum(hour);
		var minute = date.getMinutes();
			minute = formatSigleNum(minute);

		return {
			        year: year,
			        month:month,
			        day:day,
			        hour:hour,
			        minute:minute
    			}

	},

	toValueGroupsNoTime:function(date){
		var date = date || new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;
			month = formatSigleNum(month);
		var day = date.getDate();
			day = formatSigleNum(day);
		return {
			        year: year,
			        month:month,
			        day:day
    			}
	},

	transformToOptionGroups:function(date){
		var date = date || new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;

		var yearList = [];
			for(var i=year-10;i<year+10;i++){
				yearList.push(i);
			}
		var monthList = [];
			for(var i=1;i<=12;i++){
				monthList.push(formatSigleNum(i));
			}

		var dayList = [];
		var dayNum = dayNumOfMonth(year,month);
			for(var i=1;i<=dayNum;i++){
				dayList.push(formatSigleNum(i));
			}

		var hourList = [];
			for(var i=0;i<24;i++){
				hourList.push(formatSigleNum(i));
			}

		var minuteList =[];
			for(var i=0;i<60;i++){
				minuteList.push(formatSigleNum(i))
			}
		return {
				year: yearList,
		        month:monthList,
		        day:dayList,
		        hour:hourList,
		        minute:minuteList
			}

	},

	toOptionGroupsNoTime:function(date){
		var date = date || new Date();
		var year = date.getFullYear();
		var month = date.getMonth()+1;

		var yearList = [];
			for(var i=year-10;i<year+10;i++){
				yearList.push(i);
			}
		var monthList = [];
			for(var i=1;i<=12;i++){
				monthList.push(formatSigleNum(i));
			}

		var dayList = [];
		var dayNum = dayNumOfMonth(year,month);
			for(var i=1;i<=dayNum;i++){
				dayList.push(formatSigleNum(i));
			}
		return {
						year: yearList,
		        month:monthList,
		        day:dayList
					}

	},

	transformString(valueGroups){
		let str="";
		for(let key in valueGroups){
				str+= String(valueGroups[key]);
		}
		return str;
	}


};

/**
 * 把小于10的数格式化
 * @param  {[type]}
 * @return {[type]}
 */
function formatSigleNum(num){
		if(num<10){
			return "0"+num;
		}else{
			return num;
		}
}

/**
 * 获取某一个月的天数
 * @param  {[type]}
 * @param  {[type]}
 * @return {[type]}
 */
function dayNumOfMonth(year,month){
	var date = new Date(year,month,0);
	return date.getDate();
}

export default DateUtils;
