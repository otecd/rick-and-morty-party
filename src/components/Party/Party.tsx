import React, {
  memo,
  useContext,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import Grid from '../Grid/Grid';
import PartyMember from '../PartyMember/PartyMember';
import { PartyStoreContext } from '../../store/party';

const StyledPartyHeading = styled.h2`
  padding-top: calc(2rem + 8px);
  margin: 0;
  font: inherit;
  font-weight: 700;
  text-transform: uppercase;
`;

export default memo(({ roles }: {
  roles: PartyRole[];
}): ReactElement => {
  const { state: partyState } = useContext(PartyStoreContext);

  return (
    <>
      <StyledPartyHeading>Party</StyledPartyHeading>
      <Grid>
        {roles.map(role => (
          <PartyMember
            key={role}
            role={role}
            image={partyState.membersByRoles.get(role)?.image}
          />
        ))}
      </Grid>
    </>
  );
});
