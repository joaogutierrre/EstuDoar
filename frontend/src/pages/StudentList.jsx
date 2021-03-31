import React, { Component } from 'react'

class StudentList extends Component {
    render(){
        const { location } = this.props;
        const { items } = location.state;
        const listView = items.map(( item ) => (
            <p>Item: {item.category} Requisitado: {item.quantity} Doados: {item.donated}</p>
        ));
        return(
            <div>
                {listView}
            </div>
        )
    }
}

export default StudentList