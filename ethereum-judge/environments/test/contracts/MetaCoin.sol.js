"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var MetaCoin = (function (_Pudding) {
    _inherits(MetaCoin, _Pudding);

    function MetaCoin() {
      _classCallCheck(this, MetaCoin);

      _get(Object.getPrototypeOf(MetaCoin.prototype), "constructor", this).apply(this, arguments);
    }

    return MetaCoin;
  })(Pudding);

  ;

  // Set up specific data for this class.
  MetaCoin.abi = [{ "constant": false, "inputs": [{ "name": "channelId", "type": "bytes32" }, { "name": "pubkey0", "type": "bytes32" }, { "name": "pubkey1", "type": "bytes32" }, { "name": "state", "type": "bytes" }, { "name": "hold_period", "type": "uint256" }, { "name": "fingerprint", "type": "bytes32" }, { "name": "signature0", "type": "bytes1[64]" }, { "name": "signature1", "type": "bytes1[64]" }], "name": "addChannel", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "bytes32" }], "name": "channels", "outputs": [{ "name": "channelId", "type": "bytes32" }, { "name": "pubkey0", "type": "bytes32" }, { "name": "pubkey1", "type": "bytes32" }, { "name": "state", "type": "bytes" }, { "name": "hold_period", "type": "uint256" }, { "name": "fingerprint", "type": "bytes32" }, { "name": "phase", "type": "uint8" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "sendCoin", "outputs": [{ "name": "sufficient", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "channelId", "type": "bytes32" }], "name": "getChannelState", "outputs": [{ "name": "", "type": "bytes" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "addr", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  MetaCoin.binary = "6060604052600160a060020a033216600090815260208190526040902061271090556106ce8061002f6000396000f3606060405260e060020a6000350463373db34b81146100475780637a7ebd7b1461026757806390b98a11146102a7578063d18da8b1146102d6578063f8b2cb4f14610352575b005b604080516020606435600481810135601f81018490048402850184019095528484526100459481359460248035956044359560849492019190819084018382808284375050604080516108008181018352969897359760a435979096506108c4955090935060c492508390839080828437835180820185529297966110c49650929450919291849150839080828437835160208181018087526000808452908190528287018190528651918201875280825260608301919091526080820181905260a0820152845191820185529297509195505060c0850193509150815b6000815260200190600190039081610125579050508152602001610800604051908101604052806040905b60008152602001906001900390816101505790505081526020016000815260200150610120604051908101604052808a81526020018981526020018881526020018781526020018681526020018581526020018481526020018381526020016000815260200150905080600160005060008b81526020019081526020016000206000506000820151816000016000505560208201518160010160005055604082015181600201600050556060820151816003016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061052157805160ff19168380011785555b506105519291505b808211156105c15760008155600101610253565b60016020819052600480356000908152604090208054928101546002820154928201546005830154600a8401546103779695939460030192919060ff1687565b61043260043560243533600160a060020a0316600090815260208190526040812054829010156104b2576104e4565b6104446004356040805160208181018352600080835284815260018083529084902060030180548551600293821615610100026000190190911692909204601f810184900484028301840190955284825292939092918301828280156105155780601f106104ea57610100808354040283529160200191610515565b610432600435600160a060020a0381166000908152602081905260409020545b919050565b60408051888152602081018890529081018690526080810184905260a0810183905260ff821660c082015260e06060820181815286546002600182161561010090810260001901909216049284018390529091908301908790801561041d5780601f106103f25761010080835404028352916020019161041d565b820191906000526020600020905b81548152906001019060200180831161040057829003601f168201915b50509850505050505050505060405180910390f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156104a45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b5033600160a060020a039081166000908152602081905260408082208054859003905591841681522080548201905560015b92915050565b820191906000526020600020905b8154815290600101906020018083116104f857829003601f168201915b50505050509050610372565b8280016001018555821561024b579182015b8281111561024b578251826000505591602001919060010190610533565b50506080820151600482015560a0820151600582015560c08201516006820190600883019082610800820160005b838211156105e657835183826101000a81548160ff021916908360f860020a90040217905550926020019260010160208160000104928301926001030261057f565b5090565b50506106139291505b808211156105c157805460ff191681556001016105ce565b80156105c55782816101000a81549060ff02191690556001016020816000010492830192600103026105e6565b505060e08201516008820190600a83019082610800820160005b8382111561067c57835183826101000a81548160ff021916908360f860020a90040217905550926020019260010160208160000104928301926001030261062d565b50506106a99291506105ce565b801561066f5782816101000a81549060ff021916905560010160208160000104928301926001030261067c565b50506101009190910151600a909101805460ff1916909117905550505050505050505056";

  if ("0x9607a871edba97a926c8d7a4c49e3d4e1c6cbb88" != "") {
    MetaCoin.address = "0x9607a871edba97a926c8d7a4c49e3d4e1c6cbb88";

    // Backward compatibility; Deprecated.
    MetaCoin.deployed_address = "0x9607a871edba97a926c8d7a4c49e3d4e1c6cbb88";
  }

  MetaCoin.generated_with = "1.0.3";
  MetaCoin.contract_name = "MetaCoin";

  return MetaCoin;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.MetaCoin = factory;
}