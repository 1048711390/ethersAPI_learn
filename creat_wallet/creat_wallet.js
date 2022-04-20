const ethers = require('ethers');
const fs = require('fs');


function creatWallet() {
    let walletList = [];
    for (let i = 0; i < 50; i++) {
        let wallet = new ethers.Wallet.createRandom();

        let walletInfo = {
            address: wallet.address,
            privateKey: wallet.privateKey,
            mnemonic: wallet.mnemonic
        }

        walletList.push(walletInfo)
    }




    fs.writeFile('./my_wallet.json', JSON.stringify(walletList), (err) => {
        console.log('err', err)
    })
}
creatWallet()

