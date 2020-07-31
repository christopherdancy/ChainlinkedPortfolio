const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");
const usdPortfolio = artifacts.require("usdPortfolio");

module.exports = function(deployer) {
  deployer.deploy(usdPortfolio);
};
