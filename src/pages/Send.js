import Navbar from "../components/Navbar/Navbar";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import styles from "./Send.module.css";
const Send = () => {
  return (
    <>
      <Navbar active={2} address="0X7575788..." />
      <form className={styles.sendForm}>
        <Card cardHeader="Transaction" otherClass={styles.move}>
          <Input label="Amount" input={{ id: "amount" }} isBlue />
        </Card>
        <Card cardHeader="Notification time" otherClass={styles.move}>
          <Input label="Timing" input={{ id: "timing" }} isBlue />
        </Card>
        <Card cardHeader="Send Crypto" otherClass={styles.moveLeft}>
          <Input
            label="Recipient wallet"
            input={{ id: "recipientWallet" }}
            isBlue
          />
        </Card>
        <div className={styles.sendBtnWrapper}>
          <button className={styles.sendBtn}>Send</button>
        </div>
      </form>
    </>
  );
};

export default Send;
