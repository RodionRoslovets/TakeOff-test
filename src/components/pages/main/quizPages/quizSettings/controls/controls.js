import React from 'react';
import Button from '../../../../../button/button'
import { connect } from 'react-redux'
import * as actions from '../../../../../../actions'
import style from './controls.module.scss'

const Controls = ({sendForm, testForm}) => {

    return (
        <div className={style.controls}>
            <Button classes={style.testButton}  listener={testForm}>Тестировать опрос</Button>
            <Button classes={style.continueButton} listener={sendForm}>Далее</Button>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        isSended: state.isSended
    }
}

export default connect(mapStateToProps, actions)(Controls);