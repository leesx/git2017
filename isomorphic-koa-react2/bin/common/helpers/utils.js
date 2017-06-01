'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.logger = logger;
exports.transColumnsData = transColumnsData;
exports.transTableDataSource = transTableDataSource;
exports.mergeColumnsWidth = mergeColumnsWidth;
/**
 * 打印日志:简化console.log()的写法。
 * @param  {any} arg 可以传入多个任意类型的参数
 * @return [type]       [description]
 */
function logger() {
	if (process.env.NODE_ENV !== 'production') {
		for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
			arg[_key] = arguments[_key];
		}

		var args = arg.map(function (x) {
			return JSON.stringify(x, null, 2);
		}).join('\n');
		console.log.call(null, args);
	}
}

/**
 * 转换Table组件的columns数据结构
 * @param  {[type]} columnsData [description]
 * @return [type]            [description]
 */
function transColumnsData(columnsData) {
	if (!columnsData || !columnsData.length) return;
	var rowData = [];
	for (var i = 0; i < columnsData.length; i++) {
		var obj = {};
		var cur = columnsData[i];
		if (cur.includes('|')) {
			var firstSubRow = cur.split('|');
			var childRow = [];
			obj.title = firstSubRow[0];
			childRow.push({
				title: firstSubRow[1],
				dataIndex: 'billreport_' + i,
				key: 'billreport_' + i,
				width: 160
			});
			obj.children = childRow;
		} else {
			obj.title = cur;
			obj.dataIndex = 'billreport_' + i;
			obj.key = 'billreport_' + i;
			obj.width = 100;
		}
		rowData.push(obj);
	}
	var result = [];
	var resultObj = {};
	for (var k = 0; k < rowData.length; k++) {
		var key = rowData[k].title;
		if (!resultObj[key]) {
			resultObj[key] = rowData[k];
		} else {
			if (rowData[k].children && resultObj[key].children) {
				resultObj[key].children = resultObj[key].children.concat(rowData[k].children);
			}
		}
	}
	rowData = Object.keys(resultObj).map(function (item) {
		return resultObj[item];
	});
	//console.log(rowData)
	return rowData;
}
/**
 * 转换Table组件 dataSource的数据结构
 * @param  {[type]} columnsData [description]
 * @return [type]               [description]
 */
function transTableDataSource(dataSource) {
	if (!dataSource || !dataSource.length) return;
	var rowData = [];
	for (var i = 0; i < dataSource.length; i++) {

		var curRow = dataSource[i].row;
		var obj = {};
		for (var j = 0; j < curRow.length; j++) {
			var cur = curRow[j];
			obj['billreport_' + j] = cur;
		}
		rowData.push(obj);
	}
	return rowData;
}
/**
 * 修改columns 指定字段的宽度
 * @param  {[type]} arr       [description]
 * @param  {[type]} dataIndex [description]
 * @param  {[type]} w         [description]
 * @return [type]             [description]
 */
/**
 * 修改columns 指定字段的宽度
 * @param  {Array} columns  [description]
 * @param  {Object} [obj={}] {'dataIndex字段名':widthValue}
 * @return [Array]            修改后对应字段宽度的数组
 */
function mergeColumnsWidth(columns) {
	var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	if (!columns.length) return;
	columns.forEach(function (item, index) {
		if (!item.children && item.width && obj[item.dataIndex] !== undefined) {
			item.width = obj[item.dataIndex];
		} else if (item.children && item.children.length) {
			item.children.forEach(function (citem, cindex) {
				if (obj[citem.dataIndex] !== undefined) {
					citem.width = obj[citem.dataIndex];
				}
			});
		}
	});
	return columns;
}