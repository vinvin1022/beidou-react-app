import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    rankContainer: {
        backgroundColor: '#2d67af',
        height: '100%',
        '& .updateTime': {
            color: '#fff',
            opacity: '.7'
        }
    },
    root: {
        backgroundColor: '#2d67af',
        height: '100%'
    },
    appBar: {
        backgroundColor: '#2d67af',
        boxShadow: 'none',
        padding: '0 16px',
        '& .MuiTabs-flexContainer': {
            '& .MuiTab-root': {
                color: 'rgb(150,179,215)',
                '&.Mui-selected': {
                    color: '#fff'
                },
            },
        },
        '& .MuiTabs-indicator': {
            backgroundColor: '#fff',

        }
    },
    rankContent: {
        paddingTop: '48px',
        width: '100%',
        '& .MuiFormControl-root': {
            width: '100%',
        },
        '& .MuiSelect-selectMenu': {
            paddingLeft: '10px'
        },
        '& form': {
            margin: '10px 0'
        }
    },
    rootForm: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    timeTypeSelect: {
        borderRight: '1px solid #2d67af',
        '& .MuiSelect-select': {
            borderRadius: '5px 0 0 5px'
        }
    },
    patternSelect: {
        '& .MuiSelect-select': {
            borderRadius: '0 5px 5px 0'
        }
    },
    swipeableViews: {
        borderRadius: '5px'
    },
    circularProgress: {
        position: 'absolute',
        top: '100rem'
    }
}));

export default useStyles;