import React from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/appHooks';

import { changeTime } from '@features/user/user.slice';

const UserDetails: React.FC = () => {

    const userState = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const handleClick = () => {

        const currentDate = new Date();
        const currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

        dispatch(changeTime(currentTime));
    };

    return (
        <div>Hi! {userState.user.name} {userState.time} <button onClick={handleClick}>+</button></div>
    )
};

export default UserDetails;