import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 120,
        '& .MuiSelect-selectMenu': {
            color: '#fff'
        },
        '& .MuiSelect-icon': {
            color: '#fff'
        },
        '& .MuiInput-underline:before,& .MuiInput-underline:after': {
            borderBottom: 'none'
        },
        '& .MuiSelect-root': {
            backgroundColor: theme['c#265ba0'],
            fontSize: '.875rem'
        },
    },
    menuItem: {
        fontSize: '.875rem'
    }
}));


export default function BdSearch(props) {
    const { optionsrn, getSearchData, name } = props;
    const classes = useStyles();
    const [timeType, setTimeType] = React.useState({ [name]: '1' });
    function handleChange(event) {
        setTimeType({ [name]: event.target.value });
        getSearchData && getSearchData({ [name]: event.target.value });
    }

    React.useEffect(() => {
        const value = (optionsrn[0] && optionsrn[0].optionId);
        if (value) { setTimeType({ [name]: value }) }
    }, [optionsrn, name])



    return (<FormControl variant="filled" className={classes.formControl}>
        <Select
            value={timeType[name]}
            onChange={handleChange}
            inputProps={timeType}
        >
            {optionsrn.map(item => (<MenuItem className={classes.menuItem} key={item.optionName} value={item.optionId}>{item.optionName}</MenuItem>))}
        </Select>
    </FormControl>)
}

BdSearch.propTypes = {
    optionsrn: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired
}

