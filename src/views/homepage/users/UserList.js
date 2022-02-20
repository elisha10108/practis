import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TriggerCart} from "../../../store/cart/actions";
import {getUsers} from "../../../store/user/actions";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function UserList() {
    // const dispatch = useDispatch();
    // let users =[];
    // let x = useSelector(state => state.open.isOpen)
    // users = useSelector(state => state.users.users)
    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }
    return (<>
        <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
            <button onClick={()=>handleClick('en')} >
                English
            </button>
            <button onClick={()=>handleClick('he')} >
               he
            </button>
        </nav>
        <header className="App-header">
            <p>
                <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3>
            </p>
        </header>



        {/*<h1>Result</h1>*/}
        {/*{users.map((item, i) => {*/}
        {/*    return <p key={i}>{item.email}</p>*/}
        {/*})}*/}
        {/*<button onClick={() => dispatch(getUsers())}>*/}
        {/*    get user*/}
        {/*</button>*/}
    </>);
}