import React from 'react';
import Condition from './condition/condition'
import { connect } from 'react-redux'

const QuizConditionsList = ({ list }) => {
    const newArr = list.map((item, index) => {
        return (
            <li key={item.key} >
                <p>Условие {index + 1}</p>
                <Condition type={item.type} id={item.key} condition={item}></Condition>
            </li>
        )
    })

    return (
        <ul>
            {newArr}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        list: state.conditions
    }
}

export default connect(mapStateToProps, undefined)(QuizConditionsList);