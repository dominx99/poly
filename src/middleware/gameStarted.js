import store from './../store/index'

export default async function gameStarted ({ next, router }) {
  await store.dispatch('world/get', store.state.user.user.world_id)
  await store.dispatch('map/get', store.state.world.world.id)

  if (store.state.world.world.status !== 'started') {
    return router.push({ name: 'world', params: { world: store.state.user.user.world_id } })
  }

  return next()
}
