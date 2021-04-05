import React, { Component } from 'react';
import './StudentList.css';
class StudentList extends Component {
    render(){
        const { location } = this.props;
        const { items } = location.state;
        const listView = items.map(( item, index ) => (
            <div  key={ index } className="card-container list-card">
            <li>ITEM: {item.category.toUpperCase()}</li>
            <li>PEDIDOS: {item.quantity}</li>
            <li>DOADOS: {item.donated}</li>
            </div>
        ));
        return(
            <div className="dashboard-my-list">
                <div className="f-column">
                    <h1 className="bg-marker">MINHA LISTA</h1>
                </div>
                <div className="list-container">
                    <ul>
                        {listView}
                    </ul>
                </div>
            </div>
        )
    }
}

export default StudentList