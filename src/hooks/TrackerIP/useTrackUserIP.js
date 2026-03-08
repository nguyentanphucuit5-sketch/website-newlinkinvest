"use client";
import { useGetIPMutation } from "@/redux/api/userIpSlice";
import { useEffect } from "react";

export default function useTrackUserIP() {
  const [getIP, { isLoading, isError, isSuccess, data, error }] =
    useGetIPMutation();

  useEffect(() => {
    getIP();
  }, [getIP]);

  return {
    isLoading,
    isError,
    isSuccess,
    data,
    error,
  };
}
