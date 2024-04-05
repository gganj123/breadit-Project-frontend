import MagazineCircle from '/magazine_circle.svg';

type BannerProps = {
  src: string;
  title: string;
  content: string;
};

const MagazineBanner: React.FC<BannerProps> = ({ src, title, content }) => {
  return (
    <div className="banner_item">
      <img src={src} className="banner_img" />
      <div className="content_box">
        <span className="font_oleo">Hot brand</span>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <img src={MagazineCircle} className="magazine_circle" />
    </div>
  );
};

export default MagazineBanner;
