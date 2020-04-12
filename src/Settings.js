import React from 'react';

import './Settings.css';

const THEMES = {
  light: 'Light (recommended for dark backgrounds)',
  dark: 'Dark (recommended for light backgrounds)'
};

const SEARCH_ENGINES = {
  DUCKDUCKGO: 'DuckDuckGo',
  GOOGLE: 'Google',
  BING: 'Bing',
  QWANT: 'Qwant'
};

function save(e) {
  e.preventDefault();

  const theme = e.target.theme.value;
  const backgroundUrl = e.target.background.value;
  const searchEngine = e.target.searchengine.value;

  localStorage.setItem('theme', theme);
  localStorage.setItem('backgroundUrl', backgroundUrl);
  localStorage.setItem('searchEngine', searchEngine);

  window.location.reload();
}

export default function Settings() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const currentBackgroundUrl = localStorage.getItem('backgroundUrl');
  const currentSearchEngine = localStorage.getItem('searchEngine') || 'DUCKDUCKGO';

  return (
    <section className="popup-wrapper">
      <h1>Settings</h1>
      <form onSubmit={save}>
        <div className="input-group">
          <label htmlFor="theme">Theme:</label>
          <select name="theme" id="theme" defaultValue={currentTheme}>
            {Object.keys(THEMES).map(theme => {
              return (
                <option key={theme} value={theme}>{THEMES[theme]}</option>
              );
            })}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="searchengine">Search engine:</label>
          <select name="searchengine" id="searchengine" defaultValue={currentSearchEngine}>
            {Object.keys(SEARCH_ENGINES).map(engine => {
              return (
                <option key={engine} value={engine}>{SEARCH_ENGINES[engine]}</option>
              );
            })}
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="background">Custom background URL:</label>
          <input name="background" id="background" defaultValue={currentBackgroundUrl} />
        </div>

        <div className="input-group">
          <button type="submit">Save</button>
        </div>
      </form>
    </section>
  );
}
