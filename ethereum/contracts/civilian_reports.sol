// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract CreateFIR {
    address[] public deployedContracts;

    function createFIR (string memory _name, string memory _cid, string memory _phoneNumber, string memory _emailaddress, string memory _currentAddress, string memory _policeStation, string memory _dateOfIncident, string memory _timeOfIncident, string memory _placeOfIncident, string memory _detailsOfIncident) public {
        deployedContracts.push(address(new FIR(_name, _cid, _phoneNumber, _emailaddress, _currentAddress, _policeStation, _dateOfIncident, _timeOfIncident, _placeOfIncident, _detailsOfIncident)));
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}

contract FIR {
    string name; //0
    string cid; //1
    string phoneNumber; //2
    string emailAddress; //3
    string currentAddress; // 4
    string policeStation; //5
    string dateOfIncident; //6
    string timeOfIncident; //7
    string placeOfIncident; //8
    string detailsOfIncident; //9
    bool beingInvestigated; //10

    constructor (string memory _name, string memory _cid, string memory _phoneNumber, string memory _emailaddress, string memory _currentAddress, string memory _policeStation, string memory _dateOfIncident, string memory _timeOfIncident, string memory _placeOfIncident, string memory _detailsOfIncident){
        name = _name;
        cid = _cid;
        phoneNumber = _phoneNumber;
        emailAddress = _emailaddress;
        currentAddress = _currentAddress;
        policeStation = _policeStation;
        dateOfIncident = _dateOfIncident;
        timeOfIncident = _timeOfIncident;
        placeOfIncident = _placeOfIncident;
        detailsOfIncident = _detailsOfIncident;
        beingInvestigated = false;
    }

    function getData() public view returns(string memory, string memory, string memory, string memory, string memory, string memory, string memory, string memory, string memory, string memory, bool){
        return (name, cid, phoneNumber, emailAddress, currentAddress, policeStation, dateOfIncident, timeOfIncident, placeOfIncident, detailsOfIncident, beingInvestigated);
    }

    function startInvestigation() public {
        beingInvestigated = true;
    }

    function abortInvestigation() public {
        beingInvestigated = false;
    }
}