export type Market = {
  name: string;
  pair: string;
  href: string;
  /** Set to false to hide without deleting; the team should prune stale venues. */
  active?: boolean;
};

export type Chain = {
  id: 'ethereum' | 'bsc' | 'polygon';
  name: string;
  contract: string;
  explorer: string;
  dexes: Market[];
};

export const exchanges: Market[] = [
  { name: 'nonKYC', pair: 'CCX/BTC', href: 'https://nonkyc.io/market/CCX_BTC' },
  { name: 'nonKYC', pair: 'CCX/USDT', href: 'https://nonkyc.io/market/CCX_USDT' },
  { name: 'Nonlogs', pair: 'CCX/USDT', href: 'https://nonlogs.io/trade/CCX-USDT' },
];

export const marketData: Market[] = [
  { name: 'CoinGecko', pair: 'CCX', href: 'https://www.coingecko.com/en/coins/conceal' },
  { name: 'CoinMarketCap', pair: 'CCX', href: 'https://coinmarketcap.com/currencies/conceal' },
  { name: 'CoinPaprika', pair: 'CCX', href: 'https://coinpaprika.com/coin/ccx-conceal/' },
  { name: 'Crypto.com', pair: 'CCX', href: 'https://crypto.com/price/conceal' },
];

const POLYGON_WCCX = '0x137Ee749f0F8c2eD34cA00dE33BB59E3dafA494A';
const BSC_WCCX = '0x988c11625472340b7b36ff1534893780e0d8d841';
const ETH_WCCX = '0x21686f8ce003a95c99acd297e302faacf742f7d4';

export const chains: Chain[] = [
  {
    id: 'polygon',
    name: 'Polygon',
    contract: POLYGON_WCCX,
    explorer: `https://polygonscan.com/token/${POLYGON_WCCX}`,
    dexes: [
      {
        name: 'SushiSwap',
        pair: 'wCCX/USDC',
        href: `https://app.sushi.com/swap?tokens=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&tokens=${POLYGON_WCCX}&chainId=137`,
      },
      {
        name: 'SushiSwap',
        pair: 'wCCX/USDT',
        href: `https://app.sushi.com/swap?tokens=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&tokens=${POLYGON_WCCX}&chainId=137`,
      },
      {
        name: 'Uniswap',
        pair: 'wCCX/USDC',
        href: `https://app.uniswap.org/#/swap?inputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174&outputCurrency=${POLYGON_WCCX.toLowerCase()}&chain=polygon`,
      },
      {
        name: 'Uniswap',
        pair: 'wCCX/USDT',
        href: `https://app.uniswap.org/#/swap?inputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F&outputCurrency=${POLYGON_WCCX.toLowerCase()}&chain=polygon`,
      },
      {
        name: 'Uniswap',
        pair: 'wCCX/DAI',
        href: `https://app.uniswap.org/#/swap?inputCurrency=0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063&outputCurrency=${POLYGON_WCCX.toLowerCase()}&chain=polygon`,
      },
    ],
  },
  {
    id: 'bsc',
    name: 'BNB Smart Chain',
    contract: BSC_WCCX,
    explorer: `https://bscscan.com/token/${BSC_WCCX}`,
    dexes: [
      {
        name: 'PancakeSwap',
        pair: 'wCCX/USDT',
        href: `https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=${BSC_WCCX}`,
      },
      {
        name: 'MEXC DEX',
        pair: 'wCCX/BNB',
        href: `https://www.mexc.com/dex/trade?pair_ca=0x523d5d8ae2f38dd2d8900eb195c132ff19bf6d18&chain_id=56&token_ca=${BSC_WCCX}`,
      },
      { name: 'KyberSwap', pair: 'wCCX/BNB', href: `https://kyberswap.com/swap/bnb/-to-${BSC_WCCX}` },
      {
        name: 'PancakeSwap',
        pair: 'wCCX/BUSD',
        href: `https://pancakeswap.finance/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=${BSC_WCCX}`,
        active: false,
      },
      {
        name: 'BakerySwap',
        pair: 'wCCX/BUSD',
        href: `https://www.bakeryswap.org/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=${BSC_WCCX}`,
        active: false,
      },
    ],
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    contract: ETH_WCCX,
    explorer: `https://etherscan.io/token/${ETH_WCCX}`,
    dexes: [
      {
        name: 'Uniswap',
        pair: 'wCCX/DAI',
        href: `https://app.uniswap.org/#/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=${ETH_WCCX}&chain=mainnet`,
      },
      { name: 'Uniswap', pair: 'wCCX/ETH', href: `https://app.uniswap.org/#/swap?outputCurrency=${ETH_WCCX}` },
    ],
  },
];

export const partners = [
  { name: 'Ergo Platform', href: 'https://ergoplatform.org', logo: '/images/partners/ERGO.png' },
  { name: 'Crypto.com', href: 'https://crypto.com/price/conceal', logo: '/images/partners/CRYPTO.png' },
  { name: 'CryptocurrencyCheckout', href: 'https://cryptocurrencycheckout.com/', logo: '/images/partners/cyprtocurrencycheckout.png' },
];
