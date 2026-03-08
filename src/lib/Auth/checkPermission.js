import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function checkPermission(allowedRoles = []) {
  const session = await auth();

  if (!session || !allowedRoles.includes(session.user.role)) {
    return {
      authorized: false,
      response: NextResponse.json(
        { message: "Bạn không có quyền thực hiện hành động này" },
        { status: 403 }
      ),
    };
  }

  return { authorized: true, session };
}
