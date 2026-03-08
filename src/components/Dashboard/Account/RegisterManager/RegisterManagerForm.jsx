"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRegisterMutation } from "@/redux/api/authSlice";
import { toast } from "react-toastify";

const RegisterManagerForm = () => {
  //React state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  //redux API
  const [registerManager] = useRegisterMutation();

  //Handle change value
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu không khớp");
      return;
    }

    const submitData = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await registerManager(submitData).unwrap();

      if (res) {
        toast.success("Đăng ký thành công!");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (err) {
      console.log("Đăng ký thất bại:", err);
      setError(err.data?.message || "Đăng ký thất bại");
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <CardContent>
        <h2 className="text-center pb-4 font-bold text-[20px]">
          Đăng Ký Tài Khoản
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Tên đầy đủ"
              className={`mt-1`}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              className={`mt-1`}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="**********"
              className={`mt-1`}
              required
            />
          </div>

          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`mt-1`}
              placeholder="**********"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button type="submit" className="w-full">
            Đăng Ký
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterManagerForm;
