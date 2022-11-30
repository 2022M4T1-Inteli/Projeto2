import StatusdaBateria from "../components/Bateria/Bateria"
import styles from '../styles/Predios.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryQuarter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
//import Image from "./Icone-bateria-Png.png"
import Link from "next/link";


function Bateria() {
    return (
        <div className="text-center"> {/*abertura da div principal que está centralizando o conteúdo*/}

            <div className="relative">
                <h1 className="Montserrat font-bold text-2xl text-black lg:pl-28">Status da Bateria</h1>
                <FontAwesomeIcon className="absolute lg:pl-32 pt-7 h-7 sm:pl-5" icon={faMagnifyingGlass}></FontAwesomeIcon>
                <input type="text" className={styles.input} placeholder="Digite o número do prédio" />
            </div>


            <div className="flex justify-center">
                <div className="w-3/4">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center">

                        <div className="rounded border-2 border-black w-60 h-50 text-center hover:bg-sky-100">
                            {/* <Image src={Image} alt="teste" width={64} height={64}></Image> */}
                            <FontAwesomeIcon icon={faBatteryQuarter} size="lg" />
                            <h1 className="Montserrat font-bold">Aqui está o ID do equipamento</h1>

                            <div className="mt-5"> {/*margin-top*/}
                                <h1>98%</h1>
                            </div>

                            <Link href="/admin">
                                <button className="bg-blue-500 hover:scale-125 duration-200 rounded-lg mt-4  mb-4 p-2 hover:bg-blue-400">Checar equipamento</button>
                            </Link>
                        </div>

                        <div className="rounded border-2 border-black w-60 h-50 text-center hover:bg-sky-100">
                            {/* <Image src={Image} alt="teste" width={64} height={64}></Image> */}
                            <FontAwesomeIcon icon={faBatteryQuarter} size="lg" />
                            <h1 className="Montserrat font-bold">ID do equipamento</h1>

                            <div className="mt-5"> {/*margin-top*/}
                                <h1>70%</h1>
                            </div>

                            <Link href="/admin">
                                <button className="bg-blue-500 hover:scale-125 duration-200 rounded-lg mt-4  mb-4 p-2 hover:bg-blue-400">Checar equipamento</button>
                            </Link>

                        </div>

                        <div className="rounded border-2 border-black w-60 h-50 text-center hover:bg-sky-100">
                            {/* <Image src={Image} alt="teste" width={64} height={64}></Image> */}
                            <FontAwesomeIcon icon={faBatteryQuarter} size="lg" />
                            <h1 className="Montserrat font-bold">ID do equipamento</h1>

                            <div className="mt-5"> {/*margin-top*/}
                                <h1>12%</h1>
                            </div>

                            <Link href="/admin">
                                <button className="bg-blue-500 hover:scale-125 duration-200 rounded-lg mt-4  mb-4 p-2 hover:bg-blue-400">Checar equipamento</button>
                            </Link>

                        </div>

                        <div className="rounded border-2 border-black w-60 h-50 text-center hover:bg-sky-100">
                            {/* <Image src={Image} alt="teste" width={64} height={64}></Image> */}
                            <FontAwesomeIcon icon={faBatteryQuarter} size="lg" />
                            <h1 className="Montserrat font-bold">ID do equipamento</h1>

                            <div className="mt-5"> {/*margin-top*/}
                                <h1>40%</h1>
                            </div>

                            <Link href="/admin">
                                <button className="bg-blue-500 hover:scale-125 duration-200 rounded-lg mt-4  mb-4 p-2 hover:bg-blue-400">Checar equipamento</button>
                            </Link>

                        </div>

                    </div>
                </div>
            </div>






            <div>
                <StatusdaBateria />
            </div>

        </div>
    )
}

export default Bateria