export class LoginService {
    storageUserName: string = "userName";

    public isAuthenticated(): boolean {
        return !!localStorage.getItem(this.storageUserName);
    }

    public login(userName: string): void {
        if (userName) {
            localStorage.setItem(this.storageUserName, userName);
        }
    }

    public getUserName(): string{
        return localStorage.getItem(this.storageUserName);
    }
};