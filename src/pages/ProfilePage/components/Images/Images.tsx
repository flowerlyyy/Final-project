import './Images.scss';
interface ImagesProps {
  srcImage: string | undefined;
}

export const Images = (props: ImagesProps) => {
  const { srcImage } = props;
  return (
    <>
      <div className="item">
        <img src={srcImage} alt="sample" className="image-grid" />
      </div>
    </>
  );
};
