import { Item } from './Item';


export type InteractiveItem = Item & {
  useRecipe: boolean
};
