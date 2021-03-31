import React, { Component } from 'react';

class SelectSchoolSupply extends Component {
    render() {
        const { setItem, removeItem, value, categories } = this.props;
        const optionsList = categories.map((category) => <option value={category.id} key={category.id}>{category.name}</option>)
        return(
            <div>
                <select name="name" onChange={setItem}>
                    {optionsList}
                </select>
                <label>
                    Quantidade:
                    <input value={value.quantity}type="number" name="quantity" min="1" max="99" onChange={ setItem } />
                </label>
                <button onClick={ removeItem }>Remover Item</button>
            </div>
        )
    }
}

export default SelectSchoolSupply;