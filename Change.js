import { Link } from "react-router-dom";
const Change=()=>
    {
        return(
            <div id="pos">
            <div>
            <Link to="/blog"><a>Home</a></Link>
            </div >
            <div className="butt">
            <button >Parsonal deatail</button><br />
            <button >Password Change</button><br />
            <button >profile Picture</button><br />
            <button >Email Change</button><br />
            </div>

        </div>
        );
    }
    export default Change