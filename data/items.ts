import { Item } from "../types/Item";

export const Items : Item[] = [
    {
      name : 'Iron Pickaxe',
      imageUrl: '/images/ITEM_Iron_Pickaxe.png',
      recipes: [
        {
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
        }
      ]
      
    },
    {
      name: 'Iron Ingot',
      imageUrl: '/images/ITEM_Iron_Ingot.png',
      recipes: [
        {
          components: [
            {
              amount: 2,
              itemName: 'Iron Ore'
            }
          ]
        }
      ]
    },
    {
      name: 'Iron Ore',
      imageUrl: '/images/ITEM_Iron_Ore.png',
      collectable: true
    },
    {
      name: 'Leather',
      imageUrl: '/images/ITEM_Leather.png',
      collectable: true
    },
    {
      name: 'Wood',
      imageUrl: '/images/ITEM_Wood.png',
      collectable: true
    },
    {
      name: 'Epoxy',
      imageUrl: '/images/ITEM_Epoxy.png',
      recipes: [
        {
          components: [
            {
              amount: 4,
              itemName: 'Crushed Bone'
            }
          ]
        },
        {
          components: [
            {
              amount: 2,
              itemName: 'Sulfur'
            },
            {
              amount: 4,
              itemName: 'Tree Sap'
            }
          ]
        }
      ]
    },
    {
      name: 'Crushed Bone',
      imageUrl: '/images/ITEM_Crushed_Bone.png',
      recipes: [
        {
          components: [
            {
              amount: 2,
              itemName: 'Bone'
            }
          ]
        }
      ]
    },
    {
      name: 'Bone',
      imageUrl: '/images/ITEM_Bone.png',
      collectable: true
    },
    {
      name: 'Sulfur',
      imageUrl: '/images/ITEM_Sulfur.png',
      collectable: true
    },
    {
      name: 'Tree Sap',
      imageUrl: '/images/ITEM_Tree_Sap.png',
      recipes: [
        {
          components: [
            {
              amount: 4,
              itemName: 'Stick'
            }
          ]
        }
      ]
    },
    {
      name: 'Stick',
      imageUrl: '/images/ITEM_Stick.png',
      collectable: true,
      recipes: [
        {
          components: [
            {
              amount: 0.1,
              itemName: 'Wood'
            }
          ]
        }
      ]
    }
  ]