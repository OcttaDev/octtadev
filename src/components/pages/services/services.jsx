import Service from "./service"
import '../../../responsive.css'
import { IoCodeOutline, IoPhonePortraitOutline } from "react-icons/io5";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Services(){

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return(
        <div className="flex flex-col justify-center items-center gap-10 text-white my-40 responsive" id="services">
            <h1 className="text-3xl">Serviços</h1>
            <div className="flex gap-3 responsive" data-aos="flip-left">
                <Service icon={<IoCodeOutline size={30}/>} title="Criação de Sites" />
                <Service icon={<IoPhonePortraitOutline size={30} />} title="Sites responsivos"/>
            </div>
        </div>
    )
}
export default Services