import React from 'react';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './LoadingJss'


export default function DelayingAppearance(props) {
    const { loading } = props;
    const classes = useStyles();

    return (
        <Fade in={loading} style={{ transitionDelay: loading ? '800ms' : '0ms' }} unmountOnExit>
            <div className={classes.shade}>
                <CircularProgress />
            </div>
        </Fade>
    );
}
