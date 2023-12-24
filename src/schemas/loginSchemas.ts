import Joi from 'joi'

const messages = {
  email: {
    'string.empty': 'Preencha o campo de email',
    'string.email': 'Digite um email válido',
    'any.required': 'Preencha o campo de email'
  },
  password: {
    'string.empty': 'Preencha o campo de senha',
    'string.min': 'A senha deve ter no mínimo 3 caracteres',
    'any.required': 'Preencha o campo de senha'
  }
}

export const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required().messages(messages.email),
  password: Joi.string().min(3).required().messages(messages.password)
})
