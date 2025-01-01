'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React, { useState } from 'react'
import { TypographyP } from "@/components/ui/Typography"
import { Button } from "@/components/ui/button"
import { useMnemoic, useWalletActions } from "@/stores/useWalletStore"
import SeedInput from "@/components/phrase-input"


export default function SeedsPage() {

    const mnemonic = useMnemoic()
    const { setMnemonic } = useWalletActions()

    // if new wallet, the phrases would be prefilled else 12 empty inputs 
    const [phrases, setPhrase] = useState<string[]>(mnemonic.length > 0 ? mnemonic.split(" ") : Array(12).fill(''))

    // if new wallet, then type would be create else importing wallet type would be add
    const type = mnemonic.length > 0 ? 'CREATE' : 'ADD'

    const handleSeedChange = (index: number, newValue: string) => {
        const updatedPhrases = [...phrases];
        updatedPhrases[index] = newValue;
        setPhrase(updatedPhrases);
    };

    const handleCopyClipboard = () => {
        navigator.clipboard.writeText(phrases.join(', ')).then(() => {
            // TODO: Add toast
            // TODO: Does not work in mobile phones
            console.log('phrases copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy phrases: ', err);
        });
    }

    const handleAddAndVerifySeeds = () => {
        // TODO
        setMnemonic(phrases.join(" "))
    }

    const showPublicAddress = async () => {
        // TODO
    }

    return (
        <div className="m-2 lg:w-8/12 lg:mx-auto pt-4 lg:mt-48">
            <Card>
                <CardHeader>
                    <CardTitle>Configure Phrases</CardTitle>
                    <CardDescription>{type === 'CREATE' ? 'Save' : 'Enter'} your phrases</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {phrases.map((phrase, index) => (
                        <SeedInput
                            key={`phrase-${index}`}
                            index={index + 1}
                            value={phrase}
                            disabled={type === 'CREATE'}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSeedChange(index, e.target.value)}
                        />
                    ))}
                </CardContent>
                <CardFooter className="flex justify-end">
                    <TypographyP>
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
    )
}