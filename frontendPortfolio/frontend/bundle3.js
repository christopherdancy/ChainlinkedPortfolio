const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "newAddress",
        "type": "address"
      }
    ],
    "name": "addresschanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "bankCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "contribution",
        "type": "uint256"
      }
    ],
    "name": "contributionMade",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "moneyspent",
        "type": "uint256"
      }
    ],
    "name": "moneySpent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "withdrawnMoney",
        "type": "uint256"
      }
    ],
    "name": "moneyWithdrawn",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Ids",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "goalID",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "currentBalance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "goal",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "goalOwner",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "goalDestination",
        "type": "address"
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "contributors",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "goalId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "contributionTowardsGoal",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "contributorAddress",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "agreesToAddress",
        "type": "bool"
      },
      {
        "internalType": "bool",
        "name": "etherNotUsedAddressChange",
        "type": "bool"
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "goalMet",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
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
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "goalOwner",
    "outputs": [
      {
        "internalType": "address",
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
    "name": "getIds",
    "outputs": [
      {
        "internalType": "uint256",
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
    "name": "getcontributors",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_goal",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_goalAddress",
        "type": "address"
      }
    ],
    "name": "createbank",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_goalID",
        "type": "uint256"
      }
    ],
    "name": "contribute",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_goalID",
        "type": "uint256"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_goalID",
        "type": "uint256"
      }
    ],
    "name": "usePiggyBank",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_goalID",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "changeAddress",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_goalID",
        "type": "uint256"
      }
    ],
    "name": "contributorAgreesToAddressChange",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
const contractAddress = "0x5a9C71bc4D7492ac897C7aE9399fb01ec89e975E";
//initiate web3
  const web3 = new Web3('http://localhost:7545');
//initiate contract
  const smartPiggyBank = new web3.eth.Contract(contractABI, contractAddress);

//once document is loaded
  document.addEventListener('DOMContentLoaded', () => {

    //manipulatable varibles from HTML
      const $createGoal = document.getElementById("createGoalForm");
      const $goalTx = document.getElementById("createTxStatus");
      const $goalTable = document.getElementById("goalTable");
      const $addGoal = document.getElementById("addGoal");
      const $completedTable = document.getElementById('completedGoalTable');
      const $contribution = document.getElementById('friendTable');
      const $contributeTable = document.getElementById('contributeTableTable');
      const $spendGoal = document.getElementById('spendgoal');


    //initiate accounts from Ganache
      let accounts = [];

      web3.eth.getAccounts()
        .then(_accounts => {
          accounts = _accounts;
        });

    //run functions on DOM load
    //should call to the blockchain and set users goals
      setCompleteTable();
      setGoalTable();

    //FEATURES

      //CREATE GOAL
      //once user fills out form, on button Click, sign a transaction to create a goal.
        $createGoal.addEventListener('submit', function(e) {
          e.preventDefault();
          const address = e.target.elements[0].value;
          const value = e.target.elements[1].value;
          //transact to blockchain
          smartPiggyBank.methods.createbank(value, address).send({from:accounts[0], gas:257066})
          //once the transaction is complete, reset tables
            .then(() => {
              setGoalTable()

              $goalTx.innerHTML ="Congrats! You have created a goal."
            });
        });

        //ADD TO OWN GOAL
        //Allows a user to contribute to a goal, take the form and transacts on button click.
          $addGoal.addEventListener('submit', function(e) {
            e.preventDefault();
            const goalId = e.target.elements[0].value;
            //transact to the blockchain
            smartPiggyBank.methods.contribute(goalId).send({from:accounts[0], gas:257066, value:20})
            //once the transaction is complete, reset tables
              .then(() => {
                setGoalTable()
                setCompleteTable()
                $goalTx.innerHTML ="You have contributed to your goal"
              });
          });

          //CONTRIBUTE TO FRIENDS GOAL
            $contribution.addEventListener('submit', function(e) {
              e.preventDefault();
              const goalId = e.target.elements[0].value;
              smartPiggyBank.methods.contribute(goalId).send({from:accounts[1], gas:257066, value:20})
                .then(() => {
                  setcontributionTable(goalId)
                  setGoalTable()
                  setCompleteTable()
                  $goalTx.innerHTML ="You have made a contribution to a friends goal!"
                });
            });

            //SPEND COMPLETED GOAL
            //Allow a completed goal to be spent, filled out form and a transaction to spend is sent to blockchain
              $spendGoal.addEventListener('submit', function(e) {
                e.preventDefault();
                const goalId = e.target.elements[0].value;
                //sent to blockchain
                smartPiggyBank.methods.usePiggyBank(goalId).send({from:accounts[0], gas:257066})
                  //then reset the completed table, should be removed
                  .then(() => {
                    setCompleteTable()
                    $goalTx.innerHTML ="You have spent your goal"
                });
              });

    //DOM TABLE MANIPULATION
      //This function calls to blockchain and provides uptodate list of goals
        function setGoalTable() {
          //delete rows
          for(var i = $goalTable.rows.length - 1; i > 0; i--)
          {
              $goalTable.deleteRow(i);
          };
          //call the array from the blockchain
          smartPiggyBank.methods.getIds().call()
          //loop through the array
            .then(totalIds => {
              for(i=0; i<totalIds; i++) {
                smartPiggyBank.methods.Ids(i).call()
                  .then(result => {

                    //find the correct goal owner
                    if(result.goalOwner == accounts[0]) {
                      //check to see if goal is met
                      smartPiggyBank.methods.goalMet(result.goalID).call()
                        .then(bool => {
                          //goalmet must be false to be placed in goals to complete
                          if(bool == false ) {
                            goalid = result.goalID;
                            valueleft = result.goal - result.currentBalance;
                            if(valueleft > 0) {
                            //add the values to the table 1 at a time
                            var row = $goalTable.insertRow(1);
                            var cell1 = row.insertCell(0);
                            var cell2 = row.insertCell(1);
                            cell1.innerHTML = goalid;
                            cell2.innerHTML = valueleft;
                          };
                        };
                      });
                    };
                  });
                };
              });
        };



      //function calls to blockchain and resets table
        function setCompleteTable() {
          //delete rows
          for(var i = $completedTable.rows.length - 1; i > 0; i--)
          {
              $completedTable.deleteRow(i);
          };
          //call the array from the blockchain
          smartPiggyBank.methods.getIds().call()
          //loop through the array
            .then(idnumber => {
              for(i=0; i < idnumber; i++) {
                smartPiggyBank.methods.Ids(i).call()
                  .then(result2 => {
                    //find the correct goal owner
                    if(result2.goalOwner == accounts[0] ) {
                      //check to see if goal is met
                      smartPiggyBank.methods.goalMet(result2.goalID).call()
                        .then(bool => {
                          //goalmet must be true to be placed in completed goals
                          if(bool == true ) {
                            if(result2.currentBalance > 0){
                              goalid = result2.goalID;
                              valueleft = result2.goal - result2.currentBalance;
                              //add the values to the table 1 at a time
                              var row = $completedTable.insertRow(1);
                              var cell1 = row.insertCell(0);
                              var cell2 = row.insertCell(1);
                              cell1.innerHTML = goalid;
                              cell2.innerHTML = result2.goal;
                          };
                          };
                        });
                    };
                  });
                };
              });
        };



      //function resets contrinution table
        function setcontributionTable(goalnumber) {
          //delete rows
          for(var i = $contributeTable.rows.length - 1; i > 0; i--)
          {
              $contributeTable.deleteRow(i);
          };
          smartPiggyBank.methods.getcontributors().call()
          .then(contri => {
            for(i=0; i < contri; i++) {
              smartPiggyBank.methods.contributors(i).call()
                .then(res => {
                  //find the correct goal owner
                  if(res.contributorAddress == accounts[1]) {
                    //call goal owner to excluse from contributions
                    smartPiggyBank.methods.goalOwner(goalnumber).call()
                    .then(address => {
                      //the goal owner should not see their own goals in contributons
                      if(address != res.contributorAddress) {
                        goalid = res.goalId;
                        invested = res.contributionTowardsGoal;
                        //add the values to the table 1 at a time
                        var row = $contributeTable.insertRow(1);
                        var cell1 = row.insertCell(0);
                        var cell2 = row.insertCell(1);
                        cell1.innerHTML = goalid;
                        cell2.innerHTML = invested;
                      };
                    });
                  };
                });
              };
            });
        };



  });
