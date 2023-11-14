import { useNavigate } from "react-router"

export default function Topbar(){
    const navigate=useNavigate()

    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl" onClick={()=>navigate('/')}>Shopify</a>
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/141228691?v=4" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
        </div>
    )
}