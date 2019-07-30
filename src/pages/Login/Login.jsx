import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
    signin,
    setLogin,
    setAccount,
    clearAccount
} from "./loginService";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        background: `url(${require('../../assets/loginbg.png')}) no-repeat center`,
        paddingTop: '20vh',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        '& .logo': {
            textAlign: 'center',
            width: '100%',
            padding: '20px 0'
        },
        '& .MuiFormControlLabel-root': {
            padding: '10px 0'
        }
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(2),
    },
    checkbox: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },

    button: {
        margin: theme.spacing(1),
    },
}));

export default function Login(props) {
    const { history } = props;
    const classes = useStyles();
    const [params, setParams] = React.useState({ phone: '18682049762', password: 'Zzz123456' });
    const [remember, setRemember] = React.useState(true);

    const rememberChange = event => {
        setRemember(event.target.value);
    };
    const paramsChange = name => event => {
        setParams({ [name]: event.target.value });
    };


    function login() {
        signin(params)
            .then(res => {
                setLogin(res.data);
                if (remember) {
                    setAccount(params.phone, params.password);
                } else {
                    clearAccount();
                }

                props.login(1);
                history.push('/')
            })
            .catch(error => {
                // this.loading = false;
            });
    }




    return (
        <Container className={classes.root}>
            <form className={classes.container} noValidate autoComplete="off">

                <div className="logo"><img alt="logo" src={require('../../assets/loginlogo.png')} /></div>
                <TextField
                    required
                    id="phone"
                    label="账号"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    value={params.phone}
                    onChange={paramsChange('phone')}
                />

                <TextField
                    required
                    id="password"
                    label="密码"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={params.password}
                    onChange={paramsChange('password')}

                />
                <FormControlLabel

                    control={<Checkbox
                        className={classes.checkbox}
                        checked={remember}
                        onChange={rememberChange}
                        value="checkedB"
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox', }}
                    />}
                    label="记住密码"
                />

                <Button onClick={login} fullWidth variant="contained" color="primary" className={classes.button}>
                    登陆
                </Button>
            </form>
        </Container>
    );
}
