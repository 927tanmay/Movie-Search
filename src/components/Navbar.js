
import React,{Component} from 'react';
 
class Navbar extends Component{
    render(){
        return (
            
        <div>            
            <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            {/* <Link className="navbar-brand text-white text-lg brand-text" to="/">
              MovieSeriesInfo
            </Link> */}
            <h1 className="navbar-brand text-white text-lg brand-text">Movie Series Info</h1>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-5x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>



        </div>
 
        );

    }

}

export default Navbar;