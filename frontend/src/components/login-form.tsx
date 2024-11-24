import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] bg-XpectreLightRose">
      <div className="flex items-center justify-center card-transition">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
            <CardDescription>
              Ingresa tu correo electrónico para iniciar sesión en tu cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@ejemplo.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link
                    href="/dashboard/auth/forget-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" variant="XpectreBtnRed" className="w-full">
                <Link href="./dashboard">Iniciar Sesión</Link>
              </Button>
              <Button variant="shinedark" className="w-full">
                Iniciar Sesión con Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <Link href="./register" className="underline">
                Regístrate
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="image-transition">
        <Image
          src="/logo.svg"
          alt="QHSE Logo"
          width={600}
          height={600}
          className="mx-auto pt-14"
        />
      </div>
    </div>
  );
}
