import { HTMLAttributes, ReactNode } from "react";

interface ProductRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    key: number
}

export default function ProductRoot({ children, key }: ProductRootProps) {
    return (
        <div key={key} className="flex bg-white p-10 rounded-md flex-col relative md:flex-row">
            {children}
        </div>
    )
}