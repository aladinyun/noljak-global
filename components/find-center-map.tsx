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

export default function FindCenterMap() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div
      className="relative w-full"
      style={{ borderRadius: "16px", overflow: "hidden", backgroundColor: "#E8F0F7", height: "360px" }}
    >
      <style>{`
        @keyframes fc-ping {
          0% { r: 5; opacity: 0.35; }
          100% { r: 14; opacity: 0; }
        }
        .fc-pulse {
          animation: fc-ping 1.6s ease-out infinite;
        }
      `}</style>

      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ center: [20, 5], scale: 145 }}
        style={{ width: "100%", display: "block" }}
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
                    hover: { outline: "none", fill: "#C8D4E0" },
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
            <circle
              className="fc-pulse"
              r={5}
              fill="#F6C400"
              opacity={0.35}
              style={{ pointerEvents: "none" }}
            />
            <circle r={5} fill="#F6C400" style={{ cursor: "pointer" }} />
            {hovered === marker.name && (
              <foreignObject
                x={-50}
                y={-40}
                width={100}
                height={28}
                style={{ overflow: "visible", pointerEvents: "none" }}
              >
                <div
                  style={{
                    background: "white",
                    borderRadius: "8px",
                    padding: "4px 10px",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
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
