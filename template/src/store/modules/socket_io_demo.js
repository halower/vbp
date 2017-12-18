export default {
  namespaced: true,
  state: {
    connect: false,
    serverMsg: null
  },
  mutations: {
    SOCKET_CONNECT: (state, status) => {
      state.connect = true
      console.log('socket server have been connected')
    },
    // Socket mutations always have SOCKET_ prefix. to listen to server emit event
    SOCKET_SERVEREVENT: (state, msg) => {
      state.serverMsg = msg
    }
  },
  actions: {
    tell: ({ state, commit, rootState }, message) => {
      rootState.socket.emit('clientEvent', message)
    }
  }
}

/** Server Side Test Code **/
// var app = require('http').createServer()
// var io = require('socket.io')(app);
// var fs = require('fs');

// app.listen(80);

// io.on('connect', function (socket) {
//   socket.emit('serverEvent', { res : 'welcome to use vbp freamwork' });
//   socket.on('clientEvent', function (data) {
//     console.log(data);
//   });
// });
/** Server Side Test Code **/
