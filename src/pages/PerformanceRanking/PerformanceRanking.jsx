import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Container from '@material-ui/core/Container';

import { typesTabs, dateTypes, queryOrderRank, queryPattern } from './performanceRankingService';
import useStyles from './PerformanceRankingJss';

import Grid from '@material-ui/core/Grid';
import BdSearch from './BdSearch';
import RankingList from './RankingList';
import EmptyShow from '../../components/EmptyShow/EmptyShow';
import UpdateTime from '../../components/UpdateTime/UpdateTime';

import Loading from '../../components/Loading/Loading'



import RankingWarLayout from '../../components/RankingWarLayout/RankingWarLayout'



function useQueryPattern() {
    const [patterns, setPatterns] = React.useState([]);
    React.useEffect(() => {
        queryPattern().then(res => {
            if (!res.result) {
                res.result = [];
            }
            res.result.unshift({ optionId: "0", optionName: "全部" });
            setPatterns(res.result);
        });
    }, []);
    return patterns;
}

function useQueryOrderRank(orderRankParams) {
    const [updateTime, setUpdateTime] = React.useState('');
    const [ranks, setRanks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const params = _setQueryOrderRankParams(orderRankParams);
        setLoading(true);
        queryOrderRank(params).then(res => {
            setUpdateTime(res.msg);
            setRanks(res.result);
            setLoading(false)

        });
    }, [orderRankParams])
    return { updateTime, ranks, loading }
}

function _setQueryOrderRankParams(data) {
    const queryOrderRankParams = {};
    queryOrderRankParams['deptType'] = data['depttype'];
    queryOrderRankParams['timeType'] = data['timetype'];
    queryOrderRankParams['pattrnId'] = data['pattrnid'];
    if (data['pattrnid'] !== '0') {
        queryOrderRankParams["pattrnId"] = data['pattrnid'];
    } else {
        delete queryOrderRankParams["pattrnId"];
    }
    return queryOrderRankParams
}



export default function PerformanceRanking() {
    const classes = useStyles();

    const patterns = useQueryPattern();
    const [orderRankParams, setOrderRankParams] = React.useState({ depttype: 0, timetype: '1', pattrnid: "0" });
    const { updateTime, ranks, loading } = useQueryOrderRank(orderRankParams);

    function handleChange(event, depttype) {
        setOrderRankParams({ ...orderRankParams, depttype })
    }

    function getSearchData(data) {
        setOrderRankParams({ ...orderRankParams, ...data });
    }



    return (
        <RankingWarLayout>
            <Container className={classes.rankContainer}>
                <div className={`performanceRanking ${classes.rootForm}`}>
                    <AppBar className={classes.appBar} position="fixed" color="default">
                        <Tabs
                            value={orderRankParams.depttype}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                        >
                            {typesTabs.map((tabs) => (<Tab key={tabs.title} label={tabs.title} />))}
                        </Tabs>
                    </AppBar>


                    <div className={classes.rankContent}>
                        <form>
                            <Grid container spacing={0}>
                                <Grid className={classes.timeTypeSelect} item xs={5}>
                                    <BdSearch name="timetype" defaultvalue={orderRankParams.timetype} optionsrn={dateTypes} getSearchData={getSearchData} />
                                </Grid>
                                <Grid className={classes.patternSelect} item xs={7}>
                                    <BdSearch name="pattrnid" defaultvalue={orderRankParams.pattrnid} optionsrn={patterns} getSearchData={getSearchData} />
                                </Grid>
                            </Grid>
                        </form>
                        <UpdateTime time={updateTime}></UpdateTime>

                        {(ranks && ranks.length > 0) && <RankingList ranks={ranks}></RankingList>}
                        {(ranks && ranks.length === 0) && <EmptyShow></EmptyShow>}


                        <Loading loading={loading}></Loading>

                    </div>
                </div>

            </Container>
        </RankingWarLayout>
    );
}
