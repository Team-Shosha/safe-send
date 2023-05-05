import styles from "./Welcome1.module.css";
const Welcome1 = () => {
  return (
    <div className={styles.welcome}>
      <img className={styles.component1Icon} alt="" src="/component-1.svg" />
      <button className={styles.x7575788Wrapper}>
        <div className={styles.x7575788}>0X7575788...</div>
      </button>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.frameParent}>
        <div className={styles.homeParent}>
          <b className={styles.home}>Home</b>
          <b className={styles.home}>Send</b>
          <b className={styles.home}>Claim</b>
        </div>
        <div className={styles.frameChild} />
      </div>
      <form className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.transaction}>Transaction</div>
          <div className={styles.amount}>Amount</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupInner} />
          <div className={styles.notificationTime}>Notification time</div>
          <div className={styles.amount}>Timing</div>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupInner} />
          <div className={styles.sendCrypto}>Send Crypto</div>
          <div className={styles.recipientWallet}>Recipient wallet</div>
          <div className={styles.groupChild2} />
        </div>
      </form>
      <button className={styles.sendWrapper}>
        <b className={styles.send1}>Send</b>
      </button>
    </div>
  );
};

export default Welcome1;
