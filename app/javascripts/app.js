var account;
var testEvent;

function tickle() {
  console.log("tickle");
  // You must use tickle or tickle.sendTransaction using tickel.call is a read only operation
  // hence no log entry is created so no event is generated, txs @raineorshine
  // [see](https://gitter.im/ConsenSys/truffle?at=586ba0d7c02c1a3959e0e6f8)
  testEvent.tickle({from: account}).then(function(hash) {
    // If the transaction was succesful its hash is returned
    // which can be used to get the TransactionReceipt which
    // has several fields of which gasUsed is one.
    console.log("tickle hash=" + hash);
    web3.eth.getTransactionReceipt(hash, function (error, receipt) {
      if (error == null) {
        console.log("tickle getTransactionReceipt success gasUsed=" + receipt.gasUsed);
      } else {
        console.log("tickle getTransactionReceipt error=" + error);
      }
    });
  }).catch(function(e) {
    console.log("tickle failed e=" + e);
  })
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
