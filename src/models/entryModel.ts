import TranslationModel from './translationModel';

interface EntryModel {
    _id: string;
    date: string;
    translations: TranslationModel[];
};

export default EntryModel;