import { useMediaQuery } from './useMediaQuery';
import { breakpoints } from '@casuya/tokens';

type BreakpointName = keyof typeof breakpoints;

export function useBreakpoint(breakpoint: BreakpointName): boolean {
  const bp = breakpoints[breakpoint];
  const sm = breakpoints.sm;
  const query = bp === 0 ? `(max-width: ${sm - 1}px)` : `(min-width: ${bp}px)`;
  return useMediaQuery(query);
}
