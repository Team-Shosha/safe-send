import styles from "./Welcome.module.css";
const Welcome = () => {
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
        <div className={styles.ellipseParent}>
          <img className={styles.groupChild} alt="" src="/ellipse-1.svg" />
          <b className={styles.b}>3</b>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.notification}>Notification</div>
          <div className={styles.youHaveReceived}>
            You have received 0.02 ETH from 0X758758y784788....
          </div>
          <div className={styles.rectangleGroup}>
            <button className={styles.groupInner} />
            <button className={styles.rectangleButton} />
            <b className={styles.claim1}>Claim</b>
            <b className={styles.reject}>Reject</b>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.notification}>Notification</div>
          <div className={styles.youHaveReceived}>
            You have received 0.02 ETH from 0X758758y784788....
          </div>
          <div className={styles.rectangleGroup}>
            <button className={styles.groupInner} />
            <button className={styles.rectangleButton} />
            <b className={styles.claim1}>Claim</b>
            <b className={styles.reject}>Reject</b>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.notification}>Notification</div>
          <div className={styles.youHaveReceived}>
            You have received 0.02 ETH from 0X758758y784788....
          </div>
          <div className={styles.rectangleGroup}>
            <button className={styles.groupInner} />
            <button className={styles.rectangleButton} />
            <b className={styles.claim1}>Claim</b>
            <b className={styles.reject}>Reject</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
