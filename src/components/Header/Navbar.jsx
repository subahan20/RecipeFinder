import React  from 'react';
import { Menu } from 'semantic-ui-react';
import Logo from '../../assests/images/logo2.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Menu borderless fixed='top'>
        <Menu.Item>
          <img src ={Logo} alt=''/>
        </Menu.Item>
        <Menu.Item name='Home' as={Link} to="/" />
        <Menu.Item name='Recipes' as={Link} to="/recipes" />
      </Menu>
  )
}

export default Navbar