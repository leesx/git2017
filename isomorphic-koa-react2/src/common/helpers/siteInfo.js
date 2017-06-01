import fetchData from './fetchData.js';
const SiteInfo = {
	//set 基本信息
	setSiteInfo : function(callback) {
		const url = "/saas/order/getReportDictionary.ajax";
		fetchData({"url": url, "method": "POST"}).then((res) => {
			if (res.code == "000") {
				SiteInfo.info = res.data;
				if (callback) {
					callback();
				}
			}
		});
	},
	// get 基本信息
	getSiteInfo : function(callback) {
		if (SiteInfo.info) {
			callback();
		} else {
			SiteInfo.setSiteInfo(callback);
		}
	}
};

export default SiteInfo;
