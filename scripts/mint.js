const { ethers } = require("hardhat")
const cryptoBeetlesJSON = require("../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json")

async function main() {
    const abi = cryptoBeetlesJSON.abi
    const provider = new ethers.providers.AlchemyProvider("goerli", process.env.alchemy_api_key)
    const wallet = new ethers.Wallet(process.env.wallet_private_key, provider)
    const signer = wallet.connect(provider)
    const cryptoBeetles = new ethers.Contract(process.env.contract_address, abi, signer)

    // await cryptoBeetles.mint("https://gateway.pinata.cloud/ipfs/QmP8xTchdzBPssExTT4oz9hNfSpctNCUazxDdu2dJQ9y9G")
    await cryptoBeetles.mint("https://gateway.pinata.cloud/ipfs/QmVjEdHeCJZTHGJtfYjsrHHk6WgqtBmWWwf8a8DoiwtvvQ")
    await cryptoBeetles.mint("https://gateway.pinata.cloud/ipfs/QmVquACLw8GcUanfrsmzFU1wbHhu2nPHp8Pur1aL7YUzYC")
    await cryptoBeetles.mint("https://gateway.pinata.cloud/ipfs/QmQmiLvbuXnYDzrDwpUHcbPoiNZr9wjRWPRLTpK1SzX8RP")

    console.log('NFT minted!')
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });