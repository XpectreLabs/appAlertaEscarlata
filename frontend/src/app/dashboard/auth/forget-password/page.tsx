import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-XpectreLightRose">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Recuperar Contraseña</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="flex items-center">
              <Button
                type="submit"
                variant="XpectreBtnGray"
                className="w-full m-2 px-10"
              >
                <Link href='/dashboard/auth/login'>Cancelar</Link>
              </Button>
              <Button
                type="submit"
                variant="XpectreBtnRed"
                className="w-full m-2 px-10"
              >
                Recuperar
              </Button>
            </div>
          </div>
          <div className="mt-4 m-8 text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="./register" className="underline">
              Regístrate
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
