import ConnectWallet from "./ConnectWallet";
import NavButtons from "./NavButtons";
import styles from "./Navbar.module.css";

import logo from "../../assets/image-1@2x.png";
export default function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <div>
        <img className={styles.image1Icon} alt="logo" src={logo} />
      </div>
      <NavButtons active={props.active} notifAmount={props.notifAmount} />
      <div>
        <ConnectWallet address={props.address} />
      </div>
    </div>
  );
}
