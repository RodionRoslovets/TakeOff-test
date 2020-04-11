import React from 'react';
import Button from '../../../../../../../../button/button'
import { connect } from 'react-redux'
import * as actions from '../../../../../../../../../actions'
import style from './age.module.scss'

const Age = ({ conditions, condId, addRange, removeRange, changeRange }) => {

    const myCondition = conditions.filter((item) => item.key === condId)[0]

    let count = myCondition.ranges.length

    const rangeArray = []

    for (let i = 0; i < count; i++) {
        const item = (
            <div key={myCondition.ranges[i].id} id={myCondition.ranges[i].id} className={style.rangeItem}>
                <div>
                    Диапазон {i + 1}
                </div>
                <div>
                    <label> от
                        <input onChange={(e) => { changeRange(condId, myCondition.ranges[i].id, e.target) }} value={myCondition.ranges[i].from} name="from" type="text" />
                    </label>
                    <label>до
                        <input value={myCondition.ranges[i].to} onChange={(e) => { changeRange(condId, myCondition.ranges[i].id, e.target) }} name="to" type="text" />
                    </label>
                </div>
                <Button classes={style.deleteButton} listener={() => { removeRange(condId, myCondition.ranges[i].id) }}>Удалить диапазон</Button>
            </div>
        )
        rangeArray.push(item)
    }

    return (
        <div>
            {rangeArray}
            <Button classes={style.addButton}  listener={() => { addRange(condId) }}>Добавить диапазон</Button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        conditions: state.conditions
    }
}

export default connect(mapStateToProps, actions)(Age);