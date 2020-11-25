import React from 'react';
import MenuWrapper from '../../ui/MenuWrapper';
import MenuItem from '../../ui/MenuItem';
import Chat from '../chat/Chat';
import Feed from '../feed/Feed';
import { MailOutlined, HomeOutlined } from '@ant-design/icons';
import {createBrowserHistory} from 'history';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const history = createBrowserHistory()

export default function MobileMenu() {
  return (
    <Router>
        <Switch>
          <Route history={history} path="/feed">
            <Feed />
          </Route>
          <Route history={history} path="/chat">
            <Chat />
          </Route>
          <Redirect from='/' to='/feed'/>
        </Switch>

        <MenuWrapper>
        <MenuItem>
            <Link
                to="/feed"
                style={{
                    textDecoration: 'none',
                    color: 'black',
                }}
            >
                <HomeOutlined />
            </Link>
        </MenuItem>
        <MenuItem>
            <Link
                to="/chat"
                style={{
                    textDecoration: 'none',
                    color: 'black',
                }}
            >
                <MailOutlined />
            </Link>
        </MenuItem>
        </MenuWrapper>
    </Router>
  );
}