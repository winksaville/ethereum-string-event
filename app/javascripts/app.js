var account;
var testEvent;


function tickle() {
  console.log("tickle");
  // You must use .sendTransaction using .call is a read only operation
  // hence no log entry is created so no event is generated, txs @raineorshine
  // [see](https://gitter.im/ConsenSys/truffle?at=586ba0d7c02c1a3959e0e6f8)
  testEvent.tickle.sendTransaction(account, {from: account});
}

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    console.log("getAccounts cb:+ err=" + err);
    if (err != null || (accs.length == 0)) {
      alert("getAccounts cb: There was an error fetching your accounts.");
      return;
    }

    account = accs[0];
    testEvent = TestEvent.deployed();

    // watch for changes
    var event = testEvent.StringEvent().watch(function(error, result) {
        console.log("testEvent.StringEvent: error=" + error + " result.args.s=" + result.args.s);
    });
    var event = testEvent.allEvents().watch(function(error, result) {
        console.log("testEvent.allEvents: error=" + error + " result.args.s=" + result.args.s);
    });
    console.log("getAccounts cb:- err=" + err);
  });
}
