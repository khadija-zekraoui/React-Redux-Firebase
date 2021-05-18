import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar'
import CreateProject from './components/projects/CreateProject';
import ProjectDetail from './components/projects/ProjectDetail';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Navbar />
        {/* switch ensure that a one route is loded up at time */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetail} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/create" component={CreateProject} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
