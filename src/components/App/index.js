import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { Competitions } from '../Competitions';
import { Teams } from '../Teams';
import { TeamMatches } from '../TeamMatches';
import { Matches } from '../Matches';

import 'antd/dist/antd.css';

const { Header, Content } = Layout;


function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key={1}><NavLink to='/'>Чемпионаты</NavLink></Menu.Item>
            <Menu.Item key={2}><NavLink to='/teams'>Команды</NavLink></Menu.Item>
            <Menu.Item key={2}><NavLink to='/matches'>Матчи</NavLink></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '10px 50px', backgroundColor: 'white' }}>
          <Switch>
            <Route exact path='/teams' component={Teams} />
            <Route exact path='/teams/:teamId/matches' component={TeamMatches} />
            <Route exact path='/matches' component={Matches} />
            <Route exact path='/' component={Competitions} />
          </Switch>
        </Content>
      </Layout>
    </Router >
  );
}

export default App;
