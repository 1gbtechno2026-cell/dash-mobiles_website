const paths = {
  chart: 'M4 20V10 M10 20V4 M16 20V13 M22 20V8',
  network: 'M12 3v4 M12 17v4 M4.5 7.5l3.2 2 M16.3 14.5l3.2 2 M19.5 7.5l-3.2 2 M7.7 14.5l-3.2 2 M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M6 6m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0 M18 6m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0 M6 18m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0 M18 18m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0',
  target: 'M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0 M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0 M12 12m-9.5 0a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0 -19 0',
  smartphone: 'M7 3.5h10a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1 -1.5 1.5H7a1.5 1.5 0 0 1 -1.5 -1.5V5A1.5 1.5 0 0 1 7 3.5z M10.5 6h3 M11 18.5h2',
  laptop: 'M4.5 5.5h15v10h-15z M2 18.5h20 M9 8.5h6v4H9z',
  headphones: 'M4 14v-2a8 8 0 0 1 16 0v2 M4 14a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h1a1 1 0 0 0 1 -1v-3a1 1 0 0 0 -1 -1z M20 14a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1z',
  watch: 'M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0 M9 3.5h6l0.6 3.5h-7.2z M9 20.5h6l0.6 -3.5h-7.2z',
  camera: 'M4 8.5h3.2L9 6h6l1.8 2.5H20a1 1 0 0 1 1 1v9a1 1 0 0 1 -1 1H4a1 1 0 0 1 -1 -1v-9a1 1 0 0 1 1 -1z M12 13m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0',
  glasses: 'M2 12c0 -2 1 -3.5 3.5 -3.5S9 10 9 12s-1 3.5 -3.5 3.5S2 14 2 12z M15 12c0 -2 1 -3.5 3.5 -3.5s3.5 1.5 3.5 3.5 -1 3.5 -3.5 3.5 -3.5 -1.5 -3.5 -3.5z M9 11h6 M2 11l-1 -1 M22 11l-1 -1',
  shield: 'M12 3l7 3v5.5c0 4.5 -3 7.7 -7 9 -4 -1.3 -7 -4.5 -7 -9V6z M9 12l2 2 4 -4.5',
  link: 'M9.5 14.5l5 -5 M8 15.5l-2 2a3 3 0 0 1 -4.2 -4.2l3 -3a3 3 0 0 1 4.2 0 M16 8.5l2 -2a3 3 0 0 1 4.2 4.2l-3 3a3 3 0 0 1 -4.2 0',
  zap: 'M13 2 4 14h6l-1 8 9 -12h-6z',
  check: 'M4 12.5l5 5 11 -11',
  layers: 'M12 3l9 5 -9 5 -9 -5z M3 13l9 5 9 -5 M3 17.5l9 5 9 -5',
  spark: 'M12 2v4 M12 18v4 M2 12h4 M18 12h4 M5 5l2.5 2.5 M16.5 16.5L19 19 M19 5l-2.5 2.5 M7.5 16.5L5 19',
}

function Icon({ name, size = 20 }) {
  const d = paths[name]
  if (!d) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  )
}

export default Icon
