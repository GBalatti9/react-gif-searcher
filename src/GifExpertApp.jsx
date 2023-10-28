import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([  ]);

    const onAddCategory = (newCategory) => {
        // setCategories([...categories, e.target.value])

        if( categories.includes( newCategory ) ) return;

        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewValue={ onAddCategory }
                currentCategories={ categories }
            />
                { categories.map( ( category ) => (
                    <GifGrid 
                        key={ category }
                        category={ category } />
                    )) 
                }
        </>
    )
}
