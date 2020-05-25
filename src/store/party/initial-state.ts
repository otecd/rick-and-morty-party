import { NAME_MORTY, NAME_RICK } from '../../const';

export default ((): PartyState => ({
  membersByRoles: new Map([
    [NAME_RICK, null],
    [NAME_MORTY, null],
  ]),
}))();
