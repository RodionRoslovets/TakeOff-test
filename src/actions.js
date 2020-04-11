export const changeType = (val, id)=>({type:'CHANGE_TYPE', payload:val, id:id})
export const deleteCond = (id) =>({type:'DELETE_COND', id:id})
export const addCond = ()=>({type:'ADD_COND'})

export const addCardType = (condId)=>({type:'ADD_CARD_TYPE', id:condId})
export const changeCardType = (condId, typeId, value)=>({type:'CHANGE_CARD_TYPE', id:condId, cardType:typeId, payload:value})
export const removeCardType = (condId, typeId)=>({type:'REMOVE_CARD_TYPE', cond:condId, cardType:typeId})

export const addRange = (id)=>({type:'ADD_RANGE', id:id})
export const changeRange = (condId, rangeId, target) => ({type:'CHANGE_RANGE', cond:condId, range:rangeId, payload:target})
export const removeRange = (condId, rangeId)=>({type:'REMOVE_RANGE', cond:condId, range:rangeId})

export const addStatus = (condId)=>({type:'ADD_STATUS', id:condId})
export const changeStatus = (condId, statusId, value)=>({type:'CHANGE_STATUS', id:condId, status:statusId, payload:value})
export const removeStatus = (condId, statusId)=>({type:'REMOVE_STATUS', cond:condId, status:statusId})

export const sendForm = ()=>({type:'SEND'})
export const testForm = ()=>({type:'TEST'})
export const resetData = ()=>({type:'RESET'})