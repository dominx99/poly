import Lobby from './views/LobbyView'
import Login from './views/LoginView'
import Register from './views/RegisterView'
import World from './views/WorldView'
import Game from './views/GameView'

import auth from './middleware/auth'
import guest from './middleware/guest'
import notInGame  from './middleware/notInGame'
import inGame  from './middleware/inGame'
import notGameStarted  from './middleware/notGameStarted'
import gameStarted  from './middleware/gameStarted'

export default [
  {
    path: '/',
    component: Lobby,
    name: 'lobby',
    meta: {
      middleware: [auth, notInGame]
    }
  },
  {
    path: '/world/:world',
    component: World,
    name: 'world',
    meta: {
      middleware: [auth, inGame, notGameStarted]
    },
  },
  {
    path: '/game/:world',
    component: Game,
    name: 'game',
    meta: {
      middleware: [auth, inGame, gameStarted]
    },
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      middleware: guest
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      middleware: guest
    }
  }
]
