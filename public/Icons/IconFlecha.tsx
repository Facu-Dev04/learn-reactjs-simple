interface Props {
  width: number;
  height: number;
}

export function IconFlecha({ width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      className="transform "
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
}
