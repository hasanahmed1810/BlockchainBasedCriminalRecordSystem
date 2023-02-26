// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract CreateInvestigation {
    address[] public deployedContracts;

    function createInvestigation(address _FIRAddress, string memory _name, string memory _cid, string memory _badgeNumber, string memory _rank) public {
        deployedContracts.push( address(new Investigation(_FIRAddress, _name, _cid, _badgeNumber, _rank)) );
    } 
    
    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }

}

contract Investigation {
    address FIRAddress;
    string name;
    string cid;
    string badgeNumber;
    string rank;
    bool isCompleted;

    constructor(address _FIRAddress, string memory _name, string memory _cid, string memory _badgeNumber, string memory _rank){
        FIRAddress = _FIRAddress;
        name = _name;
        cid = _cid;
        badgeNumber = _badgeNumber;
        rank = _rank;
        isCompleted = false;
    }

    function getData() public view returns (address, string memory, string memory, string memory, string memory, bool){
        return (FIRAddress, name, cid, badgeNumber, rank, isCompleted);
    }

    function investigationComplete() public {
        isCompleted = true;
    }

    function investigationIncomplete() public {
        isCompleted = false;
    }

}