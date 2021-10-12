import Web3 from "web3";
import BigNumber from "bignumber.js";
// import adam_abi from './abi/adam.json' 
import contract_abi from './abi/contract.json'

const provider_url = 'https://data-seed-prebsc-1-s1.binance.org:8545/'

// const adam_address = '0x96a0f4d13A836BF8074e37964a90548195da9571'
const miner_address = '0x96a0f4d13A836BF8074e37964a90548195da9571'

const account = '0xe95877899E4DDC53F95a1A67373D126435398EaB'

const provider = new Web3.providers.HttpProvider(provider_url)

const web3 = new Web3(provider);

const miner_contract = new web3.eth.Contract(contract_abi, miner_address)


// 全网总算力
export const getTotalNetworkPower = async () => {
    const tx = await miner_contract.methods.totalPowers()
    const res = await tx.call({from: account })
    return res
}
// 全网总质押
export const getTotalAmounts = async () => {
    const tx = await miner_contract.methods.totalAmounts()
    const res = await tx.call({from: account })
    return res
}

// 获取矿池名称
export const getPoolName = async (currentAddress) => {
    const tx = await miner_contract.methods.getPoolName()
    const res = await tx.call({from: currentAddress })
    return res
}

// 获取用户信息
export const getUserInfo = async (currentAddress) => {
    const tx = await miner_contract.methods.userInfo(currentAddress)
    const res = await tx.call({from: currentAddress })
    return res
}

// 获取用户信息
export const getUserProfitInfo = async (currentAddress) => {
    const tx = await miner_contract.methods.userProfitInfo(currentAddress)
    const res = await tx.call({from: currentAddress })
    return res
}

export const formatNum = (num, precision = 0, dec = 0) => {
    let x = new BigNumber(num);
    let x_div = x.dividedBy(10 ** precision)
    let x_fixed = x_div.toFixed(dec);
    return x_fixed
}