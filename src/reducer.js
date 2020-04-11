const shortid = require('shortid');

const conditions = []
const sendType = ''

function addItem(prevArr, template, itemProperty, newItem) {
    return prevArr.map((item) => {
        if (item.key === template) {
            item[itemProperty] = [...item[itemProperty], newItem]
        }
        return item
    })
}

function changeProp(prevArr, condId, propArr, propId, propName, newValue) {
    const newArr = prevArr

    const conditionIndex = newArr.indexOf(newArr.filter((item) => item.key === condId)[0])

    const propIndex = newArr[conditionIndex][propArr].indexOf(newArr[conditionIndex][propArr].filter((item) => item.id === propId)[0])

    newArr[conditionIndex][propArr][propIndex][propName] = newValue

    return newArr
}

function removeItem(prevArr, condId, propArr, propId) {
    const newArr = prevArr

    const conditionIndex = newArr.indexOf(newArr.filter((item) => item.key === condId)[0])

    const propIndex = newArr[conditionIndex][propArr].indexOf(newArr[conditionIndex][propArr].filter((item) => item.id === propId)[0])

    newArr[conditionIndex][propArr].splice(propIndex, 1)

    return newArr
}

const reducer = (state = { conditions, sendType }, action) => {
    switch (action.type) {
        case 'CHANGE_TYPE':
            const newItems = state.conditions.map((item) => {
                if (item.key === action.id) {
                    switch (action.payload) {
                        case 'age':
                            item = {
                                key: item.key,
                                type: action.payload,
                                ranges: [
                                    { from: '', to: '', id: shortid.generate() }
                                ]
                            }
                            break
                        case 'card-type':
                            item = {
                                key: item.key,
                                type: action.payload,
                                types: [
                                    { type: 'gold', id: shortid.generate() }
                                ]
                            }
                            break
                        case 'card-status':
                            item = {
                                key: item.key,
                                type: action.payload,
                                statuses: [
                                    { status: 'active', id: shortid.generate() }
                                ]
                            }
                            break
                        default:
                            item = {
                                key: item.key,
                                type: action.payload
                            }
                    }
                }
                return item
            }
            )
            return state = {
                ...state,
                conditions: newItems
            }
        case 'DELETE_COND':
            const newConditions = state.conditions

            const ind = newConditions.indexOf(newConditions.filter((item) => item.key === action.id)[0])

            newConditions.splice(ind, 1)

            return state = {
                ...state,
                conditions: [...newConditions]
            }
        case 'ADD_COND':
            const newCondition = {
                type: 'empty',
                key: shortid.generate()
            }

            return state = {
                ...state,
                conditions: [...state.conditions, newCondition]
            }
        case 'ADD_RANGE':
            return state = {
                ...state,
                conditions: [...addItem(state.conditions, action.id, 'ranges', { from: '', to: '', id: shortid.generate() })]
            }
        case 'CHANGE_RANGE':
            let changedWithRange

            if (action.payload.name === 'from') {
                changedWithRange = changeProp(state.conditions, action.cond, 'ranges', action.range, 'from', action.payload.value)
            } else if (action.payload.name === 'to') {
                changedWithRange = changeProp(state.conditions, action.cond, 'ranges', action.range, 'to', action.payload.value)
            }
            return state = {
                ...state,
                conditions: [...changedWithRange]
            }
        case 'REMOVE_RANGE':
            return state = {
                ...state,
                conditions: [...removeItem(state.conditions, action.cond, 'ranges', action.range)]
            }
        case 'ADD_CARD_TYPE':
            return state = {
                ...state,
                conditions: [...addItem(state.conditions, action.id, 'types', { type: 'gold', id: shortid.generate() })]
            }
        case 'CHANGE_CARD_TYPE':
            return state = {
                ...state,
                conditions: [...changeProp(state.conditions, action.id, 'types', action.cardType, 'type', action.payload)]
            }
        case 'REMOVE_CARD_TYPE':
            return state = {
                ...state,
                conditions: [...removeItem(state.conditions, action.cond, 'types', action.cardType)]
            }
        case 'ADD_STATUS':
            return state = {
                ...state,
                conditions: [...addItem(state.conditions, action.id, 'statuses', { status: 'active', id: shortid.generate() })]
            }
        case 'CHANGE_STATUS':
            return state = {
                ...state,
                conditions: [...changeProp(state.conditions, action.id, 'statuses', action.status, 'status', action.payload)]
            }
        case 'REMOVE_STATUS':
            return state = {
                ...state,
                conditions: [...removeItem(state.conditions, action.cond, 'statuses', action.status)]
            }
        case 'SEND':
            return state = {
                ...state,
                sendType:'send'
            }
        case 'TEST':
            return state = {
                ...state,
                sendType:'test'
            }
        case 'RESET':
            return state = {
                conditions: [],
                sendType:''
            }
        default:
            return state
    }
}

export default reducer