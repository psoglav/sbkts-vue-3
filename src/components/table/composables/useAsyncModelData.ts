import { ref, h } from 'vue'
import * as api from '@/api/model'
import { type ColumnDef } from '@/components/ui/data-table'

export const useAsyncModelData = async (model: string) => {
  const pending = ref(false)
  const data = ref<any[]>([])
  const error = ref<any>(null)
  const columns = ref<ColumnDef<any>[]>([])

  const fetch = async (model: string) => {
    try {
      pending.value = true

      const { data: metadata } = await api.getMetadata(model)

      columns.value = Object.values(metadata.properties).map((item) => {
        const field =
          item.entityName[0].toLowerCase() + item.entityName.substring(1)
        return {
          accessorKey: field,
          header: () => h('div', {}, item.name),
          cell: ({ row }) => {
            return h('div', { class: '' }, row.getValue(field))
          },
        }
      })

      const { data: _data } = await api.getAll(model)

      data.value = _data.data
    } catch (e: any) {
      error.value = e
    } finally {
      pending.value = false
    }
  }

  fetch(model)

  return {
    data,
    columns,
    pending,
    error,
    refresh: (model: string) => fetch(model),
  }
}
