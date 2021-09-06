import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/appHooks';

import { changeTime } from '@features/user/user.slice';
import styles from './user.module.scss';

const UserDetails: React.FC = () => {

    const userState = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const changeTheTime = () => {
        const currentDate = new Date();
        const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

        dispatch(changeTime(currentTime));
    }

    const handleClick = () => {
        changeTheTime();
    };

    useEffect(() => {
        changeTheTime();
    }, [])

    return (
        <div className={styles.details}>
            Hi! {userState.user.name} {userState.time} 
            <button className={`btn btn-primary btn-icon ${styles.btn}`} onClick={handleClick}><i className="bi-plus"></i></button>
        </div>
    )
};

export default UserDetails;