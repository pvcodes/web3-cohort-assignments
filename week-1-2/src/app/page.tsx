'use client'

import Address from "@/components/Address"
import Seeds from "@/components/Seeds"
import { Button } from "@/components/ui/button"
import { TypographyH3, TypographyP } from "@/components/ui/Typography"
import { generateMnemonicAndSeed } from "@/lib/wallet"
import { useModalStore, MODAL } from "@/stores/useModalStore"
import { useWalletStore } from "@/stores/useWalletStore"
import { useState } from "react"

// { children }: { children: React.ReactNode }
export default function RootPage() {
  const setMnemonic = useWalletStore(state => state.setMnemonic)
  const mnemonic = useWalletStore(state => state.mnemonic)
  // const modals = useModalStore(state => state.modals)
  const ALL_MNEMONIC_MODAL_STATE = useModalStore(state => state.modals?.[MODAL.ALL_MNEMONIC_MODAL])

  const setOpenModal = useModalStore(state => state.setOpenModal)

  // const [mnemonic, setMnemonic] = useState<string[]>()
  const [type, setType] = useState<'ADD' | 'CREATE'>('ADD')

  // const handleAddPublicAddress = () => {
  //   console.log({ newPubAddr }, 123)
  //   setPublicAddress(newPubAddr)
  //   setNewPubAddr('')
  // }

  const handleCreateWallet = () => {
    setType('CREATE')

    console.log(34567, 'clicked')
    const {
      mnemonic, publicAddress
    } = generateMnemonicAndSeed()
    console.log(34567,)

    // const mnemonicArr = mnemonic.split(" ")
    setMnemonic(mnemonic)
    console.log(mnemonic, publicAddress, 34567)
    setOpenModal(MODAL.ALL_MNEMONIC_MODAL)

  }

  const handleAddWallet = () => {
    setOpenModal(MODAL.ALL_MNEMONIC_MODAL)
  }

  return (
    <div className="mt-10 lg:mt-48">
      {
        !mnemonic ? (
          <>{
            !ALL_MNEMONIC_MODAL_STATE ?
              <div className="flex justify-center items-center flex-col">
                <Button className="p-10" onClick={handleCreateWallet}> <TypographyH3>Create a new Wallet</TypographyH3></Button>
                <Button className="" onClick={handleAddWallet} variant='link'> <TypographyP>Add existing wallet</TypographyP></Button>
              </div> :
              <Seeds type={type} />
          }</>
        ) :
          <>
            <Address />
          </>
      }

    </div>

  )
}