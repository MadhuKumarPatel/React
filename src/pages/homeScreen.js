import { Link } from "react-router-dom";


const HomeScreen=()=>{
    return(
        <>
  <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link to={"/"}>Home</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Disabled
          </a>
        </li> */}
      </ul>
    </div>
  </nav>
</>
    )
}
export default HomeScreen;