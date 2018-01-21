const generateClass = require('eth-contract-class').default;
const CoinFi = require('../build/CoinFi.sol');

module.exports.CoinFiToken = generateClass(CoinFi.CoinFiTokenAbi, CoinFi.CoinFiTokenByteCode);
module.exports.CoinFiAirdrop = generateClass(CoinFi.CoinFiAirdropAbi, CoinFi.CoinFiAirdropByteCode);