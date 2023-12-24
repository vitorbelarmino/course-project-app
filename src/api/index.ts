import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_KEY || 'http://localhost:3333'
export const teste = baseURL
export const api = axios.create({
  baseURL
})
