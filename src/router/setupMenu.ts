import { Router } from 'vue-router'
import { useAppStore } from '@/stores/app'

export default async function (router: Router) {
  const store = useAppStore()
  const newMenu: any[] = []

  await store.fetchNavMenu()

  store.menu.forEach((route) => {
    route = {
      ...route,
      component: () => import('@/layouts/Default.vue'),
      redirect: 'noredirect',
    }

    if (!route.children?.length) {
      throw new Error('Error in setupMenu(): empty route.children')
    }

    route.children = route.children.map((route) => {
      if (route.children === null) {
        delete route.children
      }

      if (route.props?.model === null) {
        route.props.model = route.path.split('/')[1]
      }

      if (route.props) {
        route.props.dataRequest = route.path.split('/')[1]
      }

      return {
        ...route,
        component: () => import('@/components/ListTable.vue'),
      }
    })

    route.name = route.path.split('/')[1]

    if (route.children != null) {
      newMenu.push(route)
    }

    router.addRoute(route)
  })

  router.addRoute({
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  })

  // NOTE It is neccessary to trigger the navigation manually after adding the routes.
  await router.push(router.currentRoute.value.path)
}
