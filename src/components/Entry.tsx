import React from "react";

import EntryModel from '../models/entryModel';

interface IProps {
    entry: EntryModel;
}

const Entry = (props: IProps) => {
    const translations = props.entry.translations.map(
    (translation) => 
        <div key={translation._id}>
            {translation.language}<br />
            {translation.title}<br />
            {translation.text}
        </div>)

  return (
    <div>
        { props.entry.date ? props.entry.date : '' }
        { translations }
    </div>
  );
};

export default Entry;