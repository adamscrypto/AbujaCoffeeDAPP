
// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

contract Chai{

struct customerDetails {
 string name;
 string  message;
 uint timestamp;
 address payable  from;

}

customerDetails [] public newCustomer ;

address payable  owner;

constructor() {
    owner = payable(msg.sender);

}

function buyChai(string memory _name, string memory _message) public payable {
owner.transfer(msg.value);
newCustomer.push(customerDetails (_name, _message, block.timestamp, payable(msg.sender)));

}

function getAllCustomersDetails() public view returns(customerDetails [] memory){
return newCustomer;
}

function getCustomersDetails(uint _index) public view returns(customerDetails memory){
return newCustomer[_index];
}

modifier onlyowner(){
    require(owner == msg.sender, "Permission Denied!");
    _;
}

function getTotalSales() onlyowner public view returns(uint)  {
    return address(owner).balance;
}

}
 