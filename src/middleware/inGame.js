import store from './../store/index'

export default function inGame ({ next, router }) {
  if (store.state.user.user.world_id === null || store.state.user.user.world_id === undefined || store.state.user.user.world_id === '') {
    return router.push({ name: 'lobby' })
  }

  store.dispatch('user/fetchResources')

  return next()
}
