import Header from './Header';
import './layout.scss'
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
      <div className="layout">
        <Header />
        <div className="content">
          <Outlet />
        </div>
        <div className="footer">© 2025 Your Website Name</div>
      </div>
    );
  };
  

 export default Layout