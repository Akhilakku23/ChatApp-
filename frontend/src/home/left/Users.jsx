import React from 'react'

const Users = () => {
  return (
    <div>
      <div className="flex space-x-4 px-6 py-7 hover:bg-slate-400 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <div>
          <h1>Akhil Saji</h1>
          <span>akhilsaji998@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Users;