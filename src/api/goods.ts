import { Good } from '../types/Good';

const API_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

function request(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const getAll = (): Promise<Good[]> => {
  return request();
};

export const get5First = async (): Promise<Good[]> => {
  const goods = await request();

  return [...goods]
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .slice(0, 5);
};

export const getRed = async (): Promise<Good[]> => {
  const goods = await request();

  return goods.filter(good => good.color === 'red');
};
