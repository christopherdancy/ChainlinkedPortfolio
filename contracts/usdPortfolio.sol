pragma solidity >=0.4.22 <0.6.0;

//import chainlink contracts / interfaces
  import "https://github.com/smartcontractkit/chainlink/evm-contracts/src/v0.4/ChainlinkClient.sol";
  import "https://github.com/smartcontractkit/chainlink/evm-contracts/src/v0.4/vendor/Ownable.sol";
  import "github.com/smartcontractkit/chainlink/evm-contracts/src/v0.4/interfaces/AggregatorInterface.sol";

contract usdPortfolio is ChainlinkClient, Ownable {
    //chain link info
        uint256 constant private ORACLE_PAYMENT = 1 * LINK;
        uint256 public currentPrice;
        uint256 public referenceCurrentPrice;
        AggregatorInterface internal ref;
        //chainlink constructor
        constructor() public Ownable() {
            setPublicChainlinkToken();
            ref = AggregatorInterface(0x8468b2bDCE073A157E560AA4D9CcF6dB1DB98507);
        }

        //hardcoded oracle address and _jobId
        address public oracleAddress = 0x83F00b902cbf06E316C95F51cbEeD9D2572a349a;
        string public jobId = "c179a8180e034cf5a341488406c32827";

    //apps varibales
        //need to know an addresses balance
        mapping (address => uint) public etherBalance;

    //chainlink functions
        //oracle call
        function requestEthereumPrice() public {
            Chainlink.Request memory req = buildChainlinkRequest(stringToBytes32(jobId), this, this.fulfillEthereumPrice.selector);
            req.add("get", "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");
            req.add("path", "USD");
            req.addInt("times", 100);
            sendChainlinkRequestTo(oracleAddress, req, ORACLE_PAYMENT);
        }

        //fufill price
        function fulfillEthereumPrice(bytes32 _requestId, uint256 _price) public recordChainlinkFulfillment(_requestId) {
            currentPrice = _price;
        }

        //turn to bytes32
        function stringToBytes32(string memory source) private pure returns (bytes32 result) {
            bytes memory tempEmptyStringTest = bytes(source);
            if (tempEmptyStringTest.length == 0) {
              return 0x0;
            }
            assembly { // solhint-disable-line no-inline-assembly
              result := mload(add(source, 32))
            }
        }

        //reference prices
        function refLatestPrice() public returns (uint256) {
            return uint256(ref.latestAnswer());
        }

    //app features
        //should add money to the account
          function addToBalance() public payable returns(uint) {
              //require a person sends money
              require(msg.value > 0, "You must send money to your portfolio" );
              //add money to their balance
              etherBalance[msg.sender] = etherBalance[msg.sender] + msg.value;
              //run chainlink function
              requestEthereumPrice();
              //return the money that was sent to the contract
              return msg.value;
          }

        //should withdraw money from contract
          function withdraw(uint _money) public returns(uint) {
              //require a person have money in their account
              require(etherBalance[msg.sender] > 0, "You must have money in your account to withdraw");
              //require a person withdraw less than their amount
              require(_money <= etherBalance[msg.sender], "You cannot withdraw more money than you have in your account");
              //make changes to account and then send money
              etherBalance[msg.sender] = etherBalance[msg.sender] - _money;
              //send money to the msg.sender
              msg.sender.transfer(_money);
              //run chainlink function
              requestEthereumPrice();
              return _money;
          }

}
