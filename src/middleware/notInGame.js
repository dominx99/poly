import store from './../store/index'

export default function notInGame ({ next, router }) {
  if (store.state.user.user.world_id !== null && store.state.user.user.world_id !== undefined && store.state.user.user.world_id !== '') {
    return router.push({ name: 'world', params: { world: store.state.user.user.world_id } })
  }

  return next()
}
