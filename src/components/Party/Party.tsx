import React, { memo } from 'react';
import styled from 'styled-components';
import Grid from '../Grid/Grid';
import PartyMember from '../PartyMember/PartyMember';

const StyledPartyHeading = styled.h2`
  padding-top: calc(2rem + 8px);
  margin: 0;
  font: inherit;
  font-weight: 700;
  text-transform: uppercase;
`;

export default memo(({ roles }: {
  roles: PartyRole[];
}): JSX.Element => (
  <>
    <StyledPartyHeading>Party</StyledPartyHeading>
    <Grid>
      {roles.map(role => (<PartyMember key={role} role={role} />))}
    </Grid>
  </>
));
