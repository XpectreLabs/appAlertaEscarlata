// schemas/loginSchema.ts
import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "El correo electrónico es obligatorio",
    "string.email": "Debe ser un correo electrónico válido",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "La contraseña es obligatoria",
    "string.min": "La contraseña debe tener al menos 6 caracteres",
  }),
});

export const registerSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "El nombre es obligatorio",
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    "string.empty": "El correo electrónico es obligatorio",
    "string.email": "Debe ser un correo electrónico válido",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "La contraseña es obligatoria",
    "string.min": "La contraseña debe tener al menos 6 caracteres",
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    "any.only": "Las contraseñas deben coincidir",
    "string.empty": "La confirmación de la contraseña es obligatoria",
  }),
});

