import { Recipe } from "./Recipe";

export type Item = {
  name: string;
  recipes?: Recipe[]
  collectable?: boolean
};


