import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderLink from "./HeaderLink";
import HeaderButton from "./HeaderButton";

function Header() {
  const styles = {
    backgroundColor: "rgb(66, 146, 114)",
    height: "50px",
    verticalAlign: "middle"
  }

  return (
    <header style={styles}>
      <HeaderLogo />
      <HeaderLink link="#"> About </HeaderLink>
      <HeaderLink link="#"> Features </HeaderLink>
      <HeaderButton link="#"> Sign Up </HeaderButton>
    </header>
  );
};

export default Header;