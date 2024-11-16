import React from 'react'
import './newcollection.css'
import new_collection from '../../Images/new_collections'
import Item from '../Item/Item'
function NewCollections() {
    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {
                    new_collection.map((i, index) => (
                        <Item key={index} id={i.id} name={i.name} image={i.image} new_price={i.new_price} old_price={i.old_price} />
                    ))
                }
            </div>
        </div>
    )
}

export default NewCollections
