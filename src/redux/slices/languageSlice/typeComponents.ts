export interface IComponents {
    settings: ISettings;
    header: TypeHeader;
}

type TypeHeader = {
    backMainPage: string;
    receivingPictures: string;
    taskList: string;
    calculator: string;
    speedClickTest: string;
    converterCurrently: string;
    graphOfFunction: string;
}
interface ISettings {
    changeAccount: string;
    accauntSettings: string;
    exit: string;
    controlDate: string;
    confidentiality: string;
    changeTheme: string;
    changeLanguage: string;
    settings: string;
    about: string;
    referenceMaterial: string;
}