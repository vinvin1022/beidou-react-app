import React, { Component } from 'react'
import './EmptyShow.scss'

export default class EmptyShow extends Component {
    render() {
        return (
            <div className="emptyShow">
                <img src={require('../../assets/198@2x.png')} alt="暂无数据" />
                <p>暂无数据</p>
            </div>
        )
    }
}
