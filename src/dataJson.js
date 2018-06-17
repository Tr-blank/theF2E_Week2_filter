
export const dataJson = [
  {
    id:1,
    title:'Bread',
    tool: [{
      type:'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition:['Bread 麵包','Snack 小吃'],
    ingredients:'全麵粉',
    stuffIcons: [{
        constitute: ['flour', 'flour', 'flour']
      }, {
        constitute: ['flour', 'flour', 'flour', 'flour']
    }],
    exchange: [6, 0, 0, 0],
    more_exchange: [2, 1, 0, 0]
  },
  {
    id: 2,
    title: 'Chips',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Veggie 蔬菜', 'Snack 小吃'],
    ingredients: '馬鈴薯*2+馬鈴薯或香料粉',
    stuffIcons: [{
      constitute: ['potato', 'potato', 'potato']
    }, {
      constitute: ['potato', 'potato', 'spotspice_ground']
    }, {
      constitute: ['potato', 'potato', 'potato', 'spotspice_ground']
    }],
    exchange: [6, 0, 0, 0],
    more_exchange: [2, 1, 0, 0]
  },
  {
    id: 3,
    title: 'Veggie Soup',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Veggie 蔬菜', 'Snack 小吃', 'Soup 湯'],
    ingredients: '蔬菜*3(不可全相同)',
    stuffIcons: [{
      constitute: ['mushrooms', 'potato', 'potato']
    }, {
      constitute: ['mushrooms', 'mushrooms', 'potato']
    }, {
        constitute: ['carrot', 'potato', 'turnip']
    }, {
      constitute: ['carrot', 'potato', 'potato']
    }, {
        constitute: ['potato', 'potato', 'turnip']
    }],
    exchange: [5, 0, 0, 0],
    more_exchange: [4, 1, 0, 0]
  },
  {
    id: 4,
    title: 'Jelly Sandwich',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Snack 小吃', 'Bread 麵包'],
    ingredients: '漿果+麵粉、楓糖',
    stuffIcons: [{
      constitute: ['berries', 'berries', 'flour']
    }, {
        constitute: ['berries', 'flour', 'syrup']
    }, {
        constitute: ['berries', 'flour', 'flour', 'syrup']
    }, {
        constitute: ['berries', 'berries', 'flour', 'flour']
    }, {
        constitute: ['berries', 'berries', 'berries','flour']
    }],
    exchange: [8, 0, 0, 0],
    more_exchange: [4, 1, 0, 0]
  },
  {
    id: 5,
    title: 'Fish Stew',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Soup 湯', 'Fish 魚類'],
    ingredients: '魚類+蔬菜',
    stuffIcons: [{
        constitute: ['salmon', 'potato', 'potato']
    }, {
        constitute: ['salmon', 'foliage', 'foliage']
    }, {
        constitute: ['salmon', 'carrot', 'carrot']
    }, {
      constitute: ['salmon', 'salmon', 'potato']
      }, {
        constitute: ['salmon', 'salmon', 'salmon']
    }],
    exchange: [8, 0, 0, 0],
    more_exchange: [4, 1, 0, 0]
  },
  {
    id: 6,
    title: 'Turnip Cake',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Snack 小吃', 'Veggie 蔬菜'],
    ingredients: '甜菜*2+甜菜或蔬菜',
    stuffIcons: [{
        constitute: ['turnip', 'turnip', 'carrot']
    }, {
        constitute: ['turnip', 'turnip', 'ingredient_slot']
      }, {
        constitute: ['turnip', 'turnip', 'turnip']
      }, {
        constitute: ['turnip', 'turnip', 'turnip','carrot']
    }, {
        constitute: ['turnip', 'turnip', 'turnip','turnip']
    }],
    exchange: [8, 0, 0, 0],
    more_exchange: [4, 1, 0, 0]
  },
  {
    id: 7,
    title: 'Potato Pancakes',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Snack 小吃', 'Veggie 蔬菜'],
    ingredients: '馬鈴薯*2+馬鈴薯或洋蔥',
    stuffIcons: [{
      constitute: ['potato', 'potato', 'potato']
    }, {
        constitute: ['potato', 'potato', 'ingredient_slot']
    }, {
        constitute: ['potato', 'potato', 'potato', 'ingredient_slot']
    }],
    exchange: [8,0,0,0],
    more_exchange: [4,1,0,0]
  },
  {
    id: 8,
    title: 'Potato Pancakes',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Soup 湯', 'Veggie 蔬菜', 'Snack 小吃'],
    ingredients: '馬鈴薯*2+馬鈴薯或香料粉',
    stuffIcons: [{
      constitute: ['potato', 'potato', 'potato']
    }, {
        constitute: ['potato', 'potato', 'spotspice_ground']
      }, {
        constitute: ['potato', 'potato', 'potato', 'potato']
      }, {
        constitute: ['potato', 'potato', 'potato', 'spotspice_ground']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 9,
    title: 'Fishball Skewers',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Fish 魚類', 'Snack 小吃'],
    ingredients: '魚類+樹枝、蔬菜',
    stuffIcons: [{
        constitute: ['twigs', 'salmon', 'potato']
      }, {
        constitute: ['twigs', 'salmon', 'carrot']
      }, {
        constitute: ['twigs', 'salmon', 'ingredient_slot']
      }, {
        constitute: ['twigs', 'salmon', 'turnip']
      }, {
        constitute: ['twigs', 'salmon', 'salmon']
      }],
    exchange: [10,0,0,0],
    more_exchange: [7,1,0,0]
  },
  {
    id: 10,
    title: 'Meatballs',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Meat 肉類', 'Snack 小吃'],
    ingredients: '全肉或肉類+蔬菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'potato', 'potato']
    }, {
        constitute: ['smallmeat', 'foliage', 'foliage']
    }, {
        constitute: ['smallmeat', 'carrot', 'carrot']
    }, {
        constitute: ['smallmeat', 'carrot', 'potato']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'smallmeat']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 11,
    title: 'Meat Skewers',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Meat 肉類', 'Snack 小吃'],
    ingredients: '肉類*2+樹枝',
    stuffIcons: [{
      constitute: ['twigs', 'smallmeat', 'smallmeat']
    }, {
        constitute: ['twigs', 'smallmeat', 'smallmeat', 'ingredient_slot']
    }, {
        constitute: ['twigs', 'smallmeat', 'smallmeat', 'mushrooms']
    }, {
        constitute: ['twigs', 'smallmeat', 'smallmeat', 'garlic']
    }, {
        constitute: ['twigs', 'smallmeat', 'smallmeat', 'smallmeat']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 12,
    title: 'Offering',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Soup 湯', 'Snack 小吃'],
    ingredients: '石頭+隨意*2',
    stuffIcons: [{
      constitute: ['rocks', 'foliage', 'berries']
    }, {
        constitute: ['rocks', 'foliage', 'potato']
    }, {
        constitute: ['rocks', 'berries', 'potato']
    }, {
        constitute: ['rocks', 'mushrooms', 'potato']
    }, {
        constitute: ['rocks', 'mushrooms', 'foliage']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 13,
    title: 'Croquette',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Veggie 蔬菜', 'Snack 小吃'],
    ingredients: '馬鈴薯+麵粉、蔬菜',
    stuffIcons: [{
      constitute: ['flour', 'potato', 'potato']
    }, {
        constitute: ['flour', 'potato', 'carrot']
    }, {
        constitute: ['flour', 'potato', 'turnip']
    }, {
        constitute: ['flour', 'potato', 'ingredient_slot']
    }, {
        constitute: ['flour', 'potato', 'mushrooms']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 14,
    title: 'Roasted Veggies',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
      }, {
        type: 'Grill',
        name: 'Grill烤盤',
        iconName: 'grill_small'
      }],
    condition: ['Veggie 蔬菜'],
    ingredients: '蔬菜*3(不可全相同)',
    stuffIcons: [{
      constitute: ['potato', 'potato', 'carrot']
    }, {
        constitute: ['potato', 'potato', 'turnip']
    }, {
        constitute: ['potato', 'turnip', 'turnip']
    }, {
        constitute: ['potato', 'carrot', 'carrot']
    }, {
        constitute: ['potato', 'carrot', 'turnip']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 15,
    title: 'Meatloaf',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Meat 肉類'],
    ingredients: '肉類+肉或蔬菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'potato', 'potato']
    }, {
        constitute: ['smallmeat', 'potato', 'carrot']
    }, {
        constitute: ['smallmeat', 'carrot', 'carrot']
    }, {
        constitute: ['smallmeat', 'mushrooms', 'potato']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'smallmeat']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 16,
    title: 'Carrot Soup',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Soup 湯', 'Veggie 蔬菜', 'Snack 小吃'],
    ingredients: '蘿蔔*2+蘿蔔、香料、蒜',
    stuffIcons: [{
      constitute: ['carrot', 'carrot', 'carrot']
    }, {
        constitute: ['carrot', 'carrot', 'garlic']
    }, {
        constitute: ['carrot', 'carrot', 'spotspice_ground']
    }, {
        constitute: ['carrot', 'carrot', 'carrot','spotspice_ground']
    }, {
        constitute: ['carrot', 'carrot', 'carrot','carrot']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 17,
    title: 'Fish Pie',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Fish 魚類'],
    ingredients: '麵粉+魚、蔬菜',
    stuffIcons: [{
      constitute: ['flour', 'salmon', 'carrot']
    }, {
        constitute: ['flour', 'salmon', 'turnip']
    }, {
        constitute: ['flour', 'salmon', 'ingredient_slot']
    }, {
        constitute: ['flour', 'salmon', 'tomato']
    }, {
        constitute: ['flour', 'salmon', 'mushrooms']
    }],
    exchange: [10, 0, 0, 0],
    more_exchange: [7, 1, 0, 0]
  },
  {
    id: 18,
    title: 'Fish And Chips',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Fish 魚類'],
    ingredients: '麵粉+魚+馬鈴薯',
    stuffIcons: [{
      constitute: ['flour', 'salmon', 'potato']
    }, {
        constitute: ['flour', 'salmon', 'potato','potato']
    }, {
        constitute: ['flour', 'salmon', 'potato', 'flour']
    }, {
        constitute: ['flour', 'salmon', 'potato', 'salmon']
    }],
    exchange: [12, 0, 0, 0],
    more_exchange: [2, 3, 0, 0]
  },
  {
    id: 19,
    title: 'Meat Pie',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Meat 肉類'],
    ingredients: '麵粉+肉類+蔬菜',
    stuffIcons: [{
      constitute: ['flour', 'smallmeat', 'potato']
    }, {
        constitute: ['flour', 'smallmeat', 'carrot']
    }, {
        constitute: ['flour', 'smallmeat', 'turnip']
    }, {
        constitute: ['flour', 'smallmeat', 'ingredient_slot']
      }, {
        constitute: ['flour', 'smallmeat', 'mushrooms']
      }],
    exchange: [12, 0, 0, 0],
    more_exchange: [2, 3, 0, 0]
  },
  {
    id: 20,
    title: 'Slider',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Bread 麵包','Snack 小吃','Meat 肉類'],
    ingredients: '麵粉+肉類、任意',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'smallmeat']
    }, {
        constitute: ['flour', 'smallmeat', 'foliage']
    }, {
        constitute: ['flour', 'smallmeat', 'spotspice_ground']
    }, {
        constitute: ['flour', 'smallmeat', 'tomato']
    }, {
        constitute: ['flour', 'smallmeat', 'smallmeat']
    }],
    exchange: [12, 0, 0, 0],
    more_exchange: [2, 3, 0, 0]
  },
  {
    id: 21,
    title: 'Jam',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Dessert 甜點', 'Snack 小吃'],
    ingredients: '漿果*2、楓糖',
    stuffIcons: [{
      constitute: ['berries', 'berries', 'berries']
    }, {
        constitute: ['berries', 'berries', 'syrup']
    }, {
        constitute: ['berries', 'berries', 'berries', 'berries']
    }, {
        constitute: ['berries', 'berries', 'berries','syrup']
    }, {
        constitute: ['berries', 'berries', 'syrup','syrup']
    }],
    exchange: [1, 0, 0, 0],
    more_exchange: [1, 2, 0, 0]
  },
  {
    id: 22,
    title: 'Jelly Roll',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '漿果*2、麵粉',
    stuffIcons: [{
      constitute: ['berries', 'berries', 'flour']
    }, {
        constitute: ['berries', 'berries', 'flour', 'flour']
    }, {
        constitute: ['berries', 'berries', 'berries', 'flour']
    }],
    exchange: [2, 1, 0, 0],
    more_exchange: [4, 1, 0, 0]
  },
  {
    id: 23,
    title: 'Carrot Cake',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '麵粉*2+蘿蔔、羊奶、楓糖、蘿蔔',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'carrot']
    }, {
        constitute: ['flour', 'flour', 'carrot', 'carrot']
    }, {
        constitute: ['flour', 'flour', 'carrot', 'syrup']
      }, {
        constitute: ['flour', 'flour', 'carrot', 'goatmilk']
      }],
    exchange: [2, 1, 0, 0],
    more_exchange: [4, 1, 0, 0]
  },
  {
    id: 24,
    title: 'Mashed Potatoes',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Snack 小吃', 'Veggie 蔬菜'],
    ingredients: '馬鈴薯*2+蒜頭、馬鈴薯',
    stuffIcons: [{
      constitute: ['potato', 'potato', 'garlic']
    }, {
        constitute: ['potato', 'potato', 'potato', 'garlic']
    }],
    exchange: [6, 1, 0, 0],
    more_exchange: [3, 0, 1, 0]
  },
  {
    id: 25,
    title: 'Garlic Bread',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Snack 小吃', 'Bread 麵包'],
    ingredients: '麵粉*2+蒜頭、麵粉',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'garlic']
    }, {
        constitute: ['flour', 'flour', 'flour', 'garlic']
      }, {
        constitute: ['flour', 'flour', 'garlic', 'garlic']
      }],
    exchange: [6, 1, 0, 0],
    more_exchange: [3, 0, 1, 0]
  },
  {
    id: 26,
    title: 'Tomato Soup',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Snack 小吃', 'Veggie 蔬菜', 'Soup 湯'],
    ingredients: '番茄*2、番茄、蒜頭、香料',
    stuffIcons: [{
      constitute: ['tomato', 'tomato', 'tomato']
    }, {
        constitute: ['tomato', 'tomato', 'garlic']
    }, {
        constitute: ['tomato', 'tomato', 'spotspice_ground']
      }, {
        constitute: ['tomato', 'tomato', 'tomato', 'spotspice_ground']
      }, {
        constitute: ['tomato', 'tomato', 'tomato', 'tomato']
      }],
    exchange: [8, 1, 0, 0],
    more_exchange: [6, 0, 1, 0]
  }






















  ,


  {
    id: 60,
    title: 'Steak Frites',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill'
    }],
    condition: ['Meat 肉類', 'Bread 麵包'],
    ingredients: '肉+麵粉+香菇+香料',
    stuffIcons: [{
      constitute: ['meat', 'meat', 'potato', 'potato']
    }, {
      constitute: ['meat', 'meat', 'potato', 'spotspice_ground']
    }, {
      constitute: ['meat', 'potato', 'potato', 'spotspice_ground']
    }],
    exchange: [6, 0, 2, 0],
    more_exchange: [2, 1, 1, 1]
  },
  {
    id: 61,
    title: 'Shooter Sandwich',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill'
    }],
    condition: ['Meat 肉類'],
    ingredients: '牛肉x2、馬鈴薯x2',
    stuffIcons: [{
      constitute: ['meat', 'meat', 'flour', 'spotspice_ground']
    }, {
      constitute: ['meat', 'meat', 'flour', 'spotspice_ground']
    }, {
      constitute: ['meat', 'flour', 'potato', 'spotspice_ground']
    }, {
      constitute: ['meat', 'flour', 'potato', 'spotspice_ground']
    }, {
      constitute: ['meat', 'meat', 'flour', 'spotspice_ground']
    }],
    exchange: [6, 0, 2, 0],
    more_exchange: [2, 1, 1, 1]
  },
  {
    id: 62,
    title: 'Offering',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉類'],
    ingredients: '牛肉x2、肉x2',
    stuffIcons: [{
      constitute: ['meat', 'meat', 'smallmeat', 'smallmeat']
    }, {
      constitute: ['meat', 'meat', 'smallmeat', 'spotspice_ground']
    }, {
      constitute: ['meat', 'smallmeat', 'smallmeat', 'spotspice_ground']
    }],
    exchange: [8, 0, 2, 0],
    more_exchange: [4, 1, 1, 1]
  },
  {
    id: 63,
    title: 'Crab Roll',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill'
    }],
    condition: ['Bread 麵包'],
    ingredients: '蟹肉x2+麵粉+蕨類',
    stuffIcons: [{
      constitute: ['crabmeat', 'crabmeat', 'flour', 'foliage']
    }, {
      constitute: ['crabmeat', 'flour', 'foliage', 'tomato']
    }, {
      constitute: ['crabmeat', 'flour', 'foliage', 'onion']
    }, {
      constitute: ['crabmeat', 'crabmeat', 'flour', 'tomato']
    }, {
      constitute: ['crabmeat', 'crabmeat', 'flour', 'mushrooms']
    }],
    exchange: [4, 1, 2, 0],
    more_exchange: [7, 1, 1, 1]
  },
  {
    id: 64,
    title: 'Meat Wellington',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉類'],
    ingredients: '牛肉+麵粉+菇類+香料',
    stuffIcons: [{
      constitute: ['meat', 'meat', 'flour', 'spotspice_ground']
    }, {
      constitute: ['meat', 'flour', 'mushrooms', 'spotspice_ground']
    }, {
      constitute: ['meat', 'meat', 'flour', 'garlic']
    }, {
      constitute: ['meat', 'meat', 'flour', 'mushrooms']
    }, {
      constitute: ['meat', 'flour', 'garlic', 'spotspice_ground']
    }],
    exchange: [4, 1, 2, 0],
    more_exchange: [7, 1, 1, 1]
  },
  {
    id: 65,
    title: 'Crab Ravioli',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot'
    }],
    condition: ['Cheese 起司', 'Pasta 義大利麵'],
    ingredients: '蟹肉+麵粉+牛奶+香料',
    stuffIcons: [{
      constitute: ['crabmeat', 'flour', 'goatmilk', 'mushrooms']
    }, {
      constitute: ['crabmeat', 'flour', 'garlic', 'goatmilk']
    }, {
      constitute: ['crabmeat', 'flour', 'goatmilk', 'spotspice_ground']
    }, {
      constitute: ['crabmeat', 'flour', 'goatmilk', 'onion']
    }, {
      constitute: ['crabmeat', 'crabmeat', 'flour', 'goatmilk']
    }],
    exchange: [6, 1, 2, 0],
    more_exchange: [3, 0, 2, 1]
  },
]