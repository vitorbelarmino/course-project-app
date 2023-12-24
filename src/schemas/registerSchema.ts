import Joi from 'joi'

const messages = {
  name: {
    'string.empty': 'Preencha o campo de nome',
    'string.min': 'O nome deve ter no mínimo 3 caracteres',
    'any.required': 'Preencha o campo de nome'
  },
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

export const registerSchema = Joi.object({
  name: Joi.string().required().min(3).messages(messages.name),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages(messages.email),
  password: Joi.string().required().min(3).messages(messages.password)
})
