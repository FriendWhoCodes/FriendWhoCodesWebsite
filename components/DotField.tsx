/**
 * A generative nod to the GitHub contribution graph: a deterministic
 * grid of cells in accent tones that fades toward the text. Server-rendered SVG.
 */
const COLS = 26;
const ROWS = 14;
const CELL = 14;
const GAP = 5;

// Deterministic pseudo-random so SSR and client always agree
function intensity(i: number): number {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function DotField({ className = "" }: { className?: string }) {
  const cells: { x: number; y: number; o: number; accent: boolean }[] = [];
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r < ROWS; r++) {
      const i = c * ROWS + r;
      const v = intensity(i);
      if (v < 0.42) continue; // sparse, like a real graph
      cells.push({
        x: c * (CELL + GAP),
        y: r * (CELL + GAP),
        o: 0.12 + v * 0.5,
        accent: v > 0.93,
      });
    }
  }
  const w = COLS * (CELL + GAP) - GAP;
  const h = ROWS * (CELL + GAP) - GAP;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      aria-hidden
      className={className}
    >
      {cells.map((cell, i) => (
        <rect
          key={i}
          x={cell.x}
          y={cell.y}
          width={CELL}
          height={CELL}
          rx={3}
          className={`dotfield-cell ${cell.accent ? "fill-accent" : "fill-ink"}`}
          style={{
            opacity: cell.accent ? 0.75 : cell.o * 0.22,
            animationDelay: `${(i % 17) * 0.18}s`,
          }}
        />
      ))}
    </svg>
  );
}
