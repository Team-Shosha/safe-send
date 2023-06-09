import { useCallback, useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import Input from "../components/UI/Input";
import styles from "./Home.module.css";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/auth-context";

const Home = () => {
  const navigate = useNavigate();

  const onGetStartedClick = useCallback(() => {
    Navigate("/send");
  }, [navigate]);

  const ctx = useContext(AuthContext);

  return (
    <>
      <Navbar active={1} />
      {!ctx.isConnected && <DefaultHome clickHandler={onGetStartedClick} />}
    </>
  );
};

const DefaultHome = (props) => {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeText}>
        <h1 className={styles.theSafeWay}>
          The safe way of transacting crypto
        </h1>
        <p className={styles.safeguardYourCrypto}>
          Safeguard your crypto transactions and avoid costly mistakes with our
          easy-to-use DApp
        </p>

        <button
          className={styles.getStartedWrapper}
          onClick={props.clickHandler}
        >
          <div className={styles.getStarted}>Get started</div>
        </button>
      </div>
      <div className={styles.cardsSection}>
        <Card cardHeader="Transaction" otherClass={styles.move}>
          <Input label="Amount" input={{ id: "amount" }} />
        </Card>
        <Card cardHeader="Send Crypto" otherClass={styles.moveLeft}>
          <Input
            label="Recipient wallet"
            input={{ id: "recipientWallet" }}
            isBlue
          />
        </Card>
        <Card cardHeader="Notification" otherClass={styles.moveLefter}>
          <p className={styles.youHaveReceived}>
            You have received 0.02 ETH from 0X758758y784788....
          </p>
          <div className={styles.btnGroup}>
            <Button btnText="Claim" />
            <Button btnText="Reject" isDark={true} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
