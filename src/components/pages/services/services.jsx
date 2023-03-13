import Service from "./service"
import '../../../responsive.css'
import { IoCodeOutline, IoPhonePortraitOutline } from "react-icons/io5";

function Services(){
    return(
        <div className="flex flex-col justify-center items-center gap-10 text-white my-40 responsive" id="services">
            <h1 className="text-3xl">Serviços</h1>
            <div className="flex gap-3 responsive">
                <Service icon={<IoCodeOutline size={30}/>} title="Criação de Sites"/>
                <Service icon={<IoPhonePortraitOutline size={30} />} title="Sites responsivos"/>
            </div>
        </div>
    )
}
export default Services