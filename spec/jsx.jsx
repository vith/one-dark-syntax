import React from "react";

export default class ThingList extends React.Component {
  static propTypes = { startDetailed: React.PropTypes.bool };
  static defaultProps = { startDetailed: false };
  constructor(props: object) {
    super(props);
    this.state = {showDetails: props.startDetailed};
  }
  render() {
    return (
      <div>
        <h1>Thing</h1>
        <ul>
          { this.props.things.map(
            thing => <Thing data={thing} key={thing.id}/>
          ) }
        </ul>
      </div>
    );
  }
}

export function add(x: number, y: number) {
  return x + y;
}

export function mult(x: number, y: number): number {
  return x * y;
}

class MathStuff {
  sub(x: number, y: number) {
    return x - y;
  }
  div(x: number, y: number): number {
    return x / y;
  }
}
