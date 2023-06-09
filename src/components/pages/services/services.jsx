import { useEffect } from "react";
import Service from "./service"




import { IoCodeOutline, IoPhonePortraitOutline, IoDesktopOutline } from "react-icons/io5";


import AOS from "aos";
import "aos/dist/aos.css";

function Services(){

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

    return(
        <div className="flex flex-col justify-center items-center gap-10 text-white my-20 " id="services" data-aos="fade-down">
            <h1 className="text-3xl">Serviços</h1>
            <div className="flex justify-center gap-3 flex-wrap ">
                <Service icon={<IoCodeOutline size={30}/>} title="Criação de Sites" />
                <Service icon={<IoPhonePortraitOutline size={30}/>} secundIcon={<IoDesktopOutline size={30}/>} title="Sites responsivos"/>
                <Service icon={<IoPhonePortraitOutline size={30}/>} title="Desenvolvimento mobile (em formação)" />
            </div>
        </div>
    )
}
export default Services