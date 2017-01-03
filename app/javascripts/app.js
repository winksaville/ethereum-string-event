var account;
var testEvent;


function tickle() {
  console.log("tickle");
  testEvent.tickle.call(account, {from: account});
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
    var event = testEvent.StringEvent();
    event.watch(function(error, result){
        console.log("testEvent.StringEvent: error=" + error + " result=" + result);
    });
    console.log("getAccounts cb:- err=" + err);
  });
}
