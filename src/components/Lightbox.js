import main from "../asset/images/image-product-1.jpg";
import product_thumbnail from "../asset/images/image-product-1-thumbnail.jpg";
import right from "../asset/images/icon-next.svg";
import left from "../asset/images/icon-previous.svg";
import "./Lightbox.css";
export const Lightbox = (props) => {
  return (
    <div className="lightbox">
      <img class="btn left" src={left} alt="left" />
      <img class="btn right" src={right} alt="right" />
      <img className="main-img" src={main} alt="main" />
      <div className="container-left-images-lightbox">
        <img className="thumb-image" src={product_thumbnail} alt="img1" />
        <img className="thumb-image" src={product_thumbnail} alt="img1" />
        <img className="thumb-image" src={product_thumbnail} alt="img1" />
        <img className="thumb-image" src={product_thumbnail} alt="img1" />
      </div>
    </div>
  );
};
