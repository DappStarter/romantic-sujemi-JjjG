require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind huge heavy clock fog gaze'; 
let testAccounts = [
"0x45de5a24cab8d9a20e6b076a8fce07bd006c5fae2c536cf2be35ce3901a6d68b",
"0x49ac323a2a1873fc36996c176b857874a63f5c176657cdb36e6bc3925f29ccc7",
"0xa4a32e596e51bda75659c1f962bc73e6572453fdcc8a1fa8b7452be423b06f09",
"0x318b28f72645c57e2d1cc14507e59e537ffd4b6e08570a56d857a92e650ad62a",
"0x565b0f4b163c6dbbd0d866ef0601b17504ba5137315e7fe0b7f15e4da99655d1",
"0xd71f2fb9b4b64ee6dbecde0bac4c086d3fbb22f74a5c14a920a4d5df178eea74",
"0x9c055266d5822ccc56b25ea544b10676dcda27ae1909e1fc6e85c1d9552c82a0",
"0x4de949877dccd2b9dc1a5b1cd5a9f1fab915768ace7dfd8e79c319dd5cd99ce3",
"0x758fd0745e9f2d9d2cbb5f2ae7d3d3856c1944a1daa3563ca26a38e3837d2848",
"0xc825314f58043d4e7d21fc08074e587ee7de30988442e509cc384e7caff1505c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

