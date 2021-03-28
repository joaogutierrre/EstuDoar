import React, { Component } from 'react';

class SelectSchoolSupply extends Component {
    render() {
        const { setItem, removeItem, value } = this.props;
        return(
            <div>
                <select name="name" onChange={setItem}>
                        <option value="caderno">Caderno</option>
                        <option value="lapis">Lapis</option>
                        <option value="livro">Livro</option>
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