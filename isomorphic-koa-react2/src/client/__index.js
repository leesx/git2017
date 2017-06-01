import React from 'react'
import { render as RenderDOM } from 'react-dom'



import './assets/less/main.less';
import './assets/fonts/iconfont.less'


import "es6-promise"
import { browserHistory,hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './../common/store/configureStore'
import RootElement from './../common/containers'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

RenderDOM(
    <RootElement store={store} history={history}/>,
    document.getElementById('root')
)
