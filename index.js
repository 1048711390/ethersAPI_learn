const ethers = require('ethers')
const creatWallet = require('./my_test/creat_wallet.js')
const myKey = ''

const provider = new ethers.providers.JsonRpcProvider(process.env.GOERLI_API);

let wallet = new ethers.Wallet(myKey, provider)

creatWallet.creatWallet()