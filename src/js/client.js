import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const dataMen = [
  {field: "Chem Engineering", number: 21239},
  {field: "Computer Science", number: 99743},
  {field: "Physics", number: 23080},
  {field: "Mathematics", number: 39956}
];
const dataWomen = [
  {field: "Chem Engineering", number: 11021},
  {field: "Computer Science", number: 28576},
  {field: "Physics", number: 9062},
  {field: "Mathematics", number: 32441}
];


class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Women in STEM Fields</h1>
        <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Engineering", "CS", "Physics", "Mathematics"]}
        />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x / 1000}k`)}
          />
        <VictoryStack>
          <VictoryBar
            data={dataMen}
            x="field"
            y="number"
          />
          <VictoryBar
            data={dataWomen}
            x="field"
            y="number"
          />
        </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);