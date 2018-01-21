**************************
# ONLY FOR TESTING PURPOSE
**************************

# Install

```
npm install -g solcpiler
npm install
```

# Requisites

Add OZ libraries as a submodule

```
$ git submodule add https://github.com/OpenZeppelin/zeppelin-solidity.git
```

Add the smart-contracts to the contracts folder
You only need to import the contracts you use within your files, the rest will be imported automatically.
You can import OZ libraries in this way:

```
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/token/StandardToken.sol";
```

# Compile

Execute:

```
$ solcpiler
or
$ npm run build
```

The result is stored in the build directory, where two files are generated per * .sol

The first one is called "* _all.sol" which is the result of importing all the necessary contracts together with the original code into one, so it can be used directly in mist, remix, ...

The other file is a file with the Abi, bytecode,... of all the contracts and that can be imported into javascript scripts and used through web3 to develop test or deployment scripts.

# Deploy

preconfigured to connect to localhost on port 7545 (ganache aka testrpc)
```
$ node deploy/deploy.js
or
$ npm run deploy
```

# Test
```
$ node deploy/deploy.js
or
$ npm run test
```
