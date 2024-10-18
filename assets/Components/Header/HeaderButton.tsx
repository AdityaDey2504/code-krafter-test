import React from "react";
import { To, useNavigate } from "react-router-dom";

interface Props {
  children: import("react").ReactNode;
  link: string;
}

function HeaderButton({children, link}: Props) {
  const styles = {
    backgroundColor: "rgb(256, 256, 256)",
    verticalAlign: "middle",
    border: "none",
    borderRadius: "20px"
  }

  let navigate = useNavigate(); 
  const routeHead = () =>{ 
    let path = link; 
    navigate(path);
  }

  return <button style={styles} onClick={routeHead}> {children} </button>
}

export default HeaderButton;