const smartPiggyBank = artifacts.require("smartPiggyBank");

module.exports = function(deployer) {
  deployer.deploy(smartPiggyBank);
};
