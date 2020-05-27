import React, {
  memo,
  useState,
  useContext,
  useCallback,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import { Card } from '../Card';
import { CollectionStoreContext } from '../../store/collection';
import { PartyStoreContext } from '../../store/party';
import { NAME_MORTY, NAME_RICK } from '../../const';
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';

const StyledCloseButton = styled.button`
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 8px;
  right: calc(0.5rem + 8px);
  border-radius: 50%;
  background-color: ${(props): string => props.theme.colors.secondary};
  color: ${(props): string => props.theme.colors.main};
  border: none;
  outline: none;
  transition: background-color 0.3s;

  &:active {
    background-color: red;
  }
`;
const StyledInPartyLabel = styled.p`
  position: absolute;
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 0.3rem;
  width: 100%;
  bottom: 1rem;
  left: 0;
  font-weight: 700;
  background: linear-gradient(to bottom, transparent, ${(props): string => props.theme.colors.secondary});
`;

export default memo((props: {
  id: string | null;
  name: string | null;
  image: string | null;
}): ReactElement => {
  const { name, image } = props;
  const { actions: collectionActions } = useContext(CollectionStoreContext);
  const { state: partyState, actions: partyActions } = useContext(PartyStoreContext);
  const [hidden, hide] = useState(false);
  const validateItemForParty = useCallback(() => [
    NAME_RICK,
    NAME_MORTY,
  ].find(roleName => name?.includes(roleName)), [name]);
  const { excludeItem } = collectionActions;
  const { admitMember } = partyActions;

  return (
    <Card
      image={image}
      placeholder={name || ''}
      opacity={+!hidden}
      onClick={(): void => {
        const validatedRole = validateItemForParty();

        if (validatedRole) {
          admitMember({ item: props, role: validatedRole });
        }
      }}
      onTransitionEnd={(): void => {
        if (hidden) {
          excludeItem(props);
        }
      }}
    >
      {Array
        .from(partyState.membersByRoles.values())
        .some(partyMember => partyMember && partyMember.id === props.id)
        ? (<StyledInPartyLabel>In Party</StyledInPartyLabel>)
        : null}
      <StyledCloseButton
        onClick={(ev): void => {
          ev.stopPropagation();
          hide(true);
        }}
      >
        <CrossIcon />
      </StyledCloseButton>
    </Card>
  );
});
