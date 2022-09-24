import React from 'react';
import './imagelist.css';
import İmage from'./İmage'

const İmageList = ({images}) => {
    // const images = this.props.images;
    return (
        <div className='imagelist-container'>
            {
                images.map(image=>
                    <İmage key={image.id} image={image}/>
                )
            }
        </div>
    )
}
export default İmageList;