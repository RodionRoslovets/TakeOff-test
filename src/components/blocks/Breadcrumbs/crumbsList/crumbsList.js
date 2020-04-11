import React from 'react';
import Crumb from '../crumb/crumb'

const CrumbsList = () => {
    return (
        <ul>
            <Crumb><i className="fas fa-home"></i> /</Crumb>
            <Crumb>Опросы /</Crumb>
            <Crumb>Создать опрос</Crumb>
        </ul>
    );
}

export default CrumbsList;