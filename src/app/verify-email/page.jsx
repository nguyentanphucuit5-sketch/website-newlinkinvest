import VerifyComponent from "@/components/Verify/VerifyComponent";
import { getSession } from "@/lib/Auth/getSession";
import { Suspense } from "react";

const VerifyEmail = async () => {
  const session = await getSession();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyComponent session={session} />
    </Suspense>
  );
};

export default VerifyEmail;
