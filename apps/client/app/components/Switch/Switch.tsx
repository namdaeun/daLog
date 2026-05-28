import type { ChangeEvent, ComponentPropsWithRef } from 'react';
import icDark from '../../../public/assets/icon/ic_dark.svg';
import icLight from '../../../public/assets/icon/ic_light.svg';
import { backgroundStyle, iconStyle, switchStyle } from './styles.css';

interface SwitchProps extends ComponentPropsWithRef<'input'> {
  mode: 'dark' | 'light';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ mode, onChange, ...props }: SwitchProps) => {
  return (
    <div className={backgroundStyle({ mode: mode })}>
      <input
        type="checkbox"
        role="switch"
        checked={mode === 'light'}
        onChange={onChange}
        aria-label="switch"
        aria-checked="true"
        className={switchStyle}
        {...props}
      />
      <img
        src={mode === 'light' ? icLight : icDark}
        alt={`${mode} mode icon`}
        className={iconStyle({ mode: mode })}
      />
    </div>
  );
};

export default Switch;
