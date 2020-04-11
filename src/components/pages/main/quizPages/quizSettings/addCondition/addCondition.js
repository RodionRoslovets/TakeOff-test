import React from 'react';
import Button from '../../../../../button/button'
import * as actions from '../../../../../../actions'
import {connect} from 'react-redux'
import style from './addCondition.module.scss'

const AddCondition = ({addCond}) => {
    return (
        <Button classes={style.addCond} listener={()=>{addCond()}}>Добавить условие</Button>
    );
}

export default connect(undefined, actions)(AddCondition);