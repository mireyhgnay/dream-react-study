import React from 'react';
import Counter from './basic/components/Counter';

/* 클래스 컴포넌트
  - 함수형 컴포넌트가 나오기 전에는 클래스 컴포넌트를 사용했다.
  - 함수형 컴포넌트는 render 안에서 다 이루어지는데
  - 클래스 컴포넌트는 render 밖에서 각 함수가 선언되어 있는 부분들이 장점이다.
  - 하지만! 현재 유행은 함수형 컴포넌트이다!!
*/

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log('컴포넌트가 마운트 되었음!');
  }

  componentWillUnmount() {
    console.log('컴포넌트가 곧 언마운트될 예정임!');
  }

  render() {
    return (
      <div className='container'>
        <div className='banner'>
          Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'}
        </div>
        <div className='counters'>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
