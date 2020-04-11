import React from 'react';
import CrumbsList from './crumbsList/crumbsList'
import style from './breadcrumbs.module.scss'

const BreadCrumbs = () => {
    return (
        <div className={style.breadcrumbs}>
            <CrumbsList></CrumbsList>
        </div>
    );
}

export default BreadCrumbs;