const smartPiggyBank = artifacts.require('smartPiggyBank');

contract('smartPiggyBank', (accounts) => {
  it("should create a new piggyBank", async() => {
    //setup
    const contractInstance = await smartPiggyBank.new({from: accounts[0]});
    //act
    const result = await contractInstance.createbank(100, accounts[9], {from: accounts[0]});
    assert.equal(result.receipt.status, true);
  });

  it("owner should add money to new piggybank", async() => {
    const contractInstance = await smartPiggyBank.new({from: accounts[0]});
    //act
    const result = await contractInstance.createbank(100, accounts[9], {from: accounts[0]});

    const result2 = await contractInstance.contribute(result.logs[0].args.id, {from: accounts[1], value: 50});

    assert.equal(result2.logs[0].args.contribution, 50);
  });

  it("should allow others to withdraw money added", async() => {
    const contractInstance = await smartPiggyBank.new({from: accounts[0]});

    const result = await contractInstance.createbank(100, accounts[9], {from: accounts[0]});
    await contractInstance.contribute(result.logs[0].args.id, {from: accounts[1], value: 50});
    const result3 = await contractInstance.withdraw(result.logs[0].args.id, {from: accounts[1]});

    assert.equal(result3.logs[0].args.withdrawnMoney, 50);
  })

  it('should allow the bank owner to spend funds', async() => {
    const contractInstance = await smartPiggyBank.new({from: accounts[0]});
    //act
    const result = await contractInstance.createbank(100, accounts[9], {from: accounts[0]});
    await contractInstance.contribute(result.logs[0].args.id, {from: accounts[1], value: 100});
    const result2 = await contractInstance.usePiggyBank(result.logs[0].args.id, 20, {from: accounts[0]});
    assert.equal(result2.logs[0].args.moneyspent, 20);
  })

  it("should not allow the person to spend money without reaching goal", async() => {
    const contractInstance = await smartPiggyBank.new({from: accounts[0]});
    const result = await contractInstance.createbank(100, accounts[9], {from: accounts[0]});
    await contractInstance.contribute(result.logs[0].args.id, {from: accounts[1], value: 50});
    try{
      const result2 = await contractInstance.usePiggyBank(result.logs[0].args.id, 20, {from: accounts[0]});
      assert(true);
    }
    catch(err) {
      return;
    }
    assert(false, "the contract did not throw.");
  })

  it("should allow owner to change address", async() => {
    const contractInstance = await smartPiggyBank.new({from: accounts[0]});
    const result = await contractInstance.createbank(100, accounts[9], {from: accounts[0]});
    await contractInstance.contribute(result.logs[0].args.id, {from: accounts[1], value: 50});
    const result2 = await contractInstance.changeAddress(result.logs[0].args.id, accounts[8], {from: accounts[0]});
    assert.equal(result2.logs[0].args.newAddress, accounts[8]);
  })

  it("should not allow a contributer to contribute after address change.", async() => {
    const contractInstance = await smartPiggyBank.new({from: accounts[0]});
    const result = await contractInstance.createbank(100, accounts[9], {from: accounts[0]});
    await contractInstance.contribute(result.logs[0].args.id, {from: accounts[1], value: 50});
    const result2 = await contractInstance.changeAddress(result.logs[0].args.id, accounts[8], {from: accounts[0]});

    try{
      await contractInstance.contribute(result.logs[0].args.id, {from: accounts[1], value: 50});
      assert(true);
    }
    catch(err){
      return;
    }
    assert(false,"the contract did not throw.")
  })

  it("should not allow a goal met spend after address change.", async() => {
    const contractInstance = await smartPiggyBank.new({from: accounts[0]});
    const result = await contractInstance.createbank(100, accounts[9], {from: accounts[0]});
    await contractInstance.contribute(result.logs[0].args.id, {from: accounts[1], value: 100});
    const result2 = await contractInstance.changeAddress(result.logs[0].args.id, accounts[8], {from: accounts[0]});

    try{
      await contractInstance.usePiggyBank(result.logs[0].args.id, 20, {from: accounts[0]});
      assert(true);
    }
    catch(err){
      return;
    }
    assert(false,"the contract did not throw.")
  })




})
