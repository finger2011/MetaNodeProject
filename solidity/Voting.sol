// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Voting {
    mapping(address=>uint) private  userToVotes;
    address[] private users;
    mapping(address=>bool) private hasUser;

    function vote(address user) public {
        if(!hasUser[user]) {
            hasUser[user] = true;
            users.push(user);
            userToVotes[user] = 0;
        } else {
            userToVotes[user] += 1;
        }
        
    }

    function getVotes(address user) public view  returns(uint) {
        return userToVotes[user];
    }

    function resetVotes() public {
        for(uint i = 0; i < users.length; i++){
            userToVotes[users[i]] = 0;
        }
    }
}

contract Task1 {

    mapping(bytes1=>uint) private romanInt;
    uint256[13] private values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    string[13] private symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    constructor() {
        romanInt["I"] = 1;
        romanInt["V"] = 5;
        romanInt["X"] = 10;
        romanInt["L"] = 50;
        romanInt["C"] = 100;
        romanInt["D"] = 500;
        romanInt["M"] = 1000;
    }

    function reverseString(string memory str) public pure returns(string memory) {
        bytes memory strBytes = bytes(str);
        uint len = strBytes.length;
        bytes memory res = new bytes(len);
        for(uint i =0; i < len; i++){
            res[i] = strBytes[len - 1 - i];
        }
        return string(res);
    }

    function roman2Uint(string memory strs) public view returns (uint) {
        bytes memory str = bytes(strs); 
        uint res = 0;
        uint len = str.length;
        for(uint i = 0; i < len; i++){
            require(romanInt[str[i]] > 0, "invalid string");
            if (i + 1 < len) {
                if (str[i] == "I") {
                    if (str[i+1] == "V") {
                        res += 4;
                        i++;
                        continue ;
                    } else if (str[i+1] == "X") {
                        res += 9;
                        i++;
                        continue ;
                    }
                } else if (str[i] == "X") {
                    if (str[i+1] == "L") {
                        res += 40;
                        i++;
                        continue ;
                    } else if (str[i+1] == "C") {
                        res += 90;
                        i++;
                        continue ;
                    }
                }else if (str[i] == "C") {
                    if (str[i+1] == "D") {
                        res += 400;
                        i++;
                        continue ;
                    } else if (str[i+1] == "M") {
                        res += 900;
                        i++;
                        continue ;
                    }
                }
            }
            res += romanInt[str[i]];
        }
        return res;
    }

    function uint2roman(uint num) public view   returns (string memory) {
        require(num <= 3999, "num should less than 4000");
        require(num > 0, "num should greater than 0");
        bytes memory roman;
        
        for (uint i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                roman = abi.encodePacked(roman, symbols[i]);
                num -= values[i];
            }
        }
        
        return string(roman);
        
    }

    function mergeArr(int[] calldata nums1, int[] calldata nums2) public pure returns(int[] memory) {
        uint len1 = nums1.length;
        uint len2 = nums2.length;
        int[] memory res = new int[](len1 + len2);
        uint pos1 = 0;
        uint pos2 = 0;
        while (pos1 < len1 && pos2 < len2){
            if(nums1[pos1] <= nums2[pos2]) {
                res[pos1 + pos2] = nums1[pos1];
                pos1++;
            } else {
                res[pos1 + pos2] = nums2[pos2];
                pos2++;
            }
        }
        if(pos1 < len1) {
            while(pos1 < len1) {
                res[pos1 + pos2] = nums1[pos1];
                pos1++;
            }
        }
        if(pos2 < len2) {
            while(pos2 < len2) {
                res[pos1 + pos2] = nums2[pos2];
                pos2++;
            }
        }
        return res;
    }

    function searchArr(int[] calldata nums, int num) public  pure returns (bool, uint){
        uint start = 0;
        uint end = nums.length - 1;
        while (start < end){
            uint mid = (start + end) / 2 + 1;
            if(mid == end) {
                if(nums[end] == num) {
                    return (true, end);
                } else if (nums[start] == num) {
                    return (true, start);
                }
                break;
            }
            if(nums[mid] == num) {
                return (true, mid);
            } else if (nums[mid] > num) {
                end = mid; 
            } else {
                start = mid;
            }

        }
        return (false, 0);
    }
}