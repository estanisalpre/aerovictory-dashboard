"use client";
import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: { email: string; password: string; username?: string }) => Promise<void>;
}

export const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ email, password, username });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 w-full max-w-sm space-y-4">
      <h2 className="text-xl font-semibold text-center">
        {type === "login" ? "Inicia sesión" : "Crea tu cuenta"}
      </h2>

      {type === "register" && (
        <Input
          label="Nombre de usuario"
          placeholder="Tu nombre de piloto"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      )}

      <Input
        label="Correo electrónico"
        type="email"
        placeholder="tucorreo@ejemplo.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Input
        label="Contraseña"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button type="submit" loading={loading}>
        {type === "login" ? "Entrar" : "Registrarse"}
      </Button>
    </form>
  );
};
