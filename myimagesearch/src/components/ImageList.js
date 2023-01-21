import ImageShow from "./ImageShow";
import './ImageList.css'
function ImageList({images}){
    const renderedImages =images.map((image)=>{
        return <ImageShow key ={image.id} image={image} />
    });
    return (
        <div className="image-list">
            {/* <div>Image List :{images.length}</div> */}
            <div>{renderedImages}</div>
        </div>
    );
};
export default ImageList;