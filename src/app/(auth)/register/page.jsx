import { registerUser } from "@/lib/actions";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={registerUser}>
          <input type="text" name="username" placeholder="UserName" />
          <input type="email" name="email" placeholder="email" />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
          />
          <input
            type="password"
            name="passwordVerify"
            placeholder="Re-enter Password"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
