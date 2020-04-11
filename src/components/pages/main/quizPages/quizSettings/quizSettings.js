import React, { useState } from 'react';
import QuizConditionsList from './quizConditionsList/quizConditionsList'
import Controls from './controls/controls'
import AddCondition from './addCondition/addCondition'
import style from './quizSettings.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

const QuizSettings = ({ data, sendType, resetData }) => {

    const [message, setMessage] = useState('')

    const Message = ({ message }) => {
        return (
            <p>{message}</p>
        )
    }

    const send = async (sendType) => {
        let body = JSON.stringify(data)

        if(!data.length){
            setMessage('Создайет опрос перед отправкой')
            setTimeout(() => {
                setMessage('')
            }, 2000)
            return
        }

        try {
            let sendletter

            if (sendType === 'send' && data.length) {
                sendletter = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: 'POST',
                    body: body
                })

                let response = await sendletter.status

                if (response === 201) {
                    setMessage('Опрос успешно создан')
                    setTimeout(() => {
                        resetData()
                        setMessage('')
                    }, 2000)
                }

            } else if (sendType === 'test' && data.length) {
                sendletter = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: 'POST',
                    body: body
                })

                let response = await sendletter.status

                if (response === 201) {
                    setMessage('Опрос отправлен на тестирование')
                    setTimeout(() => {
                        resetData()
                        setMessage('')
                    }, 2000)
                }
            }
        }
        catch (err) {
            setMessage('Произошла непредвиденная ошибка')
            setTimeout(() => {
                resetData()
                setMessage('')
            }, 2000)
            console.log(err)
        }

    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                if (sendType) {
                    send(sendType)
                }
                return
            }}
            className={style.quizConditions}>
            <QuizConditionsList></QuizConditionsList>
            <Message message={message}></Message>
            <AddCondition></AddCondition>
            <Controls></Controls>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.conditions,
        sendType: state.sendType
    }
}

export default connect(mapStateToProps, actions)(QuizSettings);