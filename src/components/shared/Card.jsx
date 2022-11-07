import React from "react";
import PropTypes from "prop-types";

function Card(props) {
  // reverse 상태에 따른 클래스 명으로  카드 스타일 관리
  // return (
  //   <div className={`card ${props.reverse && "reverse"}`}>{props.children}</div>
  // );

  // reverse 상태에 따른 카드 스타일 직접 관리
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: props.reverse ? "#fff" : "#000",
      }}
    >
      {props.children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
