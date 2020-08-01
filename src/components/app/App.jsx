import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Main from '../main/Main.jsx';
import MoviePage from '../movie-detail/Movie.jsx';
import SignIn from '../sign/SignIn.jsx';
import FullScreenPlayer from '../full-screen-player/full-screen-player.jsx';
import history from '../../history';

export class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/movies/:id" component={MoviePage} />
          <Route exact path="/movies/:id/player" component={FullScreenPlayer} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path='/' component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
