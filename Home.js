import {Link } from "react-router-dom";
const Home = () => {
    return (
        <>
        <div className='dash'>
            <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/blog">Detailed view</Link>
            <Link to="/">logout</Link>

            </div>
            <div id="im">
                <img src="https://tse1.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&rs=1&c=1&qlt=95&w=93&h=97" alt="" style={{ borderRadius: "50%" }} />
                <p>Welcome, roy</p>
            </div>

            <div className="b">
                <label htmlFor="">Total Credits</label>
                <label htmlFor="">Balance </label>
                <label htmlFor="">Total Debited </label>
                <input type="text" placeholder=" 90,000 rs " readOnly />
                <input type="text" placeholder=" 1,20,000 rs " readOnly />
                <input type="text" placeholder=" 30,000 rs" readOnly />

            </div>
            
        </div>
        
        
        </>
        
    );
  };
  
  export default Home;