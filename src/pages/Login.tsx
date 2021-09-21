import React, {FC} from 'react';
import {
    Box, Button,
    Container,
    CssBaseline,
    TextField,
    Typography
} from "@material-ui/core";
import {useAppDispatch, useAppSelector} from "../hooks/useTypedSelector";

const Login: FC = () => {
    const {error, isLoading} = useAppSelector(state => state.auth)

    const {setLogin, setError} = useAppDispatch()

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            user: `${formData.get('user')}`,
            password: `${formData.get('password')}`,
        };
        if (data.user && data.password) {
            setLogin(data)
        } else {
            setError('Пустые значения')
        }
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
                <Typography component="h1" variant="h5" color={"red"}>
                    {error}
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
                        disabled={isLoading}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;