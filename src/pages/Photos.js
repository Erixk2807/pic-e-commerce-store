import { useContext } from "react";
import Image from "../components/Image";
import { ProductContext } from "../ProductContext";
import { getClass } from "../utils";

const Photos = () => {
  const { allPhotos } = useContext(ProductContext);
  const renderedPhotos = allPhotos.map((photo, i) => (
    <Image key={photo.id} img={photo} className={getClass(i)} />
  ));
  return <main className="photos">{renderedPhotos}</main>;
};

export default Photos;
