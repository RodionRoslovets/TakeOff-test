import React from 'react';
import Button from '../../../../../../../../button/button'
import * as actions from '../../../../../../../../../actions'
import {connect} from 'react-redux'
import style from './cardStatus.module.scss'

const CardStatus = ({conditions, condId, addStatus, removeStatus, changeStatus}) => {

    const Status = ({changeListener, val}) => {
        return (
            <select value={val} onChange={changeListener}>
                <option defaultValue value="active">Активна</option>
                <option value="unactive">Неактивна</option>
            </select>
        )
    }

    const myCondition = conditions.filter((item)=>item.key === condId)[0]

    const count = myCondition.statuses.length

    const statusesArray = []

    for (let i = 0; i < count; i++) {
        const item = (
            <label key={myCondition.statuses[i].id}> Статус {i + 1}
                <Status val={myCondition.statuses[i].status} changeListener={(e)=>{changeStatus(condId, myCondition.statuses[i].id, e.target.value)}}></Status>
                <Button classes={style.deleteButton} listener={()=>{removeStatus(condId, myCondition.statuses[i].id)}}>Удалить статус карты</Button>
            </label>
        )
        statusesArray.push(item)
    }

    return (
        <div className={style.cardStatus}>
            {statusesArray}
            <Button classes={style.addButton} listener={()=>{addStatus(condId)}}>Добавить статус карты</Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        conditions: state.conditions
    }
}

export default connect(mapStateToProps, actions)(CardStatus);