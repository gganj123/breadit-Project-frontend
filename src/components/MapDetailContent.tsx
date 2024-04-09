type DetailData = {
  basicInfo: {
    placenamefull: string;
    address: {
      newaddr?: {
        newaddrfull?: string | undefined;
        bsizonno?: string | undefined;
      };
      region?: { newaddrfullname?: string | undefined };
    };
  };
};

type DetailProps = {
  data: DetailData;
};

const MapDetailContent = ({ data }: DetailProps) => {
  const { placenamefull, address } = data.basicInfo;
  const newaddrfull = address.newaddr?.newaddrfull ?? '';
  const bsizonno = address.newaddr?.bsizonno ?? '';
  const newaddrfullname = address.region?.newaddrfullname ?? '';

  return (
    <>
      <div className="item_info">
        <p>{placenamefull}</p>
        <p>{`${newaddrfullname} ${newaddrfull} (우)${bsizonno}`}</p>
      </div>
      <div className="comment_list"></div>
    </>
  );
};

export default MapDetailContent;
