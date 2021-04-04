
import React, { useState } from 'react';
import { AppCategory } from './components/AppCategory';
import { GitGrid } from './components/GitGrid';




export const GitExpertApp = () => {

    const [ categories, 
           setCategories ] = useState(['Pokemon']);

    // const handleAdd = () => {
    //     // setCategories( [ 'El Chavo', ...categories ]);
    //     setCategories( cat => [ ...cat, 'El Chavo' ]);
    // }



    return (
        <>
            <h2>GitExportApp</h2>
            <AppCategory setCategories={ setCategories } />
            <hr/>
     
            <ol>
                {
                    categories.map( category => {
                        return <GitGrid 
                                key={ category }
                                category={ category }
                                />
                    })
                }
             </ol>

        </>
    )


}