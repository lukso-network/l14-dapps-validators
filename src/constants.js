const constants = {}
constants.organization = 'lukso-network'
constants.repoName = 'lukso-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json',
  PoaNetworkConsensus: 'PoaNetworkConsensus.abi.json',
  ValidatorMetadata: 'ValidatorMetadata.abi.json',
  ProofOfPhysicalAddress: 'ProofOfPhysicalAddress.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'

constants.NETWORKS = {
  '22': {
    NAME: 'L14',
    RPC: 'http://35.189.66.64:8545',
    BRANCH: 'l14',
    TESTNET: true
  }
}

module.exports = {
  constants
}
