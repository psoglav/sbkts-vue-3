import { Metadata } from '@/types/api'
import api from './client'

export const getAll = (
  model: string,
  order?: any,
  filter?: any,
  page = 1,
  rows = 30,
) => {
  return api.post<{
    data: any[]
  }>(`/${model}/list`, {
    page,
    rows,
    filter,
    order,
  })
}

export const getMetadata = (model: string) => {
  return api.get<Metadata>(`/utils/Metadata/${model}Model`)
}
