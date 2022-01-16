import { Item } from "../types/Item";

export const Items : Item[] = [
  {
    name : 'Directional Worklamp',
    imageUrl: '/images/ITEM_Directional_Worklamp.png',
    recipes: [
      {
        components : [
          { 
            amount: 10,
            itemName: 'Aluminium Ingot'
          },
          { 
            amount: 5,
            itemName: 'Glass'
          },
          { 
            amount: 5,
            itemName: 'Composites'
          },
          { 
            amount: 2,
            itemName: 'Electronics'
          },
        ]
      }
    ]
  },
  {
    name: 'Glass',
    imageUrl: '/images/ITEM_Glass.png',
    recipes: [
      {
        components: [
          {
            amount: 1,
            itemName: 'Silica'
          }
        ]
      }

    ]
  },
  {
    name: 'Composites',
    imageUrl: '/images/ITEM_Composites.png',
    recipes: [
      {
        components: [
          {
            amount: 1,
            itemName: 'Composite Paste'
          }
        ]
      }

    ]
  },
  {
    name: 'Electric Carpentry Bench',
    imageUrl: '/images/ITEM_Electric_Carpentry_Bench.png',
    recipes: [
      {
        components: [
          {
            amount: 60,
            itemName: 'Steel Ingot'
          },
          {
            amount: 6,
            itemName: 'Composites'
          },
          {
            amount: 40,
            itemName: 'Iron Ingot'
          },
          {
            amount: 10,
            itemName: 'Steel Screw'
          },
          {
            amount: 8,
            itemName: 'Electronics'
          },
        ]
      }

    ]
  },
  {
    name: 'Electric Dehumidifier',
    imageUrl: '/images/ITEM_Electric_Dehumidifier.png',
    recipes: [
      {
        components: [
          {
            amount: 20,
            itemName: 'Aluminium Ingot'
          },
          {
            amount: 15,
            itemName: 'Glass'
          },
          {
            amount: 20,
            itemName: 'Composites'
          },
          {
            amount: 12,
            itemName: 'Steel Screw'
          },
          {
            amount: 35,
            itemName: 'Electronics'
          },
        ]
      }

    ]
  },
  {
    name: 'Electric Furnace',
    imageUrl: '/images/ITEM_Electric_Furnace.png',
    recipes: [
      {
        components: [
          {
            amount: 30,
            itemName: 'Steel Ingot'
          },
          {
            amount: 4,
            itemName: 'Glass'
          },
          {
            amount: 60,
            itemName: 'Electronics'
          },
          {
            amount: 80,
            itemName: 'Concrete Mix'
          },
          {
            amount: 8,
            itemName: 'Steel Screw'
          },
        ]
      }
    ]
  },
  {
    name: 'Electric Masonry Bench',
    imageUrl: '/images/ITEM_Electric_Masonry_Bench.png',
    recipes: [
      {
        components: [
          {
            amount: 60,
            itemName: 'Steel Ingot'
          },
          {
            amount: 6,
            itemName: 'Glass'
          },
          {
            amount: 100,
            itemName: 'Concrete Mix'
          },
          {
            amount: 10,
            itemName: 'Steel Screw'
          },
          {
            amount: 8,
            itemName: 'Electronics'
          },
        ]
      }

    ]
  },
  {
    name: 'Electric Composter',
    imageUrl: '/images/ITEM_Electric_Composter.png',
    recipes: [
      {
        components: [
          {
            amount: 20,
            itemName: 'Composites'
          },
          {
            amount: 60,
            itemName: 'Steel Ingot'
          },
          {
            amount: 10,
            itemName: 'Electronics'
          },
          {
            amount: 100,
            itemName: 'Concrete Mix'
          },
          {
            amount: 20,
            itemName: 'Steel Screw'
          },
        ]
      }

    ]
  },
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
      name: 'Oxite',
      imageUrl: '/images/ITEM_Oxite.png',
      collectable: true
    },
    {
      name: 'Aluminium Ore',
      imageUrl: '/images/ITEM_Aluminium_Ore.png',
      collectable: true
    },
    {
      name: 'Gold Ore',
      imageUrl: '/images/ITEM_Gold_Ore.png',
      collectable: true
    },
    {
      name: 'Stone',
      imageUrl: '/images/ITEM_Stone.png',
      collectable: true
    },
    {
      name: 'Silica',
      imageUrl: '/images/ITEM_Silica.png',
      collectable: true
    },
    {
      name: 'Copper Ore',
      imageUrl: '/images/ITEM_Copper_Ore.png',
      collectable: true
    },
    {
      name: 'Steel Ingot',
      imageUrl: '/images/ITEM_Steel_Ingot.png',
      recipes: [
        {
          components: [
            {
              amount: 1,
              itemName: 'Steel Bloom'
            }
          ]
        }
  
      ]
    },
    {
      name: 'Steel Screw',
      imageUrl: '/images/ITEM_Steel_Screw.png',
      recipes: [
        {
          components: [
            {
              amount: 0.01,
              itemName: 'Steel Ingot'
            }
          ]
        }
  
      ]
    },
    {
      name: 'Refined Gold',
      imageUrl: '/images/ITEM_Refined_Gold.png',
      recipes: [
        {
          components: [
            {
              amount: 2,
              itemName: 'Gold Ore'
            },
          ]
        }
      ]
    },
    {
      name: 'Aluminium Ingot',
      imageUrl: '/images/ITEM_Aluminium_Ingot.png',
      recipes: [
        {
          components: [
            {
            amount: 1,
            itemName: 'Aluminium Ore'
            },
          ]
        }
      ]
    },
    {
      name: 'Copper Ingot',
      imageUrl: '/images/ITEM_Copper_Ingot.png',
      recipes: [
        {
          components: [
            {
            amount: 1,
            itemName: 'Copper Ore'
            },
          ]
        }
      ]
    },
    {
      name: 'Electronics',
      imageUrl: '/images/ITEM_Electronics.png',
      recipes: [
        {
          components: [
            {
              amount: 1,
              itemName: 'Refined Gold'
            },
            {
              amount: 1,
              itemName: 'Copper Ingot'
            },
            {
              amount: 1,
              itemName: 'Organic Resin'
            },
            {
              amount: 1,
              itemName: 'Epoxy'
            },
          ]
        }
      ]
    },
    {
      name: 'Organic Resin',
      imageUrl: '/images/ITEM_Organic_Resin.png',
      recipes: [
        {
          components: [
            {
              amount: 1,
              itemName: 'Wood'
            },
            {
              amount: 1,
              itemName: 'Oxite'
            },
          ]
        }
      ]
    },
    {
      name: 'Carbon Fiber',
      imageUrl: '/images/ITEM_Carbon_Fiber.png',
      recipes: [
        {
          components: [
            {
              amount: 1,
              itemName: 'Carbon Paste'
            }
          ]
        }
      ]
    },
    {
      name: 'Coal',
      imageUrl: '/images/ITEM_Coal.png',
      collectable: true
    },
    {
      name: 'Wood',
      imageUrl: '/images/ITEM_Wood.png',
      collectable: true
    },
    {
      name: 'Steel Bloom',
      imageUrl: '/images/ITEM_Steel_Bloom.png',
      recipes: [
        {
          components: [
            {
              amount: 6,
              itemName: 'Iron Ore'
            },
            {
              amount: 1,
              itemName: 'Coal'
            },
          ]
        } , {
          components: [
            {
              amount: 3,
              itemName: 'Iron Ingot'
            },
            {
              amount: 1,
              itemName: 'Coal'
            },
          ]
        }
      ]
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
    },
    {
      name : 'Fabricator',
      imageUrl: '/images/ITEM_Fabricator.png',
      recipes: [
        {
          components : [
            { 
              amount: 8,
              itemName: 'Steel Ingot'
            },
            { 
              amount: 40,
              itemName: 'Aluminium Ingot'
            },
            { 
              amount: 60,
              itemName: 'Electronics'
            },
            { 
              amount: 30,
              itemName: 'Steel Screw'
            },
            { 
              amount: 30,
              itemName: 'Concrete Mix'
            },
            { 
              amount: 8,
              itemName: 'Carbon Fiber'
            },
          ]
        }
      ]
    },
    {
      name : 'Carbon Paste',
      imageUrl: '/images/ITEM_Carbon_Paste.png',
      recipes: [
        {
          components : [
            { 
              amount: 1,
              itemName: 'Silica'
            },
            { 
              amount: 1,
              itemName: 'Aluminium Ingot'
            },
            { 
              amount: 4,
              itemName: 'Organic Resin'
            },
            { 
              amount: 2,
              itemName: 'Epoxy'
            },
          ]
        }
      ]
    },
    {
      name : 'Composite Paste',
      imageUrl: '/images/ITEM_Composite_Paste.png',
      recipes: [
        {
          components : [
            { 
              amount: 2,
              itemName: 'Iron Ore'
            },
            { 
              amount: 1,
              itemName: 'Silica'
            },
            { 
              amount: 1,
              itemName: 'Organic Resin'
            },
            { 
              amount: 1,
              itemName: 'Gold Ore'
            },
          ]
        }
      ]
    },
    {
      name : 'Concrete Mix',
      imageUrl: '/images/ITEM_Concrete_Mix.png',
      recipes: [
        {
          components : [
            { 
              amount: 1,
              itemName: 'Tree Sap'
            },
            { 
              amount: 8,
              itemName: 'Stone'
            },
            { 
              amount: 4,
              itemName: 'Silica'
            },
          ]
        }
      ]
    },
  ]