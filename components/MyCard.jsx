import React from 'react';
import MyAvatar from './MyAvatar';
import MyDetail from './MyDetail';

function MyCard(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <MyAvatar img={props.img} />
      </div>
      <div className="bottom">
        <MyDetail detailInfo={props.tel} />
        <MyDetail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default MyCard;
