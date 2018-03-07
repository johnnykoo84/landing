import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>개발하느라, 야근하느라, 주말에 출근까지... 많이 바쁘시죠.</h2>
        <h2>여러분의 여친분들도 고생이 많으십니다.</h2>
        <h2>다른 남친들은 주중에 저녁 데이트도 하고,</h2>
        <h2>주말엔 곧 벚꽃 구경도 간다는데...</h2>
        <h2>우리 회사는 제품 런칭이 4월이라고 하네요...</h2>
        <h2>삐진 여친님을 위해 선물 하나 여친님 직장으로 보내보시죠</h2>
        <img alt="flower" src={require('../img/flower.jpg')} />
        <h2>싱싱하고 풍성한 도매시장에서 직접 구한 생화 가득</h2>
        <h2>원하시는 시간, 원하시는 장소로 배송해 드립니다.</h2>
      </div>
    );
  }
}

export default Home;
