"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import * as d3Geo from "d3-geo"
import * as topojson from "topojson-client"
import type { Topology, GeometryCollection } from "topojson-specification"
import type { FeatureCollection, Geometry } from "geojson"

const countryCoordinates = [
  { id: "kr", name: "Korea", coords: [127.7, 35.9] as [number, number] },
  { id: "us", name: "USA", coords: [-95.7, 37.1] as [number, number] },
  { id: "ca", name: "Canada", coords: [-106.3, 56.1] as [number, number] },
  { id: "gb", name: "UK", coords: [-3.4, 55.4] as [number, number] },
  { id: "de", name: "Germany", coords: [10.4, 51.2] as [number, number] },
  { id: "au", name: "Australia", coords: [133.8, -25.3] as [number, number] },
  { id: "cn", name: "China", coords: [104.2, 35.9] as [number, number] },
  { id: "jp", name: "Japan", coords: [138.3, 36.2] as [number, number] },
  { id: "th", name: "Thailand", coords: [100.9, 15.9] as [number, number] },
  { id: "vn", name: "Vietnam", coords: [108.3, 14.1] as [number, number] },
  { id: "ph", name: "Philippines", coords: [121.8, 12.9] as [number, number] },
]

const filterTabs = [
  { id: "kr", label: "Korea" },
  { id: "us", label: "USA" },
  { id: "de", label: "Germany" },
  { id: "vn", label: "Vietnam" },
  { id: "ph", label: "Philippines" },
  { id: "others", label: "Others" },
]

const stats = [
  { value: "11", label: "Countries" },
  { value: "400+", label: "Centers" },
  { value: "15", label: "Years" },
]

export function FindCenter() {
  const [activeFilter, setActiveFilter] = useState("kr")
  const [mapPath, setMapPath] = useState<string>("")
  const [dotPositions, setDotPositions] = useState<{ id: string; name: string; cx: number; cy: number }[]>([])
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const mapWidth = 900
  const mapHeight = 380

  useEffect(() => {
    // Fetch world map data from CDN
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((response) => response.json())
      .then((topology: Topology<{ countries: GeometryCollection }>) => {
        // Convert TopoJSON to GeoJSON
        const countriesGeoJSON = topojson.feature(
          topology,
          topology.objects.countries
        ) as FeatureCollection<Geometry>

        // Filter out Antarctica (id "010" or 10) and features outside latitude bounds
        const filteredFeatures = countriesGeoJSON.features.filter((feature) => {
          // Remove Antarctica
          if (feature.id === "010" || feature.id === 10) return false
          return true
        })

        const filteredGeoJSON: FeatureCollection<Geometry> = {
          type: "FeatureCollection",
          features: filteredFeatures,
        }

        // Create EqualEarth projection with rotation to center at 60°E
        const projection = d3Geo.geoEqualEarth()
          .rotate([-60, 0]) // Rotate to center at 60°E longitude
          .scale(180)
          .translate([mapWidth / 2, mapHeight / 2])

        // Create path generator
        const pathGenerator = d3Geo.geoPath().projection(projection)

        // Generate the SVG path for all countries
        const svgPath = pathGenerator(filteredGeoJSON as d3Geo.GeoPermissibleObjects)
        setMapPath(svgPath || "")

        // Calculate dot positions using the same projection
        const positions = countryCoordinates.map((country) => {
          const projected = projection(country.coords)
          return {
            id: country.id,
            name: country.name,
            cx: projected ? projected[0] : 0,
            cy: projected ? projected[1] : 0,
          }
        })
        setDotPositions(positions)
      })
      .catch((error) => {
        console.error("Failed to load world map data:", error)
      })
  }, [])

  const handleDotClick = (countryId: string) => {
    const directFilters = ["kr", "us", "de", "vn", "ph"]
    setActiveFilter(directFilters.includes(countryId) ? countryId : "others")
  }

  const scrollToInquiry = () => {
    document.getElementById("global-business-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="find-center" className="bg-[#FFFDF5] py-[60px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Row 1 — Headline */}
          <div className="text-center">
            <h2 className="font-heading font-bold text-[#0F1B3D] text-[28px] md:text-[44px] leading-tight">
              Find Noljak near you.
            </h2>
          </div>

          {/* Row 2 — Stats Bar */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6 md:gap-10">
                <div className="flex flex-col items-center text-center">
                  <span className="font-heading font-bold text-[#0F1B3D] text-[20px] leading-none">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[#5F6B7A] text-[14px] mt-1">
                    {stat.label}
                  </span>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-px h-10 bg-[#E8ECF1]" />
                )}
              </div>
            ))}
          </div>

          {/* Row 3 — World Map (EqualEarth projection, centered at 60°E) */}
          <div className="w-full max-w-4xl">
            <svg
              viewBox={`0 0 ${mapWidth} ${mapHeight}`}
              className="w-full h-auto"
              style={{ backgroundColor: "#E0E4EF", borderRadius: "16px" }}
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Land masses */}
              {mapPath && (
                <path
                  d={mapPath}
                  fill="#D4D4D4"
                  stroke="#FFFFFF"
                  strokeWidth="0.5"
                />
              )}

              {/* Country flag dots */}
              {dotPositions.map((country) => (
                <g
                  key={country.id}
                  transform={`translate(${country.cx}, ${country.cy})`}
                  onClick={() => handleDotClick(country.id)}
                  onMouseEnter={() => setHoveredCountry(country.id)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* White border circle */}
                  <circle
                    r="10"
                    fill="#FFFFFF"
                  />
                  {/* Flag image as pattern */}
                  <defs>
                    <clipPath id={`clip-${country.id}`}>
                      <circle r="8" />
                    </clipPath>
                  </defs>
                  <image
                    href={`https://flagcdn.com/w40/${country.id}.png`}
                    x="-8"
                    y="-8"
                    width="16"
                    height="16"
                    clipPath={`url(#clip-${country.id})`}
                    preserveAspectRatio="xMidYMid slice"
                  />

                  {/* Tooltip on hover */}
                  {hoveredCountry === country.id && (
                    <g transform="translate(0, -20)">
                      <rect
                        x="-30"
                        y="-14"
                        width="60"
                        height="22"
                        rx="6"
                        fill="#FFFFFF"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))"
                      />
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#0F1B3D"
                        fontSize="12"
                        fontWeight="bold"
                        fontFamily="Inter, sans-serif"
                      >
                        {country.name}
                      </text>
                    </g>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Row 4 — Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "bg-[#0F1B3D] text-white"
                    : "bg-transparent border-[1.5px] border-[#0F1B3D] text-[#0F1B3D] hover:bg-[#0F1B3D]/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Row 5 — CTA Button */}
          <Button
            onClick={scrollToInquiry}
            className="bg-[#F6C400] hover:bg-[#E5B600] text-[#0F1B3D] font-bold text-base px-10 py-4 h-auto rounded-full transition-all duration-300"
          >
            Global Business — Bring Noljak to Your City
          </Button>
        </div>
      </div>
    </section>
  )
}
