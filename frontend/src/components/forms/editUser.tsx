"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const EditUserSchema = z.object({
  firstName: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }),
  lastName: z.string().min(2, {
    message: "El apellido debe tener al menos 2 caracteres",
  }),
  telefono: z.string().min(7, {
    message: "El telefono debe tener al menos 7 caracteres",
  }),
  email: z.string().email({
    message: "El email debe ser válido",
  }),
  changePassword: z.boolean().default(false).optional(),
  // Schema de Password
  oldPassword: z.string().min(8, {}).optional(),
  newPassword: z
    .string()
    .min(8, {
      message: "La nueva contraseña debe tener al menos 8 caracteres",
    })
    .optional(),
  confirmPassword: z
    .string()
    .min(8, {
      message: "La confirmación de contraseña debe tener al menos 8 caracteres",
    })
    .optional(),
});

function EditarUsuario() {
  const form = useForm<z.infer<typeof EditUserSchema>>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      telefono: "",
      email: "",
      changePassword: false,
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const [showComponent, setShowComponent] = useState(false);

  function onSubmit(data: z.infer<typeof EditUserSchema>) {
    console.log(data);
    toast({
      title: "Formulario enviado con los siguientes valores:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="XpectreBtnRed">Editar Usuario</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mi Perfil</DialogTitle>
            <DialogClose />
          </DialogHeader>
          <DialogDescription>Editar sus datos personales</DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Input de Nombre */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese su nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Input de Apellido */}
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese su apellido" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Input de Telefono */}
                <FormField
                  control={form.control}
                  name="telefono"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefono</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese su Telefono" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Input de Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingrese su Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="changePassword"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => {
                          field.onChange(checked);
                          setShowComponent(checked === true);
                        }}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>¿Desea Cambiar su contraseña?</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              {showComponent && (
                <div>
                  {/* Agrega el componente aquí */}

                  <FormField
                    control={form.control}
                    name="oldPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Antigua Contraseña</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ingrese su antigua contraseña"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4 py-4">
                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nueva Contraseña</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingrese su nueva contraseña"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nueva Contraseña</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ingrese su nueva contraseña"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              )}
              {/* Footer del Dialog */}
              <DialogFooter className="sm:justify-start">
                <Button
                  type="submit"
                  variant="XpectreBtnRed"
                  className="w-full m-2 px-10"
                >
                  Guardar
                </Button>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="XpectreBtnGray"
                    className="w-full m-2 px-10"
                  >
                    Cancelar
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default EditarUsuario;
