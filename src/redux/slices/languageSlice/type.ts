import { IComponents } from "./typeComponents";
import { IPage } from "./typePage";

export interface IInitialStateLanguage {
    items: IListLanguage
    languages: Array<IListLanguage>;
}

interface IListLanguage {
    id?: string;

    components?: IComponents;
    page?: IPage;

    massageError: {
        errortext1: string;
        errortext2: string;
        errortext3: string;
        errortext4: string;
        errortext5: string;
        errortext6: string;
        errortext7: string;
        errortext8: string;
    }
}
