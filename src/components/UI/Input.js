import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        {...props.input}
        className={props.isBlue ? classes.blueInput : classes.redInput}
      />
    </div>
  );
};

export default Input;
