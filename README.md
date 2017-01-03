# A simple contract that issues an event

Dependencies: testrpc and truffle
```
sudo npm install -g testrpc
sudo npm truffle -g truffle
```

To build and run:
```
testrpc -d string-event
rm -rf build
truffle migrate
truffle build
```

Then use chrome to view build/index.html and you should see the "tickle" buttion. If
you enable the chrome developer tools you'll see a couple "getAccounts cb:" messages
in the console. If you now press the "tickle" button you should see a "tickle"
message and "testEvent.StringEvent: ..." message.

