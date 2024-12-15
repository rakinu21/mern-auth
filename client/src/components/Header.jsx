import { Link } from "react-router-dom"

const Header = () => {
  return (
      <div className='  bg-slate-200 '>
          <div className="flex items-center justify-around p-4 ">
              <h1 className="font-bold capitalize ">auth</h1>

              <ul className="flex gap-5">
                  <Link to={'/'}><li>Home</li></Link>
                  <Link to={'/login'}><li>SignIn</li></Link>
                  <Link to={'/profile'}><li>Profile</li></Link>
              </ul>
          </div>
    </div>
  )
}

export default Header