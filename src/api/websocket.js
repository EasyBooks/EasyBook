const WS_URL="ws://www.lsm1998.com:8888/im";
// const WS_URL="ws://localhost:8888/im";
let Token=null;
let Socket=null;

export let WebSocketAPI = {
  connect(token){
    Socket = new WebSocket(WS_URL);
    Socket.onmessage = this.webSocketOnMessage;
    Socket.onopen = this.webSocketOnOpen;
    Socket.onerror = this.webSocketOnError;
    Socket.onclose = this.webSocketClose;
    Token=token;
  },
  send(msg){
    this.socket.send(msg);
  },
  webSocketOnMessage(e){
    let data=JSON.parse(e.data);
    switch(data.cmd){
      case 2:
        alert("连接服务器成功");
      break;
      case 4:
        break;
      default:
        break;
    }
  },
  webSocketOnOpen(){
     let msg= {"cmd": 1, "content": Token};
     this.send(JSON.stringify(msg));
  },
  webSocketOnError(){

  },
  webSocketClose(){

  }
};
