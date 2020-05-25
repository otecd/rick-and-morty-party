import React, { memo, ReactElement } from 'react';

export default memo(({ role }: {
  role: PartyRole;
}): ReactElement => (
  <p>
    {role}
  </p>
));
