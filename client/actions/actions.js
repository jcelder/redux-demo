export const increment = () => {
  // const { counter } = this.state;
  // this.setState({
  //   counter: counter + 1,
  // });
  return {
    type: 'INCREMENT',
  };
}

export const decrement = () => {
  // const { counter } = this.state;
  // this.setState({
  //   counter: counter - 1,
  // });
  return {
    type: 'DECREMENT',
  };
}