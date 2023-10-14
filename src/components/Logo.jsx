import logo from "assets/logo.png";
import PropTypes from "prop-types";

const Logo = ({ type, size }) => {
	return (
		<>
			{type === "dark" && size === "small" && (
				<a style={{ width: "90px" }}>
					<img src={logo} alt='Logo' width='100%' />
				</a>
			)}
			{type === "light" && (
				<a style={{ width: "150px" }}>
					<img src={logo} alt='Logo' width='100%' />
				</a>
			)}
		</>
	);
};

export default Logo;