/* eslint-disable */
import { ReactComponent as LogoDark } from "../assets/images/logos/adminpro.svg";
import { Link } from "react-router-dom";
import Kt from "../assets/images/logos/kt.jpg";

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark/>
    </Link>
  );
};

export default Logo;
