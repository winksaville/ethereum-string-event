pragma solidity ^0.4.2;

contract TestEvent {
    event StringEvent(string s);

    function tickle() {
        StringEvent("A String Event");
    }
}

