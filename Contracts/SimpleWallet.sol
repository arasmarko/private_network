pragma solidity ^0.4.0;
import "github.com/arasmarko/private_network/mortal.sol";

contract SimpleWallet is mortal {
    uint myVariable;
    
     struct Permission {
        bool isAllowed;
        uint maxTransferAmount;
    }
    
    mapping(address => Permission) permittedAddresses;
    
    event someoneAddedSomeoneToTheSenderList(address thePersonWhoAdded, address thePersonWhoIsAdded, uint maxAllowed);
    
    function addAddressToSendersList(address permitted, uint maxTransferAmount) onlyOwner {
        permittedAddresses[permitted] = Permission(true, maxTransferAmount);
        someoneAddedSomeoneToTheSenderList(msg.sender, permitted, maxTransferAmount);
    }
    
    function sendFunds(address receiver, uint amountInWei) {
        if(permittedAddresses[msg.sender].isAllowed && 
        permittedAddresses[msg.sender].maxTransferAmount >= amountInWei) {
            bool isAmountSent = receiver.send(amountInWei);
                if(!isAmountSent) {
                    throw;
                }
        } else {
            throw;
        }
    }
    
    function removeAddressFromSenderList(address toDelete) {
        delete permittedAddresses[toDelete];
    }
    
    function () payable {
        
    }
}