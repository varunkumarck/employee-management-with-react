import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PublicNavBar from '../../components/PublicNavigation';
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../components/User/userSlice';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" style={{ textAlign: 'center' }}>
      {'Copyright © '}
      All rights reserved by Varun {new Date().getFullYear()}

      {'.'}
    </Typography>
  );
}

interface AdminUser {
  userName: string,
  password: string
}

const admins: AdminUser[] = [{
  userName: 'david',
  password: 'david123'
},
{
  userName: 'varun',
  password: 'varun123'
},
];

const theme = createTheme();

export default function SignIn(props: any) {

  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const dispatch = useAppDispatch();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const user = admins.find(user => user.userName === data.get('userName') && user.password === data.get('password'));

    if (user) {
      dispatch(login({ id: user.userName, name: user.userName }))
      props.history.push('/dashboard');

    } else {
      setIsLoginFailed(true);
    }
  };


  return (
    <>
      <PublicNavBar />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="userName"
                placeholder="User Name"
                name="userName"
                autoFocus
                defaultValue="varun"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                placeholder="Password"
                type="password"
                id="password"
                defaultValue="varun123"
              />
              <div style={{ color: 'red', textAlign: 'center' }} hidden={!isLoginFailed}><label>Invalid Credentials</label></div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
}
