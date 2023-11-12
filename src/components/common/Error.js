import classes from "./styles/Error.module.css";

const Error = () => {
  return (
    <div className={classes.errorContainer}>
      <div className={classes.error}>
        <h2>Opps!</h2>
        <h3>Something went wrong!</h3>
      </div>
    </div>
  );
};

export default Error;
