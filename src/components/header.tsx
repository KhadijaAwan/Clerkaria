import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import { flexBetween } from "./style";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <nav className={`${flexBetween} w-full bg-orange-600 px-6 py-3 lg:px-10`}>
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src={logo} width={35} height={35} alt="LookUP Logo" className="max-sm:size-10 rounded-full max-sm:hidden"
                />
                <p className="ml-2 text-[26px] font-bold text-white">Clerkaria</p>
            </Link>
            <div className={`${flexBetween} gap-5`}>
                <SignedIn>
                    <UserButton afterSignOutUrl="/login" />
                </SignedIn>
            </div>
        </nav>
    )
}