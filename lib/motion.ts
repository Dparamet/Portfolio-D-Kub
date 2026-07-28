export const REVEAL_STAGGER_MS = 80;
export const REVEAL_MAX_DELAY_MS = 400;

export function getRevealDelay(index: number): string {
  const safeIndex = Math.max(0, Math.floor(index));

  return `${Math.min(
    safeIndex * REVEAL_STAGGER_MS,
    REVEAL_MAX_DELAY_MS,
  )}ms`;
}
