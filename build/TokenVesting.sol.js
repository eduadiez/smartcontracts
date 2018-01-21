/* This is an autogenerated file. DO NOT EDIT MANUALLY */

exports.ERC20Abi = [{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
exports.ERC20ByteCode = "0x"
exports.ERC20RuntimeByteCode = "0x"
exports.ERC20BasicAbi = [{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
exports.ERC20BasicByteCode = "0x"
exports.ERC20BasicRuntimeByteCode = "0x"
exports.OwnableAbi = [{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
exports.OwnableByteCode = "0x6060604052341561000f57600080fd5b60008054600160a060020a033316600160a060020a03199091161790556101768061003b6000396000f30060606040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610050578063f2fde38b1461007f575b600080fd5b341561005b57600080fd5b6100636100a0565b604051600160a060020a03909116815260200160405180910390f35b341561008a57600080fd5b61009e600160a060020a03600435166100af565b005b600054600160a060020a031681565b60005433600160a060020a039081169116146100ca57600080fd5b600160a060020a03811615156100df57600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058202f3234a19307a3bb6a91da88556bace4837a8d5c8a76ca7e6d3e7a49bb1bf4650029"
exports.OwnableRuntimeByteCode = "0x60606040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114610050578063f2fde38b1461007f575b600080fd5b341561005b57600080fd5b6100636100a0565b604051600160a060020a03909116815260200160405180910390f35b341561008a57600080fd5b61009e600160a060020a03600435166100af565b005b600054600160a060020a031681565b60005433600160a060020a039081169116146100ca57600080fd5b600160a060020a03811615156100df57600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058202f3234a19307a3bb6a91da88556bace4837a8d5c8a76ca7e6d3e7a49bb1bf4650029"
exports.SafeERC20Abi = []
exports.SafeERC20ByteCode = "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058205f7c921830b00ea663a27ea8de3cafe344cd7e256fb33b08b9d487010a1680170029"
exports.SafeERC20RuntimeByteCode = "0x6060604052600080fd00a165627a7a723058205f7c921830b00ea663a27ea8de3cafe344cd7e256fb33b08b9d487010a1680170029"
exports.SafeMathAbi = []
exports.SafeMathByteCode = "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a72305820b3b591919e57ce5cb189e8694606a7f9eb4fde46bc7507f49915615b7e1bded50029"
exports.SafeMathRuntimeByteCode = "0x6060604052600080fd00a165627a7a72305820b3b591919e57ce5cb189e8694606a7f9eb4fde46bc7507f49915615b7e1bded50029"
exports.TokenVestingAbi = [{"constant":true,"inputs":[],"name":"duration","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cliff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"releasableAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"release","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"vestedAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"}],"name":"revoke","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"revocable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"released","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"start","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"revoked","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_beneficiary","type":"address"},{"name":"_start","type":"uint256"},{"name":"_cliff","type":"uint256"},{"name":"_duration","type":"uint256"},{"name":"_revocable","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Released","type":"event"},{"anonymous":false,"inputs":[],"name":"Revoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
exports.TokenVestingByteCode = "0x6060604052341561000f57600080fd5b60405160a0806108c8833981016040528080519190602001805191906020018051919060200180519190602001805160008054600160a060020a03191633600160a060020a039081169190911790915590925086161515905061007157600080fd5b8183111561007e57600080fd5b60018054600160a060020a031916600160a060020a0387161790556005805460ff191682151517905560048290556100c384846401000000006100d281026106c41704565b600255505050600355506100e8565b6000828201838110156100e157fe5b9392505050565b6107d1806100f76000396000f3006060604052600436106100ab5763ffffffff60e060020a6000350416630fb5a6b481146100b057806313d033c0146100d55780631726cbc8146100e85780631916558714610107578063384711cc1461012857806338af3eed1461014757806374a8f10314610176578063872a7810146101955780638da5cb5b146101bc5780639852595c146101cf578063be9a6555146101ee578063f2fde38b14610201578063fa01dc0614610220575b600080fd5b34156100bb57600080fd5b6100c361023f565b60405190815260200160405180910390f35b34156100e057600080fd5b6100c3610245565b34156100f357600080fd5b6100c3600160a060020a036004351661024b565b341561011257600080fd5b610126600160a060020a0360043516610283565b005b341561013357600080fd5b6100c3600160a060020a036004351661032f565b341561015257600080fd5b61015a610470565b604051600160a060020a03909116815260200160405180910390f35b341561018157600080fd5b610126600160a060020a036004351661047f565b34156101a057600080fd5b6101a86105d2565b604051901515815260200160405180910390f35b34156101c757600080fd5b61015a6105db565b34156101da57600080fd5b6100c3600160a060020a03600435166105ea565b34156101f957600080fd5b6100c36105fc565b341561020c57600080fd5b610126600160a060020a0360043516610602565b341561022b57600080fd5b6101a8600160a060020a036004351661069d565b60045481565b60025481565b600160a060020a03811660009081526006602052604081205461027d906102718461032f565b9063ffffffff6106b216565b92915050565b600061028e8261024b565b90506000811161029d57600080fd5b600160a060020a0382166000908152600660205260409020546102c6908263ffffffff6106c416565b600160a060020a038084166000818152600660205260409020929092556001546102f89291168363ffffffff6106de16565b7ffb81f9b30d73d830c3544b34d827c08142579ee75710b490bab0b3995468c5658160405190815260200160405180910390a15050565b600080600083600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561038b57600080fd5b6102c65a03f1151561039c57600080fd5b5050506040518051600160a060020a0386166000908152600660205260409020549093506103d29150839063ffffffff6106c416565b90506002544210156103e75760009250610469565b6004546003546103fc9163ffffffff6106c416565b421015806104225750600160a060020a03841660009081526007602052604090205460ff165b1561042f57809250610469565b61046660045461045a61044d600354426106b290919063ffffffff16565b849063ffffffff61076316565b9063ffffffff61078e16565b92505b5050919050565b600154600160a060020a031681565b600080548190819033600160a060020a0390811691161461049f57600080fd5b60055460ff1615156104b057600080fd5b600160a060020a03841660009081526007602052604090205460ff16156104d657600080fd5b83600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561052d57600080fd5b6102c65a03f1151561053e57600080fd5b5050506040518051905092506105538461024b565b9150610565838363ffffffff6106b216565b600160a060020a038086166000818152600760205260408120805460ff19166001179055549293506105a0929091168363ffffffff6106de16565b7f44825a4b2df8acb19ce4e1afba9aa850c8b65cdb7942e2078f27d0b0960efee660405160405180910390a150505050565b60055460ff1681565b600054600160a060020a031681565b60066020526000908152604090205481565b60035481565b60005433600160a060020a0390811691161461061d57600080fd5b600160a060020a038116151561063257600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60076020526000908152604090205460ff1681565b6000828211156106be57fe5b50900390565b6000828201838110156106d357fe5b8091505b5092915050565b82600160a060020a031663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561073b57600080fd5b6102c65a03f1151561074c57600080fd5b50505060405180519050151561075e57fe5b505050565b60008083151561077657600091506106d7565b5082820282848281151561078657fe5b04146106d357fe5b600080828481151561079c57fe5b049493505050505600a165627a7a7230582024b5d434b95e18d68f8d0d93de27ae561c92e703c958d1d92992f6605bcc540d0029"
exports.TokenVestingRuntimeByteCode = "0x6060604052600436106100ab5763ffffffff60e060020a6000350416630fb5a6b481146100b057806313d033c0146100d55780631726cbc8146100e85780631916558714610107578063384711cc1461012857806338af3eed1461014757806374a8f10314610176578063872a7810146101955780638da5cb5b146101bc5780639852595c146101cf578063be9a6555146101ee578063f2fde38b14610201578063fa01dc0614610220575b600080fd5b34156100bb57600080fd5b6100c361023f565b60405190815260200160405180910390f35b34156100e057600080fd5b6100c3610245565b34156100f357600080fd5b6100c3600160a060020a036004351661024b565b341561011257600080fd5b610126600160a060020a0360043516610283565b005b341561013357600080fd5b6100c3600160a060020a036004351661032f565b341561015257600080fd5b61015a610470565b604051600160a060020a03909116815260200160405180910390f35b341561018157600080fd5b610126600160a060020a036004351661047f565b34156101a057600080fd5b6101a86105d2565b604051901515815260200160405180910390f35b34156101c757600080fd5b61015a6105db565b34156101da57600080fd5b6100c3600160a060020a03600435166105ea565b34156101f957600080fd5b6100c36105fc565b341561020c57600080fd5b610126600160a060020a0360043516610602565b341561022b57600080fd5b6101a8600160a060020a036004351661069d565b60045481565b60025481565b600160a060020a03811660009081526006602052604081205461027d906102718461032f565b9063ffffffff6106b216565b92915050565b600061028e8261024b565b90506000811161029d57600080fd5b600160a060020a0382166000908152600660205260409020546102c6908263ffffffff6106c416565b600160a060020a038084166000818152600660205260409020929092556001546102f89291168363ffffffff6106de16565b7ffb81f9b30d73d830c3544b34d827c08142579ee75710b490bab0b3995468c5658160405190815260200160405180910390a15050565b600080600083600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561038b57600080fd5b6102c65a03f1151561039c57600080fd5b5050506040518051600160a060020a0386166000908152600660205260409020549093506103d29150839063ffffffff6106c416565b90506002544210156103e75760009250610469565b6004546003546103fc9163ffffffff6106c416565b421015806104225750600160a060020a03841660009081526007602052604090205460ff165b1561042f57809250610469565b61046660045461045a61044d600354426106b290919063ffffffff16565b849063ffffffff61076316565b9063ffffffff61078e16565b92505b5050919050565b600154600160a060020a031681565b600080548190819033600160a060020a0390811691161461049f57600080fd5b60055460ff1615156104b057600080fd5b600160a060020a03841660009081526007602052604090205460ff16156104d657600080fd5b83600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561052d57600080fd5b6102c65a03f1151561053e57600080fd5b5050506040518051905092506105538461024b565b9150610565838363ffffffff6106b216565b600160a060020a038086166000818152600760205260408120805460ff19166001179055549293506105a0929091168363ffffffff6106de16565b7f44825a4b2df8acb19ce4e1afba9aa850c8b65cdb7942e2078f27d0b0960efee660405160405180910390a150505050565b60055460ff1681565b600054600160a060020a031681565b60066020526000908152604090205481565b60035481565b60005433600160a060020a0390811691161461061d57600080fd5b600160a060020a038116151561063257600080fd5b600054600160a060020a0380831691167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60076020526000908152604090205460ff1681565b6000828211156106be57fe5b50900390565b6000828201838110156106d357fe5b8091505b5092915050565b82600160a060020a031663a9059cbb838360006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561073b57600080fd5b6102c65a03f1151561074c57600080fd5b50505060405180519050151561075e57fe5b505050565b60008083151561077657600091506106d7565b5082820282848281151561078657fe5b04146106d357fe5b600080828481151561079c57fe5b049493505050505600a165627a7a7230582024b5d434b95e18d68f8d0d93de27ae561c92e703c958d1d92992f6605bcc540d0029"
exports._solcVersion = "0.4.19+commit.c4cbbb05.Emscripten.clang"
exports._sha256 = "0xc49689947392dcfaf54af621060481c77d74fc41624c85ced1425c4d16d4b80b"