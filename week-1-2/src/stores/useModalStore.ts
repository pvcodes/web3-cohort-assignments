import { create } from "zustand";

export enum MODAL {
	ALL_MNEMONIC_MODAL = "ALL_MNEMONIC_MODAL",
}

interface ModalState {
	modals: Record<string, boolean>;
	setOpenModal: (modal: MODAL) => void;
	setCloseModal: (modal: MODAL) => void;
}

export const useModalStore = create<ModalState>((set) => ({
	modals: {},
	setOpenModal: (modal: MODAL) =>
		set((state) => ({
			modals: {
				...state.modals,
				[modal]: true,
			},
		})),
	setCloseModal: (modal: MODAL) =>
		set((state) => ({
			modals: {
				...state.modals,
				[modal]: false,
			},
		})),
}));
