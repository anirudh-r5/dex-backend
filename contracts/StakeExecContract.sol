// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract StakeExecContract {
    bool public completed;

    function complete() public payable {
        completed = true;
    }
}
