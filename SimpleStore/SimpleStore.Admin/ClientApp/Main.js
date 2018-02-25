import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';




class Navigation extends React.Component {
    render() {
        return <h2>Навигация по сайту</h2>;
    }
}
class Pages extends React.Component {
    render() {
        return <h2>Страницы</h2>;
    }
}
class News extends React.Component {
    render() {
        return <h2>Новости</h2>;
    }
}
class Categories extends React.Component {
    render() {
        return <h2>Разделы</h2>;
    }
}
class Products extends React.Component {
    render() {
        return <h2>Товары</h2>;
    }
}
class Import extends React.Component {
    render() {
        return <h2>Импорт</h2>;
    }
}
class Orders extends React.Component {
    render() {
        return <h2>Заказы</h2>;
    }
}
class Settings extends React.Component {
    render() {
        return <h2>Настройки</h2>;
    }
}
class NotFound extends React.Component {
    render() {
        return <h2>Ресурс не найден</h2>;
    }
}

class Main extends React.Component {
    render() {
        return <h2>Главная</h2>;
    }
}

export class Test extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/nav" component={Navigation} />
                    <Route path="/pages" component={Pages} />
                    <Route path="/news" component={News} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/products" component={Products} />
                    <Route path="/import" component={Import} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/settings" component={Settings} />
                    <Route component={NotFound} />
                </div>
            </BrowserRouter>
        );
    }
}