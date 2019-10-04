import store from './../store/index'

export default async function auth ({ next, router }) {
  let token = localStorage.getItem('token');

  if (token === null || token === undefined || token === '') {
    return router.push({ name: 'login' })
  }

  try {
    await store.dispatch('user/get')
  } catch (e) {
    localStorage.setItem('token', '')
    router.push({ name: 'login' })
  }

  return next()
}
