const MultiSigWallet = artifacts.require("MultiSigWallet");
const TestContractToCall = artifacts.require("TestContractToCall");

module.exports = async function(deployer) {
    // development
    deployer.deploy(MultiSigWallet, ["0x51d2b2Aa511dAc685F51c6e7DF259E0F30aDEbb2", "0x517b1b7d42B5A339509B493BD659a496FDFC5aF4", "0x40f1dFf049b06Dd4c7550F172e81ce670fb81bA1"], 2);
    // ropsten
    //deployer.deploy(MultiSigWallet, ["0xaC1923dC5a788252b28961D50a13725D62f11d5e", "0x32Df6a7A9EC56E2d0B1063Dd9E0785dfF46c11cc", "0xEBc63499C9701A8F21D7a2BF63fb23b2EcE2ec91"], 2);
    deployer.deploy(TestContractToCall);
};