import Skill from "./skill"
import { IoLogoHtml5,IoLogoCss3,IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Skills(){
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return(
        <div className="flex flex-col justify-center items-center gap-10 text-white my-40" id="skills" data-aos="fade-down">
            <h1 className="text-white text-3xl">Skill</h1>
            <div className="flex justify-center gap-10 responsive">
                <Skill icon={<IoLogoHtml5 size={40}/>}/>
                <Skill icon={<IoLogoCss3 size={40}/>}/>
                <Skill icon={<IoLogoJavascript size={40}/>}/>
                <Skill icon={<IoLogoReact size={40}/>}/>
                <Skill icon={<IoLogoFirebase size={40}/>}/>
            </div>
        </div>
    )
}
export default Skills