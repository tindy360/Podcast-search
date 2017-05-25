import React from 'react'
import { Link } from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'



const Header = () => (
<div>

   <IconMenu
    iconButtonElement={<IconButton><MenuIcon /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    iconStyle={{color:'#28ea1e'}}
  >
    <Link to={`/search`}><MenuItem primaryText="Search" /></Link>
    <Link to={`/favorites`}><MenuItem primaryText="favorites" /></Link>
  </IconMenu>

</div>

)
export default Header
