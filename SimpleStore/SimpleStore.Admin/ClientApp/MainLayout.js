import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {HashRouter as Router, Route} from 'react-router-dom';

const {Sider, Content} = Layout;
const {SubMenu, ItemGroup} = Menu;

require('./MainLayout.css');

// pages
import {Home} from './pages/Home';
import {Navigation} from './pages/Navigation';
import {Pages} from './pages/Pages';
import {News} from './pages/News';
import {Categories} from './pages/Categories';
import {Products} from './pages/Products';
import {Import} from './pages/Import';
import {Orders} from './pages/Orders';
import {Settings} from './pages/Settings';


export class MainLayout extends Component {
    render() {
        return <Router hashType='noslash'>
            <Layout className='MainLayout'>
                <Sider breakpoint='xs' collapsedWidth='0'>
                </Sider>
                <Content>
                    <Route exact path='/' component={Home} />
                    <Route path='/nav' component={Navigation} />
                    <Route path='/pages' component={Pages} />
                    <Route path='/news' component={News} />
                    <Route path='/categories' component={Categories} />
                    <Route path='/products' component={Products} />
                    <Route path='/import' component={Import} />
                    <Route path='/orders' component={Orders} />
                    <Route path='/settings' component={Settings} />
                </Content>
            </Layout>
        </Router>

        // return (
        //     <Router>
        //         <Layout className='MainLayout'>
        //             <Sider breakpoint='xs' collapsedWidth='0'>
        //                 <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        //                     <SubMenu key='sub1' title='Содержимое'>
        //                         <Menu.Item key='nav'>Навигация</Menu.Item>
        //                         <Menu.Item key='pages'>Страницы</Menu.Item>
        //                         <Menu.Item key='news'>Новости</Menu.Item>
        //                     </SubMenu>
        //                     <SubMenu key='sub2' title='Каталог'>
        //                         <Menu.Item key='sections'>Разделы</Menu.Item>
        //                         <Menu.Item key='products'>Товары</Menu.Item>
        //                         <Menu.Item key='import'>Импорт</Menu.Item>
        //                     </SubMenu>
        //                     <Menu.Item key='orders'>
        //                         <span className='nav-text'>Заказы</span>
        //                     </Menu.Item>
        //                     <Menu.Item key='settings'>
        //                         <span className='nav-text'>Настройки</span>
        //                     </Menu.Item>
        //                 </Menu>
        //             </Sider>
        //             <Content>
        //
        //
        //             </Content>
        //         </Layout>
        //     </Router>
        // );
    }
}