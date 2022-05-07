import PropTypes from "prop-types";

function Header({ text, bgColor, fontColor}) {
  const headerStyles = { 
      backgroundColor: bgColor, 
      color: fontColor 
    };
  
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  fontColor: "#ff6a95"
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
