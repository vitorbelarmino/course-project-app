import { ICategory } from '@/interface/ICategory'
import { api } from '.'

export async function getCategories (): Promise<ICategory[] | undefined > {
  try {
    return (await api.get('/categories')).data
  } catch (error) {
    console.error(error)
  }
}
