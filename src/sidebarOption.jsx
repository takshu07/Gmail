
function SidebarOption({Icon, title, number,selected }) {
  return (
    <div className="flex rounded-xl group  font-normal bg-white  p-3 items-center gap-3 cursor-pointer
    ${selected ?  bg-white : hover:bg-red-100  } ">
      
      <div className="flex gap-35 text-gray-500 ">
<div className="flex gap-3 ">
        <Icon/>
      <h3>{title}</h3>
      </div>

      <p className="opacity-0 
      ${selected && group-hover:opacity-100 transition-opacity }">{number}</p>
    </div>
      </div>
      
  )
}

export default SidebarOption