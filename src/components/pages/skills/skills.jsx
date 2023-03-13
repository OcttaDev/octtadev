import Skill from "./skill"
import { IoLogoHtml5,IoLogoCss3,IoLogoJavascript, IoLogoReact, IoLogoFirebase } from "react-icons/io5";

function Skills(){
    return(
        <div className="flex flex-col justify-center items-center gap-10 text-white my-40" id="skills">
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