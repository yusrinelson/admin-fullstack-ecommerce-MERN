import logo from '../assets/logo.svg'
import profileImg from "../assets/profile.png"

export default function Navbar() {
  return (
    <div className='max_padd_container flexBetween bg-white py-2 ring-1 ring-slate-900/5 relative'>
        <div><img src={logo} alt="" /></div>
        <div className='uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:py-2 max-xs:px-1'>Admin Panel</div>
        <div><img src={profileImg} alt="" className='h-12 w-12 rounded-full'/></div>
    </div>
  )
}
