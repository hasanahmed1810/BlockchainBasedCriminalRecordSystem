// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract CreateMissingPerson {
    address[] public deployedContracts;

    function createMissingPersonReport(
        string memory _pid,
        string memory _name,
        string memory _cid,
        string memory _phoneNumber,
        uint256 _age,
        uint256 _height,
        uint256 _weight,
        string memory _dateLastSeen,
        string memory _timeLastSeen,
        string memory _locationLastSeen,
        string memory _modeOfTransportUsed
    ) public {
        deployedContracts.push(
            address(
                new MissingPerson(
                    _pid,
                    _name,
                    _cid,
                    _phoneNumber,
                    _age,
                    _height,
                    _weight,
                    _dateLastSeen,
                    _timeLastSeen,
                    _locationLastSeen,
                    _modeOfTransportUsed
                )
            )
        );
    }

    function getDeployedContracts() public view returns (address[] memory) {
        return deployedContracts;
    }
}

contract MissingPerson {
    struct Investigator {
        string name;
        string cid;
        string badgeNumber;
        string rank;
    }

    string pid;
    string name; //0
    string cid; //1
    string phoneNumber; //2
    uint256 age; //3
    uint256 height; //4
    uint256 weight; //5
    string dateLastSeen; //6
    string timeLastSeen; //7
    string locationLastSeen; //8
    string modeOfTransportUsed; //9
    bool isBeingInvestigated; //10
    bool isFound; //11
    Investigator investigator; //12

    constructor(
        string memory _pid,
        string memory _name,
        string memory _cid,
        string memory _phoneNumber,
        uint256 _age,
        uint256 _height,
        uint256 _weight,
        string memory _dateLastSeen,
        string memory _timeLastSeen,
        string memory _locationLastSeen,
        string memory _modeOfTransportUsed
    ) {
        pid = _pid;
        name = _name;
        cid = _cid;
        phoneNumber = _phoneNumber;
        age = _age;
        height = _height;
        weight = _weight;
        dateLastSeen = _dateLastSeen;
        timeLastSeen = _timeLastSeen;
        locationLastSeen = _locationLastSeen;
        modeOfTransportUsed = _modeOfTransportUsed;
        isBeingInvestigated = false;
        isFound = false;
    }

    function setInvestigator(
        string memory _name,
        string memory _cid,
        string memory _badgeNumber,
        string memory _rank
    ) public {
        investigator = Investigator(_name, _cid, _badgeNumber, _rank);
        investigationStarted();
    }

    function investigationStarted() public {
        isBeingInvestigated = true;
    }

    function markAsFound() public {
        isFound = true;
    }

    function getPictureID() public view returns (string memory) {
        return pid;
    }

    function getData()
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            uint256,
            uint256,
            uint256,
            string memory,
            string memory,
            string memory,
            string memory,
            bool,
            bool
        )
    {
        return (
            name,
            cid,
            phoneNumber,
            age,
            height,
            weight,
            dateLastSeen,
            timeLastSeen,
            locationLastSeen,
            modeOfTransportUsed,
            isBeingInvestigated,
            isFound
        );
    }

    function getInvestigator() public view returns (Investigator memory) {
        return investigator;
    }
}
