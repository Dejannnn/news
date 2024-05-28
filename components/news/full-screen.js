"use client";
import { useRouter } from "next/navigation";

export default function FullscreenComponent(context) {
    const router=  useRouter()
    return (
        <div className="fullscreen-image" onClick={router.back}>
        {context.children}
        </div>
    )
}