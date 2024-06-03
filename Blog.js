import { Outlet, Link } from "react-router-dom";
const Blog = () => {
    return (
        <>
            <div className="del">

                <div id="cl">
                    <div className="h">
                        <Link to="/home">Home</Link>
                        <Link to="/Change">Manage profile</Link>
                        
                    </div>
                    <h1>Detailed Overview</h1>
                    <div className="h"> <a href="">Trends</a></div>
                </div>
                <input type="date" name="" id="" />
                <div id="tl">
                    <ul>
                        <h2>Credited</h2>
                        <li>1000 rs is Credited by kdifewujndfhiuf</li>
                        <li>100 rs is Credited by wujndfhiuf</li>
                        <li>70 rs is Credited by ewujndfhiuf</li>
                        <li>200 rs is Credited by dfhiuf</li>
                        <li>400 rs is Credited by fewujndfhiuf</li>
                        <li>1000 rs is Credited by fewujndfhiuf</li>
                        <li>70000 rs is Credited by kdifewujndfhiuf</li>
                        <li>1000 rs is Credited by kdwujndfhiuf</li>
                    </ul>
                    <ul>
                        <h2>Debited</h2>
                        <li>2000 rs is Debited by lknjbcudneo</li>
                        <li>2080 rs is Debited by lknjbcudneo</li>
                        <li>1080 rs is Debited by lknjbcudneo</li>
                        <li>5000 rs is Debited by lknjbcudneo</li>
                        <li>2000 rs is Debited by lknjbcudneo</li>
                        <li>38000 rs is Debited by lknjbcudneo</li>
                        <li>68000 rs is Debited by lknjbcudneo</li>
                        <li>2000 rs is Debited by lknjbcudneo</li>

                    </ul>


                </div>

            </div>
            <Outlet />
        </>
    );
};

export default Blog;