import React from 'react';
import '../components/styled.css'
import { useFetch } from '../hooks/useFetch';
import useCounter from '../hooks/useCounter';


const MultipleCustomHook = () => {

    const {count, increment} =useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${count}`);
    const {author, quote} = !!data && data[0];
    return (
        <div>
            <h1>Custom hooks!!</h1>
            <hr/>
            {
                loading
                ?
                (<div>
                    Loading....
                </div>)
                :
                (
                    <blockquote>
                        <p>{quote}</p>
                        <footer>"{author}"</footer>
                    </blockquote>
                )

            }
            <button
                onClick = {increment}
                >Siguiente
            </button>
            
        </div>
       
    );
}
 
export default MultipleCustomHook;