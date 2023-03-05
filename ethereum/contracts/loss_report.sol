// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract CreateLossReport {
    address[] public deployedContracts;

    function createLossReport (string memory _pid, string memory _name, string memory _cid, string memory _phoneNumber, string memory _emailAddress, string memory _propertyType, string memory _propertyDescription, string memory _dateOfLoss, string memory _timeOfLoss, string memory _locationOfLoss, string memory _valueOfLoss) public {
        deployedContracts.push(address(new LossReport(_pid, _name, _cid, _phoneNumber, _emailAddress, _propertyType, _propertyDescription, _dateOfLoss, _timeOfLoss, _locationOfLoss, _valueOfLoss)));
    }

      function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}

contract LossReport {

    struct Investigator{
        string name;
        string cid;
        string badgeNumber;
        string rank;
    }

    string pid;
    string name; //0
    string cid; //1
    string phoneNumber; //2
    string emailAddress; //3
    string propertyType; //4
    string propertyDescription; //5
    string dateOfLoss; //6
    string timeOfLoss; //7
    string locationOfLoss; //8 
    string valueOfLoss; //9
    bool isBeingInvestigated; //10
    bool isFound; //11
    Investigator investigator; //12

    constructor(string memory _pid, string memory _name, string memory _cid, string memory _phoneNumber, string memory _emailAddress, string memory _propertyType, string memory _propertyDescription, string memory _dateOfLoss, string memory _timeOfLoss, string memory _locationOfLoss, string memory _valueOfLoss){
        pid = _pid;
        name = _name;
        cid = _cid;
        phoneNumber = _phoneNumber;
        emailAddress = _emailAddress;
        propertyType = _propertyType;
        propertyDescription = _propertyDescription;
        dateOfLoss = _dateOfLoss;
        timeOfLoss = _timeOfLoss;
        locationOfLoss = _locationOfLoss;
        valueOfLoss = _valueOfLoss;
        isBeingInvestigated = false;
        isFound = false;
    }

    function setInvestigator(string memory _name, string memory _cid, string memory _badgeNumber, string memory _rank) public {
        investigator = Investigator(_name, _cid, _badgeNumber, _rank);
        investigationStarted();
    }

    function investigationStarted() public {
        isBeingInvestigated = true;
    }

    function markAsFound() public {
        isFound = true;
    }

    function getInvestigator() public view returns(Investigator memory) {
        return investigator;
    }

    function getData() public view returns(string memory, string memory,string memory,string memory,string memory,string memory,string memory,string memory,string memory,string memory, bool, bool) {
        return (name, cid, phoneNumber, emailAddress, propertyType, propertyDescription, dateOfLoss, timeOfLoss, locationOfLoss, valueOfLoss, isBeingInvestigated, isFound);
    }
    
    function getPictureID() public view returns(string memory) {
        return pid;
    }

}