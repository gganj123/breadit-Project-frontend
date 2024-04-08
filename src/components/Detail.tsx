import ButtonDefault from './atoms/buttons/ButtonDefault';

const Detail = () => {
  return (
    <section className="post_detail">
      <div className="detail_top">
        <div className="detail_info"></div>
        <ButtonDefault text={'Edit'} />
      </div>
    </section>
  );
};

export default Detail;
