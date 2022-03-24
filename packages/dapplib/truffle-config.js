require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note predict under install farm equal gaze'; 
let testAccounts = [
"0xe5cad1c6f01b6fb3629aa68c60298dc264598f4bfaa24cf06ad002f1ad1eead0",
"0x7ed977d691ff6a886cb469dfa1b35ccddc5d85a1bf95ac570652cf075a454d32",
"0x20097b8e3bd30158994af53b7a292cd292a3a2319e1b2954ddd53df27dff2eff",
"0xc972dd93dbae927a9074509d24603e96980ce7c8a81f9626a5afcb00eca35036",
"0x05ff065d9cd428d8e4fed9964e81353a926122525d5656052fd619a24d4b3e8e",
"0xa2ae53bf1a5120ed1c47da2de4d827663561cffbeddc3ad973648ba2fd852160",
"0xe3abea97fd9bc1bc1f619ba8d1abd3d195ca2e4c0ab9023cd55aa24da34274ab",
"0xc0809fbcfb19ade30b02ac046321198aa9f31175bbd0e36fdff3f7425d3280fb",
"0xcbe13ca7dda6865575f126ebd8c103e056cde123ff0eb69c4d2a66563cfb7359",
"0x95e3264402da237b50da896a05a0328718656a8e2bd3562e01f4486e0cd30c94"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

