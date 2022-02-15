import React, { CSSProperties, ReactElement } from 'react';

import Effect from '../Effect/Effect';

import consumableEffects, {
  ConsumableEffectTypes,
} from '../../data/consumableEffects';

export interface ConsumableEffectProps {
  name: ConsumableEffectTypes;
  disableTooltip?: boolean;
  disableText?: boolean;
  disableLink?: boolean;
  disableIcon?: boolean;
  className?: string;
  style?: CSSProperties;
}

const ConsumableEffect = ({
  name,
  disableTooltip = true,
  disableText,
  disableLink,
  disableIcon,
  className,
  style,
}: ConsumableEffectProps): ReactElement => {
  return (
    <Effect
      type="Consumable"
      name={name}
      description={consumableEffects[name]}
      disableTooltip={disableTooltip}
      disableText={disableText}
      disableLink={disableLink}
      disableIcon={disableIcon}
      className={className}
      style={style}
    />
  );
};

export default ConsumableEffect;
