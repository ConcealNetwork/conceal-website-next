export type Donation = { symbol: string; name: string; network?: string; address: string; icon: string };

const POLYGON_ADDRESS = '0x926e2b68a27426C2c26Ac7F98D40EB36939Bd815';

export const donations: Donation[] = [
  {
    symbol: 'CCX',
    name: 'Conceal',
    address: 'ccx7Mi9osGEiPkJ8Eq9ajfFFipavENjJ92Gf4xCmu4KXiExSjcWoSefCQYtcA2BUrTPjrMY5pssgMNPRxaR1DXtj3TvTJG6LRo',
    icon: '/images/icons/ccx.svg',
  },
  { symbol: 'BTC', name: 'Bitcoin', address: 'bc1qsms9qapuja6zdp7v6cysznj229nhlezg98f7lr', icon: '/images/icons/btc.svg' },
  {
    symbol: 'XMR',
    name: 'Monero',
    address: '89Uw4SfFTTm1kcyP5ZhYwCgvMvvmLvM1nfWVxqVTpDqYMjHpwfK3ryaLNeTFk4kjScFoSip5T2TgdGAithV4GUo5Ga9FcRL',
    icon: '/images/icons/xmr.svg',
  },
  { symbol: 'ETH', name: 'Ethereum', network: 'Polygon', address: POLYGON_ADDRESS, icon: '/images/icons/eth.svg' },
  { symbol: 'USDT', name: 'Tether', network: 'Polygon', address: POLYGON_ADDRESS, icon: '/images/icons/usdt.svg' },
  { symbol: 'USDC', name: 'USD Coin', network: 'Polygon', address: POLYGON_ADDRESS, icon: '/images/icons/usdc.svg' },
  { symbol: 'DAI', name: 'Dai', network: 'Polygon', address: POLYGON_ADDRESS, icon: '/images/icons/dai.svg' },
];
