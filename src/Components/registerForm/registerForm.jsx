"use client";

import { registerUser } from "@/lib/actions";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(registerUser, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" placeholder="UserName" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="Create Password" />
      <input
        type="password"
        name="passwordVerify"
        placeholder="Re-enter Password"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Already have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
