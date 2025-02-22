
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;
    if (!MAPBOX_TOKEN) {
      console.error('Mapbox token not found');
      return;
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
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
  }, []);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-blue-900">Nearby Plans</h1>
        <p className="text-blue-600">Discover what's happening around you</p>
      </div>
      <div className="relative h-[calc(100vh-12rem)] rounded-2xl overflow-hidden shadow-lg">
        <div ref={mapContainer} className="absolute inset-0" />
      </div>
    </div>
  );
};

export default Map;
