import * as bip39 from "bip39";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";

export function generateMnemonicAndSeed() {
	const mnemonic = bip39.generateMnemonic();
	const publicAddress = bip39.mnemonicToSeedSync(mnemonic).toString("hex");

	return {
		mnemonic,
		publicAddress,
	};
}

export async function getKeyCreatedBySolanaKeygenFromMnemonic(
	mnemonic: string
) {
	const seed = await bip39.mnemonicToSeed(mnemonic);
	const seedBuffer = Buffer.from(seed).toString("hex");
	const path44Change = `m/44'/501'/0'/0'`;
	const derivedSeed = derivePath(path44Change, seedBuffer).key;
	const kp = Keypair.fromSeed(derivedSeed);
	return {
		publicKey: kp.publicKey.toBuffer(),
		secretKey: kp.secretKey.slice(0, 32),
	};
}
