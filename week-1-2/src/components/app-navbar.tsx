"use client"
import * as React from "react"

import {
    NavigationMenu,
    // NavigationMenuContent,
    NavigationMenuItem,
    // NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger,
    // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { TypographyH3 } from "./ui/Typography"
import { Button } from "./ui/button"
import { MODAL, useModalStore } from "@/stores/useModalStore"

export default function AppNavbar() {

    const setOpenModal = useModalStore(state => state.setOpenModal)
    const ALL_MNEMONIC_MODAL_STATE = useModalStore(state => state.modals?.[MODAL.ALL_MNEMONIC_MODAL])
    return (
        <div className="flex justify-between">
            <TypographyH3>PiWallet</TypographyH3>
            <NavigationMenu>
                <NavigationMenuList>
                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="p-2 min-w-10">
                                <p>hello</p>
                                <div>
                                    <Link href={'#'}>linke</Link>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}
                    <NavigationMenuItem className="text-sm">
                        <Button onClick={() => setOpenModal(MODAL.ALL_MNEMONIC_MODAL)} disabled={ALL_MNEMONIC_MODAL_STATE}>Login</Button>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}

