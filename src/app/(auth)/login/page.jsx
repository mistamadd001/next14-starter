import { handleGithubLogin } from "@/lib/actions";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login using GitHub</button>
      </form>
    </div>
  );
};

export default LoginPage;
