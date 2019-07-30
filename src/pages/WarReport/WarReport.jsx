
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import { typesTabs, queryWarNews } from './WarReportService';
import TableRender from './TableRender';
import './WarReport.scss'
import EmptyShow from '../../components/EmptyShow/EmptyShow';
import UpdateTime from '../../components/UpdateTime/UpdateTime';
import Loading from '../../components/Loading/Loading';
import RankingWarLayout from '../../components/RankingWarLayout/RankingWarLayout'


function _formateDesserts(res) {
    const desserts = [];
    for (const iterator of res.result) {
        const tmpObj = { isAll: true };
        const tmpArr = [];
        for (const key in iterator) {
            if (iterator.hasOwnProperty(key)) {
                const element = iterator[key];
                if (key !== "children") {
                    tmpObj[key] = element;
                }
            }
        }
        tmpArr.push(tmpObj);
        if (Array.isArray(iterator.children)) {
            tmpArr.push(...iterator.children);
        }
        desserts.push(...tmpArr);
    }
    return desserts;
}




const useStyles = makeStyles(theme => {
    return ({
        root: {
            backgroundColor: theme.palette.background.paper,
            '& .emptyShow': {
                position: 'absolute',
                backgroundColor: '#fff'
            }
        },
        tabs: {
            backgroundColor: theme.background,
            '& .MuiTabs-indicator': {
                backgroundColor: theme.selectedTabColor
            },
            '& .Mui-selected': {
                color: theme.selectedTabColor
            }
        }
    })
});

function useQueryWarNews(tabtype) {
    const [stateData, setStateData] = React.useState({ loading: false, desserts: [], updatetime: '2019-07-21 11:51:05' });
    React.useEffect(() => {
        setStateData((preState) => {
            return { ...preState, loading: true }
        })
        queryWarNews({ orderType: tabtype + 1 }).then(res => {
            setStateData((preState) => {
                return { ...preState, loading: false, desserts: _formateDesserts(res), updatetime: res.msg }
            })
        });
    }, [tabtype])
    return stateData
}

function ShowTable({ updatetime, desserts, tabtype }) {
    return (
        <div>
            <div className="h1Title"><UpdateTime time={updatetime}></UpdateTime></div>
            <TableRender desserts={desserts} tabtype={tabtype}></TableRender>
        </div>
    )
}

export default function WarReport(props) {
    const classes = useStyles();
    const [tabtype, setTabtype] = React.useState(0);
    const { desserts, updatetime, loading } = useQueryWarNews(tabtype);
    function handleChange(event, newValue) {
        setTabtype(newValue);
    }

    let tableConent;
    if (desserts.length > 0) {
        tableConent = <ShowTable classes={classes} updatetime={updatetime} desserts={desserts} tabtype={tabtype}></ShowTable>
    } else {
        tableConent = <EmptyShow></EmptyShow>
    }

    return (

        <RankingWarLayout>
            <div className={`warReport ${classes.root}`}>
                <AppBar position="fixed" color="default">
                    <Tabs
                        className={classes.tabs}
                        value={tabtype}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        {typesTabs.map((item) => <Tab key={item.title} label={item.title} />)}
                    </Tabs>
                </AppBar>
                <div className="tableConent">
                    {tableConent}
                </div>
                <Loading loading={loading}></Loading>
            </div>
        </RankingWarLayout>

    );
}
