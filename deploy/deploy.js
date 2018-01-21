const Web3 = require('web3');
const contracts = require('./contracts.js');
const web3 = new Web3('http://localhost:7545');

const deploy = async () => {
    let CoinFiToken = await contracts.CoinFiToken.new(web3);	
	console.log("CoinFiToken deployed address: ",CoinFiToken.$address);

    let CoinFiAirdrop = await contracts.CoinFiAirdrop.new(web3,CoinFiToken.$address);	
    console.log("CoinFiAirdrop deployed address: ",CoinFiAirdrop.$address);
    
    await CoinFiToken.setAirdropAddress(CoinFiAirdrop.$address);
    console.log("setAirdropAddress");

    let airdropAddress = await CoinFiToken.airdropAddress();
    console.log("CoinFiToken.airdropAddress: ",airdropAddress);

    await CoinFiToken.transfer(airdropAddress,500 * (10**18))
    let balanceCoinFiAirdrop = await CoinFiToken.balanceOf(airdropAddress);
    console.log("BalanceOf CoinFiAirdrop: ",balanceCoinFiAirdrop);

};

deploy().then(() => {
	console.log("All Contracts deployed!");
});