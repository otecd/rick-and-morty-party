import React, { memo, ReactElement } from 'react';
import { Card } from '../Card';

export default memo(({ role, image }: {
  role: PartyRole;
  image?: string | null;
}): ReactElement => (
  <Card
    image={image}
    placeholder={role}
  />
));
