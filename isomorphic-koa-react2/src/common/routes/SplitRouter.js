if(process.env.__CLIENT__ === true){

	const billReport = (location, cb) => {
	    require.ensure([], require => {
	        cb(null, require('containers/Reports/BillReport').default)
	    },'billReport')
	}

	const currentOperatingState = (location, cb) => {
	    require.ensure([], require => {
	        cb(null, require('containers/Reports/CurrentOperatingState').default)
	    },'currentOperatingState')
	}
	const operationLogCom = (location, cb) => {
	    require.ensure([], require => {
	        cb(null, require('containers/Reports/OperationLogCom').default)
	    },'operationLogCom')
	}
	const dailyReport = (location, cb) => {
	    require.ensure([], require => {
	        cb(null, require('containers/Reports/DailyReport').default)
	    },'dailyReport')
	}
	const foodDetailedQuery = (location, cb) => {
	    require.ensure([], require => {
	        cb(null, require('containers/Reports/FoodDetailedQuery').default)
	    },'foodDetailedQuery')
	}
	const duringAnalysis = (location, cb) => {
	    require.ensure([], require => {
	        cb(null, require('containers/Reports/DuringAnalysis').default)
	    },'duringAnalysis')
	}
	const shiftLog = (location, cb) => {
	    require.ensure([], require => {
	        cb(null, require('containers/Reports/ShiftLog').default)
	    },'ShiftLog')
	}

	module.exports = {
		billReport,
		currentOperatingState,
		operationLogCom,
		dailyReport,
		foodDetailedQuery,
		duringAnalysis,
		shiftLog,
	}
}
