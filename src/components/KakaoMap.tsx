import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React, { useState, useEffect } from 'react';

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
  );
};

export default MapComponent;
