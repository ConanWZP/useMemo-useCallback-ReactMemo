import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import cl from 'classnames';

import style from './index.module.scss';

import FactorialCalculation from "../FactorialCalculation";
import MyTime from "../MyTime";

const themes = {
    white: 'white',
    black: 'black',
};



function MyHeavyComponent() {
    console.log('re-render MyHeavyComponent')
    const [ theme, setTheme ] = useState(themes.white);


   /* const myArray = [
        {id: 1, name: 'Alex'},
        {id:2, name: 'Kate'}
    ]*/
    const myArray = useMemo(() => {
        return [
            {id: 1, name: 'Alex'},
            {id:2, name: 'Kate'}
        ]
    }, [])

    const onClick = useCallback(() => {
        console.log('Нет ререндера')
    }, [])

  // const factorialCurrentNum = typeof currentNum === 'number' && currentNum <= MAX_NUMBER ? factorial(currentNum) : null;


  /*   const factorialCurrentNum = useMemo(() => {
        return typeof currentNum === 'number' && currentNum <= MAX_NUMBER ? factorial(currentNum) : null
     }, [currentNum])*/



    return (
        <div className={cl(style.heavyComponent, theme === themes.white ? style.heavyComponentWhite : style.heavyComponentBlack)}>
            <button
                className={style.button}
                onClick={() => {
                    if (theme === themes.white) {
                        setTheme(themes.black)
                    } else {
                        setTheme(themes.white)
                    }
                }}
            >
                Change theme
            </button>
            <FactorialCalculation myArray={myArray} onClick={onClick} />
            <MyTime />
        </div>
    );
}

export default MyHeavyComponent;

