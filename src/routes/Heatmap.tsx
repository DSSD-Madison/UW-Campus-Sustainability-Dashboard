import DeckGL from '@deck.gl/react';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import Map from 'react-map-gl/maplibre';

const MAPBOX_ACCESS_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN';

//initial view state (centered on Madison, WI)
const INITIAL_VIEW_STATE = {
  longitude: -89.4012,
  latitude: 43.0731,
  zoom: 12,
  pitch: 45,
  bearing: 0,
};

//dorm data (latitude, longitude, and weight for heatmap intensity)
const DORM_DATA = [
  { coordinates: [-89.4012, 43.0731], weight: 1 }, 
  { coordinates: [-89.4123, 43.0765], weight: 0.8 },
  { coordinates: [-89.3987, 43.0701], weight: 0.6 },
];

const Heatmap = () => {
  const layers = [
    new HeatmapLayer({
      id: 'heatmap-layer',
      data: DORM_DATA,
      getPosition: (d) => d.coordinates,
      getWeight: (d) => d.weight,
      radiusPixels: 50,
      intensity: 1,
      threshold: 0.05,
    }),
  ];

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
      />
    </DeckGL>
  );
};

export default Heatmap;
