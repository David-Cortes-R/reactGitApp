import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GitGridItem } from './GitGridItem';

export const GitGrid = ({ category }) => {

   

    const { data: images, loading } = useFetchGifs( category );
    // console.log( data, loading );

    



    return (

        <>  
            <h3> { category }</h3>

            { loading ? <p>Cargando...</p> : null }

            <div className="card-content">

                    {
                        images.map( img => {
                        return <GitGridItem
                                key={ img.id }
                                { ...img }
                        />
                        })
                    }
            
            </div>
        </>
    )
}
