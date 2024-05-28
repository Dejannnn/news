"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ACTIVE_CLASS } from "./const/route";

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    const activeClass = pathname.startsWith(href) ? ACTIVE_CLASS : undefined
    return (
        <Link href={href} className={activeClass}>{children}</Link>
    )
}