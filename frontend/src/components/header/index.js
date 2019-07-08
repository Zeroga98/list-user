import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
class Header extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-expand navbar-light header-movie">
        <div className="collapse navbar-collapse justify-content-center"  >
          <Link to="/" className="logo">
            <img src="http://tecnoauto.com.ec/wp-content/uploads/2018/10/img-user.png" />
            <span>
              Reqres Api
          </span>
          </Link>

        </div>
      </nav>
    );
  }
};


export default Header;