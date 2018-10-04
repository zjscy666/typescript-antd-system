export interface IBaseAction {
    loginStatus?: boolean;
    userInfo?: {
        username: string;
        password: string;
    };
    username?: string;
    password?: string;
}

export interface IBaseComAction extends IBaseAction {
    login: IBaseAction;
}

export interface IOwnstate {
    userName: string;
    pws: string;
}