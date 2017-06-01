/**
 * 打印日志:简化console.log()的写法。
 * @param  {any} arg 可以传入多个任意类型的参数
 * @return [type]       [description]
 */
export function logger(...arg) {
    if(process.env.NODE_ENV !=='production'){
				const args = arg.map(x=>JSON.stringify(x,null,2)).join('\n')
        console.log.call(null,args);
    }
}

/**
 * 转换Table组件的columns数据结构
 * @param  {[type]} columnsData [description]
 * @return [type]            [description]
 */
export function transColumnsData(columnsData){
	if(!columnsData || !columnsData.length) return ;
	let rowData = []
	for(let i=0;i<columnsData.length;i++){
		let obj = {}
		const cur = columnsData[i]
		if(cur.includes('|')){
			const firstSubRow = cur.split('|')
			const childRow = []
			obj.title = firstSubRow[0]
			childRow.push({
				title: firstSubRow[1],
				dataIndex: 'billreport_'+i,
				key: 'billreport_'+i,
				width: 160,
			})
			obj.children = childRow
		}else{
			obj.title = cur;
			obj.dataIndex = 'billreport_'+i;
			obj.key = 'billreport_'+i;
			obj.width = 100
		}
		rowData.push(obj)
	}
	let result = []
	let resultObj = {}
	for(let k=0;k<rowData.length;k++){
		const key = rowData[k].title
		if(!resultObj[key]){
			resultObj[key] = rowData[k]
		}else{
			if(rowData[k].children && resultObj[key].children){
				resultObj[key].children = resultObj[key].children.concat(rowData[k].children)
			}
		}
	}
	rowData = Object.keys(resultObj).map((item)=> resultObj[item])
	//console.log(rowData)
	return rowData;

}
/**
 * 转换Table组件 dataSource的数据结构
 * @param  {[type]} columnsData [description]
 * @return [type]               [description]
 */
export function transTableDataSource(dataSource){
	if(!dataSource || !dataSource.length) return ;
	let rowData = []
	for(let i=0;i < dataSource.length; i++){

		const curRow = dataSource[i].row
		let obj = {}
		for(let j=0;j<curRow.length;j++){
			const cur = curRow[j]
			obj['billreport_'+j] = cur;
		}
		rowData.push(obj)
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
export function mergeColumnsWidth(columns,obj={}){
  if(!columns.length) return ;
  columns.forEach((item,index)=>{
   if(!item.children && item.width&& obj[item.dataIndex] !== undefined) {
     item.width = obj[item.dataIndex];
    }else if(item.children && item.children.length){
				item.children.forEach((citem,cindex)=>{
          if(obj[citem.dataIndex] !== undefined){
            citem.width = obj[citem.dataIndex];
          }
        })
    }
  })
  return columns;
}
