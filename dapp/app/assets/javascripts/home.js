$(document).on('page:ready page:change', function (){

	console.log("message");

	if (typeof web3 !== 'undefined') {
		web3 = new Web3(web3.currentProvider);
	} else {
		// set the provider you want from Web3.providers
		web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	}

})

$(document).on('click', '#getBalance', function(e) {
	getBalance()
});

function getBalance() {
	console.log("getBalance", web3.eth.accounts);
	// document.getElementById("myBalance").innerHtml = web3.eth.getBalance(web3.eth.accounts[0]);
	_getBalance(web3.eth.accounts[0]);
}

function _getBalance (address) {
  return web3.eth.getBalance(address, function (error, result) {
    if (!error) {
      console.log(result.toNumber());
    } else {
      console.error(error);
    }
  })
}