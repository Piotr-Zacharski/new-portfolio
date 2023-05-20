
import {links} from '@/config/links'
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-stone-800 border-b-2 h-16 flex justify-end">
            {links.map(link => (
                <Link className="flex flex-end text-center justify-center align-center text-white gap-2" href={link.href} key={link.title}>
                    <h1 className="flex p-4 text-center text-white text-bold hover:text-pink-700">{link.title}</h1>
                </Link>
            ))}
        </nav>
    )
}