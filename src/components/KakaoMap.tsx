import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  position: absolute;
  background: #000;
  width: 20%;
  height: 100%;
  overflow-y: scroll;
  top: 6.6rem;
  right: 0;

  #pagination {
    text-align: center;
    font-size: 25px;
    a {
      cursor: pointer;
      color: #fff;
      + a {
        margin-left: 15px;
      }
    }
  }
`;

const MapWrapper = styled.div`
  width: 80%;
  height: 100vh;
`;

const MapList = styled.ul`
  width: 90%;
  margin: 20px auto 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .img {
    width: 50px;
    height: 50px;
    background: gray;
    border-radius: 50%;
    margin-right: 26px;
  }
  li {
    width: 100%;
  }
`;

const MapListItem = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  padding: 16px;
  border-radius: 20px;
  p {
    margin-top: 10px;
  }
  .title {
    font-size: 1.6rem;
    font-weight: 600;
    color: #000;
    margin-top: 0;
    margin-bottom: 10px;
  }
  span {
    margin: 10px 0;
    font-size: 1rem;
    color: dimgray;
  }
`;

const MapSearchBox = styled.div`
  position: absolute;
  top: 10rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background: #fff;
  width: 50%;
  height: 35px;
  display: flex;

  input {
    width: 90%;
    padding: 10px;
    cursor: default;
  }
  button {
    width: 10%;
    background: blue;
    color: #fff;
  }
`;

const FindNearMap = styled.div`
  padding: 10px 20px;
  background: #eee;
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

type Marker = {
  position: { lat: number; lng: number };
  content: string;
  address: string;
  phone: string | number;
};

type PaginationProps = {
  last: number;
  current: number;
  gotoPage(pageNumber: number): void;
};

const Pagination: React.FC<PaginationProps> = ({ last, current, gotoPage }) => {
  if (last === 1) {
    // 데이터가 없을 때 페이지 번호를 보이지 않음
    return null;
  }
  const pages = [];
  for (let i = 1; i <= last; i++) {
    pages.push(
      <a
        key={i}
        className={i === current ? 'on' : ''}
        onClick={() => gotoPage(i)}
      >
        {i}
      </a>
    );
  }

  return <div id="pagination">{pages}</div>;
};

const MapComponent: React.FC = () => {
  const [info, setInfo] = useState<Marker | null>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [keyword, setKeyword] = useState('');
  // pagination state 추가
  const [pagination, setPagination] = useState<PaginationProps>({
    last: 1,
    current: 1,
    gotoPage: (pageNumber: number) => {
      setPagination((prevPagination) => ({
        ...prevPagination,
        current: pageNumber,
      }));
    },
  });

  const gotoPage = (pageNumber: number) => {
    setPagination({ ...pagination, current: pageNumber });
  };

  const handleSearch = () => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 데이터가 있을 때
        const bounds = new kakao.maps.LatLngBounds();
        const newMarkers: Marker[] = [];
        for (let i = 0; i < data.length; i++) {
          const lat = parseFloat(data[i].y);
          const lng = parseFloat(data[i].x);
          newMarkers.push({
            position: { lat, lng },
            content: data[i].place_name,
            address: data[i].road_address_name,
            phone: data[i].phone,
          });
          bounds.extend(new kakao.maps.LatLng(lat, lng));
        }
        const totalPages = Math.ceil(newMarkers.length / itemsPerPage);
        setPagination((prevPagination) => ({
          ...prevPagination,
          last: totalPages,
          current: 1,
        }));
        setMarkers(newMarkers);
        map?.setBounds(bounds);
      } else {
        // 데이터가 없을 때
        setPagination((prevPagination) => ({
          ...prevPagination,
          last: 1,
          current: 1,
        }));
        setMarkers([]);
      }
    });
  };

  const getCurrentPosBtn = () => {
    navigator.geolocation.getCurrentPosition(
      getPosSuccess,
      () => alert('위치 정보를 가져오는데 실패했습니다.'),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  };

  // 3) 정상적으로 현재위치 가져올 경우 실행
  const getPosSuccess = (pos: GeolocationPosition) => {
    const currentPos = new window.kakao.maps.LatLng(
      pos.coords.latitude,
      pos.coords.longitude
    );

    if (map) {
      map.panTo(currentPos);

      const newMarkers = markers.map((marker) => ({
        ...marker,
        position: {
          lat: currentPos.getLat(),
          lng: currentPos.getLng(),
        },
      }));

      setMarkers(newMarkers);
    }
  };

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        const newMarkers: Marker[] = [];

        for (let i = 0; i < data.length; i++) {
          const lat = parseFloat(data[i].y);
          const lng = parseFloat(data[i].x);
          newMarkers.push({
            position: {
              lat,
              lng,
            },
            content: data[i].place_name,
            address: data[i].road_address_name,
            phone: data[i].phone,
          });
          bounds.extend(new kakao.maps.LatLng(lat, lng));
        }

        // pagination 정보 업데이트
        const totalPages = Math.ceil(newMarkers.length / itemsPerPage);
        setPagination((prevPagination) => ({
          ...prevPagination,
          last: totalPages,
          current: 1, // 첫 페이지로 설정
        }));

        setMarkers(newMarkers);
        map.setBounds(bounds);
      }
    });
  }, [map]);

  // 페이지 당 마커 수
  const itemsPerPage = 6;
  const startIndex = (pagination.current - 1) * itemsPerPage;
  const visibleMarkers = markers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <MapWrapper>
      <Map
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: '100%',
          height: '100vh',
        }}
        level={3}
        onCreate={(map) => setMap(map)}
      >
        {visibleMarkers.map((marker, index) => (
          <MapMarker
            key={`marker-${index}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: '#000' }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
        <MapSearchBox>
          <FindNearMap onClick={getCurrentPosBtn}>현재 위치</FindNearMap>
          <input
            id="keyword"
            type="text"
            placeholder="검색어를 입력하세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button onClick={handleSearch}>검색하기</button>
        </MapSearchBox>
      </Map>

      <MapContainer>
        <MapList>
          {visibleMarkers.map((marker, index) => (
            <li key={index}>
              <a>
                <MapListItem>
                  <div className="img" />
                  <div>
                    <p className="title">{marker.content}</p>
                    <span>{marker.address}</span>
                    <p>내 위치로 부터 2km</p>
                    <p>{marker.phone}</p>
                  </div>
                </MapListItem>
              </a>
            </li>
          ))}
        </MapList>
        {/* Pagination 추가 */}
        <Pagination
          last={pagination.last}
          current={pagination.current}
          gotoPage={gotoPage}
        />
      </MapContainer>
    </MapWrapper>
  );
};

export default MapComponent;
