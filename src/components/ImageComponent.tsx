import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageComponentProps {
  src: string | undefined;
  alt?: string | undefined;
  width: number;
  height: number;
}

const ImageComponent = (props: ImageComponentProps) => {
  const { width, height, alt, src } = props;
  return (
    <LazyLoadImage
      width={width}
      height={height}
      alt={alt}
      src={src}
      effect="blur"
      className="transform transition duration-400 hover:scale-110 hover:transition-all h-fit"
    />
  );
};

export default ImageComponent;
