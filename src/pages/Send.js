import { useContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import styles from "./Send.module.css";
import AuthContext from "../context/auth-context";
const Send = () => {
  const ctx = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const sendTx = await ctx.sendCrypto(address, amount);
    if (sendTx) {
      console.log("sent to escrow");
    } else {
      console.log("failed");
    }
    console.log(email);
  };
  return (
    <>
      <Navbar active={2} address="0X7575788..." />
      <form className={styles.sendForm} onSubmit={submitHandler}>
        <Card cardHeader="Send Crypto" otherClass={styles.moveLeft}>
          <Input
            label="Recipient wallet"
            input={{ id: "recipientWallet" }}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            isBlue
          />
        </Card>
        <Card cardHeader="Transaction" otherClass={styles.move}>
          <Input
            label="Amount"
            input={{ id: "amount", type: "text" }}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            isBlue
          />
        </Card>
        <Card cardHeader="Receivers email" otherClass={styles.move}>
          <Input
            label="Email"
            input={{ id: "email", type: "email" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
