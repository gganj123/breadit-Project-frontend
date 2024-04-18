export type BannerProps = {
  data: { _id: string; thumbnail: string; title: string; content: string };
};

const MagazineBanner = ({ data }: BannerProps) => {
  const { title, thumbnail, content } = data;

  const noImgContent = () => {
    const imgFilter = content.replace(/<img.*?>/g, '');

    const HTML = { __html: imgFilter };
    return HTML;
  };

  return (
    <div className="banner_item">
      <img src={thumbnail} className="banner_img" />
      <div className="content_box">
        <span className="font_oleo">Hot brand</span>
        <h3>{title}</h3>
        <div className="content" dangerouslySetInnerHTML={noImgContent()} />
      </div>
    </div>
  );
};

export default MagazineBanner;
