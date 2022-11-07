import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor };

  return (
    <header style={headerStyles}>
      <div className="container">
        <NavLink to="/" activeClassName="logo">
          <h2>{text}</h2>
        </NavLink>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

// typeScript 를 쓰면 이거 필요없다. 하지만 쓰지 않을 때
// prop의 타입을 정해주는 역할을 함

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
