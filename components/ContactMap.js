'use client';

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { useTheme } from "@/context/ThemeContext";
import L from 'leaflet';

// FIX default marker issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

export default function ContactMap() {
    const { darkMode } = useTheme();

    const locations = [
        { name: "Kolkata", position: [22.5726, 88.3639] },
        { name: "Purulia", position: [23.3320, 86.3652] },
        { name: "Jamshedpur", position: [22.8046, 86.2029] },
    ];

    // Custom gold animated marker
    const goldMarker = L.divIcon({
        className: "",
        html: `
      <div style="position:relative; display:flex; align-items:center; justify-content:center;">
        <div style="width:12px; height:12px; background:#C5A059; border-radius:50%; box-shadow:0 0 10px rgba(197,160,89,0.8);"></div>
        <div style="position:absolute; width:12px; height:12px; background:#C5A059; border-radius:50%; animation:pulse 1.5s infinite; opacity:0.5;"></div>
      </div>
    `,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
    });

    return (
        <MapContainer
            center={[23.0, 87.0]}
            zoom={7}
            className="w-full h-full"
        >
            <TileLayer
                url={
                    darkMode
                        ? "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        : "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
                }
            />

            {locations.map((loc, i) => (
                <Marker key={i} position={loc.position} icon={goldMarker}>

                    {/* Label above marker */}
                    <Tooltip
                        permanent
                        direction="top"
                        offset={[0, -10]}
                        className={darkMode ? "map-label-dark" : "map-label-light"}
                    >
                        {loc.name}
                    </Tooltip>

                    {/* Optional popup */}
                    <Popup>
                        <div className="font-semibold text-sm">{loc.name}</div>
                    </Popup>

                </Marker>
            ))}
        </MapContainer>
    );
}