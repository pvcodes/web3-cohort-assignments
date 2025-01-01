import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface WalletState {
	mnemonic: string;
	publicAddress: string[];
	actions: {
		setMnemonic: (mnemonic: string) => void;
		setPublicAddress: (newAddress: string) => void;
	};
}

const useWalletStore = create<WalletState>()(
	devtools(
		(set) => ({
			mnemonic: "",
			publicAddress: ["asdadsadsadsadsad", "asdadsadasdad"],

			// Define Actions here
			actions: {
				setMnemonic: (mnemonic: string) =>
					set(() => ({ mnemonic }), undefined, "wallet/setMnemonic"),
				setPublicAddress: (newAddress: string) =>
					set(
						(state) => ({
							publicAddress: [...state.publicAddress, newAddress],
						}),
						undefined,
						"wallet/setPublicAddress"
					),
			},
		}),
		{ name: "WalletStore" }
	)
);

export const useMnemoic = () => useWalletStore((state) => state.mnemonic);
export const usePubAddr = () => useWalletStore((state) => state.publicAddress);

export const useWalletActions = () => useWalletStore((state) => state.actions);
