import React, {FC} from 'react';
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {useAppDispatch, useAppSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
    const {isAuth, user} = useAppSelector(state => state.auth)
    const {setLogout} = useAppDispatch()

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 11}}>
                        Calendar
                    </Typography>
                    <Typography component="div" sx={{flexGrow: 1}}>
                        {user.user}
                    </Typography>
                    {isAuth &&
                    // @ts-ignore
                    <Button color="inherit" onClick={setLogout}>Exit</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;