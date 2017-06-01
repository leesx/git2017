import "es6-promise"
import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import { Router, match } from 'react-router'

import Isomorph from 'components/Isomorph'
import routes from 'routes'
//import { PLATFORM_UI_USER_INIT } from '../common/redux/modules/user'

import './assets/less/main.less';
import './assets/fonts/iconfont.less' //引入全局样式表


const finalState = {}
const {
  routing,
  ...reducers
} = window.__INITIAL_STATE__ || {}

if (reducers) {
  for (let p in reducers) {
    let reducer = reducers[p]
    finalState[p] = Immutable.fromJS(reducer)
  }
}

const store = Isomorph.createStore(finalState)
//传入路径 Isomorph.createHistory(store,'/') 将创建createMemoryHistory
//注意:Memory history 不会在地址栏被操作或读取。浏览器刷新将回到初始页面。
//传入路径 Isomorph.createHistory(store) 将创建browserHistory

const history = Isomorph.createHistory(store)

const rootElement = document.getElementById('root')
const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

//TODO 可以在初始化用户登录信息
//store.dispatch({ type: 'PLATFORM_UI_USER_INIT' })

// ReactDOM.unmountComponentAtNode(rootElement)

//console.log('未解决：动态路由的前后端配置')

match({ routes, location }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(
    <Isomorph store={store} history={history}/>,
    rootElement
  )
})

// match({ history, routes }, (error, redirectLocation, renderProps) => {
//   ReactDOM.render(<Router {...renderProps} />, rootElement)
// })

if (module.hot) {
  module.hot.accept()
}

// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
window._.noConflict();
