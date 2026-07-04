import { forwardRef } from '../utils/forward-ref';
import { cx } from '../utils/cx';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  color?: 'default' | 'subtle';
}

const orientationStyles = {
  horizontal: 'w-full border-t',
  vertical: 'h-full border-l self-stretch',
};

const colorStyles = {
  default: 'border-[--casuya-border-default]',
  subtle: 'border-[--casuya-neutral-100]',
};

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', color = 'default', className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={cx(
          'border-0',
          orientationStyles[orientation],
          colorStyles[color],
          className,
        )}
        role="separator"
        aria-orientation={orientation === 'horizontal' ? undefined : 'vertical'}
        {...props}
      />
    );
  },
);

Divider.displayName = 'Divider';
