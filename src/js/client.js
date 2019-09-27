import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryChart } from 'victory';
import PieChart from './pie';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Victory Tutorial</h1>
        <PieChart />
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);