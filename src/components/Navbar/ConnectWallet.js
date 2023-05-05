import styles from "./ConnectWallet.module.css";
export default function ConnectWallet(props) {
  return (
    <button
      className={
        props.address ? styles.x7575788Wrapper : styles.connectWalletWrapper
      }
    >
      {!props.address && (
        <div className={styles.connectWallet}>Connect wallet</div>
      )}

      {props.address && <div className={styles.x7575788}>0X7575788...</div>}
    </button>
  );
}
