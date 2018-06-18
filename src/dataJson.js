
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
    ingredients: '馬鈴薯*2+(馬鈴薯、香料)',
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
    exchange: [8, 0, 0, 0],
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
    ingredients: '漿果+麵粉+(密糖)',
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
    condition: ['Soup 湯', 'Fish 魚'],
    ingredients: '魚+蔬菜',
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
    ingredients: '甜菜*2+(甜菜、蔬菜)',
    stuffIcons: [{
        constitute: ['turnip', 'turnip', 'carrot']
    }, {
        constitute: ['turnip', 'turnip', 'onion']
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
    ingredients: '馬鈴薯*2+(馬鈴薯、洋蔥)',
    stuffIcons: [{
      constitute: ['potato', 'potato', 'potato']
    }, {
        constitute: ['potato', 'potato', 'onion']
    }, {
        constitute: ['potato', 'potato', 'potato', 'onion']
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
    ingredients: '馬鈴薯*2+(馬鈴薯、香料)',
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
    condition: ['Fish 魚', 'Snack 小吃'],
    ingredients: '魚+樹枝+(蔬菜)',
    stuffIcons: [{
        constitute: ['twigs', 'salmon', 'potato']
      }, {
        constitute: ['twigs', 'salmon', 'carrot']
      }, {
        constitute: ['twigs', 'salmon', 'onion']
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
    condition: ['Meat 肉', 'Snack 小吃'],
    ingredients: '肉+(蔬菜)',
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
    condition: ['Meat 肉', 'Snack 小吃'],
    ingredients: '肉*2+樹枝',
    stuffIcons: [{
      constitute: ['twigs', 'smallmeat', 'smallmeat']
    }, {
        constitute: ['twigs', 'smallmeat', 'smallmeat', 'onion']
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
    ingredients: '馬鈴薯+麵粉+(蔬菜)',
    stuffIcons: [{
      constitute: ['flour', 'potato', 'potato']
    }, {
        constitute: ['flour', 'potato', 'carrot']
    }, {
        constitute: ['flour', 'potato', 'turnip']
    }, {
        constitute: ['flour', 'potato', 'onion']
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
        constitute: ['potato', 'potato', 'mushrooms']
    }, {
        constitute: ['potato', 'mushrooms', 'mushrooms']
    }, {
        constitute: ['potato', 'onion', 'turnip']
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
    condition: ['Meat 肉'],
    ingredients: '肉+(蔬菜)',
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
    ingredients: '蘿蔔*2+(蘿蔔、香料、蒜頭)',
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
    condition: ['Fish 魚'],
    ingredients: '麵粉+魚+(蔬菜)',
    stuffIcons: [{
      constitute: ['flour', 'salmon', 'carrot']
    }, {
        constitute: ['flour', 'salmon', 'turnip']
    }, {
        constitute: ['flour', 'salmon', 'onion']
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
    condition: ['Fish 魚'],
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
    condition: ['Meat 肉'],
    ingredients: '麵粉+肉+蔬菜',
    stuffIcons: [{
      constitute: ['flour', 'smallmeat', 'potato']
    }, {
        constitute: ['flour', 'smallmeat', 'carrot']
    }, {
        constitute: ['flour', 'smallmeat', 'turnip']
    }, {
        constitute: ['flour', 'smallmeat', 'onion']
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
      type: 'Grill',
      name: 'Grill烤盤',
      iconName: 'grill_small'
    }],
    condition: ['Bread 麵包','Snack 小吃','Meat 肉'],
    ingredients: '麵粉+肉+(任意)',
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
    ingredients: '漿果*2+(密糖)',
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
    exchange: [0,1 , 0, 0],
    more_exchange: [1, 2, 0, 0]
  },
  {
    id: 22,
    title: 'Jelly Roll',
    tool: [{
      type: 'Oven',
      name: 'Oven窯烤',
      iconName: 'casseroledish_small'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '漿果*2+麵粉',
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
    ingredients: '麵粉*2+(蘿蔔、羊奶、密糖、蘿蔔)',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'carrot']
    }, {
        constitute: ['flour', 'flour', 'carrot', 'carrot']
    }, {
        constitute: ['flour', 'flour', 'carrot', 'syrup']
      }, {
        constitute: ['flour', 'flour', 'carrot', 'goatmilk']
      }],
    exchange: [6, 1, 0, 0],
    more_exchange: [3,2, 0, 0]
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
    ingredients: '馬鈴薯*2+(蒜頭、馬鈴薯)',
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
    ingredients: '麵粉*2+(蒜頭、麵粉)',
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
    ingredients: '番茄*2+(番茄、蒜頭、香料)',
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
    condition: ['Snack 小吃', 'Meat 肉'],
    ingredients: '肉+香料+(蔬菜)',
    stuffIcons: [{
      constitute: ['smallmeat', 'foliage', 'spotspice_ground']
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
    condition: ['Snack 小吃', 'Fish 魚'],
    ingredients: '魚+楓糖',
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
      constitute: ['garlic', 'onion', 'mushrooms']
    }, {
        constitute: ['garlic', 'onion', 'mushrooms', 'mushrooms']
    }],
    exchange: [4, 2, 0, 0],
    more_exchange: [2, 1, 1, 0]
  },
  {
    id: 30,
    title: 'Ratatouille',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Veggie 蔬菜'],
    ingredients: '番茄+蔬菜*3(不同種)',
    stuffIcons: [{
      constitute: ['tomato', 'potato', 'turnip','carrot']
    }, {
        constitute: ['tomato', 'potato', 'onion', 'carrot']
      }, {
        constitute: ['tomato', 'potato', 'turnip', 'onion']
      }, {
        constitute: ['tomato', 'potato', 'turnip', 'mushrooms']
      }, {
        constitute: ['tomato', 'onion', 'turnip', 'carrot']
      }],
    exchange: [4, 2, 0, 0],
    more_exchange: [2, 1, 1, 0]
  },
  {
    id: 31,
    title: 'Bruschetta',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Veggie 蔬菜', 'Bread 麵包', 'Snack 小吃'],
    ingredients: '番茄+麵粉+(填料*2)',
    stuffIcons: [{
      constitute: ['flour', 'tomato', 'tomato', 'garlic']
    }, {
        constitute: ['flour', 'tomato', 'tomato', 'foliage']
    }, {
        constitute: ['flour', 'tomato', 'tomato', 'spotspice_ground']
    }, {
        constitute: ['flour', 'tomato', 'goatmilk', 'foliage']
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
      type: 'Big Cookpot',
      name: 'Big Cookpot大吊鍋',
      iconName: 'pot'
    }],
    condition: ['Meat 肉', 'Soup 湯'],
    ingredients: '肉*2+(肉、香料、蔬菜)',
    stuffIcons: [{
      constitute: ['smallmeat', 'smallmeat', 'potato', 'potato']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'carrot', 'carrot']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'spotspice_ground', 'carrot']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'spotspice_ground', 'onion']
    }, {
        constitute: ['smallmeat', 'smallmeat', 'smallmeat', 'smallmeat']
    }],
    exchange: [6, 2, 0, 0],
    more_exchange: [5, 1, 1, 0]
  }, {
    id: 33,
    title: 'Hamburger',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Bread 麵包', 'Meat 肉'],
    ingredients: '麵粉+肉+(香料、蕨類)',
    stuffIcons: [{
      constitute: ['smallmeat', 'foliage', 'flour', 'flour']
    }, {
        constitute: ['smallmeat', 'spotspice_ground', 'flour','flour']
      }, {
        constitute: ['smallmeat', 'smallmeat', 'flour', 'flour']
      }, {
        constitute: ['smallmeat', 'smallmeat', 'spotspice_ground', 'flour']
      }, {
        constitute: ['smallmeat', 'smallmeat', 'smallmeat', 'flour']
    }],
    exchange: [6, 2, 0, 0],
    more_exchange: [5, 1, 1, 0]
  },
  {
    id: 34,
    title: 'Fish Burger',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Fish 魚', 'Bread 麵包'],
    ingredients: '麵粉+魚+(香料、蕨類)',
    stuffIcons: [{
      constitute: ['salmon', 'foliage', 'flour', 'flour']
    }, {
        constitute: ['salmon', 'tomato', 'flour', 'flour']
      }, {
        constitute: ['salmon', 'salmon', 'foliage', 'flour']
      }, {
      constitute: ['salmon', 'salmon', 'spotspice_ground', 'flour']
    }, {
        constitute: ['salmon', 'salmon', 'flour', 'flour']
    }],
    exchange: [6, 2, 0, 0],
    more_exchange: [5, 1, 1, 0]
  },
  {
    id: 35,
    title: 'Mushroom Burger',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Veggie 蔬菜', 'Bread 麵包'],
    ingredients: '麵粉+蘑菇+(香料、蒜頭)',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'spotspice_ground', 'mushrooms']
    }, {
        constitute: ['flour', 'flour', 'garlic', 'mushrooms']
      }, {
        constitute: ['flour', 'flour', 'mushrooms', 'mushrooms']
      },{
      constitute: ['flour', 'spotspice_ground', 'mushrooms', 'mushrooms']
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
      type: 'Big Grill',
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Fish 魚肉'],
    ingredients: '魚+蕨類+香料+菜',
    stuffIcons: [{
      constitute: ['foliage' ,'salmon', 'spotspice_ground','carrot']
    }, {
        constitute: ['foliage', 'salmon', 'spotspice_ground', 'potato']
    }, {
        constitute: ['foliage', 'salmon', 'spotspice_ground', 'onion']
    }, {
      constitute: ['foliage', 'salmon', 'spotspice_ground', 'turnip']
      }, {
        constitute: ['foliage', 'salmon', 'spotspice_ground', 'tomato']
      }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 37,
    title: 'Curry',
    tool: [{
      type: 'Big Cookpot',
      name: 'Big Cookpot大吊鍋',
      iconName: 'pot'
    }],
    condition: ['Soup 湯', 'Meat 肉'],
    ingredients: '香料x2+肉+菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'spotspice_ground', 'spotspice_ground', 'potato']
    }, {
      constitute: ['smallmeat', 'spotspice_ground', 'spotspice_ground', 'onion']
    }, {
      constitute: ['smallmeat', 'spotspice_ground', 'spotspice_ground', 'turnip']
      },{
        constitute: ['smallmeat', 'spotspice_ground', 'spotspice_ground', 'garlic']
      }, {
        constitute: ['smallmeat', 'spotspice_ground', 'spotspice_ground', 'tomato']
      }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 38,
    title: 'Spaghetti And Meatballs',
    tool: [{
      type: 'Big Cookpot',
      name: 'Big Cookpot大吊鍋',
      iconName: 'pot'
    }],
    condition: ['Meat 肉', 'Pasta 義大利麵'],
    ingredients: '麵粉+番茄+肉+菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'flour', 'tomato', 'onion']
    },{
      constitute: ['smallmeat', 'flour', 'tomato', 'mushrooms']
    }, {
      constitute: ['smallmeat', 'flour', 'tomato', 'garlic']
    }, {
      constitute: ['smallmeat', 'flour', 'tomato', 'spotspice_ground']
    }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 39,
    title: 'Lasagna',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Pasta 義大利麵', 'Meat 肉'],
    ingredients: '麵粉+番茄+肉+菜',
    stuffIcons: [{
      constitute: ['smallmeat', 'flour', 'tomato', 'onion']
    }, {
        constitute: ['smallmeat', 'flour', 'tomato', 'mushrooms']
      },{
      constitute: ['smallmeat', 'flour', 'tomato', 'garlic']
    },  {
      constitute: ['smallmeat', 'flour', 'tomato', 'spotspice_ground']
    }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  }, {
    id: 40,
    title: 'Poached Fish',
    tool: [{
      type: 'Big Cookpot',
      name: 'Big Cookpot大吊鍋',
      iconName: 'pot'
    }],
    condition: ['Fish 魚'],
    ingredients: '魚+蕨類+香料+菜',
    stuffIcons: [{
      constitute: ['salmon', 'foliage', 'spotspice_ground', 'carrot']
    }, {
      constitute: ['salmon', 'foliage', 'spotspice_ground', 'potato']
      }, {
        constitute: ['salmon', 'foliage', 'spotspice_ground', 'turnip']
      },{
      constitute: ['salmon', 'foliage', 'spotspice_ground', 'mushrooms']
    },  {
        constitute: ['salmon', 'foliage', 'spotspice_ground', 'tomato']
      }],
    exchange: [8, 2, 0, 0],
    more_exchange: [7, 1, 1, 0]
  },
  {
    id: 41,
    title: 'Shepherds Pie',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉'],
    ingredients: '肉+馬鈴薯+(香料、蒜頭、蔬菜)',
    stuffIcons: [{
      constitute: ['smallmeat', 'potato', 'spotspice_ground', 'carrot']
    }, {
      constitute: ['smallmeat', 'potato', 'spotspice_ground', 'turnip']
      }, {
        constitute: ['smallmeat', 'potato', 'spotspice_ground', 'onion']
      }, {
      constitute: ['smallmeat', 'potato', 'garlic', 'onion']
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
    ingredients: '麵粉x2+楓糖+(果實、香料)',
    stuffIcons: [{
      constitute: ['flour', 'flour', 'syrup']
    }, {
      constitute: ['flour', 'flour', 'syrup', 'berries']
      }, {
        constitute: ['flour', 'flour', 'syrup', 'spotspice_ground']
      },{
      constitute: ['flour', 'flour', 'flour', 'syrup']
    },  {
        constitute: ['flour', 'flour', 'syrup', 'syrup']
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
      constitute: ['flour', 'syrup', 'berries']
    }, {
        constitute: ['flour', 'syrup', 'berries', 'berries']
    }, {
        constitute: ['flour', 'syrup', 'syrup', 'berries']
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
    ingredients: '麵粉+羊奶',
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
      type: 'Big Grill',
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Snack 小吃', 'Fish 魚', 'Bread 麵包'],
    ingredients: '魚+麵粉+羊奶+(香料、洋蔥)',
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
    ingredients: '麵粉+羊奶',
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
    ingredients: '蘑菇+牛奶',
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
    ingredients: '麵粉+羊奶+馬鈴薯+(肉、香料)',
    stuffIcons: [{
      constitute: ['flour', 'goatmilk', 'potato']
    }, {
        constitute: ['flour','goatmilk', 'potato','smallmeat']
    }, {
        constitute: ['flour', 'goatmilk', 'potato', 'potato']
      }, {
        constitute: ['flour', 'goatmilk', 'potato', 'spotspice_ground']
      }, {
        constitute: ['flour', 'goatmilk', 'goatmilk', 'potato']
    }],
    exchange: [4, 1, 1, 0],
    more_exchange: [4, 1, 0, 1]
  },
  {
    id: 51,
    title: 'Manicotti',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Cheese 起司', 'Pasta 義大利麵'],
    ingredients: '羊奶+麵粉+番茄+(蕨類、香料、蒜頭)',
    stuffIcons: [{
      constitute: ['flour', 'tomato', 'goatmilk', 'foliage']
    },{
      constitute: ['flour', 'tomato', 'goatmilk', 'garlic']
    },  {
        constitute: ['flour', 'tomato', 'goatmilk', 'spotspice_ground']
      }, {
      constitute: ['flour', 'tomato', 'goatmilk', 'goatmilk']
    }],
    exchange: [6, 1, 1, 0],
    more_exchange: [6, 1, 0, 1]
  },
  {
    id: 52,
    title: 'Cheeseburger',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Meat 肉', 'Cheese 起司', 'Bread 麵包'],
    ingredients: '肉+麵粉+羊奶+(蕨類、香料、蔬菜)',
    stuffIcons: [{
      constitute: [ 'flour','goatmilk', 'smallmeat','foliage']
    }, {
        constitute: ['flour', 'goatmilk', 'smallmeat', 'onion']
      }, {
      constitute: [ 'flour','goatmilk', 'smallmeat', 'tomato']
    }, {
      constitute: [ 'flour','goatmilk', 'smallmeat', 'spotspice_ground']
    }, {
      constitute: [ 'flour','goatmilk', 'smallmeat', 'smallmeat']
    }],
    exchange: [6, 1, 1, 0],
    more_exchange: [6, 1, 0, 1]
  },
  {
    id: 53,
    title: 'Fettuccine',
    tool: [{
      type: 'Big Cookpot',
      name: 'Big Cookpot大吊鍋',
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
      type: 'Big Cookpot',
      name: 'Big Cookpot大吊鍋',
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
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉'],
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
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Fish 魚'],
    ingredients: '魚+香料+羊奶+(羊奶、蒜頭、洋蔥)',
    stuffIcons: [{
      constitute: ['salmon', 'spotspice_ground', 'goatmilk', 'garlic']
    }, {
      constitute: ['salmon', 'spotspice_ground', 'goatmilk', 'onion']
      }, {
        constitute: ['salmon', 'spotspice_ground', 'goatmilk', 'goatmilk']
      }],
    exchange: [8, 1, 1, 0],
    more_exchange: [3, 0, 1, 1]
  },
  {
    id: 57,
    title: 'Pizza',
    tool: [{
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Cheese 起司', 'Meat 肉'],
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
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉'],
    ingredients: '牛肉+蔬菜+(蘑菇、香料)',
    stuffIcons: [{
      constitute: ['meat', 'tomato', 'mushrooms', 'spotspice_ground']
    }, {
        constitute: ['meat', 'carrot', 'turnip', 'spotspice_ground']
      }, {
      constitute: ['meat', 'meat', 'carrot', 'spotspice_ground']
    }, {
      constitute: ['meat', 'meat', 'tomato', 'spotspice_ground']
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
      type: 'Big Oven',
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Snack 小吃'],
    ingredients: '蟹肉+麵粉+(馬鈴薯、香料)',
    stuffIcons: [{
      constitute: ['flour','crabmeat',  'onion', 'spotspice_ground']
    }, {
      constitute: ['flour','crabmeat',  'garlic', 'spotspice_ground']
    }, {
      constitute: ['flour','crabmeat',  'potato', 'spotspice_ground']
      }, {
        constitute: ['flour', 'crabmeat', 'crabmeat', 'potato']
      }, {
      constitute: ['flour','crabmeat', 'crabmeat',  'spotspice_ground']
    }],
    exchange: [4, 0, 2, 0],
    more_exchange: [5, 0, 1, 1]
  },
  {
    id: 60,
    title: 'Steak Frites',
    tool: [{
      type: 'Big Grill',
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Meat 肉'],
    ingredients: '牛肉+馬鈴薯+(香料)',
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
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Meat 肉', 'Bread 麵包'],
    ingredients: '牛肉+麵粉+(香料、蘑菇、蒜頭)',
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
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉'],
    ingredients: '牛肉+肉+(香料)',
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
      name: 'Big Grill大烤盤',
      iconName: 'grill'
    }],
    condition: ['Bread 麵包'],
    ingredients: '蟹肉+麵粉+(蕨類、蔬菜)',
    stuffIcons: [{
      constitute: ['crabmeat', 'foliage', 'onion', 'flour']
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
      name: 'Big Oven大窯烤',
      iconName: 'casseroledish'
    }],
    condition: ['Meat 肉'],
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
      name: 'Big Cookpot大吊鍋',
      iconName: 'pot'
    }],
    condition: ['Cheese 起司', 'Pasta 義大利麵'],
    ingredients: '蟹肉+麵粉+牛奶+(蟹肉、洋蔥、香料)',
    stuffIcons: [{
      constitute: ['crabmeat', 'onion', 'goatmilk', 'flour']
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
      name: 'Big Cookpot大吊鍋',
      iconName: 'pot'
    }],
    condition: ['Dessert 甜點'],
    ingredients: '羊奶+楓糖+(牛奶、楓糖)',
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
      name: 'Big Grill大烤盤',
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
      name: 'Big Oven大窯烤',
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
      name: 'Big Oven大窯烤',
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