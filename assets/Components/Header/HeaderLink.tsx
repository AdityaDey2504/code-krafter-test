import React from "react";

interface Props {
  children: import("react").ReactNode;
  link: string;
}

function HeaderLink({children, link}: Props) {
  const styles = {
    backgroundColor: "rgb(66, 146, 114)",
    verticalAlign: "middle"
  }

  return <a style={styles} href={link}> {children} </a>;
}

export default HeaderLink;