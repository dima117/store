import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

const {Sider, Content} = Layout;
const {SubMenu, Item} = Menu;

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
                    <Menu mode='inline' theme='dark'>
                        <Item>
                            <Link to=''>Главная</Link>
                        </Item>
                        <SubMenu title='Содержимое'>
                            <Item>
                                <Link to='nav'>Навигация</Link>
                            </Item>
                            <Item>
                                <Link to='pages'>Страницы</Link>
                            </Item>
                            <Item>
                                <Link to='news'>Новости</Link>
                            </Item>
                        </SubMenu>
                        <SubMenu title='Каталог'>
                            <Item>
                                <Link to='categories'>Разделы</Link>
                            </Item>
                            <Item>
                                <Link to='products'>Товары</Link>
                            </Item>
                            <Item>
                                <Link to='import'>Импорт</Link>
                            </Item>
                        </SubMenu>
                        <Item>
                            <Link to='orders'>Заказы</Link>
                        </Item>
                        <Item>
                            <Link to='settings'>Настройки</Link>
                        </Item>
                    </Menu>
                </Sider>
                <Content>
                    <Route exact path='/' component={Home}/>
                    <Route path='/nav' component={Navigation}/>
                    <Route path='/pages' component={Pages}/>
                    <Route path='/news' component={News}/>
                    <Route path='/categories' component={Categories}/>
                    <Route path='/products' component={Products}/>
                    <Route path='/import' component={Import}/>
                    <Route path='/orders' component={Orders}/>
                    <Route path='/settings' component={Settings}/>
                </Content>
            </Layout>
        </Router>
    }
}
