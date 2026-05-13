"use client"

import { useState } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const markers = [
  { name: "Korea",       coordinates: [127.0,  37.5] as [number, number] },
  { name: "USA",         coordinates: [-96.0,  38.0] as [number, number] },
  { name: "Canada",      coordinates: [-96.0,  56.0] as [number, number] },
  { name: "UK",          coordinates: [-2.5,   54.0] as [number, number] },
  { name: "Germany",     coordinates: [12.0,   51.5] as [number, number] },
  { name: "Australia",   coordinates: [134.0, -25.0] as [number, number] },
  { name: "China",       coordinates: [104.0,  35.0] as [number, number] },
  { name: "Japan",       coordinates: [138.0,  36.5] as [number, number] },
  { name: "Thailand",    coordinates: [100.5,  14.0] as [number, number] },
  { name: "Vietnam",     coordinates: [106.5,  18.5] as [number, number] },
  { name: "Philippines", coordinates: [123.0,  11.5] as [number, number] },
]

export default function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div
      className="relative w-full"
      style={{ borderRadius: "16px", backgroundColor: "#E8F0F7", overflow: "hidden", height: "420px" }}
    >
      <style>{`
        @keyframes map-ping {
          0% { r: 6; opacity: 0.4; }
          100% { r: 14; opacity: 0; }
        }
        .map-pulse {
          animation: map-ping 1.6s ease-out infinite;
        }
      `}</style>

      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ center: [20, 15], scale: 128, rotate: [0, 0, 0] }}
        height={500}
        style={{ width: "100%", height: "500px" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies
              .filter((geo) => geo.properties.name !== "Antarctica")
              .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#C8D4E0"
                stroke="#FFFFFF"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none", fill: "#BCC9D6" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map((marker) => (
          <Marker
            key={marker.name}
            coordinates={marker.coordinates}
            onMouseEnter={() => setHovered(marker.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Pulse ring */}
            <circle
              className="map-pulse"
              r={6}
              fill="#F6C400"
              opacity={0.4}
              style={{ pointerEvents: "none" }}
            />
            {/* Solid dot */}
            <circle r={6} fill="#F6C400" style={{ cursor: "pointer" }} />

            {/* Tooltip */}
            {hovered === marker.name && (
              <foreignObject
                x={-60}
                y={-44}
                width={120}
                height={32}
                style={{ overflow: "visible", pointerEvents: "none" }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "8px",
                    padding: "5px 10px",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "600",
                    fontSize: "12px",
                    color: "#0F1B3D",
                  }}
                >
                  {marker.name}
                </div>
              </foreignObject>
            )}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}
