import React, { Component } from "react";
import { Fragment } from "react";
import { Table } from "react-bootstrap";
export default class Checklist extends Component {
  state = {
    data: [
      {
        name: "Goku",
        status: false,
      },
      {
        name: "Naruto",
        status: false,
      },
      {
        name: "Sasuke",
        status: true,
      },
      {
        name: "Itachi",
        status: true,
      },
      {
        name: "Gohan",
        status: false,
      },
      {
        name: "Picolo",
        status: false,
      },
      {
        name: "Vegeta",
        status: true,
      },
      {
        name: "Jiren",
        status: true,
      },
    ],
    isChecked: false,
    checkedState: new Array(8).fill(false),
    counter: 0,
    flag: 0,
  };

  handleonChange = (position) => {
    const updateCheckedstate = this.state.checkedState.map((item, index) =>
      index === position ? !item : item
    );
    this.setState({ checkedState: updateCheckedstate });
    const updatePlayer = this.state.data.map((item, index) =>
      index === position ? !item.status : item.status
    );
    var stateCopy = Object.assign({}, this.state);
    stateCopy.data = stateCopy.data.slice(); // if we want to change the state of array of object in a particular key
    stateCopy.data[position] = Object.assign({}, stateCopy.data[position]);
    stateCopy.data[position].status = updatePlayer[position];
    this.setState({ data: stateCopy.data });
  };

componentDidMount(){
    var sum
    if (this.state.data) {
        this.setState({ flag: sum });
        console.log(sum);
        const count = this.state.data.map(({ status }) => {
          this.setState({ counter: 0 });
          if (status === true) {
            sum = this.state.counter += 1;
            return sum;
          }
        });
      }
      console.log(sum);
      this.setState({ flag: sum });
}


  componentDidUpdate(previousProps, previousState) {
    var sum;
    if (previousState && previousState.data !== this.state.data) {
      // to stop the infinte loop
      if (this.state.data) {
        this.setState({ flag: sum });
        console.log(sum);
        const count = this.state.data.map(({ status }) => {
          this.setState({ counter: 0 });
          if (status === true) {
            sum = this.state.counter += 1;
            return sum;
          }
        });
      }
      console.log(sum);
      this.setState({ flag: sum });
    }
  }
  render() {
    return (
      <Fragment>
        <h1>Checklist one</h1>
        <div className="container-6">
          <div className="checklist-box-1">
            {this.state.data.map((data, index) => (
              <u key={index}>
                <div className="toppings-list-item">
                  {/* {console.log(name,status)} */}
                  <input
                    className={`custom-checkbox-${index}`}
                    type="checkbox"
                    name={data.name}
                    value={data.name}
                    checked={this.state.checkedState[index]}
                    onChange={() => this.handleonChange(index)}
                  />

                  <h5>
                    <label htmlFor={`custom-checkbox-${index}`}>
                      {data.name}
                    </label>
                    <label htmlFor={`custom-checkbox-${index}`}>
                      status {data.status.toString()}
                    </label>
                  </h5>
                </div>
              </u>
            ))}
          </div>
          <div className="checklist-box-2">
            <h1>Name and Status</h1>
            <Table>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((data, index) => (
                  <tr key={index}>
                    {/* //     {console.log(data.status)} */}
                    <td>{data.name}</td>
                    <td>{data.status.toString()}</td>
                  </tr>
                ))}
                <tr>
                  <td>total true</td>
                  <td>total false</td>
                </tr>

                <tr>
                  <td>{this.state.flag}</td>
                  <td>{this.state.flag===0?0:8-this.state.flag }</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Fragment>
    );
  }
}
