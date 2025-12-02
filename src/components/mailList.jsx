import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import EmailSection from '../emailSection';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailList from '../emailList';

function MailList() {
  return (
    <div className="flex flex-col w-full">
      {/* Header: left controls + right controls (one row). Sticky at top */}
      <div className="sticky top-0 z-20 w-full flex justify-between items-center bg-gray-50 border-b border-gray-200 py-1 px-2">
        {/* LEFT */}
        <div className="flex items-center gap-0 m-0 p-0">
          <Checkbox size="small" sx={{ padding: 0 }} />
          <IconButton size="small" className="p-1" sx={{ margin: 0 }}>
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" className="p-1" sx={{ margin: 0 }}>
            <RedoIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" className="p-1" sx={{ margin: 0 }}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-0 m-0 p-0">
          <IconButton size="small" className="p-1" sx={{ margin: 0 }}>
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" className="p-1" sx={{ margin: 0 }}>
            <ChevronRightIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" className="p-1" sx={{ margin: 0 }}>
            <KeyboardHideIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" className="p-1" sx={{ margin: 0 }}>
            <SettingsIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      {/* Email Section row: three sections displayed left-to-right */}
      <div className="flex flex-row w-full gap-2 items-stretch px-2 py-2">
        {/* Ensure EmailSection accepts className / styles to be flex-1 */}
        <EmailSection
          Icon={InboxIcon}
          title="Primary"
          selected={true}
          color="#d93025"   /* hex example - arbitrary value supported below */
          className="flex-1"
        />
        <EmailSection
          Icon={PeopleIcon}
          title="Social"
          selected={false}
          color="#1A73E8"
          className="flex-1"
        />
        <EmailSection
          Icon={LocalOfferIcon}
          title="Promotions"
          selected={false}
          color="green"
          className="flex-1"
        />
      </div>

      <div>
        <EmailList  title="twitch" subject={"Hello fellas"} description={"this is a test"} time={"10pm"}/>
                <EmailList   title="twitch" subject={"Hello fellas"} description={"this is a test this is a test this is a test this is a test this is a test"} time={"10pm"}/>

     </div>
    </div>
  );
}

export default MailList;
