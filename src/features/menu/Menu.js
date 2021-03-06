import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fectchMenuAsync, selectMenu, selectMenuStatus } from './menuSlice';

import Menu from './styled/index';

import NavLink from '../../primitives/NavLink';


const MenuComponent = () => {
    const dispatch = useDispatch();

    const menuList = useSelector(selectMenu);
    const menuStatus = useSelector(selectMenuStatus);

    useEffect(() => {
        dispatch(fectchMenuAsync());
    }, [dispatch])

    return (
        <Menu>
            {
                menuStatus === 'loading' ? 'Ładowanie menu..' : menuList.map( e => <li>
                    <NavLink key={e.id} to={e.endpoint}>
                        {e.title}
                    </NavLink>
                </li>
                )
            }
        </Menu>
    )
}

export default MenuComponent;