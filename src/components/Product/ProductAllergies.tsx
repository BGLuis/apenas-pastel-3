import { EggFried, Fish, Milk, Nut, Wheat } from "lucide-react";
import { HTMLAttributes, ReactNode } from "react";

interface ProductAllergiesProps extends HTMLAttributes<HTMLDivElement> {
    allergies: [string]
}

function ProductAllergiesItems({children}:{children: React.ReactNode}) {
    return(
        <div className="bg-primary rounded-full h-8 w-8 flex items-center justify-center">{children}</div>
    )
}

export default function ProductAllergies({allergies}: ProductAllergiesProps) {
    let iconAllergies:ReactNode[] = [];

    if(allergies.includes("lactose")) iconAllergies.push(<ProductAllergiesItems><Milk/></ProductAllergiesItems>)
    if(allergies.includes("wheat")) iconAllergies.push(<ProductAllergiesItems><Wheat /></ProductAllergiesItems>)
    if(allergies.includes("fish")) iconAllergies.push(<ProductAllergiesItems><Fish /></ProductAllergiesItems>)
    if(allergies.includes("egg")) iconAllergies.push(<ProductAllergiesItems><EggFried /></ProductAllergiesItems>)
    if(allergies.includes("nut")) iconAllergies.push(<ProductAllergiesItems><Nut /></ProductAllergiesItems>)
        
    return (
        <div className="flex flex-col ml-auto absolute top-12 right-12">
            <h1 className="mb-4 font-passeroOne text-xl">Alérgicos</h1>
            <div className="grid grid-cols-2 w-fit h-fit gap-2 fill-white text-white">
                {iconAllergies.map((icons)=>icons)}
            </div>
        </div>
    )
}