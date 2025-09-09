import { Component } from 'react';

class Vegetables extends Component {
  render() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">채소 종류</h1>
        <ul className="ml-4 list-disc list-inside">
          {this.props.datas.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Vegetables;
