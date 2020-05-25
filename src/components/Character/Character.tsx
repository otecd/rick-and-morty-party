import React, {
  memo,
  useState,
  useContext,
  useCallback,
  ReactElement,
} from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import { CollectionStoreContext } from '../../store/collection';
import { PartyStoreContext } from '../../store/party';
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';
import { NAME_MORTY, NAME_RICK } from '../../const';

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

export default memo((props: {
  id: string | null;
  name: string | null;
  image: string | null;
}): ReactElement => {
  const { name, image } = props;
  const { actions: collectionActions } = useContext(CollectionStoreContext);
  const { actions: partyActions } = useContext(PartyStoreContext);
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
          hide(false);
        }
      }}
    >
      <StyledCloseButton
        onClick={(): void => {
          hide(true);
        }}
      >
        <CrossIcon />
      </StyledCloseButton>
    </Card>
  );
});
