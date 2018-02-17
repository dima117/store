import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
require('./MainLayout.css');


export class MainLayout extends Component {
  render() {
    return (
      <Layout className="MainLayout">
        <Sider breakpoint="xs" collapsedWidth="0">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu key="sub1" title='Содержимое'>
              <Menu.Item key="nav">Навигация</Menu.Item>
              <Menu.Item key="pages">Страницы</Menu.Item>
              <Menu.Item key="news">Новости</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title='Каталог'>
            <Menu.Item key="sections">Разделы</Menu.Item>
            <Menu.Item key="products">Товары</Menu.Item>
            <Menu.Item key="import">Импорт</Menu.Item>
          </SubMenu>
            <Menu.Item key="orders">
              <span className="nav-text">Заказы</span>
            </Menu.Item>
            <Menu.Item key="settings">
              <span className="nav-text">Настройки</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>Content</Content>
      </Layout>
    );
  }
}