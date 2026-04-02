"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function loginAction(data) {
  const { email, password } = data;
  try {
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirectTo: "/products",
    });
    return res;
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error("Login action error:", error);
    return { error: error.message || "Authentication failed" };
  }
}
