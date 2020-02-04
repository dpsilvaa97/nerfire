import React, { useState, useEffect } from 'react'
import { List, ListItemIcon, ListItem, ListItemText, Divider, Drawer, IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import './SideNav.css';
import { CSSProperties } from '@material-ui/styles';
import GeneralServices from '../../../services/generalService.json'

import MenuIcon from '@material-ui/icons/Menu';

import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import ExploreIcon from '@material-ui/icons/Explore';
import InfoIcon from '@material-ui/icons/Info';
import { LangType } from '../../../services/languages/LangType';


interface IProps {
  opened: boolean;
  callSideNav: any;
  appLanguage: LangType;

}

const injectDrawerBackgroundStyle: CSSProperties = {
  'zIndex': 1100
}


export const SideNav: React.FC<IProps> = (props) => {

  const [opened, setOpened] = useState<boolean>(false);


  useEffect(() => {
    setOpened(props.opened)
  }, [props.opened])

  useEffect(() => {
    if (!opened) {
      props.callSideNav(false);
    }
    //eslint-disable-next-line
  }, [opened])



  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {

    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setOpened(false)

  };



  return (
    <Drawer variant="temporary" anchor="left" open={opened} onClose={toggleDrawer} style={injectDrawerBackgroundStyle}>
      <div className="sidenav-button">
        <IconButton style={{ 'outline': 'none', 'userSelect': 'none' }} color="inherit" aria-label="open drawer" edge="end" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </div>
      <div onClick={toggleDrawer} onKeyDown={toggleDrawer} className='menu-wrapper'>
        <List className='menu-container'>
          <NavLink to={GeneralServices.homePath} style={{ 'color': 'white', 'textDecoration': 'none' }}>
            <ListItem button className='menu-option'>
              <ListItemIcon style={{ 'color': 'grey' }}><HomeIcon /></ListItemIcon>
              <ListItemText primary={props.appLanguage.appLanguage.navbar.home} />
            </ListItem>
          </NavLink>
        </List>
      </div>
    </Drawer>
  );

}

export default SideNav;
