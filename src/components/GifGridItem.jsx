export const GifGridItem = ({ image }) => {
  console.log(image);

  return (
    <div className="card">
      <img src={image.url} alt={image.title} />
      <p>{image.title || "Default gif"}</p>
    </div>
  );
};
