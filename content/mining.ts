export const OFFICIAL_POOL = 'pool.conceal.network:3333';
export const POOLS_ENDPOINT = 'https://explorer.conceal.network/services/pools/data';

export type MinerConfig = { name: string; href: string; snippet: string };

export const miners: MinerConfig[] = [
  {
    name: 'SRBMiner-MULTI',
    href: 'https://www.srbminer.com/',
    snippet: `SRBMiner-MULTI.exe --algorithm gpu \\
  --pool ${OFFICIAL_POOL} \\
  --wallet "YOUR_WALLET_ADDRESS" \\
  --gpu-tweak-profile 5`,
  },
  {
    name: 'XMRigCC',
    href: 'https://github.com/Bendr0id/xmrigCC',
    snippet: `xmrigDaemon --no-cpu -a cn/gpu \\
  -o ${OFFICIAL_POOL} -u YOUR_WALLET_ADDRESS -p x -k \\
  --cc-url=127.0.0.1:3344 \\
  --cc-access-token=your_token \\
  --cc-worker-id=worker_name`,
  },
  {
    name: 'CryptoDredge',
    href: 'https://github.com/CryptoDredge/miner/releases',
    snippet: `CryptoDredge.exe -a cngpu \\
  -o stratum+tcp://${OFFICIAL_POOL} \\
  -u YOUR_WALLET_ADDRESS -p WorkerName \\
  --api-type ccminer-tcp -b`,
  },
  {
    name: 'XMR-Stak',
    href: 'https://github.com/fireice-uk/xmr-stak/releases',
    snippet: `"pool_list": [
  {
    "pool_address": "${OFFICIAL_POOL}",
    "wallet_address": "YOUR_WALLET_ADDRESS",
    "rig_id": "YOUR_WORKER_NAME",
    "pool_password": "x",
    "use_nicehash": false,
    "use_tls": false,
    "pool_weight": 1
  }
],
"currency": "cryptonight_gpu",`,
  },
];
