import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

  state = {
    activeItem: 'Exercises'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu pointing secondary vertical>
        <Menu.Item as= {Link} to='/'
         name='Exercises' active={activeItem === 'Exercises'} onClick={this.handleItemClick} />
        <Menu.Item as= {Link} to='/create'
          name='Create Exercise'
          active={activeItem === 'Create Exercise'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as= {Link} to='/user'
          name='Create User'
          active={activeItem === 'Create User'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }

}

export default NavBar;

// <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//   <Link to="/" className="navbar-brand">Exercise Tracker</Link>
//   <div className="collpase navbar-collapse">
//   <ul className="navbar-nav mr-auto">
//     <li className="navbar-item">
//     <Link to="/" className="nav-link">Exercises</Link>
//     </li>
//     <li className="navbar-item">
//     <Link to="/create" className="nav-link">Create Exercise</Link>
//     </li>
//     <li className="navbar-item">
//     <Link to="/user" className="nav-link">Create User</Link>
//     </li>
//   </ul>
//   </div>
// </nav>
