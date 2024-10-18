import React from "react";
import { useNavigate } from "react-router-dom";

function HeaderLogo() {
  const styles = {
    backgroundColor: "rgb(66, 146, 114)",
    verticalAlign: "middle"
  }

  const imageUrl = '.src/assets/react.svg';

  let navigate = useNavigate(); 
  const routeHead = () =>{ 
    const path = `/`; 
    navigate(path);
  }

  return (
    <img style={styles} onClick={routeHead} src={imageUrl} alt="Logo" />
  );
};

export default HeaderLogo;