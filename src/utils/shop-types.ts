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