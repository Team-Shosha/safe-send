import Navbar from "../components/Navbar/Navbar";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import styles from "./Claim.module.css";
const Claim = () => {
  return (
    <>
      <Navbar active={3} address="0X7575788..." notifAmount={3} />
      <div className={styles.notifications}>
        <Card cardHeader="Notification">
          <p className={styles.youHaveReceived}>
            You have received 0.02 ETH from 0X758758y784788....
          </p>
          <div className={styles.btnGroup}>
            <Button btnText="Claim" />
            <Button btnText="Reject" isDark={true} />
          </div>
        </Card>
        <Card cardHeader="Notification">
          <p className={styles.youHaveReceived}>
            You have received 0.02 ETH from 0X758758y784788....
          </p>
          <div className={styles.btnGroup}>
            <Button btnText="Claim" />
            <Button btnText="Reject" isDark={true} />
          </div>
        </Card>
        <Card cardHeader="Notification">
          <p className={styles.youHaveReceived}>
            You have received 0.02 ETH from 0X758758y784788....
          </p>
          <div className={styles.btnGroup}>
            <Button btnText="Claim" />
            <Button btnText="Reject" isDark={true} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default Claim;
