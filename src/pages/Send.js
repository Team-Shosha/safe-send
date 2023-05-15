import Navbar from "../components/Navbar/Navbar";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import styles from "./Send.module.css";
const Send = () => {
  return (
    <>
      <Navbar active={2} address="0X7575788..." />
      <form className={styles.sendForm}>
        <Card cardHeader="Send Crypto" otherClass={styles.moveLeft}>
          <Input
            label="Recipient wallet"
            input={{ id: "recipientWallet" }}
            isBlue
          />
        </Card>
        <Card cardHeader="Transaction" otherClass={styles.move}>
          <Input
            label="Amount"
            input={{ id: "amount", type: "number" }}
            isBlue
          />
        </Card>
        <Card cardHeader="Receivers email" otherClass={styles.move}>
          <Input label="Email" input={{ id: "email", type: "email" }} isBlue />
        </Card>

        <div className={styles.sendBtnWrapper}>
          <button className={styles.sendBtn}>Send</button>
        </div>
      </form>
    </>
  );
};

export default Send;
