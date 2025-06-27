export enum Paths {
    HOME = '/',
    ORDERS = 'orders',
    PRODUCTS = 'products',
    CART = 'cart',
    CUSTOMERS = 'customers',
    BREAD = 'bread',
    DAIRY = 'dairy',
    ERROR_PAGE = 'error',
    BACK = 'back',
    LOGIN = 'login',
    LOGOUT = 'logout',
    SIGNUP = 'signup',
}

export enum Roles {
    ALL = 1,
    USER = 2,
    ADMIN = 3,
    NO_AUTH = 4,
}

export type RouteType = {
    path: Paths,
    title: string,
    role?: Roles
}

export type LoginType = {
    email: string;
    password: string;
}

export type SignUpData = {
    name: string,
    email: string;
    password: string;
}

export type ProductType = {
    id?: string,
    title: string,
    category: string,
    unit: string,
    cost: number,
    img: string,
}

export type Category = {
    category_name: string,
}