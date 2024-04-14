import { Link } from 'react-router-dom';
import Mapicon from '/icons/map_icon.svg';
import Clockicon from '/icons/clock_icon.svg';
import Subwayicon from '/icons/subway_icon.svg';
import { MapDetailStyled } from './MapDetailContent.styles';

type DetailProps = {
  data: DetailData;
};

type DetailData = {
  basicInfo: {
    placenamefull: string;
    mainphotourl: string;
    englishname: string;
    address: {
      newaddr?: {
        newaddrfull?: string | undefined;
        bsizonno?: string | undefined;
      };
      region?: { newaddrfullname?: string | undefined };
    };
    homepage: string;
    category: {
      catename: string;
    };
    openHour: {
      periodList: {
        periodName: string;
        timeList: {
          timeName: string;
          timeSE: string;
          dayOfWeek: string;
        }[];
      }[];
      offdayList: {
        holidayName: string;
        weekAndDay: string;
      }[];
    };
  };
  findway: {
    subway: {
      stationSimpleName?: string | undefined;
      exitNum?: string | undefined;
      toExitMinute?: string | undefined;
    }[];
  };
};

const MapDetailContent = ({ data }: DetailProps) => {
  const {
    placenamefull,
    mainphotourl,
    englishname,
    address,
    homepage,
    category,
    openHour,
  } = data.basicInfo;
  const { subway } = data.findway;
  const newaddrfull = address.newaddr?.newaddrfull ?? '';
  const bsizonno = address.newaddr?.bsizonno ?? '';
  const newaddrfullname = address.region?.newaddrfullname ?? '';
  const stationList = subway;
  const timeList = openHour.periodList[0].timeList;
  const offDay = openHour.offdayList;

  return (
    <>
      <MapDetailStyled>
        <div className="store_info">
          <img src={mainphotourl} className="thumbnail" />
          <span>{englishname}</span>
          <span>{category.catename}</span>
          <h4>{placenamefull}</h4>
        </div>

        <div>
          <img src={Mapicon} />
          <p>{`${newaddrfullname} ${newaddrfull} ${bsizonno && `(우)${bsizonno}`}`}</p>
        </div>
        <Link to={homepage} target="_blank">
          {homepage}
        </Link>

        {timeList &&
          timeList.map((time) => {
            return (
              <>
                <p>{time.timeName}</p>
                <p>{time.dayOfWeek}</p>
                <p>{time.timeSE}</p>
              </>
            );
          })}
        {offDay &&
          offDay.map((day) => {
            return (
              <>
                <p>{day.holidayName}</p>
                <p>{day.weekAndDay}</p>
              </>
            );
          })}

        {stationList &&
          stationList.map((station) => {
            return (
              <p className="station_name">
                {station.stationSimpleName}
                <span className="exit_num">{station.exitNum}번 출구</span>
                <span className="exit_minute">
                  도보 {station.toExitMinute}분
                </span>
              </p>
            );
          })}
      </MapDetailStyled>
    </>
  );
};

export default MapDetailContent;
