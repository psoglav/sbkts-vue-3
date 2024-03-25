import { Router } from 'vue-router'
import { useAppStore } from '@/stores/app'

export default async function (router: Router) {
  const store = useAppStore()

  await store.fetchRoutes()

  store.routes.forEach((parent, i) => {
    parent = {
      ...parent,
      name: parent.path.split('/')[1],
      component: () => import('@/layouts/Dashboard.vue'),
      redirect: 'noredirect',
    }

    if (!parent.children?.length) {
      throw new Error('Error in setupMenu(): empty route.children')
    }

    // Set aliased route for /.
    if (i === 0) {
      parent.alias = '/'
      parent.redirect =
        parent.path + '/' + parent.children[0].path.replace('api/', '')
    }

    router.addRoute({
      ...parent,
      children: [],
    })

    parent.children.forEach((child) => {
      if (child.children === null) {
        delete child.children
      }

      // Provide model to props for API requests.
      if (!child.props?.model) {
        child.props.model = child.path.split('/')[1]
      }

      // Remove useless string from the path.
      child.path = child.path.replace('api/', '')

      router.addRoute(parent.name, {
        ...child,
        component: () => import('@/components/table/ListTable.vue'),
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
