import {Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='main'>  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
			<div className='signup'>
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required/>
					<input type="email" name="email" placeholder="Email" required/>
					<input type="password" name="pswd" placeholder="Password" required/>
					<Link to="/home"><button>Sign</button></Link>
				</form>
			</div>
			<div className='login'>
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required/>
					<input type="password" name="pswd" placeholder="Password" required/>
					<a href="">Forgot password?</a>
					<button>Login</button>
				</form>
			</div>
			
	</div>
	<Outlet />
      

      
    </>
  )
};

export default Layout;