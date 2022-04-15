
import './App.css';
import 'antd/dist/antd.css';
import Navbar from './Components/Navbar/Navbar';

import { Layout } from 'antd';
import Home from './pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About/About';

const { Header,Content } = Layout;

function App() {
  return (
    <>
      <Layout className="layout htAdjust" >
      <Router>
        <Header className='nav' >
          <Navbar/>
        </Header>
        <Content className="bodyImage" style={{ padding: '0 50px'}}>
          
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/about">
                 <About/>
              </Route>
            </Switch>
          
        </Content>
        </Router>
      </Layout> 
    </>
  );
}

export default App;
