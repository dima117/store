import React, { Component } from 'react';
// import { DatePicker } from 'antd';
// import { Steps } from 'antd';
import { MainLayout } from './MainLayout';

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <DatePicker/>
        <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </Steps> */}
        <MainLayout/>
      </div>
    );
  }
}