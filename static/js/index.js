var ethId = 1;
var dataFetcher;

const infuraUrl = 'wss://ropsten.infura.io/ws/g97D5zS7v5gxGRgzQV60'


const socket = new WebSocket(infuraUrl)

socket.onopen = function() {
  getTopicLogs()
  dataFetcher = setInterval(function() {
    getTopicLogs()
  }, 10000);
}

socket.onmessage = function(message){
  var data = JSON.parse(message.data);
  displayTopicLogs(data.result)
}

socket.onclose = function(){
  clearInterval(dataFetcher)
}


const methodName = 'eth_getLogs'
const topics = ['0x19287f35bf9ce71d59481bf0e504fc7f02e898d429c85d11f5276bc24bd903c3']
let fromBlock = 'earliest'
let toBlock = 'latest'

function getTopicLogs(){
  const message = JSON.stringify({
    "jsonrpc": "2.0",
    "id": ethId,
    "method": methodName,
    "params": [{fromBlock, toBlock, topics}]
  })

  socket.send(message)
}


function displayTopicLogs(logs){
  let data = {}
  if(logs.length > 0){
    data = logs[0]
    fromBlock = data.blockNumber
    let values = data.data.replace('0x', '').match(/.{1,64}/g);
    values.forEach(function(value, index) {
      values[index] = parseInt(value, 16);
    });
    $('#text_token').text(values[1])
    $('#text_total_eth').text(values[0])
  }
}


