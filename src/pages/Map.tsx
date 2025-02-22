
import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-5.9845, 37.3891], // Seville coordinates
      zoom: 13
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="space-y-6 animate-fade-in">
      {!mapboxToken ? (
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Enter your Mapbox token</h2>
          <p className="text-sm text-gray-600 mb-4">
            To use the map feature, you need to provide your Mapbox public token. 
            You can get one at <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>
          </p>
          <Input
            type="text"
            placeholder="Enter your Mapbox public token..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full"
          />
        </div>
      ) : (
        <>
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-blue-900">Nearby Plans</h1>
            <p className="text-blue-600">Discover what's happening around you</p>
          </div>
          <div className="relative h-[calc(100vh-12rem)] rounded-2xl overflow-hidden shadow-lg">
            <div ref={mapContainer} className="absolute inset-0" />
          </div>
        </>
      )}
    </div>
  );
};

export default Map;
