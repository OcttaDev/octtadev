function Service({icon, title}){
    return(
        <div>
            <div className="flex flex-col justify-center gap-8  bg-[#333333] border-b-[#00DF5E] border-b-4 p-3 w-52 h-40 text-white rounded-sm">
                <i className="text-[#00DF5E]">{icon}</i>
                <h1 className="max-w-[100px]">{title}</h1>
            </div>
        </div>
    )
}
export default Service