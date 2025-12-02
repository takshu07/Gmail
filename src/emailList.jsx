import Checkbox from "@mui/material/Checkbox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { IconButton } from "@mui/material";


function EmailList({ id, title, subject, description, time }) {
    
  return (
    <div className="flex items-center gap-3 px-3 py-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
      
      {/* LEFT: checkbox + icons */}
      <div className="flex items-center gap-1 shrink-0">
        <Checkbox size="small" sx={{ padding: 0 }} />
        <IconButton size="small" className="p-1">
          <StarBorderOutlinedIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" className="p-1">
          <LabelImportantOutlinedIcon fontSize="small" />
        </IconButton>
      </div>

      {/* MIDDLE: single line, truncated */}
      <div className="flex-1 min-w-0 flex items-center gap-2 overflow-hidden">
        <span className="font-semibold truncate">{title}</span>

        <span className="text-black  truncate">
          {subject} 
        </span>
         <span className="text-gray-500 truncate">-{description}</span>
      </div>

      {/* RIGHT: time */}
      <span className="shrink-0 text-xs text-gray-500">
        {time}
      </span>
    </div>
  );
}

export default EmailList;
