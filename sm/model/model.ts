export interface Fn<T> {
    GetValue(): T;
    Check(): boolean;
}
export interface ModelUser {
    email?: string;
}
export interface ModelBuilds {
    _id?: any;
    email?: string;
    date?: string;
    content?: string;
}
export interface Request extends ModelBuilds {}
export class request implements Request, Fn<Request> {
    _id?: any;
    email: string;
    date: string;
    content: string;
    constructor(obj: Request | any) {
        this._id = obj._id;
        this.email = obj.email;
        this.date = obj.date;
        this.content = obj.content;
    }
    GetValue() {
        return {
            email: this.email,
            content: this.content,
            _id: this._id,
            date: this.date,
        };
    }
    Check(): boolean {
        throw new Error("Method not implemented.");
    }
}
export interface Response {}
export class User implements ModelUser, Fn<ModelUser> {
    constructor(obj: ModelUser) {
        this.email = obj.email;
    }
    Check(): boolean {
        if (this.email) {
            return true;
        }
        return false;
    }
    GetValue() {
        return {
            email: this.email,
        };
    }
    email: string;
}

export class Builds implements ModelBuilds, Fn<ModelBuilds> {
    _id?: string;
    date: string;
    content: string;
    email: string;

    constructor(obj: ModelBuilds) {
        this._id = obj.email;
        this.date = obj.date;
        this.content = obj.content;
        this.email = obj.email;
    }
    Check(): boolean {
        if (this.email && this.content) {
            return true;
        }
        return false;
    }
    GetValue() {
        return {
            email: this.email,
            date: this.date,
            content: this.content,
        };
    }
}
