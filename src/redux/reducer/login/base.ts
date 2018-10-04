import { IBaseAction } from "../../actions/base";

export interface IBaseReActions {
    readonly type: string;
    data: IBaseAction;
};