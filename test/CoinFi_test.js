const Web3 = require('web3');
const chai = require('chai');
const assert = chai.assert;
const ganache = require('ganache-cli');
const assertFail = require("./helpers/assertFail.js");
const contracts = require('./contracts.js');

describe('CoinFiToken test', function () {
    this.timeout(0);

    var server;
    let web3;
    let accounts;
    let CoinFiToken;
    let CoinFiAirdrop;

    before(async () => {
        server = ganache.server({
            ws: true,
            gasLimit: 6500000,
            total_accounts: 10
        });

        server.listen(8555);
        web3 = new Web3('http://localhost:8555');
        accounts = await web3.eth.getAccounts();
       
    });

    after((done) => {
        server.close();
        done();
    });

    it('Should deploy CoinFiToken contract', async function () {
        CoinFiToken = await contracts.CoinFiToken.new(web3);
        assert.ok(CoinFiToken.$address);
    });

    it('Should deploy CoinFiAirdrop contract', async function () {
        CoinFiAirdrop = await contracts.CoinFiAirdrop.new(web3,CoinFiToken.$address);
        assert.ok(CoinFiAirdrop.$address);
    });

    it('Should send 800 COFI', async function () {
        await CoinFiToken.transfer(CoinFiAirdrop.$address, 800 * (10**18));
        assert.equal((await CoinFiToken.balanceOf(CoinFiAirdrop.$address)), 800 * (10**18));
    });

    it('Should fail if CoinFiAirdrop try to send COFI tokens', async function () {
        await assertFail(CoinFiAirdrop.sendAirdrop([CoinFiToken.$address]));
    });

    it('Should setAirdropAddress', async function () {
        await CoinFiToken.setAirdropAddress(CoinFiAirdrop.$address);
        assert.equal((await CoinFiToken.airdropAddress()), CoinFiAirdrop.$address);
    });

    it('CoinFiAirdrop should be able to send airdrop COFI tokens to account[3]', async function () {
        await CoinFiAirdrop.sendAirdrop([accounts[3]]);
        assert.equal((await CoinFiToken.balanceOf(accounts[3])), 500 * (10**18));
    });
});