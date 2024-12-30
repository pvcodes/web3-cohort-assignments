import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "./ui/input"
import { useState } from "react"
import { TypographyP } from "./ui/Typography"
import { Button } from "./ui/button"
import { getKeyCreatedBySolanaKeygenFromMnemonic } from "@/lib/wallet"
import { useWalletStore } from "@/stores/useWalletStore"

interface SeedInputProps {
    index: number,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    disabled?: boolean
}

interface SeedsProps { seeds?: string[], type: 'ADD' | 'CREATE' }

const SeedInput = ({ index, value, onChange, disabled = false }: SeedInputProps) => {

    return (
        <div className="flex items-end">
            <TypographyP className="pr-1">{index}.</TypographyP>
            <Input type="text" value={value} disabled={disabled} onChange={onChange} />
        </div>
    )
}



export default function Seeds({ type }: SeedsProps) {

    const mnemonic = useWalletStore(state => state.mnemonic)
    const setMnemonic = useWalletStore(state => state.setMnemonic)
    console.log(mnemonic, 12313)

    const [seeds, setSeeds] = useState<string[]>(mnemonic.length > 0 ? mnemonic.split(" ") : Array(12).fill(''))
    const handleSeedChange = (index: number, newValue: string) => {
        const updatedSeeds = [...seeds];
        updatedSeeds[index] = newValue;
        setSeeds(updatedSeeds);
    };

    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(seeds.join(', ')).then(() => {
            // TODO: Add toast
            console.log('Seeds copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy seeds: ', err);
        });
    }
    const handleAddAndVerifySeeds = () => {
        setMnemonic(seeds.join(" "))
        console.log(seeds, 56789)
    }
    const showPublicAddress = async () => {
        const mnemonic = seeds.join(" ")
        console.log(mnemonic, 7890)
        const publicA = await getKeyCreatedBySolanaKeygenFromMnemonic(mnemonic)
        console.log(publicA, 7890)
    }

    return <div className="m-2 lg:w-8/12 lg:mx-auto pt-4">
        <Card>
            <CardHeader>
                <CardTitle>Seeds</CardTitle>
                <CardDescription>{type === 'CREATE' ? 'Save' : 'Enter'} your seeds</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {seeds.map((seed, index) => (
                    <SeedInput
                        key={`seed-${index}`}
                        index={index + 1}
                        value={seed}
                        disabled={type === 'CREATE'}
                        onChange={(e) => handleSeedChange(index, e.target.value)}
                    />
                ))}
            </CardContent>
            <CardFooter className="flex justify-end">
                {/* <p>Card Footer</p> */}
                <TypographyP >
                    {type === 'CREATE' && <Button className="mr-2" onClick={showPublicAddress}>Proceed</Button>}
                    <Button
                        variant={type === 'CREATE' ? 'outline' : 'default'}
                        onClick={type === 'CREATE' ? handleCopyClipboard : handleAddAndVerifySeeds}
                    >
                        {type === 'CREATE' ? 'Copy to Clipboard' : 'Verify and add wallet'}
                    </Button>
                </TypographyP>
            </CardFooter>
        </Card>


    </div>

}