import styles from "./ConnectWallet.module.css";

const shortAddress = (_addr) => _addr.substring(0, 10) + "...";
export default function AddressBar(props) {
  return (
    <button className={styles.x7575788Wrapper} onClick={props.onclick}>
      <div className={styles.x7575788}>{shortAddress(props.address)}</div>
    </button>
  );
}
