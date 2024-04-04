import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  position: absolute;
  background: #000;
  width: 20%;
  height: 100%;
  top: 6.6rem;
  right: 0;
`;

const MapWrapper = styled.div`
  width: 80%;
  height: 100vh;
`;

const MapList = styled.ul`
  width: 90%;
  margin: 20px auto 0;
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
  .title {
    font-size: 1.6rem;
    font-weight: 600;
    color: #000;
    margin-bottom: 10px;
    span {
      margin-left: 10px;
      font-size: 1rem;
      color: dimgray;
    }
  }
`;

interface Marker {
  position: { lat: number; lng: number };
  content: string;
}

const MapComponent: React.FC = () => {
  const [info, setInfo] = useState<Marker | null>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ps.keywordSearch('이태원 빵집', (data, status, _pagination) => {
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
          });
          bounds.extend(new kakao.maps.LatLng(lat, lng));
        }
        setMarkers(newMarkers);

        map.setBounds(bounds);
      }
    });
  }, [map]);

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
        {markers.map((marker, index) => (
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
      </Map>
      <MapContainer>
        <MapList>
          {[...Array(5)].map((item, index) => (
            <li key={index}>
              <a>
                <MapListItem>
                  <div className="img" />
                  <div>
                    <p className="title">
                      파리바게트
                      <span>서울시 성수동 성수점</span>
                    </p>
                    <p>내 위치로 부터 2km</p>
                  </div>
                </MapListItem>
              </a>
            </li>
          ))}
        </MapList>
      </MapContainer>
    </MapWrapper>
  );
};

export default MapComponent;
