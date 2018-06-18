
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
    ingredients: '漿果+麵粉、密糖',
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
    ingredients: '漿果*2、密糖',
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
    ingredients: '麵粉*2+蘿蔔、羊奶、密糖、蘿蔔',
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
  },
  {
    id: 27,
    title: 'Sausage',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Snack 小吃', 'Meat 肉類'],
    ingredients: '肉類+香料、蔬菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'foliage', 'smallmeat']
    }, {
        constitute: ['smallmeat', 'potato', 'spotspice_ground']
    }, {
        constitute: ['smallmeat', 'carrot', 'spotspice_ground']
    }, {
        constitute: ['smallmeat', 'tomato', 'spotspice_ground']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'spotspice_ground']
    }],
    exchange: [8, 1, 0, 0],
    more_exchange: [6, 0, 1, 0]
  },
  {
    id: 28,
    title: 'Candied Fish', 
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Snack 小吃', 'Fish 魚類'],
    ingredients: '魚類+蜜糖',
    stuffIcons: [{
      constitute: ['salmon', 'syrup', 'syrup']
    }, {
        constitute: ['salmon', 'salmon', 'syrup']
    }, {
        constitute: ['salmon', 'salmon', 'syrup', 'syrup']
    }],
    exchange: [4, 2, 0, 0],
    more_exchange: [2, 1, 1, 0]
  },
  {
    id: 29,
    title: 'Stuffed Mushroom',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Snack 小吃', 'Veggie 蔬菜'],
    ingredients: '蘑菇+洋蔥+大蒜',
    stuffIcons: [{
      constitute: ['garlic', 'ingredient_slot', 'mushrooms']
    }, {
        constitute: ['garlic', 'ingredient_slot', 'mushrooms', 'mushrooms']
    }],
    exchange: [4, 2, 0, 0],
    more_exchange: [2, 1, 1, 0]
  },
  {
    id: 30,
    title: 'Ratatouille',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Veggie 蔬菜'],
    ingredients: '番茄+蔬菜*3(不同種)',
    stuffIcons: [{
      constitute: ['tomato', 'potato', 'turnip','carrot']
    }, {
        constitute: ['tomato', 'potato', 'ingredient_slot', 'carrot']
      }, {
        constitute: ['tomato', 'potato', 'turnip', 'ingredient_slot']
      }, {
        constitute: ['tomato', 'potato', 'turnip', 'mushrooms']
      }, {
        constitute: ['tomato', 'ingredient_slot', 'turnip', 'carrot']
      }],
    exchange: [4, 2, 0, 0],
    more_exchange: [2, 1, 1, 0]
  },
  {
    id: 31,
    title: 'Bruschetta',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Veggie 蔬菜', 'Bread 麵包', 'Snack 小吃'],
    ingredients: '番茄+麵粉、填料*2',
    stuffIcons: [{
      constitute: ['flour', 'tomato', 'tomato', 'garlic']
    }, {
        constitute: ['flour', 'tomato', 'tomato', 'carrot']
    }, {
        constitute: ['flour', 'tomato', 'tomato', 'spotspice_ground']
    }, {
        constitute: ['flour', 'tomato', 'goatmilk', 'mushrooms']
    }, {
        constitute: ['flour', 'tomato', 'goatmilk', 'garlic']
    }],
    exchange: [6, 2, 0, 0],
    more_exchange: [5, 1, 1, 0]
  },
  {
    id: 32,
    title: 'Meat Stew',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Meat 肉類', 'Soup 湯'],
    ingredients: '肉類*2、肉類、香料、蔬菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'smallmeat', 'potato', 'potato']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'carrot', 'carrot']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'spotspice_ground', 'carrot']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'spotspice_ground', 'ingredient_slot']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'smallmeat', 'smallmeat']
    }],
    exchange: [6, 2, 0, 0],
    more_exchange: [5, 1, 1, 0]
  }, {
    id: 33,
    title: 'Hamburger',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill'
    }],
    condition: ['Bread 麵包', 'Meat 肉類'],
    ingredients: '麵粉x2+肉+蕨類',
    stuffIcons: [{
      constitute: ['smallmeat', 'smallmeat', 'smallmeat', 'flour']
    }, {
      constitute: ['goatmilk', 'flour', 'flour', 'foliage']
    }, {
      constitute: ['goatmilk', 'goatmilk', 'flour', 'flour']
    }, {
      constitute: ['goatmilk', 'flour', 'flour', 'spotspice_ground']
    }, {
      constitute: ['goatmilk', 'goatmilk', 'flour', 'spotspice_ground']
    }],
    exchange: [6, 2, 0, 0],
    more_exchange: [5, 1, 1, 0]
  },
  {
    id: 34,
    title: 'Fish Burger',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'Grill'
    }],
    condition: ['Fish 魚類', 'Bread 麵包'],
    ingredients: '麵粉x2+魚+香料',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'salmon', 'salmon']
    }, {
      constitute: ['flour', 'foliage', 'salmon', 'salmon']
    }, {
      constitute: ['flour', 'salmon', 'salmon', 'spotspice_ground']
    }, {
      constitute: ['flour', 'flour', 'foliage', 'salmon']
    }, {
      constitute: ['flour', 'flour', 'salmon', 'tomato']
    }],
    exchange: [6, 2, 0, 0],
    more_exchange: [5, 1, 1, 0]
  },
  {
    id: 35,
    title: 'Mushroom Burger',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'Grill'
    }],
    condition: ['Veggie 蔬菜', 'Bread 麵包'],
    ingredients: '',
    stuffIcons: [{
      constitute: ['flour', 'mushrooms', 'mushrooms', 'spotspice_ground']
    }, {
      constitute: ['flour', 'flour', 'mushrooms', 'spotspice_ground']
    }, {
      constitute: ['flour', 'flour', 'mushrooms', 'mushrooms']
    }, {
      constitute: ['flour', 'flour', 'garlic', 'mushrooms']
    }, {
      constitute: ['flour', 'mushrooms', 'mushrooms', 'mushrooms']
    }],
    exchange: [6, 2, 0, 0],
    more_exchange: [5, 1, 1, 0]
  },
  {
    id: 36,
    title: 'Fish Steak',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'Grill'
    }],
    condition: ['Fish 魚肉'],
    ingredients: '魚+蕨類+香料+菜',
    stuffIcons: [{
      constitute: ['carrot', 'foliage', 'salmon', 'spotspice_ground']
    }, {
      constitute: ['foliage', 'salmon', 'spotspice_ground', 'tomato']
    }, {
      constitute: ['foliage', 'potato', 'salmon', 'spotspice_ground']
    }, {
      constitute: ['foliage', 'onion', 'salmon', 'spotspice_ground']
    }, {
      constitute: ['foliage', 'salmon', 'spotspice_ground', 'turnip']
    }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 37,
    title: 'Curry',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot'
    }],
    condition: ['Soup 湯', 'Meat 肉類'],
    ingredients: '香料x2+肉+菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'garlic', 'spotspice_ground', 'spotspice_ground']
    }, {
      constitute: ['smallmeat', 'spotspice_ground', 'spotspice_ground', 'tomato']
    }, {
      constitute: ['smallmeat', 'potato', 'spotspice_ground', 'spotspice_ground']
    }, {
      constitute: ['smallmeat', 'onion', 'spotspice_ground', 'spotspice_ground']
    }, {
      constitute: ['smallmeat', 'spotspice_ground', 'spotspice_ground', 'turnip']
    }],
    exchange: [2, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 38,
    title: 'Spaghetti And Meatballs',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot'
    }],
    condition: ['Meat 肉類', 'Pasta 義大利麵'],
    ingredients: '麵粉+番茄+肉+菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'flour', 'mushrooms', 'tomato']
    }, {
      constitute: ['smallmeat', 'flour', 'garlic', 'tomato']
    }, {
      constitute: ['smallmeat', 'flour', 'onion', 'tomato']
    }, {
      constitute: ['smallmeat', 'flour', 'spotspice_ground', 'tomato']
    }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 39,
    title: 'Lasagna',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Pasta 義大利麵', 'Meat 肉類'],
    ingredients: '麵粉+番茄+肉+菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'flour', 'mushrooms', 'tomato']
    }, {
      constitute: ['smallmeat', 'flour', 'garlic', 'tomato']
    }, {
      constitute: ['smallmeat', 'flour', 'onion', 'tomato']
    }, {
      constitute: ['smallmeat', 'flour', 'spotspice_ground', 'tomato']
    }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },

          {
    id: 40,
    title: 'Poached Fish',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot'
    }],
    condition: ['Fish 魚類'],
    ingredients: '魚+蕨類+香料+菜',
    stuffIcons: [{
      constitute: ['salmon', 'foliage', 'spotspice_ground', 'carrot']
    }, {
      constitute: ['salmon', 'foliage', 'spotspice_ground', 'tomato']
    }, {
      constitute: ['salmon', 'foliage', 'spotspice_ground', 'potato']
    }, {
      constitute: ['salmon', 'foliage', 'spotspice_ground', 'mushrooms']
    }, {
      constitute: ['salmon', 'foliage', 'spotspice_ground', 'turnip']
    }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 41,
    title: 'Shepherds Pie',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉類'],
    ingredients: '肉+馬鈴薯+香料+蘿蔔',
    stuffIcons: [{
      constitute: ['smallmeat', 'potato', 'spotspice_ground', 'carrot']
    }, {
      constitute: ['smallmeat', 'potato', 'spotspice_ground', 'turnip']
    }, {
      constitute: ['smallmeat', 'potato', 'garlic', 'onion']
    }, {
      constitute: ['smallmeat', 'potato', 'spotspice_ground', 'onion']
    }, {
      constitute: ['smallmeat', 'potato', 'garlic', 'turnip']
    }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 42,
    title: 'Candy',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Dessert 甜點',],
    ingredients: '楓糖x3',
    stuffIcons: [{
      constitute: ['syrup', 'syrup', 'syrup']
    }, {
      constitute: ['syrup', 'syrup', 'syrup', 'syrup']
    }],
    exchange: [2, 0, 1, 0],
    more_exchange: [6, 0, 1, 0]
  },
  {
    id: 43,
    title: 'Pudding',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '麵粉x2+楓糖',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'syrup']
    }, {
      constitute: ['flour', 'flour', 'syrup', 'berries']
    }, {
      constitute: ['flour', 'flour', 'flour', 'syrup']
    }, {
      constitute: ['flour', 'flour', 'syrup', 'syrup']
    }, {
      constitute: ['flour', 'flour', 'syrup', 'spotspice_ground']
    }],
    exchange: [4, 0, 1, 0],
    more_exchange: [2, 1, 1, 0]
  },
  {
    id: 44,
    title: 'Waffles',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '麵粉x2+楓糖',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'syrup']
    }, {
      constitute: ['flour', 'flour', 'flour', 'syrup']
    }, {
      constitute: ['flour', 'flour', 'syrup', 'syrup']
    },],
    exchange: [4, 0, 1, 0],
    more_exchange: [2, 1, 1, 0]
  },
  {
    id: 45,
    title: 'Berry Tart',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '漿果+麵粉+楓糖',
    stuffIcons: [{
      constitute: ['berries', 'flour', 'syrup']
    }, {
      constitute: ['berries', 'berries', 'flour', 'syrup']
    }, {
      constitute: ['berries', 'flour', 'syrup', 'syrup']
    }],
    exchange: [6, 0, 1, 0],
    more_exchange: [5, 1, 1, 0]
  },
  {
    id: 46,
    title: "Mac'Ncheese",
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Cheese 起司', 'Pasta 義大利麵'],
    ingredients: '麵粉x2+羊奶',
    stuffIcons: [{
      constitute: ['flour', 'goatmilk', 'goatmilk']
    }, {
      constitute: ['flour', 'flour', 'goatmilk']
    }, {
      constitute: ['flour', 'flour', 'goatmilk', 'goatmilk']
    },],
    exchange: [8, 0, 1, 0],
    more_exchange: [7, 0, 0, 1]
  },
  {
    id: 47,
    title: "Bagel'Nfish",
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill'
    }],
    condition: ['Snack 小吃', 'Fish 魚類', 'Bread 麵包'],
    ingredients: '魚+麵粉+羊奶+香料',
    stuffIcons: [{
      constitute: ['salmon', 'flour', 'goatmilk', 'spotspice_ground']
    }, {
      constitute: ['salmon', 'flour', 'goatmilk', 'onion']
    }],
    exchange: [8, 0, 1, 0],
    more_exchange: [7, 0, 0, 1]
  },
  {
    id: 48,
    title: 'Grilled Cheese',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Snack 小吃', 'Cheese 起司', 'Bread 麵包'],
    ingredients: '麵粉x2+羊奶',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'goatmilk']
    }, {
      constitute: ['flour', 'goatmilk', 'goatmilk']
    }, {
      constitute: ['flour', 'flour', 'goatmilk', 'goatmilk']
    }],
    exchange: [8, 0, 1, 0],
    more_exchange: [7, 0, 0, 1]
  },
  {
    id: 49,
    title: 'Cream Of Mushroom',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Cheese 起司', 'Veggie 蔬菜', 'Snack 小吃', 'Soup 湯'],
    ingredients: '蘑菇x2+牛奶',
    stuffIcons: [{
      constitute: ['mushrooms', 'mushrooms', 'goatmilk']
    }, {
      constitute: ['mushrooms', 'goatmilk', 'goatmilk']
                }, {
      constitute: ['mushrooms', 'mushrooms', 'goatmilk', 'goatmilk']
    }],
    exchange: [8, 0, 1, 0],
    more_exchange: [7, 0, 0, 1]
  }
  , {
    id: 50,
    title: 'Pierogies',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot_small'
    }],
    condition: ['Cheese 起司', 'Veggie 蔬菜'],
    ingredients: '麵粉+羊奶+馬鈴薯',
    stuffIcons: [{
      constitute: ['flour', 'goatmilk', 'potato']
    }, {
      constitute: ['smallmeat', 'flour', 'goatmilk', 'potato']
    }, {
      constitute: ['flour', 'flour', 'goatmilk', 'potato']
    }, {
      constitute: ['flour', 'goatmilk', 'potato', 'potato']
    }, {
      constitute: ['flour', 'goatmilk', 'potato', 'spotspice_ground']
    }],
    exchange: [4, 1, 1, 0],
    more_exchange: [4, 1, 0, 1]
  },
  {
    id: 51,
    title: 'Manicotti',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Cheese 起司', 'Pasta 義大利麵'],
    ingredients: '羊奶+麵粉+番茄+蕨類',
    stuffIcons: [{
      constitute: ['flour', 'garlic', 'goatmilk', 'tomato']
    }, {
      constitute: ['flour', 'foliage', 'goatmilk', 'tomato']
    }, {
      constitute: ['flour', 'goatmilk', 'goatmilk', 'tomato']
    }, {
      constitute: ['flour', 'goatmilk', 'spotspice_ground', 'tomato']
    }],
    exchange: [6, 1, 1, 0],
    more_exchange: [6, 1, 0, 1]
  },
  {
    id: 52,
    title: 'Cheeseburger',
    tool: [{
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill'
    }],
    condition: ['Meat 肉類', 'Cheese 起司', 'Bread 麵包'],
    ingredients: '肉+麵粉+羊奶+蕨類',
    stuffIcons: [{
      constitute: ['smallmeat', 'flour', 'foliage', 'goatmilk']
    }, {
      constitute: ['smallmeat', 'flour', 'goatmilk', 'tomato']
    }, {
      constitute: ['smallmeat', 'flour', 'goatmilk', 'spotspice_ground']
    }, {
      constitute: ['smallmeat', 'flour', 'goatmilk', 'onion']
    }, {
      constitute: ['smallmeat', 'smallmeat', 'flour', 'goatmilk']
    }],
    exchange: [6, 1, 1, 0],
    more_exchange: [6, 1, 0, 1]
  },
  {
    id: 53,
    title: 'Fettuccine',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot'
    }],
    condition: ['Pasta 義大利麵'],
    ingredients: '麵粉+蒜頭+羊奶x2',
    stuffIcons: [{
      constitute: ['flour', 'garlic', 'goatmilk', 'goatmilk']
    }],
    exchange: [8, 1, 1, 0],
    more_exchange: [3, 0, 1, 1]
  },
  {
    id: 54,
    title: 'Onion Soup',
    tool: [{
      type: 'Cookpot',
      name: 'Cookpot吊鍋',
      iconName: 'pot'
    }],
    condition: ['Soup 湯', 'Veggie 蔬菜', 'Snack 小吃'],
    ingredients: '麵粉+羊奶+洋蔥x2',
    stuffIcons: [{
      constitute: ['flour', 'goatmilk', 'onion', 'onion']
    }],
    exchange: [8, 1, 1, 0],
    more_exchange: [3, 0, 1, 1]
  },
  {
    id: 55,
    title: 'Breaded Cutlet',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉類'],
    ingredients: '牛肉+麵粉x2+香料',
    stuffIcons: [{
      constitute: ['meat', 'flour', 'flour', 'spotspice_ground']
    }, {
      constitute: ['meat', 'meat', 'flour', 'flour']
    }],
    exchange: [8, 1, 1, 0],
    more_exchange: [3, 0, 1, 1]
  },
  {
    id: 56,
    title: 'Creamy Fish',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Fish 魚類'],
    ingredients: '魚+香料+羊奶+蒜頭',
    stuffIcons: [{
      constitute: ['salmon', 'spotspice_ground', 'goatmilk', 'garlic']
    }, {
      constitute: ['salmon', 'spotspice_ground', 'goatmilk', 'goatmilk']
    }, {
      constitute: ['salmon', 'spotspice_ground', 'goatmilk', 'onion']
    }],
    exchange: [8, 1, 1, 0],
    more_exchange: [3, 0, 1, 1]
  },
  {
    id: 57,
    title: 'Pizza',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Cheese 起司', 'Meat 肉類'],
    ingredients: '麵粉+牛奶+小肉+番茄',
    stuffIcons: [{
      constitute: ['smallmeat', 'flour', 'goatmilk', 'tomato']
    }],
    exchange: [4, 0, 2, 0],
    more_exchange: [5, 0, 1, 1]
  },
  {
    id: 58,
    title: 'Pot Roast',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉類'],
    ingredients: '牛肉+蘑菇+香料+番茄',
    stuffIcons: [{
      constitute: ['meat', 'spotspice_ground', 'tomato', 'mushrooms']
    }, {
      constitute: ['meat', 'meat', 'carrot', 'spotspice_ground']
    }, {
      constitute: ['meat', 'meat', 'tomato', 'spotspice_ground']
    }, {
      constitute: ['meat', 'carrot', 'spotspice_ground', 'turnip']
    }, {
      constitute: ['meat', 'meat', 'garlic', 'tomato']
    }],
    exchange: [4, 0, 2, 0],
    more_exchange: [5, 0, 1, 1]
  },
  {
    id: 59,
    title: 'Crab Cake',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Snack 小吃'],
    ingredients: '蟹肉+麵粉+馬鈴薯+香料',
    stuffIcons: [{
      constitute: ['crabmeat', 'flour', 'onion', 'spotspice_ground']
    }, {
      constitute: ['crabmeat', 'crabmeat', 'flour', 'potato']
    }, {
      constitute: ['crabmeat', 'flour', 'garlic', 'spotspice_ground']
    }, {
      constitute: ['crabmeat', 'flour', 'potato', 'spotspice_ground']
    }, {
      constitute: ['crabmeat', 'crabmeat', 'flour', 'spotspice_ground']
    }],
    exchange: [4, 0, 2, 0],
    more_exchange: [5, 0, 1, 1]
  },
  {
    id: 60,
    title: 'Steak Frites',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill 大烤盤',
      iconName: 'grill'
    }],
    condition: ['Meat 肉類'],
    ingredients: '牛肉+馬鈴薯、牛肉、馬鈴薯、香料',
    stuffIcons: [{
      constitute: ['meat', 'potato', 'potato', 'spotspice_ground']
    },{
      constitute: ['meat', 'meat', 'potato', 'potato']
    }, {
      constitute: ['meat', 'meat', 'potato', 'spotspice_ground']
    }],
    exchange: [6, 0, 2, 0],
    more_exchange: [2, 1, 1, 1]
  },
  {
    id: 61,
    title: 'Shooter Sandwich',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill 大烤盤',
      iconName: 'grill'
    }],
    condition: ['Meat 肉類', 'Bread 麵包'],
    ingredients: '牛肉+麵粉、香料、蘑菇、蒜頭',
    stuffIcons: [{
      constitute: ['meat', 'mushrooms', 'spotspice_ground', 'flour']
    }, {
        constitute: ['meat', 'garlic', 'spotspice_ground', 'flour']
      },{
        constitute: ['meat', 'meat', 'spotspice_ground', 'flour']
    }, {
        constitute: ['meat', 'meat', 'garlic', 'flour']
    }, {
        constitute: ['meat', 'meat', 'mushrooms', 'flour']
    }],
    exchange: [6, 0, 2, 0],
    more_exchange: [2, 1, 1, 1]
  },
  {
    id: 62,
    title: 'Offering',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven 大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉類'],
    ingredients: '牛肉x2、肉x2',
    stuffIcons: [{
      constitute: ['meat', 'smallmeat', 'smallmeat', 'spotspice_ground']
    }, {
      constitute: ['meat', 'meat', 'smallmeat', 'spotspice_ground']
      },{
        constitute: ['meat', 'meat', 'smallmeat', 'smallmeat']
      }],
    exchange: [8, 0, 2, 0],
    more_exchange: [4, 1, 1, 1]
  },
  {
    id: 63,
    title: 'Crab Roll',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill 大烤盤',
      iconName: 'grill'
    }],
    condition: ['Bread 麵包'],
    ingredients: '蟹肉+麵粉+(蕨類、蔬菜)',
    stuffIcons: [{
      constitute: ['crabmeat', 'foliage', 'ingredient_slot', 'flour']
    },{
      constitute: ['crabmeat', 'foliage', 'tomato', 'flour']
    },{
      constitute: ['crabmeat', 'crabmeat', 'foliage', 'flour']
    },  {
      constitute: ['crabmeat', 'crabmeat', 'tomato', 'flour']
    }, {
      constitute: ['crabmeat', 'crabmeat', 'mushrooms', 'flour']
    }],
    exchange: [4, 1, 2, 0],
    more_exchange: [7, 1, 1, 1]
  },
  {
    id: 64,
    title: 'Meat Wellington',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven 大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉類'],
    ingredients: '牛肉+麵粉+(香料、蘑菇、蒜頭)',
    stuffIcons: [{
      constitute: ['meat', 'flour', 'mushrooms', 'spotspice_ground']
    }, {
        constitute: ['meat', 'flour', 'garlic', 'spotspice_ground']
      }, {
        constitute: ['meat', 'meat', 'flour', 'mushrooms']
      },{
      constitute: ['meat', 'meat', 'flour', 'spotspice_ground']
    }, {
      constitute: ['meat', 'meat', 'flour', 'garlic']
    }],
    exchange: [4, 1, 2, 0],
    more_exchange: [7, 1, 1, 1]
  },
  {
    id: 65,
    title: 'Crab Ravioli',
    tool: [{
      type: 'Big Cookpot',
      name: 'Big Cookpot 大吊鍋',
      iconName: 'pot'
    }],
    condition: ['Cheese 起司', 'Pasta 義大利麵'],
    ingredients: '蟹肉+麵粉+牛奶+(蟹肉、洋蔥、香料)',
    stuffIcons: [{
      constitute: ['crabmeat', 'ingredient_slot', 'goatmilk', 'flour']
    }, {
        constitute: ['crabmeat', 'mushrooms', 'goatmilk', 'flour']
    }, {
        constitute: ['crabmeat', 'garlic', 'goatmilk', 'flour']
    }, {
        constitute: ['crabmeat', 'spotspice_ground', 'goatmilk', 'flour']
    }, {
      constitute: ['crabmeat', 'crabmeat', 'goatmilk', 'flour']
    }],
    exchange: [6, 1, 2, 0],
    more_exchange: [3, 0, 2, 1]
  },
  {
    id: 66,
    title: 'Caramel Cube',
    tool: [{
      type: 'Big Cookpot',
      name: 'Big Cookpot 大吊鍋',
      iconName: 'pot'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '羊奶+蜜糖+(牛奶、蜜糖)',
    stuffIcons: [{
      constitute: ['goatmilk', 'goatmilk', 'syrup']
    }, {
      constitute: ['goatmilk', 'syrup', 'syrup']
    }, {
      constitute: ['goatmilk', 'goatmilk', 'syrup', 'syrup']
    }],
    exchange: [2, 0, 0, 1],
    more_exchange: [7, 0, 0, 1]
  },
  {
    id: 67,
    title: 'Scone',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill 大烤盤',
      iconName: 'grill'
    }],
    condition: ['Dessert 甜點', 'Bread 麵包'],
    ingredients: '麵粉x2+莓果+羊奶',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'goatmilk','berries' ]
    }],
    exchange: [4, 0, 0, 1],
    more_exchange: [4, 1, 0, 1]
  },
  {
    id: 68,
    title: 'Trifle',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven 大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '麵粉x2+莓果+羊奶',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'goatmilk', 'berries']
    }],
    exchange: [6, 0, 0, 1],
    more_exchange: [6, 1, 0, 1]
  },
  {
    id: 69,
    title: 'Cheesecake',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven 大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Cheese 起司', 'Dessert 甜點'],
    ingredients: '羊奶x2+莓果+麵粉',
    stuffIcons: [{
      constitute: ['flour', 'goatmilk', 'goatmilk','crabmeat']
    }],
    exchange: [2, 1, 0, 1],
    more_exchange: [3, 0, 1, 1]
  }
]