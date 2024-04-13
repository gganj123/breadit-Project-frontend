import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, { useState, useEffect } from 'react';
import * as S from './KakaoMap.style';
import MapDetailContent from './MapDetailContent';
import { searchBakeryNearby } from '../components/SearchArea';
import { useLocation } from 'react-router-dom';
import { Hearts } from 'react-loader-spinner';

export type Marker = {
  position: { lat: number; lng: number };
  id: string;
  content: string;
  address: string;
  phone: string | number;
};

export type PaginationProps = {
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
  // 기본 위치 상태
  const [state, setState] = useState<{
    center: { lat: number; lng: number };
    errMsg: string | null; // Adjusted type to allow string or null
    isLoading: boolean;
  }>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [info, setInfo] = useState<Marker | null>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const [keyword, setKeyword] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [mapDetail, setMapDetail] = useState({
    basicInfo: {
      placenamefull: '',
      address: {
        newaddr: { newaddrfull: '', bsizonno: '' },
        region: { newaddrfullname: '' },
      },
    },
  });
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

  const location = useLocation();
  const categoryName = new URLSearchParams(location.search).get('category');

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    if (categoryName) {
      const categoryKeywords = {
        케이크: '케이크',
        빵집: '빵집',
        구움쿠키: '구움쿠키',
        샌드위치: '샌드위치',
      };

      const searchKeyword = categoryKeywords[categoryName] || '';
      // searchBakeryNearby 함수 호출 시 검색 키워드 전달
      searchBakeryNearby(map, setMarkers, setPagination, searchKeyword);
    }
  }, [categoryName, map, setMarkers, setPagination]);

  const gotoPage = (pageNumber: number) => {
    setPagination({ ...pagination, current: pageNumber });
  };

  //목록리스트 안보이게 넣어주는 버튼 기능
  const toggleMapSize = () => {
    setExpanded(!expanded); // 너비 및 MapContainer 표시 여부 전환
  };

  const apiUrl = `${import.meta.env.VITE_BACKEND_SERVER}`;

  const getMapData = async (id: string) => {
    try {
      const response = await axios.get(`${apiUrl}/kakao-maps/${id}`, {
        withCredentials: true,
      });
      setMapDetail(response.data);
      setIsShowDetail(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 데이터가 있을 때
        const bounds = new kakao.maps.LatLngBounds();
        const newMarkers: Marker[] = [];
        for (let i = 0; i < data.length; i++) {
          const lat = parseFloat(data[i].y);
          const lng = parseFloat(data[i].x);
          newMarkers.push({
            position: { lat, lng },
            id: data[i].id,
            content: data[i].place_name,
            address: data[i].road_address_name,
            phone: data[i].phone,
          });
          console.log(data[i]);
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

  //내위치 찾는 클릭이벤트
  const getCurrentPosBtn = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log(
          'Current position:',
          pos.coords.latitude,
          pos.coords.longitude
        );
        getPosSuccess(pos);
      },
      () => alert('위치 정보를 가져오는데 실패했습니다.'),
      {
        enableHighAccuracy: true, //위치를 가능한 정확하게 가져올지 여부
        maximumAge: 30000, //이전에 가져온 위치 정보를 얼마나 오래 사용할지
        timeout: 27000, //위치 정보를 가져오는 데 허용되는 시간
      }
    );
  };

  // 3) 정상적으로 현재위치 가져올 경우 실행
  const getPosSuccess = (pos: GeolocationPosition) => {
    const currentPos = new window.kakao.maps.LatLng(
      pos.coords.latitude,
      pos.coords.longitude
    );

    // 새로운 마커 생성
    const newMarker = {
      position: {
        lat: currentPos.getLat(),
        lng: currentPos.getLng(),
      },
      id: '현재 위치', // 임의의 ID 설정
      content: '당신은 현재 이곳에 있습니다.', // 마커 내용 설정
      address: 'Your current location', // 현재 위치 주소 설정
      phone: '', // 전화번호 정보 설정
    };

    if (map) {
      map.panTo(currentPos);

      // 기존 마커 배열에 새로운 마커 추가하여 업데이트
      const newMarkers = [...markers];

      setMarkers(newMarkers);
      setPagination((prevPagination) => ({
        ...prevPagination,
        last: 1,
        current: 1,
      }));
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
            id: data[i].id,
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

  const searchNearbyBakeries = () => {
    if (map !== null) {
      searchBakeryNearby(map, setMarkers, setPagination, '빵집');
    }
  };

  if (state.isLoading)
    return (
      <S.LoaderWrapper>
        <Hearts color="#FFCB46" height={100} width={100} />
      </S.LoaderWrapper>
    );
  return (
    <S.MapWrapper $expanded={expanded}>
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
        {/* 현재 위치 마커 표시 */}
        <MapMarker
          position={state.center}
          image={{
            src: 'https://cdn-icons-png.flaticon.com/128/7124/7124723.png',
            size: {
              width: 50,
              height: 50,
            },
          }}
        />
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
        <S.MapSearchBox>
          <S.FindNearMap onClick={getCurrentPosBtn}>내 위치</S.FindNearMap>
          {/* 내 위치 기반 빵집 보기 버튼 추가 */}
          <S.FindNearBakery onClick={searchNearbyBakeries}>
            근처 빵집
          </S.FindNearBakery>
          <input
            id="keyword"
            type="text"
            placeholder="검색어를 입력하세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button onClick={handleSearch}>검색하기</button>
        </S.MapSearchBox>
      </Map>
      <S.MapContainer>
        <S.MapList>
          {visibleMarkers.map((marker, index) => (
            <li key={index}>
              <a>
                <S.MapListItem
                  onClick={() => {
                    getMapData(marker.id);
                  }}
                >
                  <div className="img" />
                  <div>
                    <p className="title">{marker.content}</p>
                    <span>{marker.address}</span>
                    <p>내 위치로 부터 2km</p>
                    <p>{marker.phone}</p>
                  </div>
                </S.MapListItem>
              </a>
            </li>
          ))}
        </S.MapList>
        {/* Pagination 추가 */}
        <Pagination
          last={pagination.last}
          current={pagination.current}
          gotoPage={gotoPage}
        />
        {isShowDetail && (
          <S.MapDetailStyle>
            <MapDetailContent data={mapDetail} />
            <button
              onClick={() => {
                setIsShowDetail(false);
              }}
            >
              X
            </button>
          </S.MapDetailStyle>
        )}
        {/* 디테일정보 전달 */}
      </S.MapContainer>
      <S.SlidePin $expanded={expanded} onClick={toggleMapSize}></S.SlidePin>
    </S.MapWrapper>
  );
};

export default MapComponent;
