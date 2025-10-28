"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/ui/AuthForm";
import { registerUser } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (data: { email: string; password: string; username?: string }) => {
    try {
      await registerUser(data.email, data.password, data.username || "");
      alert("✅ Cuenta creada correctamente. Ya puedes iniciar sesión.");
      router.push("/login");
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      alert(`❌ ${message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
}

