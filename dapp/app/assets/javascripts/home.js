var contractAddress = "0xF288661e101aC232139Db8C27A1072Aa5E4A275E";
var contractAbi = [ { "constant": false, "inputs": [], "name": "kill", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "myNewVar", "type": "uint256" } ], "name": "setMyVariable", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "getMyContractBalance", "outputs": [ { "name": "", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getMyVariable", "outputs": [ { "name": "", "type": "uint256", "value": "5" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "mortal", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": true, "stateMutability": "payable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" } ]
var myContract = web3.eth.contract(contractAbi).at(contractAddress);

$(document).on('page:ready page:change', function (){

	console.log("message");

	// if (typeof web3 !== 'undefined') {
	// 	web3 = new Web3(web3.currentProvider);
	// } else {
	// 	// set the provider you want from Web3.providers
	// 	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	// }

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
	console.log("getCounter");
	myContract.getMyVariable(function(error, result){
	if(!error)
		console.log(result)
	else
		console.error(error);
 	});
	// document.getElementById("myCounter").innerHtml = myContract.getMyVariable();

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