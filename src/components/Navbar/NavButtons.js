import styles from "./NavButtons.module.css";

export default function NavButtons(props) {
  return (
    <div className={styles.frameParent}>
      <div className={styles.homeParent}>
        <div className={styles.home}>
          <b className={props.active === 1 ? styles.active : ""}>Home</b>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.home}>
          <b className={props.active === 2 ? styles.active : ""}>Send</b>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.home}>
          <b className={props.active === 3 ? styles.active : ""}>Claim</b>
          <div className={styles.frameChild} />
        </div>
      </div>
    </div>
  );
}
