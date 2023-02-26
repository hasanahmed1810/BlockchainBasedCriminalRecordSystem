// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;


contract CreateChargeSheet {
    address[] public deployedContracts;

    function createChargeSheet (string memory _name, string memory _cid, string memory _dob, string memory _charge, string memory _act, string memory _section, string memory _court, string memory _courtAddress, string memory _dateOfHearing, string memory _timeOfHearing) public {
        deployedContracts.push( address(new ChargeSheet(_name, _cid, _dob, _charge, _act, _section, _court, _courtAddress, _dateOfHearing, _timeOfHearing)) );
    }

   function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}

contract ChargeSheet {
    string name;
    string cid;
    string dob;
    string charge;
    string act;
    string section;
    string court;
    string courtAddress;
    string dateOfHearing;
    string timeOfHearing;
    bool isGuilty;

    constructor(string memory _name, string memory _cid, string memory _dob, string memory _charge, string memory _act, string memory _section, string memory _court, string memory _courtAddress, string memory _dateOfHearing, string memory _timeOfHearing) {
        name = _name;
        cid = _cid;
        dob = _dob;
        charge = _charge;
        act = _act;
        section = _section;
        court = _court;
        courtAddress = _courtAddress;
        dateOfHearing = _dateOfHearing;
        timeOfHearing = _timeOfHearing;
        isGuilty = false;
    }

    function getData() public view returns(string memory, string memory,string memory,string memory,string memory,string memory,string memory,string memory,string memory,string memory){
        return (name, cid, dob, charge, act, section, court, courtAddress, dateOfHearing, timeOfHearing);
    }

    function personIsGuilty() public {
        isGuilty = true;
    }

    function personIsNotGuilty() public {
        isGuilty = false;
    }
}