import React from "react";
import Search from "./Search";
import Users from "../left/Users";

function Left() {
  return (
    <div className="w-[30%] h-screen bg-black text-gray-300 flex flex-col">
      <h1 className="font-bold text-3xl p-2 px-8">Chats</h1>
      <Search />
      <div className="flex-1 overflow-y-auto">
        <Users />
      </div>
    </div>
  );
}

export default Left;
