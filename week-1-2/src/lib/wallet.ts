import * as bip39 from "bip39";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import ethers from "ethers";

export const generateMnemonic = () => bip39.generateMnemonic();

// export async function getKeyCreatedBySolanaKeygenFromMnemonic(
// 	mnemonic: string
// ) {
// 	const seed = await bip39.mnemonicToSeed(mnemonic);
// 	const seedBuffer = Buffer.from(seed).toString("hex");

// 	const path44Change = `m/44'/501'/0'/0'`;
// 	const derivedSeed = derivePath(path44Change, seedBuffer).key;
// 	const kp = Keypair.fromSeed(derivedSeed);
// 	// return {
// 	// 	publicKey: kp.publicKey.toBuffer(),
// 	// 	secretKey: kp.secretKey.slice(0, 32),
// 	// };
// 	return kp;
// }

// export const fetchWalletsFromMnemonic = async (mnemonic: string) => {
// 	//
// 	if (!bip39.validateMnemonic(mnemonic)) {
// 		throw new Error("Invalid mnemonic");
// 	}

// 	//
// 	const seed = await bip39.mnemonicToSeed(mnemonic);
// 	const ethHdNode = ethers.HDNodeWallet.fromSeed(seed);
// };

// export async function deriveWallets(mnemonic: string, numWallets = 5) {
// 	// Validate mnemonic
// 	if (!bip39.validateMnemonic(mnemonic)) {
// 		throw new Error("Invalid mnemonic");
// 	}
// 	// Generate seed from mnemonic
// 	const seed = await bip39.mnemonicToSeed(mnemonic);

// 	// Derive Ethereum wallets
// 	const ethWallets = [];
// 	const ethHdNode = ethers.HDNodeWallet.fromSeed(seed);

// 	for (let i = 0; i < numWallets; i++) {
// 		// m/44'/60'/0'/0/i is the standard derivation path for ETH
// 		const path = `m/44'/60'/0'/0/${i}`;
// 		const wallet = ethHdNode.derivePath(path);
// 		ethWallets.push({
// 			address: wallet.address,
// 			privateKey: wallet.privateKey,
// 			path: path,
// 		});
// 	}

// 	// Derive Solana wallets
// 	const solWallets = [];

// 	for (let i = 0; i < numWallets; i++) {
// 		// m/44'/501'/i' is the standard derivation path for SOL
// 		const path = `m/44'/501'/${i}'`;
// 		const derivedSeed = derivePath(path, seed.toString("hex")).key;
// 		const keypair = Keypair.fromSeed(derivedSeed);

// 		solWallets.push({
// 			address: keypair.publicKey.toString(),
// 			privateKey: Buffer.from(keypair.secretKey).toString("hex"),
// 			path: path,
// 		});
// 	}

// 	return {
// 		ethereum: ethWallets,
// 		solana: solWallets,
// 	};
// }
