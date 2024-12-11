import Image from "next/image";
import { Passero_One } from "next/font/google";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="p-10 h-80 flex flex-col justify-between relative text-white font-passeroOne">
          <Image src="/pastelaria.png" width={700} height={300} alt="pastalaria" className="conteiner h-full w-full absolute -z-10 top-0 left-0 object-cover"/>
          <h1 className="text-4xl w-1/3">Conheça a melhor pastelaria de BH</h1>
          <Link href="/about" className="self-end bg-primary rounded-full px-10 py-2 text-2xl">Saiba mais</Link>
        </div>
        {/* <div className="conteiner flex justify-center relative gap-4">
          <div className="h-6 w-12 bg-primary rounded-full"></div>
          <div className="h-6 w-6 bg-zinc-400 rounded-full"></div>
          <div className="h-6 w-6 bg-zinc-400 rounded-full"></div>
        </div> */}
      </div>
      <div className="flex flex-col gap-7">
        <div className="conteiner text-4xl text-center font-passeroOne">De uma olhada no nosso Cardapio</div>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/menu#savory" className="conteiner w-[280px]">
            <Image src="/savory.png" width={200} height={150} alt="pastalaria" className="w-full aspect-[3/2] object-cover"/>
          </Link>
          <Link href="/menu#sweet" className="conteiner w-[280px]">
          <Image src="/sweet.png" width={200} height={150} alt="pastalaria" className="w-full aspect-[3/2] object-cover"/>
          </Link>
          <Link href="/menu#drinks" className="conteiner w-[280px]">
          <Image src="/drinks.png" width={200} height={150} alt="pastalaria" className="w-full aspect-[3/2] object-cover"/>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="conteiner text-2xl font-passeroOne">Nossos Restaurantes</div>
        <div className="conteiner flex justify-between font-semibold">
          <div className="p-4 self-end">
            <h1 className="text-3xl">Vila dos lobos</h1>
            <h4 className="text-lg my-5">Rodovia dos patos tristes prato, Nº45</h4>
            <div className="flex gap-5">
              <p className="flex flex-col">
                <span>Seg – Sex 11:30h – 21h</span>
                <span>Sábado, 10h às 19h</span>
                <span>Domingo, 10h às 18h</span>
              </p>
              <p className="flex flex-col">
                <span>Tel: 9999-9999 ou </span>
                <span>(31)99999-9999</span>
                <span>Ligue e faça seu pedido</span>
              </p>
            </div>
          </div>
          <Image src="/pastelaria.png" width={700} height={300} alt="pastalaria" className="w-3/12 aspect-square object-cover flex-none hidden sm:block"/>
        </div>
      </div>
    </>
  );
}
