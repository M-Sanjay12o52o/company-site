import { FC } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/Dropdown-menu'
import Link from 'next/link'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    return <div className='flex justify-between'>
        <p className='m-4'>CAPEGEMINI</p>
        <div className='flex justify-between'>
            <Link href={'/home'} className='m-4 hover:underline'>HOME</Link>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Link href={"/services"} className='m-4 hover:underline'>SERVICES</Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem><Link href={"/services/cloud"}>CLOUD</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href={"/services/cybersecurity"}>CYBER SECURITY</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Link href={"/industry"} className='m-4 hover:underline'>INDUSTRY</Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem><Link href={"industry/aerospaceanddefense"}>AEROSPACE AND DEFENCE</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href={"industry/bankingandcapitalmarkets"}>BANKING AND CAPITAL MARKETS</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Link href={"careers"} className='m-4 hover:underline'>CAREERS</Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem><Link href={"/careers/whycapegemini"}>WHY CAPEGEMINI</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href={"/careers/lifeatcapegemini"}>LIFE AT CAPEGEMINI</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Link href={"aboutus"} className='m-4 hover:underline'>ABOUT US</Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem><Link href={"/aboutus/whoweare"}>WHO WE ARE</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href={"/aboutus/technologypartners"}>TECHNOLOGY PARTNERS</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <Link href={"register"} className='m-4 hover:underline'>REGISTER</Link>
            <Link href={"login"} className='m-4 hover:underline'>LOGIN</Link>
        </div>
    </div>
}

export default Navbar