import React from 'react';
import Button from '../../../../../../button/button'
import * as actions from '../../../../../../../actions'
import {connect} from 'react-redux'
import CardType from './conditionTypes/cardType/cardType';
import CardStatus from './conditionTypes/cardStatus/cardStatus'
import Age from './conditionTypes/age/age'
import style from './condition.module.scss'

const Condition = ({type, changeType, deleteCond, id, condition}) => {

    const selectChange=(e)=>{
        if(e.target.value === e.target.options[0].label){
            return
        }
        changeType(e.target.value, id)
    }

    return (
        <div className={style.condition}>
            <select type="select" onChange={(e)=>selectChange(e)}>
                <option defaultValue value="empty">Выберите условие</option>
                <option value="age">Возраст респондента</option>
                <option value="card-type">Тип карты лояльности</option>
                <option value="card-status">Статус карты лояльности</option>
            </select>

            {type === 'age' 
                ? <Age condId={id}></Age>
                : type === 'card-type'
                    ? <CardType condId={id} ></CardType> 
                    : type === 'card-status'
                        ? <CardStatus condId={id}></CardStatus> 
                        : ''}

            <Button classes={style.deleteButton} listener={()=>deleteCond(condition.key)}>Удалить условие</Button>
        </div>
    );
}

export default connect(undefined, actions)(Condition);