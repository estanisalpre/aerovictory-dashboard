"use client";

import { useRouter } from "next/navigation";
import { AuthForm } from "@/components/ui/AuthForm";
import { loginUser } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const result = await loginUser(data.email, data.password);
      alert(`👋 Bienvenido, ${result.user.email}`);
      router.push("/dashboard");
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      alert(`❌ ${errorMessage}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}
