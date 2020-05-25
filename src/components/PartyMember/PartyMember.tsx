import React, { memo } from 'react';

export default memo(({ role }: {
  role: PartyRole;
}): JSX.Element => (
  <p>
    {role}
  </p>
));
