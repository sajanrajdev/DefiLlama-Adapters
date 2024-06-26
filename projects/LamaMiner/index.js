const { sumTokensExport } = require("../helper/unknownTokens")
const LAMA_TOKEN_CONTRACT = '0x89A8633bcaD3af0951acC5137811ea21a17C37DC';
const LAMA_MINER_CONTRACT = '0x1f4292Cf1C0fDa5Ef1C3e9d1e59C13bd1808DD10';
const LP_LAMA_WAVAX = "0xf3336be3416916D26840f41780E0cBc861eF3B3C"

module.exports = {
  methodology: 'counts the number of LAMA tokens in the Lama Miner contract.',
  start: 1711962980,
  avax: {
    tvl: () => ({}), 
    staking: sumTokensExport({ owner: LAMA_MINER_CONTRACT, tokens: [LAMA_TOKEN_CONTRACT], lps: [LP_LAMA_WAVAX], useDefaultCoreAssets: true, }),
  }
}