import { Recipe } from "./Recipe";

export type Item = {
  name: string;
  recipes?: Recipe[]
  collectable?: boolean
};

export type InteractiveItem = Item & {
  useRecipe: boolean
}
