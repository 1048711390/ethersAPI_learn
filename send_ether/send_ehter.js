const ethers = require('ethers');
const { getBalance } = require('../get_balance/get_balance')
const fs = require('fs');
const provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161');


function sendEther(wallet, to) {
    return new Promise(async (resolve) => {
        console.log(`Sending 0.1 ETH to ${to}`);
        wallet.sendTransaction({
            to: to,
            value: ethers.utils.parseEther('0.1')
        }).then(async (result) => {
            await result.wait();
            console.log(`${to} received 0.1 ETH`);
            resolve(true);
        }).catch((err) => {
            console.log("Error transfering. Error: " + err.reason);
            resolve(false)
        })
    });
}

// 水龙头钱包
let funding_wallet_pk = '0xb34befe9dba9e8b0ff276ae92306a6e7a849e0fbecfe5f47428c4cc16d971c21'
const funding_wallet = new ethers.Wallet(funding_wallet_pk, provider);
// 查询水龙头钱包余额
getBalance(funding_wallet.address);

async function batchSend() {
    // 读取文件
    let fileBuffer = await fs.readFileSync('../creat_wallet/my_wallet.json');
    let fileStr = fileBuffer.toString('utf-8');
    let walletList = JSON.parse(fileStr);

    // 遍历收钱钱包集合
    for (let receive_wallet of walletList) {
       await sendEther(funding_wallet, receive_wallet.address)
    }
}
batchSend()