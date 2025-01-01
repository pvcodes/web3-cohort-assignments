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
import { usePathname, useRouter } from "next/navigation"

export default function AppNavbar() {

    const router = useRouter()
    const pathName = usePathname()

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
                        <Button onClick={() => router.push('/seeds')} disabled={pathName === '/seeds'}>Login</Button>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}

