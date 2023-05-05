import styles from "./Welcome2.module.css";
const Welcome2 = () => {
  return (
    <div className={styles.welcome}>
      <img className={styles.component1Icon} alt="" src="/component-1.svg" />
      <button className={styles.connectWalletWrapper}>
        <div className={styles.connectWallet}>Connect wallet</div>
      </button>
      <button className={styles.getStartedWrapper}>
        <div className={styles.getStarted}>Get started</div>
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
      <b className={styles.theSafeWay}>The safe way of transacting crypto</b>
      <b className={styles.safeguardYourCrypto}>
        Safeguard your crypto transactions and avoid costly mistakes with our
        easy-to-use DApp
      </b>
      <div className={styles.welcomeChild} />
      <div className={styles.welcomeItem} />
      <div className={styles.transaction}>Transaction</div>
      <div className={styles.sendCrypto}>Send Crypto</div>
      <div className={styles.amount}>Amount</div>
      <div className={styles.recipientWallet}>Recipient wallet</div>
      <div className={styles.welcomeInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.notification}>Notification</div>
        <div className={styles.youHaveReceived}>
          You have received 0.02 ETH from 0X758758y784788....
        </div>
        <div className={styles.rectangleGroup}>
          <button className={styles.groupItem} />
          <button className={styles.groupInner} />
          <b className={styles.claim1}>Claim</b>
          <b className={styles.reject}>Reject</b>
        </div>
      </div>
    </div>
  );
};

export default Welcome2;
