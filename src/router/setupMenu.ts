import { Router } from 'vue-router'
import { useAppStore } from '@/stores/app'

export default async function (router: Router) {
  const store = useAppStore()

  await store.fetchRoutes()

  store.routes.forEach((parent) => {
    parent = {
      ...parent,
      name: parent.path.split('/')[1],
      component: () => import('@/layouts/Dashboard.vue'),
      redirect: 'noredirect',
    }

    if (!parent.children?.length) {
      throw new Error('Error in setupMenu(): empty route.children')
    }

    router.addRoute(parent)

    parent.children = parent.children.map((child) => {
      if (child.children === null) {
        delete child.children
      }

      const model = child.path.split('/')[1]

      if (!child.props?.model) {
        child.props.model = model
      }

      if (child.props) {
        child.props.dataRequest = model
      }

      router.addRoute(parent.name, {
        ...child,
        component: () => import('@/components/ListTable.vue'),
      })
    })
  })

  router.addRoute({
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  })

  // NOTE It is neccessary to trigger the navigation manually after adding the routes.
  await router.push(router.currentRoute.value.path)
}
