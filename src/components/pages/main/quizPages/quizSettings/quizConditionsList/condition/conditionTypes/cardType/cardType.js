import React from 'react';
import Button from '../../../../../../../../button/button'
import { connect } from 'react-redux'
import * as actions from '../../../../../../../../../actions'
import style from './cardType.module.scss'

const CardType = ({ conditions, condId, addCardType, removeCardType, changeCardType }) => {

    const Type = ({changeListener, val}) => {
        return (
            <select value={val} onChange={changeListener}>
                <option defaultValue value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="platinum">Platinum</option>
                <option value="visa">Visa</option>
            </select>
        )
    }

    const myCondition = conditions.filter((item)=>item.key === condId)[0]

    const count = myCondition.types.length

    const typesArray = []

    for (let i = 0; i < count; i++) {
        const item = (
            <label key={myCondition.types[i].id}> Тип {i + 1}
                <Type val={myCondition.types[i].type} changeListener={(e)=>{changeCardType(condId, myCondition.types[i].id, e.target.value)}}></Type>
                <Button classes={style.deleteButton} listener={() => { removeCardType(condId, myCondition.types[i].id) }}>Удалить тип карты</Button>
            </label>
        )
        typesArray.push(item)
    }

    return (
        <div className={style.cardType}>
            {typesArray}
            <Button classes={style.addButton} listener={() => { addCardType(condId) }}>Добавить тип карты</Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        conditions: state.conditions
    }
}

export default connect(mapStateToProps, actions)(CardType);