import LoginForm from "@/components/Auth/Login/LoginForm";
import LoginVerify from "@/components/Auth/Login/LoginVerify";
import { getSession } from "@/lib/Auth/getSession";

const LoginAuthPage = async () => {
  // Session -> Auth.js
  const session = await getSession();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm session={session} />
      </div>
      <LoginVerify session={session} />
    </div>
  );
};

export default LoginAuthPage;
