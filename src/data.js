// eslint-disable-next-line import/no-unresolved
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

export const getRandomArray = () => {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 50000; i++) {
    arr.push({
      id: i + 1,
      name: faker.name.findName(),
    });
  }

  return arr;
};
