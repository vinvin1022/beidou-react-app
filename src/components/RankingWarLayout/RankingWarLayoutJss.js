
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme['c#2d67af'],
        position: 'absolute',
        minHeight: '100%',
        paddingBottom: '48px'
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: theme.palette.background.paper,
    },
    rankingWarTabs: {
        top: 'auto',
        bottom: 0,
        backgroundColor: theme.palette.background.paper,
        position: 'fixed',
        minHeight: '48px',
        width: '100%',
        display: 'flex',
        '& a': {
            flex: 1,
            fontSize: '12px',
            color: 'rgb(159,157,161)',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '6px',
            textDecoration: 'none',
            textAlign: 'center',
            '& span': {
                display: 'block'
            },
            '& .tabIcon': {
                width: '21px',
                height: '21px',
                margin: '0 auto'
            },
            '& .warReportIcon': {
                background: `url(${require('../../assets/zb@2x.png')}) center center /  21px 21px no-repeat`
            },
            '& .performanceRankingIcon': {
                background: `url(${require('../../assets/ph@2x.png')}) center center /  21px 21px no-repeat`
            },
            '&.active': {
                color: theme.selectedTabColor,
                '& .warReportIcon': {
                    background: `url(${require('../../assets/zba@2x.png')}) center center / 21px 21px no-repeat`
                },
                '& .performanceRankingIcon': {
                    background: `url(${require('../../assets/pha@2x.png')}) center center / 21px 21px no-repeat`
                }
            },
        },


    }
}));

export default useStyles;
