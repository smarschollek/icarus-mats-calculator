import { Component } from "./Component";

export type Item = {
  name: string;
  imageUrl: string;
  recipes?: Recipe[]
  collectable?: boolean
};

export type Recipe = {
  components: Component[]
}
