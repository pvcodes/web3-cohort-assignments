'use client'

import { Button } from "@/components/ui/button"
import { TypographyH3, TypographyP } from "@/components/ui/Typography"
import { useWalletActions } from "@/stores/useWalletStore"
import { generateMnemonic } from "@/lib/wallet"
import { useRouter } from "next/navigation"

export default function RootPage() {

  const router = useRouter()
  const { setMnemonic } = useWalletActions()

  const handleCreateWallet = () => {
    const mnemonic = generateMnemonic()
    setMnemonic(mnemonic)
    router.push('/seeds')
  }

  return (
    <div className="mt-10 lg:mt-48">
      <div className="flex justify-center items-center flex-col">
        <Button className="p-10" onClick={handleCreateWallet}> <TypographyH3>Create a new Wallet</TypographyH3></Button>
        <Button className="" onClick={() => router.push('/seeds')} variant='link' > <TypographyP>Add existing wallet</TypographyP></Button>
      </div>
    </div>
  )
}