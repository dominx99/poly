import store from './../store/index'
import Socket from '../socket'

export default async function gameStarted ({ next, router }) {
  await store.dispatch('user/fetchPlayers')
  await store.dispatch('world/get', store.state.user.user.world_id)
  await store.dispatch('map/get', store.state.world.world.id)
  await store.dispatch('army/fetchArmyUnits', store.state.map.map.id)

  if (store.state.world.world.status !== 'started') {
    return router.push({ name: 'world', params: { world: store.state.user.user.world_id } })
  }

  Socket.subscribeMap(store.state.map.map.id)

  store.dispatch('user/fetchResources')

  return next()
}
