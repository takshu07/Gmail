import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
  <div >
        <div className= "bg-amber-50 flex items-center justify-between h-14">
          {/* left */}
          <div className=" flex items-center gap-3">
            <IconButton
              aria-label="menu"
              className="p-1 rounded hover:bg-gray-100"
              size="small"
            >
              <MenuIcon fontSize="medium" />
            </IconButton>

            <img
              className="h-7 w-9 object-contain"
              src="https://cdn.pixabay.com/photo/2016/01/26/17/15/gmail-1162901_1280.png"
              alt="logo"
            />
          </div>

          {/* middle (search) */}
          <div className="flex items-center flex-1 max-w-2xl mx-4">
            <div className="flex items-center w-full bg-gray-100/80 border border-gray-200 rounded-full px-3 py-1 transition-shadow focus-within:shadow-md">
              <SearchIcon fontSize="small" className="mr-2" />
              <input
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-500"
                placeholder="Search"
                type="text"
                aria-label="search"
              />
              <ArrowDropDownIcon fontSize="small" className="ml-2" />
            </div>
          </div>

          {/* right */}
          <div className="flex items-center gap-1">
            <IconButton
              aria-label="apps"
              className="p-1 rounded hover:bg-gray-100"
              size="small"
            >
              <AppsIcon fontSize="medium" />
            </IconButton>

            <IconButton
              aria-label="notifications"
              className="p-1 rounded hover:bg-gray-100"
              size="small"
            >
              <CircleNotificationsIcon fontSize="medium" />
            </IconButton>

            <IconButton
              aria-label="account"
              className="p-1 rounded hover:bg-gray-100"
              size="small"
            >
              <AccountCircleIcon fontSize="medium" />
            </IconButton>
          </div>
        </div>
      </div>

  );
}

export default Header;
