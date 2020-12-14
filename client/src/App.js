import './App.css';
import './bootstrap.css';
import './Muzic.css';
import { Router } from '@reach/router'
import PublicHome from './component/PublicHome';
import SearchPage from './component/SearchPage';
import Navbar from './component/Navbar';
import { Segment } from 'semantic-ui-react'
import NewReleases from './component/NewReleases';
import FeaturedPlaylist from './component/FeaturedPlaylist';


function App() {

  return (
    <div className="wrapper">
      <Navbar />
      <Segment vertical className="bg" style={{ minHeight: 400, padding: '0em' }} >
        <Router>
          <PublicHome path="/" />
          <SearchPage path="/searchsong" />
          <NewReleases path="/newreleases" />
          <FeaturedPlaylist path="/featured" />
        </Router>
      </Segment>

    </div>
  );
}

export default App;
