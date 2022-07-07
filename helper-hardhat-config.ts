export const developmentChains = ['hardhat', 'localhost'];

export const DECIMALS = 8;
export const INITIAL_ANSWER = 2000 * 10 ** DECIMALS;

export interface NetworkConfigItem {
  ethUsdPriceFeedAddress?: string;
  blockConfirmations?: number;
}

export interface NetworkConfigInfo {
  [key: string]: NetworkConfigItem;
}

export const networkConfig: NetworkConfigInfo = {
  rinkeby: {
    ethUsdPriceFeedAddress: '0x8A753747A1Fa494EC906cE90E9f37563A8AF630e',
    blockConfirmations: 6,
  },
  hardhat: {},
  localhost: {},
};
