import React, {PureComponent} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Main from '../main/Main.jsx';
import MoviePage from '../movie-detail/Movie.jsx';
import SignIn from '../sign/SignIn.jsx';
import FullScreenPlayer from '../full-screen-player/full-screen-player.jsx';
import Review from '../review/review.jsx';
import history from '../../history';
import MyList from '../my-list/my-list.jsx';
import PrivateRoute from '../private-route/private-route.jsx';

export class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/films/:id" component={MoviePage} />
          <Route exact path="/films/:id/player" component={FullScreenPlayer} />
          <PrivateRoute
            exact
            path='/films/:id/review'
            render={(match) => {
              return <Review
                match={match}
              />;
            }}
          />
          <PrivateRoute
            exact
            path='/mylist'
            render={() => {
              return <MyList/>;
            }}
          />
          <Route exact path="/login" component={SignIn} />
          <Route exact path='/' component={Main} />
        </Switch>
      </Router>
    );
  }
}

export default App;
