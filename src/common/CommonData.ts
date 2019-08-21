import faker from 'faker/locale/ru';
import { IUser } from '../@types/External';

export function getUser(): IUser {
  return {
    id: faker.random.uuid(),
    visibleName: `${faker.name.lastName()} ${faker.name.firstName()}`,
    avatar: faker.random.number(1) > 0.5 ? faker.image.dataUri(24, 24) : undefined,
  };
}

export function getUsers(count: number = 5): IUser[] {
  return new Array(count).fill('').map(getUser);
}
