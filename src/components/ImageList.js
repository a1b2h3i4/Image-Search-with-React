import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';
const ImageList=(props)=>{
   const image_tag=props.images.map((image)=>{
       return <ImageCard key={image.id} image={image}/>;
   });
   return <div className='image-tags'>{image_tag}</div>
};
export default ImageList;