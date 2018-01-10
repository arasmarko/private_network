pragma solidity ^0.4.0;
import "github.com/arasmarko/private_network/mortal.sol";

contract MyContract is mortal {
    uint myVariable;
    
    mapping(address => Permission) myAddressMapping;
    
    function MyContract() payable {
        myVariable = 5;
        myAddressMapping[msg.sender] = Permission(true, 5);
        
    }
    
    struct Permission {
        bool isAllowed;
        uint maxTransferAmount;
    }
    
    function setMyVariable(uint myNewVar) onlyOwner {
        myVariable = myNewVar;    
    }
    
    function getMyVariable() constant returns(uint) {
        return myVariable;
    }
    
    function getMyContractBalance() constant returns(uint) {
        return this.balance;
    }
    
    function () payable {
        
    }
}