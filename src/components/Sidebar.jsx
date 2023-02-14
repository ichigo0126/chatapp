import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-indigo-800">
      <ul className="flex flex-col space-y-2">
        {/* 一つ目 */}
        <li>
          <button className="flex items-center">
            <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <PersonIcon />
              </svg>
            </span>
          </button>
        </li>
        {/* 二つ目 */}
        <li>
          <button className="flex items-center">
            <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ChatIcon />
              </svg>
            </span>
          </button>
        </li>
        {/* 三つ目 */}
        <li>
          <button className="flex items-center">
            <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <PersonAddAlt1Icon />
              </svg>
            </span>
          </button>
        </li>
        {/* 四つ目 */}
        <li>
          <button className="flex items-center"></button>
          <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <GroupsIcon />
            </svg>
          </span>
        </li>
      </ul>
      <button className="mt-auto flex items-center justify-center hover:text-indigo-100 text-indigo-500 h-10 w-10">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <LogoutIcon />
        </svg>
      </button>
    </div>
    
  );
}
