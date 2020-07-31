const usdPortfolio = artifacts.require("usdPortfolio");
contract("usdPortfolio", async => {
  it("should add money to the account", async => {
    const contractInstance = await usdPortfolio.new({from:accounts[0]});
    const result = await contractInstance.addToBalance({from:accounts[0], value:100});
    assert.Equal(result == 100);
  });

  it("should withdraw money from the account", async => {
    const contractInstance = await usdPortfolio.new({from:accounts[0]});
    await contractInstance.addToBalance({from:accounts[0], value:100});
    const result = await contractInstance.withdraw(50, {from:accounts[0]});
    assert.Equal(result == 50);
  });

  it("should not return money from account", async => {
    const contractInstance = await usdPortfolio.new({from:accounts[0]});
    await contractInstance.addToBalance({from:accounts[0], value:100});
    try{
      await contractInstance.withdraw(50, {from:accounts[0]});
      assert(true);
    }
    catch(err) {
      return;
    }
    assert(false, "contract did not throw.");
  });

  it("reference data should be greater than 0", async => {
    const contractInstance = await usdPortfolio.new({from:accounts[0]});
    await contractInstance.refLatestPrice();
    const result = await contractInstance.referenceCurrentPrice();
    assert(result > 0);
  });
});
