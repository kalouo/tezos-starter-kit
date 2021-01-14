const FA12 = artifacts.require("FA12");
const { MichelsonMap } = require("@taquito/taquito");

module.exports = async (deployer, _network, accounts) => {
  const totalSupply = "1000";

  const storage = {
    totalSupply,
    ledger: MichelsonMap.fromLiteral({
      [accounts[0]]: {
        balance: totalSupply,
        allowances: MichelsonMap.fromLiteral({}),
      },
    }),
  };

  deployer.deploy(FA12, storage);
};
