"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import AuthImage from "@/assets/images/Auth.jpg";
import { useActionState, useEffect, useState, useTransition } from "react";
import { login } from "@/action/auth";
import { useRouter } from "next/navigation";

const LoginForm = ({ className, session, ...props }) => {
  const router = useRouter();
  const [state, formAction] = useActionState(login, null);
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition(); // thêm hook

  useEffect(() => {
    if (state?.success && state.redirectTo) {
      router.push(state.redirectTo);
    }
    if (state?.error) {
      setError("Tài khoản hoặc mật khẩu không đúng");
    }
  }, [state, router]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden py-0 ">
        <CardContent className="grid p-0 md:grid-cols-2 h-full fl">
          <form
            action={(formData) => {
              startTransition(() => {
                formAction(formData);
              });
            }}
            className="p-6 md:p-8"
          >
            <div className="flex flex-col min-h-[400px] justify-center gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Lux Marketing</h1>
                <p className="text-balance text-muted-foreground">Đăng nhập</p>
              </div>

              {error && (
                <div className="text-sm text-red-500 text-center">{error}</div>
              )}

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="***********"
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending ? "Đang đăng nhập..." : "Login"}
              </Button>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image
              src={AuthImage}
              alt="Auth Image"
              priority
              className="object-cover h-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
