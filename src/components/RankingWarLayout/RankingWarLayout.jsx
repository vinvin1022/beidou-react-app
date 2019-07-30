import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import buttonAuthorityHOC from '../../hoc/index'
import useStyles from './RankingWarLayoutJss.js'



const WarReportTab = buttonAuthorityHOC(NavLink, true)
const WerformanceRankingTab = buttonAuthorityHOC(NavLink, true)
const MyPagesTab = buttonAuthorityHOC(NavLink, true)



function IconBar(props) {
    return <span className={`tabIcon ${props.classNameIcon}`}></span>
}



function RankingWarLayout(props) {
    const classes = useStyles();

    return (<div className={`rankingWar rankingWarLayout ${classes.root}`}>
        {props.children}
        <div className={classes.rankingWarTabs}>
            <WarReportTab to='/warReport'>
                <IconBar classNameIcon="warReportIcon" />战报
            </WarReportTab>
            <WerformanceRankingTab to='/werformanceRanking'>
                <IconBar classNameIcon="performanceRankingIcon" />业绩排行
            </WerformanceRankingTab>
            <MyPagesTab to='/myPages'>
                <IconBar classNameIcon="performanceRankingIcon" />我的
            </MyPagesTab>
        </div>
    </div>)
}

export default withRouter(RankingWarLayout)