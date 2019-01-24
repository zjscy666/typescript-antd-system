export interface Ir {
    key: string;
    subs?: Ir[];
    title?: string;
    scan?: string;
    component?: string|undefined;
    icon?: string|undefined;
}