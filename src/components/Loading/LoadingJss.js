import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    shade: {
        width: '100%', height: 'calc(100% - 100px)', position: 'fixed', top: '52px', left: 0, backgroundColor: '#fff',
        '& .MuiCircularProgress-colorPrimary': {
            position: 'absolute',
            top: '40%',
            left: '50%',
            margin: '-20px 0 0 -20px',
            color: 'rgb(220, 0, 78)'
        }
    },
}));
export default useStyles;