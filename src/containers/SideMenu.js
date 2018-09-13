import React from 'react';

import { Layout, Menu, Icon } from 'antd';
import './Sidemenu.css';



const { Sider } = Layout

class SideMenu extends React.Component {
	constructor(props) {
		super(props);
		//console.log(this.props.collapsed);
	}

	render() {
		return (
				<Sider
          trigger={null}
          collapsible
          collapsed={this.props.collapsed}
        >
		          <div className="logo">
		          		<img id = "icon" src="https://formulusblack.com/wp-content/themes/_formulus/assets/images/formulusblack_logo.png" />
		          </div>
		          	<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
		            <Menu.Item key="1">
		              <Icon type="user" />
		              <span>nav 1</span>
		            </Menu.Item>
		            <Menu.Item key="2">
		              <Icon type="video-camera" />
		              <span>nav 2</span>
		            </Menu.Item>
		            <Menu.Item key="3">
		              <Icon type="upload" />
		              <span>nav 3</span>
		            </Menu.Item>
		          </Menu>
       		 </Sider>
			)
	}
}

export default SideMenu
