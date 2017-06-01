import React, {Component} from 'react'
import {
	Router,
	Route,
	IndexRoute,
	IndexRedirect,
	Link,
	browserHistory,
} from 'react-router'
//import Demo from 'components/__demo';
import App from './../components/common/App.js';
import NoMatch from './../components/common/NoMatch.js';
import * as SplitRouter from './SplitRouter'

export default(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/billreport" getComponent={SplitRouter.billReport}/>
			<Route path="/billreport" getComponent={SplitRouter.billReport}/>
			<Route path="/currentOperatingState" getComponent={SplitRouter.currentOperatingState}/>
			<Route path="/operationLogCom" getComponent={SplitRouter.operationLogCom}/>
			<Route path="/dailyReport" getComponent={SplitRouter.dailyReport}/>
			<Route path="/foodDetailedQuery" getComponent={SplitRouter.foodDetailedQuery}/>
			<Route path="/duringAnalysis" getComponent={SplitRouter.duringAnalysis}/>
			<Route path="/shiftLog" getComponent={SplitRouter.shiftLog}/>
			<Route path="*" component={NoMatch}/>
		</Route>
	</Router>
)
