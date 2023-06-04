import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={
        props.isDark
          ? `${styles.darkButton} ${props.extraStyle}`
          : `${styles.whiteButton} ${props.extraStyle}`
      }
    >
      <b>{props.btnText}</b>
    </button>
  );
}
