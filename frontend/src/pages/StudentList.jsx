import React, { Component } from 'react';
import './StudentList.css';
class StudentList extends Component {
    render(){
        const { location } = this.props;
        const { items } = location.state;
        const listView = items.map(( item, index ) => (
            <p key={ index }>Item: {item.category} Requisitado: {item.quantity} Doados: {item.donated}</p>
        ));
        return(
            <div className="dashboard-my-list">
                {listView}
            </div>
        )
    }
}

export default StudentList