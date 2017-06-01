"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fetchData = require("./fetchData.js");

var _fetchData2 = _interopRequireDefault(_fetchData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteInfo = {
	//set 基本信息
	setSiteInfo: function setSiteInfo(callback) {
		var url = "/saas/order/getReportDictionary.ajax";
		(0, _fetchData2.default)({ "url": url, "method": "POST" }).then(function (res) {
			if (res.code == "000") {
				SiteInfo.info = res.data;
				if (callback) {
					callback();
				}
			}
		});
	},
	// get 基本信息
	getSiteInfo: function getSiteInfo(callback) {
		if (SiteInfo.info) {
			callback();
		} else {
			SiteInfo.setSiteInfo(callback);
		}
	}
};

exports.default = SiteInfo;