import {type FC, useState} from 'react';
import type {RouteType} from "../../utils/shop-types.ts";
import {AppBar, Box, Tab, Tabs} from "@mui/material";
import * as React from "react";
import {Outlet, Link} from "react-router-dom";

import {useAppSelector} from "../../redux/hooks.ts";



type Props = {
    items: RouteType[]
    sub?: string
}

const NavigatorDeskTop: FC<Props> = ({items}) => {
    const nickname = useAppSelector(state => state.auth.authName);
    const [value, setValue] = useState(0)
    const handleOnChange = (_e: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }


    return (
        <Box sx={{mt: "50px"}}>
            <AppBar sx={{backgroundColor: "lightgray"}}>
                <Tabs value={value} onChange={handleOnChange}>
                    {items.map(item =>
                        <Tab key={item.path} component={Link} to={item.path} label={item.title} />
                    )}
                    <Tab sx={{marginLeft: 'auto'}} disabled key={"log"} label={nickname} />
                </Tabs>
            </AppBar>
            <Outlet/>
        </Box>
    );
};

export default NavigatorDeskTop;