import React from "react";
import logoImage from '../resource/logo.png';

const TopNav = () => {
  return (<nav>
  <img src={logoImage} alt="logo" width="60px" />
  <div>
      <a>COFFEE</a>
      <a>MENU</a>
      <a>STORE</a>
      <a>WHAT'S NEW</a>
  </div>
</nav>);
};

export default TopNav;
