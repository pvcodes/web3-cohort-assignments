import { usePubAddr } from "@/stores/useWalletStore"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"


export default function Address() {
    const publicAddress = usePubAddr()
    console.log(publicAddress, 123131)
    return (
        publicAddress.length &&
        <>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">S.No.</TableHead>
                        <TableHead>Chain</TableHead>
                        <TableHead>Public Address</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {publicAddress.map((addr, index) => (
                        < TableRow key={addr} >
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>SOL</TableCell>
                            <TableCell>{addr}</TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table >
            <div className="flex w-full justify-end">
                <Button variant='outline'>Create new wallet</Button>
            </div>

        </>)
}