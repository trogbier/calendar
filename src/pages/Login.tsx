import React, {FC} from 'react';
import {
    Box, Button,
    Container,
    CssBaseline,
    TextField,
    Typography
} from "@material-ui/core";
import {useAppDispatch} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const Login: FC = () => {

    const dispatch = useAppDispatch()

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            user: formData.get('user'),
            password: formData.get('password'),
        };
        // что то с типами
        // @ts-ignore
        dispatch(AuthActionCreators.setLogin(data))
        // @ts-ignore
        dispatch(AuthActionCreators.setLogout(data))
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 15,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="user"
                        label="User name"
                        name="user"
                        autoComplete="user name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;