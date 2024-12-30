import { create } from "zustand";

interface WalletState {
	mnemonic: string;
	publicAddress: string[];
	setMnemonic: (mnemonic: string) => void;
	setPublicAddress: (newAddress: string) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
	mnemonic: "",
	publicAddress: ["asdadsadsadsadsad", "asdadsadasdad"],

	setMnemonic: (mnemonic: string) => set(() => ({ mnemonic })),
	setPublicAddress: (newAddress: string) =>
		set((state) => ({
			publicAddress: [...state.publicAddress, newAddress],
		})),
}));
