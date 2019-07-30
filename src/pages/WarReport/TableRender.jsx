import React, { Component } from 'react'

import theadFiled from './theadFiled'


export default class TableRender extends Component {


    render() {
        const { desserts, tabtype } = this.props;

        return (
            <div className={'tableRender'}>
                <table cellPadding="0">
                    <thead>
                        <tr className={'th'}>
                            {theadFiled[tabtype].map((item) => {
                                return (<th className={item.value} key={item.value}>{item.text}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {desserts.map(tritem => {
                            return (
                                <tr key={tritem.key} className={`${tritem.isAll ? 'isAll' : ''}`}>
                                    {theadFiled[tabtype].map((tditem) => {
                                        return (<td className={tditem.value} key={tditem.value}>{tritem[tditem.value]}</td>)
                                    })}
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div >
        )

    }
}







