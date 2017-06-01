import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import { Layout, Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Sider, Content } = Layout
export default class LeftMenu extends Component {
	constructor(props) {
		super(props)
		this.state={
			collapsed: false,
	 	 	mode: 'inline',
			collapsed:false,
		}
	}
	render() {
		return (
			<div>
				<Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
					<Menu
						theme="dark"
						mode={this.state.mode}
						defaultSelectedKeys={['1']}
        		defaultOpenKeys={['sub1']}
					>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span className="nav-text">报表</span></span>}
            >
              <Menu.Item key="1">
								<Link to="/billreport?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51">综合营业报表</Link>
              </Menu.Item>
              <Menu.Item key="2">
								<Link to="/billreport?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51">账单查询</Link>
              </Menu.Item>
              <Menu.Item key="3">
								<Link to="/foodDetailedQuery?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51">菜品明细查询</Link>
              </Menu.Item>
							<Menu.Item key="4">
								<Link to="/duringAnalysis?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51">时段报表</Link>
              </Menu.Item>
							<Menu.Item key="5">
								<Link to="/dailyReport?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51">综合营业日报表</Link>
              </Menu.Item>
							<Menu.Item key="6">
								<Link to="/shiftLog?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51">班结日志</Link>
              </Menu.Item>
							<Menu.Item key="7">
								<Link to="/operationLogCom?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51">操作日志</Link>
              </Menu.Item>
							<Menu.Item key="8">
								<Link to="/currentOperatingState?accessToken=MDB_EMPLOYEE_SESSION7b8fa091c9974620a1928543ff45ab51">当前营业数据</Link>
              </Menu.Item>
            </SubMenu>
				</Menu>
				</Sider>
			</div>
		)
	}
}
