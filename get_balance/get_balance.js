
const ethers = require('ethers');
let providerUrl = 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
const provider = new ethers.providers.JsonRpcProvider(providerUrl);


let getBalance = function (address) {
    // 同过钱包地址 获得余额
    provider.getBalance(address).then(resp => {
        console.log('查询钱包地址：', address)
        console.log('查询供应商地址：', providerUrl)
        console.log('当前余额：', resp / 1e18)
    });
}

module.exports = {
    getBalance
}