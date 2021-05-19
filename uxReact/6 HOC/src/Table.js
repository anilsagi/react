import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <table>
            <thead>
                <tr>
                    <Columns/>
                </tr>
            </thead>
            </table>
        )
    }
}

class Columns extends Component {
    render() {
        return (
        <React.Fragment>
        <td>Lisa</td>
        <td>Harry</td>
        </React.Fragment>
        )
    }
}

export default Table;