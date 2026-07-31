import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

interface LocationMapProps {
  lat: number
  lng: number
  address: string
  label?: string
  zoom?: number
}

export function LocationMap({ lat, lng, address, label, zoom = 14 }: LocationMapProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const map = new maplibregl.Map({
      container: ref.current,
      style: 'https://tiles.openfreemap.org/styles/liberty',
      center: [lng, lat],
      zoom,
    })
    map.addControl(new maplibregl.NavigationControl(), 'top-right')
    const marker = new maplibregl.Marker({ color: '#0D0D0D' }).setLngLat([lng, lat])
    if (label) marker.setPopup(new maplibregl.Popup().setText(label))
    marker.addTo(map)
    return () => map.remove()
  }, [lat, lng, label, zoom])

  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  return (
    <div data-component="src/components/ui/LocationMap.tsx" className="space-y-3">
      <div ref={ref} className="h-80 w-full overflow-hidden" />
      <a href={directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground">
        Get Directions
      </a>
    </div>
  )
}
