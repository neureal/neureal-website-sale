var ethId = 12;

const ws = new WebSocket("wss://mainnet.infura.io/ws")

ws.onopen = function() {
  // sendEthGetLogs(1)
}

ws.onmessage = function(message){
  var data = JSON.parse(message.data);
  displayTopicLogs(data.result)
}

$(function(){
  $('#displayTopic').click(function(){
    const topicName = $('#id_topic').val();
    getTopicLogs(ethId, topicName)
  });
})


function getTopicLogs(ethId, topicName){
  // const params = [{"address":["0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"], "fromBlock": "0x6e616e6f706f6f6c2e6f7267", "toBlock": "0x65746865726d696e652d65753130"}]
  const params = ['0x06012c8cf97BEaD5deAe237070F9587f8E7A266d', 'latest']
  const message = JSON.stringify({jsonrpc: "2.0", id: ethId, method: 'eth_getBalance', params: params})
  ws.send(message)
}


function displayTopicLogs(logs){
  console.log(logs)
}
