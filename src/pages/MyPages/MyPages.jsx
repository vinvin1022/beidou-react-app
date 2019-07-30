import React, { Component } from 'react'
import RankingWarLayout from '../../components/RankingWarLayout/RankingWarLayout'
import { Switch, Route, NavLink } from 'react-router-dom'
import Lately from '../Lately/Lately';
import Like from '../Like/Like';
import Solicitude from '../Solicitude/Solicitude';
import './MyPages.scss'


export default class MyPages extends Component {
    componentDidMount() {
        this.props.history.push('/myPages/like')
    }
    componentDidUpdate() {
        if (this.props.location.pathname === '/myPages') this.props.history.push('/myPages/like')
    }
    render() {
        return (
            <RankingWarLayout>
                <div className="myPages">
                    <NavLink to="/myPages/like">喜欢</NavLink>
                    <NavLink to="/myPages/lately">最近</NavLink>
                    <NavLink to="/myPages/solicitude">本地</NavLink>
                </div>
                <div style={{ padding: '16px' }}>
                    <Switch>
                        <Route exact path="/myPages/like" component={Like}></Route>
                        <Route exact path="/myPages/lately" component={Lately}></Route>
                        <Route exact path="/myPages/solicitude" component={Solicitude}></Route>
                    </Switch>
                </div>



            </RankingWarLayout>

        )
    }
}
MyPages.defaultProps = {
    time: '2019-07-30 18:00:00'
}
