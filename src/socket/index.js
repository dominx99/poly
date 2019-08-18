import store from '../store/index';

export default class Socket {
  static subscribeUser(userId) {
    if (userId === null || userId === undefined || userId === '') {
      return;
    }

    let channel = window.socket.subscribe(userId)
  }
  static subscribeWorld(worldId) {
    if (worldId === null || worldId === undefined || worldId === '') {
      return;
    }

    let channel = window.socket.subscribe(worldId)

    channel.bind('update.status', data => {
      if (data.status === 'started') {
        window.router.push({ name: 'game', params: { worldId: worldId } })
      } else {
        store.commit('world/setStatus', data.status)
      }
    });
  }
}
