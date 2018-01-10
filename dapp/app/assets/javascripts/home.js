var contractAddress = "0x59998cb13279c72aea3bfa2ba676f9826910832c";
var contractAbi = [{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"addToNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"substractNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"multiplyWithNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getResult","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"num","type":"uint256"}],"name":"divideByNumber","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"number","type":"uint256"}],"name":"Result","type":"event"}]

var myContract = web3.eth.contract(contractAbi).at(contractAddress);

$(document).on('page:ready page:change', function (){
	// Checking if Web3 has been injected by the browser (Mist/MetaMask)
	  if (typeof web3 !== 'undefined') {
	    // Use Mist/MetaMask's provider	
	    window.web3 = new Web3(web3.currentProvider);
	  } else {
	    console.log('No web3? You should consider trying MetaMask!')
	    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
	    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	  }
})

$(document).on('click', '#getCounter', function(e) {
	$("#myCounter").text("loading");
	myContract.getResult(function(error, result){
	if(!error) {
		console.log("res:", result);
		$("#myCounter").text(result);
	} else
		console.error("err:", error);
 	});
});

$(document).on('click', '#addToCounter', function(e) {
	$("#myCounter").text("loading");
	myContract.addToNumber(1, function(error, result){
	if(!error) {
		console.log("res:", result);
		$("#myCounter").text(result);
	} else
		console.error("err:", error);
 	});
});

$(document).on('click', '#substractFromCounter', function(e) {
	$("#myCounter").text("loading");
	myContract.substractNumber(1, function(error, result){
		if(!error) {
			console.log("res:", result);
			$("#myCounter").text(result);
		} else {
			console.error("err:", error);
		}
	});
});


// function _getBalance (address) {
//   return web3.eth.getBalance(address, function (error, result) {
//     if (!error) {
//       console.log(result.toNumber());
//     } else {
//       console.error(error);
//     }
//   })
// }