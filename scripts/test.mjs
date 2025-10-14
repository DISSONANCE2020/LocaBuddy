import { config as dotenvConfig } from 'dotenv';
import { ethers } from 'ethers';

dotenvConfig();

const RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  (process.env.ALCHEMY_API_KEY
    ? `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    : process.env.INFURA_API_KEY
    ? `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`
    : undefined);

if (!RPC_URL) {
  console.error('Set SEPOLIA_RPC_URL or ALCHEMY_API_KEY or INFURA_API_KEY in .env');
  process.exit(1);
}

const address = process.argv[2];
if (!address) {
  console.error('Usage: node scripts/test-contract.mjs <contractAddress>');
  process.exit(1);
}

const provider = new ethers.JsonRpcProvider(RPC_URL);

async function main() {
  const [network, block] = await Promise.all([
    provider.getNetwork(),
    provider.getBlockNumber(),
  ]);
  console.log(`Connected to chainId=${network.chainId}, block=${block}`);

  const code = await provider.getCode(address);
  if (code === '0x') {
    console.log('No contract bytecode found at that address (likely an EOA or not deployed).');
    return;
  }
  console.log(`Contract bytecode size: ${code.length / 2 - 1} bytes`);

  // Try common ERC-20 reads if applicable; errors are ignored if not ERC-20.
  const erc20Abi = [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function decimals() view returns (uint8)',
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address) view returns (uint256)',
  ];
  const contract = new ethers.Contract(address, erc20Abi, provider);

  try { console.log('name:', await contract.name()); } catch {}
  try { console.log('symbol:', await contract.symbol()); } catch {}
  try { console.log('decimals:', await contract.decimals()); } catch {}
  try { console.log('totalSupply:', (await contract.totalSupply()).toString()); } catch {}

  if (process.env.TEST_WALLET_PRIVATE_KEY) {
    const signer = new ethers.Wallet(process.env.TEST_WALLET_PRIVATE_KEY, provider);
    try {
      const bal = await contract.balanceOf(signer.address);
      console.log(`balanceOf(${signer.address}):`, bal.toString());
    } catch {}
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});