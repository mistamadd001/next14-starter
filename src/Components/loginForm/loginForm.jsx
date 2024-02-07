import { login } from "@/lib/actions";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form} action={login}>
      <input type="text" placeholder="UserName" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
