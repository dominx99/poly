import store from './../store/index'

export default async function notGameStarted ({ next, router }) {
  await store.dispatch('world/get', store.state.user.user.world_id)

  if (store.state.world.world.status === 'started') {
    return router.push({ name: 'game', params: { world: store.state.user.user.world_id } })
  }

  return next()
}
