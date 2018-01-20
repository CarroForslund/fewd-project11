// index.js ====================================================================

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// server.js ===================================================================
export const API_TOKEN = 'D6W69PRgCoDKgHZGJmRUNA';

// Client.js ===================================================================
const Client () => {

  login() {
    return fetch('/api/login', {
      method: 'post',
      headers: {
        accept:'application/json',
      },
    })
    .then(this.checkStatus)
    .then(this.parseJson)
    .then((json) =>this.setToken(json.token));
  }

  //setToken()stores the token inlocalStorage:
  setToken(token) {
    this.token = token;
    if (this.useLocalStorage) {
      localStorage.setItem(LOCAL_STORAGE_KEY, token);
    }
  }

  logout() {
    this.removeToken();
  }

  removeToken() {
    this.token = null;
    if (this.useLocalStorage) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  }
}

// App.js ======================================================================
import TopBar from'./TopBar';
import AlbumsContainer from'./AlbumsContainer';

constApp=() => (
  <div className='ui grid'>
    <TopBar/>
    <div className='spacer row'/>
    <div className='row'>

      <Switch>
        <PrivateRoute path='/albums' component={AlbumsContainer} />

        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />

        <Route exact path='/' render={() => (<Redirectto='/albums'/>)} />
      </Switch>

    </div>
  </div>
);

// PrivateRoute.js =============================================================
const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => (
    client.isLoggedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location },
      }} />
    )
  )} />
);

// Login.js ====================================================================
class Login extends Component {

  state = {
    loginInProgress: false,
    shouldRedirect: false,
  };

  performLogin = () => {
    this.setState({
      loginInProgress: true
    });
    client.login().then(() => (
      this.setState({
        shouldRedirect: true })
      )
    );
  };

  redirectPath = () => {
    const locationState = this.props.location.state;
    const pathname = (locationState && locationState.from && locationState.from.pathname);
    return pathname || '/albums';
  };

  render() {
    if (this.state.shouldRedirect) {
      return (
        <Redirect to={this.redirectPath()} />
      );
    }
    else {
      return (
        <div className='ui one column centered grid'>
          <div className='ten wide column'>
            <div className='ui raised very padded text container segment' style={{ textAlign: 'center' }}>
              <h2 className='ui green header'>
                Fullstack Music
              </h2>
              {
                this.state.loginInProgress ? (
                  <div className='ui active centered inline loader' />
                ) : (
                  <div className='ui large green submit button' onClick={this.performLogin}>
                    Login
                  </div>
                )
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

// Logout.js ===================================================================
class Logout extends Component {
  constructor(props) {
    super(props);
    client.logout();
  }
  render() {
    return(
      <Redirect to='/login'/>
    );
  }
}

// VerticalMenu.js =============================================================
const VerticalMenu = ({ albums, albumsPathname }) => (
  <div className='ui secondary vertical menu'>
    <div className='header item'>
      Albums
    </div>
    {
      albums.map((album) => (
        <NavLink
          to={`${albumsPathname}/${album.id}`}
          activeClassName='active'
          className='item'
          key={album.id}
        >
          {album.name}
        </NavLink>
      ))
    }
  </div>
);

export default VerticalMenu;

// TopBar.js ===================================================================
const TopBar () => {
  <div className='right menu'>
    {
      client.isLoggedIn() ? (
        <Link className='ui item' to='/logout'>
          Logout
        </Link>
      ) : (
        <Link className='ui item' to='/login'>
          Login
        </Link>
      )
    }
  </div>
}

// AlbumContainer.js ===========================================================
import Album from'./Album';
import{ client } from'../Client';

const ALBUM_IDS = [
  '23O4F21GDWiGd33tFN3ZgI',
  '3AQgdwMNCiN7awXch5fAaG',
  '1kmyirVya5fRxdjsPFDM05',
  '6ymZBbRSmzAvoSGmwAFoxm',
  '4Mw9Gcu1LT7JaipXdwrq1Q',
];

class AlbumsContainer extends Component {
  state = {
    fetched: false,
    albums: [],
  };

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums=() => {
    client.getAlbums(ALBUM_IDS)
      .then((albums) => (
        this.setState({
          fetched: true,
          albums: albums,
        })
      )
    );
  };

  render() {
    if (!this.state.fetched) {
      return(
        <div className='ui active centered inline loader'/>
      );
    }
    else {
      const matchPath = this.props.match.path;
      return (
        <div className='ui two column divided grid'>
          <div className='ui six wide column' style={{ maxWidth:250 }}>
            <VerticalMenu
              albums={this.state.albums}
              albumsPathname={matchPath}
            />
          </div>
          <div className='ui ten wide column'>
            <Route
                path={`${matchPath}/:albumId`}
                render={({ match }) => {
                const album = this.state.albums.find(
                  (a) => a.id === match.params.albumId
                );
                return (
                  <Album
                    album={album}
                    albumsPathname={matchPath}
                  />
                );
              }}
            />
          </div>
        </div>
      );
    }
  }
}

// Album.js ===========================================================
const Album () => {

  const Album = ({ album, albumsPathname }) => (
    <div className='six wide column'>
      <p>
        {
          `By ${album.artist.name}
          - ${album.year}
          - ${album.tracks.length} songs`
        }
      </p>
    <divclassName='ui left floated large button'>
      <Link to={albumsPathname} className='ui left floated large button'>
        Close
      </Link>
    </div>
  );

}
