import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import SideabarOption from "./sidebarOption";
import StartIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearmeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Sidebar() {
  return (
    <div>
      <button
        className="
    flex items-center gap-1
    rounded-full
    shadow-[0_2px_5px_-2px_rgba(0,0,0,0.35)]
    bg-white
    px-3 py-2
    mt-1
    text-gray-700
    font-medium
    hover:shadow-md
    hover:bg-gray-50
    transition-all
  "
      >
        <AddIcon className="text-xl text-gray-600" />
        <span>Compose</span>
      </button>

      <div className="flex flex-col">
        <SideabarOption
          title="Inbox "
          Icon={InboxIcon}
          number={54}
          selected={true}
        />
        <SideabarOption
          title="Starred "
          Icon={StartIcon}
          number={54}
          
        />
         <SideabarOption
          title="Snoozed "
          Icon={AccessTimeIcon}
          number={54}
          
        />
        <SideabarOption
          title="Important "
          Icon={LabelImportantIcon}
          number={54}
          
        />

        <SideabarOption
          title="Sent "
          Icon={NearmeIcon}
          number={54}
          
        />

        <SideabarOption
          title="Drafts "
          Icon={NoteIcon}
          number={54}
          
        />

        <SideabarOption
          title="More "
          Icon={ExpandMoreIcon}
          number={54}
          
        />
      </div>
    </div>
  );
}

export default Sidebar;
