import React, { Component } from 'react';
import './SelectSchoolSupply.css';

class SelectSchoolSupply extends Component {
    render() {
        const { setItem, removeItem, value, categories } = this.props;
        const optionsList = categories.map((category) => <option value={category.name} key={category.id}>{category.name}</option>)
        return(
            <div className="add-list-container">
                <select className="select-list" name="category" onChange={setItem} defaultValue="">
                    <option value="">Selecione um Item</option>
                    {optionsList}
                </select>
                <div>
                    <label>
                        Quantidade:
                        <input className="input-quantity" value={value.quantity}type="number" name="quantity" min="1" max="99" onChange={ setItem } />
                    </label>
                    <button className="btn-remove danger button-round"onClick={ removeItem }>Remover Item</button>
                </div>
            </div>
        )
    }
}

export default SelectSchoolSupply;