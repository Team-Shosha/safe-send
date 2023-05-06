import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button className={props.isDark ? styles.darkButton : styles.whiteButton}>
      <b>{props.btnText}</b>
    </button>
  );
}
