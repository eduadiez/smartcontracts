pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract CoinFiToken is StandardToken, Ownable {
    string public constant name = "CoinFi";
    string public constant symbol = "COFI";
    uint8 public constant decimals = 18;

    // 300 million tokens minted
    uint256 public constant INITIAL_SUPPLY = 300000000 * (10 ** uint256(decimals));

    // Indicates whether token transfer is enabled
    bool public transferEnabled = false;

    // Specifies airdrop contract address which can transfer tokens before unlock
    address public airdropAddress;

    modifier onlyWhenTransferEnabled() {
        if (!transferEnabled) {
            require(msg.sender == owner || msg.sender == airdropAddress);
        }
        _;
    }

    function CoinFiToken() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
        Transfer(0x0, msg.sender, INITIAL_SUPPLY);
    }

    /**
     * Enables everyone to start transferring their tokens.
     * This can only be called by the token owner.
     */
    function enableTransfer() external onlyOwner {
        transferEnabled = true;
    }

    /**
     * Sets the airdrop contract address which is allowed to transfer before unlock.
     * This can only be called by the token owner.
     */
    function setAirdropAddress(address _airdropAddress) external onlyOwner {
        airdropAddress = _airdropAddress;
    }

    /**
     * Overrides the ERC20Basic transfer() function to only allow token transfers after enableTransfer() is called.
     */
    function transfer(address _to, uint256 _value) public onlyWhenTransferEnabled returns (bool) {
        return super.transfer(_to, _value);
    }
}


contract CoinFiAirdrop is Ownable {
    uint256 public constant AIRDROP_AMOUNT = 500 * (10**18);

    // Actual token instance to airdrop
    ERC20 public token;

    function CoinFiAirdrop(ERC20 _token) public {
        token = _token;
    }

    function sendAirdrop(address[] airdropRecipients) external onlyOwner {
        require(airdropRecipients.length > 0);

        for (uint i = 0; i < airdropRecipients.length; i++) {
            token.transfer(airdropRecipients[i], AIRDROP_AMOUNT);
        }
    }
}
