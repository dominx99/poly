import store from './../store/index'

export default async function auth ({ next, router }) {
  let token = localStorage.getItem('token');

  if (token === null || token === undefined || token === '') {
    return router.push({ name: 'login' })
  }

  await store.dispatch('user/get')

  return next()
}
