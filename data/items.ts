import { Item } from "../types/Item";

export const Items : Item[] = [
    {
      name : 'Iron Pickaxe',
      imageUrl: '/images/ITEM_Iron_Pickaxe.png',
      components : [
        { 
          amount: 5,
          itemName: 'Wood'
        },
        { 
          amount: 4,
          itemName: 'Leather'
        },
        { 
          amount: 6,
          itemName: 'Iron Ingot'
        },
      ]
    },
    {
      name: 'Iron Ingot',
      imageUrl: '/images/ITEM_Iron_Ingot.png',
      components: [
        {
          amount: 2,
          itemName: 'Iron Ore'
        }
      ]
    },
    {
      name: 'Iron Ore',
      imageUrl: '/images/ITEM_Iron_Ore.png',
      components: []
    },
    {
      name: 'Leather',
      imageUrl: '/images/ITEM_Leather.png',
      components: []
    },
    {
      name: 'Wood',
      imageUrl: '/images/ITEM_Wood.png',
      components: []
    }
  ]