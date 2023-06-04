import styles from "./HomeStyles.module.css";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function MintSoulName() {
  return (
    <div className={styles.accountSetupWrapper}>
      <Card cardHeader="Mint Soulname">
        <Input
          label="Enter soulname"
          input={{ id: "soulname" }}
          isBlue={true}
        />
      </Card>

      <Button btnText="Mint" extraStyle={styles.btnStyle} />
    </div>
  );
}
