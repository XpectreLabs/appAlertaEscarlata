import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export const iframeHeight = "800px";

export const containerClassName = "w-full h-full p-4 lg:p-0";

export default function Dashboard() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] bg-XpectreLightRose">
      <div>
        <Image
          src="/logo.svg"
          alt="QHSE Logo"
          width={600}
          height={600}
          className="mx-auto pt-14"
        />
      </div>
      <div className="flex items-center justify-center">
        <Card className="mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Registro</CardTitle>
            <CardDescription>
              Ingrese sus datos para crear su cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex gap-8">
                <div className="flex-1">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="su nombre"
                    required
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
              </div>
              <div className="flex-1">
                <Label htmlFor="email"></Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Introduce tu número de teléfono"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" variant="XpectreBtnGray" className="w-full">
                <Link href="/dashboard" className="w-full">
                  Iniciar sesión
                </Link>
              </Button>
            </div>
            <div className="mt-4 m-8 text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/dashboard/register"
                className={buttonVariants({ variant: "link" })}
              >
                Regístrate
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
