import store from './../store/index'
import Socket from '../socket'
import {setInterval} from 'timers'

export default async function gameStarted ({ next, router }) {
  await store.dispatch('user/fetchPlayers')
  await store.dispatch('world/get', store.state.user.user.world_id)
  await store.dispatch('map/get', store.state.world.world.id)
  await store.dispatch('army/fetchArmyUnits', store.state.map.map.id)
  await store.dispatch('building/fetchBuildingUnits', store.state.map.map.id)

  if (store.state.world.world.status !== 'started') {
    return router.push({ name: 'world', params: { world: store.state.user.user.world_id } })
  }

  Socket.subscribeMap(store.state.map.map.id)

  store.dispatch('user/fetchResources')

  setInterval(() => {
    store.dispatch('user/updateResources')
    store.dispatch('user/fetchResources')
  }, 1000)

  return next()
}
