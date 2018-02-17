import React, { Component } from 'react';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
require('./MainLayout.css');

export class MainLayout extends Component {
  render() {
    return (
      <Layout className="MainLayout">
        <Sider breakpoint="xs" collapsedWidth="0">Sider</Sider>
        <Content>Content</Content>
      </Layout>
    );
  }
}