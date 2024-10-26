"use client";
import { LoginForm } from "@/components/login-form";

export const description =
  "Una página de inicio de sesión con dos columnas. La primera columna tiene el formulario de inicio de sesión con correo electrónico y contraseña. Hay un enlace de ¿Olvidaste tu contraseña? y un enlace para registrarse si no tienes una cuenta. La segunda columna tiene una imagen de portada.";

export const iframeHeight = "800px";

export const containerClassName = "w-full h-full p-4 lg:p-0";

export default function Dashboard() {
  return <LoginForm />;
}
