import ConnectWallet from "./ConnectWallet";
import NavButtons from "./NavButtons";
import styles from "./Navbar.module.css";

import logo from "../../assets/image-1@2x.png";
import { useContext, useState } from "react";

import ethers from "ethers";
import AddressBar from "./AddressBar";
import AuthContext from "../../context/auth-context";

export default function Navbar(props) {
  const ctx = useContext(AuthContext);

  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.image1Icon} alt="logo" src={logo} />
      </div>
      <NavButtons active={props.active} notifAmount={props.notifAmount} />
      <div>
        {!ctx.isConnected && <ConnectWallet clickHandler={ctx.connectWallet} />}
        {ctx.isConnected && <AddressBar address={ctx.account} />}
      </div>
    </div>
  );
}
