import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Entry from './components/Entry';
import EntryList from './components/EntryList';

import EntryModel from './models/entryModel';

const defaultEntry: EntryModel = {
  _id: '123',
  date: new Date().toDateString(),
  translations: [
    {
      _id: '456',
      language: 'en',
      title: 'title',
      text: 'text'
    }
  ],
};

interface IState {
  selectedEntry?: EntryModel;
}

const App: React.FC<IState> = (state) => {
  const [selectedEntry, setSelectedEntry] = useState(defaultEntry);
  
  return (
    <div className="App">
      <Header />
      <br />
      <div className="Content">
        <div className="ContentLeft">
          <EntryList selectEntry={setSelectedEntry} />
        </div>
        <Entry entry={selectedEntry} />
      </div>
    </div>
  );
}

export default App;
