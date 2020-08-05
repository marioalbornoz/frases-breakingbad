import React from 'react';
import '../components/styled.css'
import { useFetch } from '../hooks/useFetch';


const MultipleCustomHook = () => {
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    const {author, quote} = !!data && data[0];
    console.log(author, quote);
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
                        <footer>{author} </footer>
                    </blockquote>
                )

            }
            
        </div>
       
    );
}
 
export default MultipleCustomHook;