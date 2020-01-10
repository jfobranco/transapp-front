import React, { useState, useEffect } from "react";

import { getEntries } from '../services/Service';
import EntryModel from '../models/entryModel';

interface IProps {
    selectEntry: React.Dispatch<React.SetStateAction<EntryModel>>;
}

interface IState {
    entries: EntryModel[]
}

const EntryList = (props: IProps, state: IState) => {
  const [entries, setEntries] = useState();

  useEffect(() => {
    getEntries()
    .then(data => { 
        setEntries(data)
    })
  }, [state.entries]);

  return (
      <div>
        {  entries ? entries.map(
              (entry: EntryModel) => <button key={entry._id} onClick={ () => props.selectEntry(entry) }>{entry.date.substr(0, 10)}</button>
        ) : ''
        }
    </div>
  );
};

export default EntryList;