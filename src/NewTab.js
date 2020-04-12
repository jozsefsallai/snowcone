import React from 'react';
import AppTemplate from './AppTemplate';
import Popup from 'reactjs-popup';

import './NewTab.css';
import Settings from './Settings';

const searchEngineURLs = {
  DUCKDUCKGO: 'https://duckduckgo.com/',
  GOOGLE: 'https://www.google.com/search',
  BING: 'https://www.bing.com/search',
  QWANT: 'https://www.qwant.com/'
};

export default function NewTabPage() {
  const searchEngine = localStorage.getItem('searchEngine') || 'DUCKDUCKGO';
  const background = localStorage.getItem('backgroundUrl') || null;

  const backgroundStyles = background
    ? { background: `url('${background}') center center / cover no-repeat` }
    : {};

  return (
    <AppTemplate>
      <div className="wrapper" style={backgroundStyles}>
        <form
          className="search-box"
          action={searchEngineURLs[searchEngine]}
        >
          <input
            name="q"
            placeholder="Search something..."
            autoComplete="off"
          />
        </form>

        <Popup
          trigger={ <button className="settings">Settings</button> }
          modal
        >
          <Settings />
        </Popup>
      </div>
    </AppTemplate>
  );
}
