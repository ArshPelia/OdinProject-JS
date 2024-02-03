import { Link } from "react-router-dom";

const Nav = ({ itemsInCart }) => {

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
      <li style={liStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={liStyle}>
          <Link to="cart" style={linkStyle}>Cart</Link>
        </li>
        <li style={liStyle}>
          Items in Cart: {itemsInCart}
        </li>
      </ul>
    </nav>
  );
}

// Define your CSS styles as JavaScript objects
const navStyle = {
  backgroundColor: "#333",
  padding: "10px",
};

const ulStyle = {
  listStyleType: "none",
  margin: "0",
  padding: "0",
  display: "flex",
  justifyContent: "center",
};

const liStyle = {
  margin: "0 15px",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "color 0.3s ease",
};

const hoverLinkStyle = {
  ...linkStyle,
  color: "#ff9900",
};

export default Nav;
