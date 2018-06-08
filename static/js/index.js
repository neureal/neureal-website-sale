
var eth_id = 1;

function eth(method,params) {

    var settings = {
        'async': true,
        'crossDomain': true,
        'url': 'https://mainnet.infura.io',
        'method': 'POST',
        'headers': {},
        "data": '{"jsonrpc":"2.0","id":'+(eth_id++)+',"method":"'+method+'","params":'+params+'}'
      }
        
      $.ajax(settings).done(function(response) {
        console.log(response);
        $('#text_total_token').text(response.result);
      });

}

var page = (function() {
    var rdy = (function() {

        // TODO Get data from Infura

        eth('eth_blockNumber','[]');
        var refreshId = setInterval(function() {
            eth('eth_blockNumber','[]');
        }, 10000);

        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://mainnet.infura.io",
        //     "method": "POST",
        //     "headers": {},
        //     "data": "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"eth_newFilter\",\"params\":[]}"
        //     // "data": "{\"jsonrpc\":\"2.0\",\"id\":1,\"method\":\"eth_blockNumber\",\"params\":[]}"
        //   }
          
        //   $.ajax(settings).done(function(response) {
        //     console.log(response);
        //     // $('#text_total_token').text(response.result);
        //   });


        // var refreshId = setInterval(function() {
        //     var r = (-0.5)+(Math.random()*(1000.99));
        //     $('#img-container').load('images/gallery/best/random.php?'+r);
        // }, 5000);

        // $('#text_total_token').text('text_total_token Testing!!!');
        // $('#text_total_eth').text('text_total_eth Testing!!!');
        

        // $('#text_total_token').text((eth_id++));
        // var refreshId = setInterval(function() {
        //     $('#text_total_token').text((eth_id++));
        // }, 10000);


        // $("#text-status").load("/webhook_activate");

        // console.log($('#modal_disclaimer').css('display'));

        // $("#button_show_contract").click(function() {
        //     $('#modal_contract').toggleClass('w3-show');
        // });

        // $("#button_risks_agree").click(function() {
        //     $('#modal_risks').css('display','none');
        // });
        // $("#button_disclaimer_agree").click(function() {
        //     $('#modal_disclaimer').css('display','none');
        //     $('#modal_risks').css('display','block');
        // });
        // $('#modal_disclaimer').css('display','block');
        
    });
    return { rdy: rdy };
})();
$(document).ready(page.rdy);

// $(window).on('load', function() {
//     console.log('OnLoad');
//     // everything on page loaded
// });