const contractABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "addToBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_requestId",
				"type": "bytes32"
			},
			{
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "fulfillEthereumPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "requestEthereumPrice",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_money",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			}
		],
		"name": "OwnershipRenounced",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "ChainlinkRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "ChainlinkFulfilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "ChainlinkCancelled",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "currentPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "etherBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "jobId",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "oracleAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "referenceCurrentPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "refLatestPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
const contractAddress = "0x3535BDa1E5f9ebA467303fC26aa00ed0b3E15E87";
//initiate web3 w/ Metamask
	const web3 = new Web3(window.web3.currentProvider);
//initiate contract
	const usdPortfolio = new web3.eth.Contract(contractABI, contractAddress);

//wait for the DOM to load
	document.addEventListener('DOMContentLoaded', async () => {
		//HTML elements manipulated by javascript
		  const ethereumButton = document.querySelector('.enableEthereumButton');
		  const showAccount = document.querySelector('.showAccount');
		  const $etherText = document.getElementById('totalEtherText');
		  const $addFunds = document.getElementById("addFunds");
		  const $withdrawFunds = document.getElementById("withdrawFunds");
		  const $usdText = document.getElementById("usdText");
		  const $addText = document.getElementById("txtStatusAdd");
		  const $withdrawText = document.getElementById("txtStatusWithdrawn");

		//initate metamask accounts
		  let accounts =[];
		  getAccount();

		//metamask boilerplate
		  //setup metamask -- must have it installed and conntected
		    ethereumButton.addEventListener('click', () => {
		        getAccount()
		    });

		  //get accounts from metamask
		    async function getAccount() {
		      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
		      const account = accounts[0];
		      showAccount.innerHTML = account;
		    };

		  //know when a user changes metamask accounts
		    ethereum.on('accountsChanged', function (accounts) {
		    // Time to reload your interface with accounts[0]!
		    getAccount();
		    });


	//Apps features
	  //add funds function
	    $addFunds.addEventListener("submit", e => {
	      e.preventDefault();
	      let moneyAdded = e.target.elements[0].value;
				//use big number for javascript to solidity
	      moneyAdded = new BigNumber(moneyAdded * 1000000000);
	      $addText.innerHTML = "Please Wait... Processing Request!"
				//transact to blockchain and chainlink
	      usdPortfolio.methods.addToBalance().send({from: ethereum.selectedAddress, value: moneyAdded, gaslimit: 300000})
				//then manipulate the dom to change the total funds and USD total
	      .then(() => {
	        usdPortfolio.methods.etherBalance(ethereum.selectedAddress).call()
	        .then(result => {
	          result = result / 1000000000;
	          $etherText.innerHTML = "Total Gwei:   " + result;
	          $addText.innerHTML = ""
	          alert("You have added money to your Portfolio");
	        });
	      });
	    });

	  //withdraw funds function
	    $withdrawFunds.addEventListener("submit", e => {
	      e.preventDefault();
	      let moneyWithdrawn = e.target.elements[0].value;
				//use big number for javascript to solidity
	      moneyWithdrawn = new BigNumber(moneyWithdrawn * 1000000000);
	      $withdrawText.innerHTML = "Please Wait... Processing Request!"
				//transact to blockchain and chainlink
	      usdPortfolio.methods.withdraw(moneyWithdrawn).send({from: ethereum.selectedAddress, gaslimit: 300000})
				//then manipulate the dom to change the total funds and USD total
	      .then(() => {
	        usdPortfolio.methods.etherBalance(ethereum.selectedAddress).call()
	        .then(result => {
	          result = result / 1000000000;
	          $etherText.innerHTML = "Total Gwei:   " + result;
	          $withdrawText.innerHTML = ""
	          alert("You have Withdrawn money from your Portfolio");
	        });
	      });
	    });


	    //update user interface every 3 seconds
	    setInterval(function(){ setUSD(); }, 3000);
	    function setUSD() {
				//call to chainlinks references to get latest price
	      usdPortfolio.methods.refLatestPrice().call()
				//update DOM with updated USD feed
	        .then(resultPrice => {
	          usdPortfolio.methods.etherBalance(ethereum.selectedAddress).call()
	            .then(resultEther => {
	              let etherTextGwei = resultEther;
	              resultPrice =  resultPrice / 100000000;
	              resultEther = resultEther / 1000000000000000000;
	              let conv = resultPrice * resultEther;
	              conv = conv.toFixed(2);
	              $usdText.innerHTML = "USD:  $" + conv;
	              etherTextGwei = etherTextGwei / 1000000000;
	              $etherText.innerHTML = "Total Gwei:   " + etherTextGwei;
	            });
	        });
	    };


	});
