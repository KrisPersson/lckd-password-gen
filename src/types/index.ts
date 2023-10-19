
export interface DatabaseSavedItem {
    savedUrl: string;
    savedUsername: string;
    savedPassword: string;
    id: string;
}
export interface INewItem {
    savedUrl: string;
    savedUsername: string;
    savedPassword: string;
}

export interface IUserLoginSignup {
    username: string;
    password: string;
}