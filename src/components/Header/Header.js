import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
<a className="github-button" href="https://github.com/tindy360/Podcast-search" data-size="large" aria-label="GitHub">GitHub</a>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Podcast Search" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
        <Link to='/search'>  <RaisedButton label="Start Search" primary={true}> </RaisedButton> </Link>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
