function ImageShow({ image }){
    return (
        <div>
            {/* <div>{image.alt_description}{' '}</div> */}
            <img src ={image.urls.small} alt ={image.alt_description} />
        </div>
    );
};
export default ImageShow;