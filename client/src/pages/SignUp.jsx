import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-7 max-w-lg mx-auto'>
      <h1 className="text-3xl text-center font-semibold">sign up</h1>
      <form className="flex flex-col gap-5">
        <input type="text" placeholder="Username" id="username" className="bg-slate-200 p-3 rounded-lg" />
        <input type="email" placeholder="email" id="email" className="bg-slate-200 p-3 rounded-lg" />
        <input type="password" placeholder="password" id="password" className="bg-slate-200 p-3 rounded-lg" />
        
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign up</button>
      </form>
      <div className="">
        <p>Have an account?</p>
        <Link to={'/login'}><span className="text-blue-500">Sign in</span></Link>   
      </div>
    </div>
  )
}

export default SignUp