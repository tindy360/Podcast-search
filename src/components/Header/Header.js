import React from 'react';
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => (
<div>
  <Link to='/search'><Button color="secondary" className="button">Podcast Search</Button></Link>
  <a href="https://github.com/tindy360/Podcast-search"><Button color="secondary" className="button">GitHub</Button></a>
  <Link to='/search'><Button color="secondary" className="button">Podcast Search</Button></Link>
</div>
)
export default Header
