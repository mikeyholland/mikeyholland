function clamp(min: number, input: number, max: number) {
  return Math.max(min, Math.min(input, max));
}

function mapRange(
  inMin: number,
  inMax: number,
  input: number,
  outMin: number,
  outMax: number,
) {
  return ((input - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function lerp(x: number, y: number, t: number) {
  return (1 - t) * x + t * y;
}

function truncate(value: number, decimals: number) {
  return parseFloat(value.toFixed(decimals));
}

const Maths = { lerp, clamp, mapRange, truncate };

export { lerp, clamp, mapRange, truncate };
export default Maths;
