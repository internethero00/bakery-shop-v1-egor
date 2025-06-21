import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Paths, Roles, type RouteType} from "./utils/shop-types.ts";
import Home from "./components/Home.tsx";
import Customers from "./components/Customers.tsx";
import Orders from "./components/Orders.tsx";
import ShoppingCart from "./components/ShoppingCart.tsx";
import Dairy from "./components/Dairy.tsx";
import Bread from "./components/Bread.tsx";
import {navItems, productItems} from "./configurations/nav-config.ts";
import ErrorPage from "./components/ErrorPage.tsx";
import NavigatorDeskTop from "./components/navigation/NavigatorDeskTop.tsx";
import Logout from "./components/Logout.tsx";
import Login from "./components/singIn/Login.tsx";
import {useAppSelector} from "./redux/hooks.ts";
import Registration from "./components/singIn/Registration.tsx";


function App() {
    const {authUser} = useAppSelector(state => state.auth);

    const predicate = (item: RouteType) => {
        return (item.role === Roles.ALL
            || item.role === Roles.USER && authUser && !(item.path === Paths.CART && authUser.includes('admin'))
            || item.role === Roles.ADMIN && authUser && authUser.includes('admin')
            || item.role === Roles.NO_AUTH && !authUser);
    }

    const getRoutes = () => {
        return navItems.filter(item =>
            predicate(item)
        );
    }

    return (
        <Routes>
            {/*<Route path={Paths.HOME} element={<Layout/>}>*/}
            {/*<Route path={Paths.HOME} element={<Navigator items={navItems}/>}>*/}
            {/*<Route path={Paths.HOME} element={<NavigatorDeskTop items={navItems}/>}>*/}
            <Route path={Paths.HOME} element={<NavigatorDeskTop items={getRoutes()}/>}>
                <Route index element={<Home/>}/>
                <Route path={Paths.CUSTOMERS} element={<Customers/>}/>
                <Route path={Paths.ORDERS} element={<Orders/>}/>
                <Route path={Paths.CART} element={<ShoppingCart/>}/>
                <Route path={Paths.LOGIN} element={<Login/>}/>
                <Route path={Paths.LOGOUT} element={<Logout/>}/>
                <Route path={Paths.SIGNUP} element={<Registration/>}/>
                {/*<Route path={Paths.PRODUCTS} element={<Products/>}/>*/}
                {/*<Route path={Paths.PRODUCTS} element={<ProductLayout/>}>*/}
                <Route path={Paths.PRODUCTS} element={<NavigatorDeskTop items={productItems}/>}>
                    <Route path={Paths.DAIRY} element={<Dairy/>}/>
                    <Route path={Paths.BREAD} element={<Bread/>}/>
                    <Route path={Paths.BACK} element={<Navigate to={Paths.HOME}/>}/>
                </Route>
            </Route>
            <Route path={"*"} element={<Navigate to={`/${Paths.ERROR_PAGE}`}/>}/>
            <Route path={Paths.ERROR_PAGE} element={<ErrorPage/>}/>
        </Routes>
    )
}

export default App
