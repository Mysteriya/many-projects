export interface IPage {
    receivingPictures: IReceivingPictures;
    speedTest: ISpeedTest;
    todoList: ITodoList;

    home: TypeHome;
}

interface IReceivingPictures {
    buttonText1: string;
    buttonBack: string;
    loading: string;
    errorAlert: string;
}
interface ISpeedTest {
    grade: {
        turtle: string
        deer: string
        tiger: string
        wolf:string
        racingCar: string
        cheat: string       
    },

    clickSpeed: string,
    clickSec: string,
    dialed: string,
    clickText: string
    sec: string
    youGrade: string
    againFroze: string
    quantity: string
    timeText: string
}
interface ITodoList {
    main:{
        windowEditNameAndDescription: string;
        exit: string;
        ChangeName: string;
        ChangeDescripton: string;
        apply: string;
        ListTaskVoid: string;
    },
    control: {
        inputName: string;
        inputDescription: string;
        addTask: string;
        lineSearch: string;

        typeSortText: string;
        typeSortNameText: string;
        typeSortDescriptionText: string;
    },
    form: {
        editNameAndDescription: string;
        removeTask: string;
    }
    full: {
        errorText: string;
        loading: string;
        back: string;
    }
}

type TypeHome = {
    buttonText: string;
    text1: string;
    text2: string;
}