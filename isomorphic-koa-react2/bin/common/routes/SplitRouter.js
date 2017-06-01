'use strict';

if (process.env.__CLIENT__ === true) {

	var billReport = function billReport(location, cb) {
		require.ensure([], function (require) {
			cb(null, require('containers/Reports/BillReport').default);
		}, 'billReport');
	};

	var currentOperatingState = function currentOperatingState(location, cb) {
		require.ensure([], function (require) {
			cb(null, require('containers/Reports/CurrentOperatingState').default);
		}, 'currentOperatingState');
	};
	var operationLogCom = function operationLogCom(location, cb) {
		require.ensure([], function (require) {
			cb(null, require('containers/Reports/OperationLogCom').default);
		}, 'operationLogCom');
	};
	var dailyReport = function dailyReport(location, cb) {
		require.ensure([], function (require) {
			cb(null, require('containers/Reports/DailyReport').default);
		}, 'dailyReport');
	};
	var foodDetailedQuery = function foodDetailedQuery(location, cb) {
		require.ensure([], function (require) {
			cb(null, require('containers/Reports/FoodDetailedQuery').default);
		}, 'foodDetailedQuery');
	};
	var duringAnalysis = function duringAnalysis(location, cb) {
		require.ensure([], function (require) {
			cb(null, require('containers/Reports/DuringAnalysis').default);
		}, 'duringAnalysis');
	};
	var shiftLog = function shiftLog(location, cb) {
		require.ensure([], function (require) {
			cb(null, require('containers/Reports/ShiftLog').default);
		}, 'ShiftLog');
	};

	module.exports = {
		billReport: billReport,
		currentOperatingState: currentOperatingState,
		operationLogCom: operationLogCom,
		dailyReport: dailyReport,
		foodDetailedQuery: foodDetailedQuery,
		duringAnalysis: duringAnalysis,
		shiftLog: shiftLog
	};
}