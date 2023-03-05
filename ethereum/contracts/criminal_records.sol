// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

struct CriminalData {
    string pictureCID; //0
    string name; //1
    string civilianID; //2
    uint256 age; //3
    uint256 height; //4
    string mothersName; //5
    string fathersName; //6
    string dateOfBirth; //7
    string skinTone; //8
    string hairColor; //9
    string facialHairColor; //10
    string physique; //11
    string eyeColor; //12
    string identificationMark; //13
    string religion; //14
    uint256 weight; //15
    string nativeLanguage; //16
    string citizenship; //17
    string placeOfBirth; //18
}

contract CreateCriminal {
    address[] public deployedContracts;

    function createCriminal(CriminalData calldata _criminalData) public {
        deployedContracts.push(address(new Criminal(_criminalData)));
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}

contract Criminal {
    struct CriminalRecord {
        string trialNumber;
        string date;
        string crimeCommited;
        string jail;
        string location;
    }

    string pictureCID;
    string name;
    string civilianID;
    uint256 age;
    uint256 height;
    string mothersName;
    string fathersName;
    string dateOfBirth;
    string skinTone;
    string hairColor;
    string facialHairColor;
    string physique;
    string eyeColor;
    string identificationMark;
    string religion;
    uint256 weight;
    string nativeLanguage;
    string citizenship;
    string placeOfBirth;
    CriminalData criminalData;
    CriminalRecord[] criminalRecords;

    constructor(CriminalData memory _criminalData) {
        criminalData = _criminalData;
    }

    function addRecord(
        string calldata trialNumber,
        string calldata date,
        string calldata crimeCommited,
        string calldata jail,
        string calldata location
    ) public {
        criminalRecords.push(
            CriminalRecord(trialNumber, date, crimeCommited, jail, location)
        );
    }

    function getData() public view returns (CriminalData memory) {
        return criminalData;
    }

    function getRecords() public view returns (CriminalRecord[] memory) {
        return criminalRecords;
    }
}
