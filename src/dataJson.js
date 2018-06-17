
export const dataJson = [
  {
    id:1,
    title:'Bread',
    tool: {
      type:'Oven',
      name: 'Oven (窯烤)',
      iconName: 'casseroledish_small'
    },
    condition:['Bread (麵包)','Snack (小吃)'],
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
    tool: {
      type: 'Oven',
      name: 'Oven (窯烤)',
      iconName: 'casseroledish_small'
    },
    condition: ['Veggie (蔬菜)', 'Snack (小吃)'],
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
    tool: {
      type: 'Cookpot',
      name: 'Cookpot (吊鍋)',
      iconName: 'pot_small'
    },
    condition: ['Veggie (蔬菜)', 'Snack (小吃)', 'Soup (湯)'],
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
    tool: {
      type: 'Grill',
      name: 'Grill (烤盤)',
      iconName: 'grill_small'
    },
    condition: ['Snack (小吃)', 'Bread (麵包)'],
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
    tool: {
      type: 'Cookpot',
      name: 'Cookpot (吊鍋)',
      iconName: 'pot_small'
    },
    condition: ['Soup (湯)', 'Fish (魚類)'],
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
    tool: {
      type: 'Oven',
      name: 'Oven (窯烤)',
      iconName: 'casseroledish_small'
    },
    condition: ['Snack (小吃)', 'Veggie (蔬菜)'],
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
    tool: {
      type: 'Grill',
      name: 'Grill (烤盤)',
      iconName: 'grill_small'
    },
    condition: ['Snack (小吃)', 'Veggie (蔬菜)'],
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
    tool: {
      type: 'Cookpot',
      name: 'Cookpot (吊鍋)',
      iconName: 'pot_small'
    },
    condition: ['Soup (湯)', 'Veggie (蔬菜)', 'Snack (小吃)'],
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
    tool: {
      type: 'Grill',
      name: 'Grill (烤盤)',
      iconName: 'grill_small'
    },
    condition: ['Fish (魚類)', 'Snack (小吃)'],
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
    tool: {
      type: 'Cookpot',
      name: 'Cookpot (吊鍋)',
      iconName: 'pot_small'
    },
    condition: ['Meat (肉類)', 'Snack (小吃)'],
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
  }
]