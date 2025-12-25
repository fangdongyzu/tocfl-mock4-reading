const quizData = [
  // Part 1: Single Sentence Comprehension (1-15)
  {
    "id": 1,
    "part": 1,
    "question": "她正在跳舞。",
    "image": "images/1.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 2,
    "part": 1,
    "question": "他常常去博物館。",
    "image": "images/2.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 3,
    "part": 1,
    "question": "他們家有很多馬。",
    "image": "images/3.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 4,
    "part": 1,
    "question": "這是一座很漂亮的森林。",
    "image": "images/4.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 5,
    "part": 1,
    "question": "大華正在幫人看病。",
    "image": "images/5.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 6,
    "part": 1,
    "question": "王先生今天沒有帶鑰匙。",
    "image": "images/6.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 7,
    "part": 1,
    "question": "他們一起看一本書。",
    "image": "images/7.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 8,
    "part": 1,
    "question": "爸爸拿了一半的蛋糕給小明。",
    "image": "images/8.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 9,
    "part": 1,
    "question": "他總是一個人運動，不和大家一起玩。",
    "image": "images/9.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 10,
    "part": 1,
    "question": "警察站在他的車子旁邊和他說話。",
    "image": "images/10.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 11,
    "part": 1,
    "question": "小美買了外套，又買了皮包，一共付了兩千元。",
    "image": "images/11.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 12,
    "part": 1,
    "question": "愛美已經和爸爸差不多高了，但是還沒爸爸高。",
    "image": "images/12.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 13,
    "part": 1,
    "question": "昨天下午來看病的病人，大人跟小孩一樣多。",
    "image": "images/13.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 14,
    "part": 1,
    "question": "校長要學生在家裡吃飽以後，再上學。",
    "image": "images/14.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 15,
    "part": 1,
    "question": "車子不動了，車上的人馬上下車檢查。",
    "image": "images/15.png",
    "options": ["(A)", "(B)", "(C)"],
    "answer": "A",
    "remark": ""
  },

  // Part 2: Picture Description (16-30)
  {
    "id": 16,
    "part": 2,
    "question": "",
    "image": "images/16.png",
    "options": [
      "她的頭髮很長。",
      "她的裙子很短。",
      "她正拿著盤子。"
    ],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 17,
    "part": 2,
    "question": "",
    "image": "images/17.png",
    "options": [
      "這位先生正在收傳真。",
      "這位先生已經很累了。",
      "桌上什麼東西都沒有。"
    ],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 18,
    "part": 2,
    "question": "",
    "image": "images/18.png",
    "options": [
      "林先生手上沒有東西。",
      "林先生吃完了所有食物。",
      "林先生現在覺得很開心。"
    ],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 19,
    "part": 2,
    "question": "",
    "image": "images/19.png",
    "options": [
      "這裡幾乎坐滿了學生。",
      "這些學生正在慶祝開學。",
      "他們幾個人就要畢業了。"
    ],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 20,
    "part": 2,
    "question": "",
    "image": "images/20.png",
    "options": [
      "大家正在慶祝中國新年。",
      "小朋友們手上拿著糖果。",
      "大人們正在請客人吃飯。"
    ],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 21,
    "part": 2,
    "question": "",
    "image": "images/21.png",
    "options": [
      "雪已經停了。",
      "小男孩沒戴帽子。",
      "小朋友們正在玩。"
    ],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 22,
    "part": 2,
    "question": "",
    "image": "images/22.png",
    "options": [
      "這裡有山還有樹。",
      "房子前面的湖很髒。",
      "在湖的旁邊有好幾間房子。"
    ],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 23,
    "part": 2,
    "question": "",
    "image": "images/23.png",
    "options": [
      "這位先生正在照相。",
      "這裡很熱鬧，人很多。",
      "這位小姐正在和警察說話。"
    ],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 24,
    "part": 2,
    "question": "",
    "image": "images/24.png",
    "options": [
      "學生們都在上課。",
      "女學生在黑板上畫畫。",
      "有一個學生手裡拿著電腦。"
    ],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 25,
    "part": 2,
    "question": "",
    "image": "images/25.png",
    "options": [
      "一杯飲料40元。",
      "一盤水餃50元。",
      "一顆包子60元。"
    ],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 26,
    "part": 2,
    "question": "",
    "image": "images/26.png",
    "options": [
      "這個活動能換到水果。",
      "這個活動從中午開始。",
      "活動的時間有一個禮拜。"
    ],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 27,
    "part": 2,
    "question": "",
    "image": "images/27.png",
    "options": [
      "日和大學全校停水兩天。",
      "女生宿舍一共停水十二小時。",
      "男生宿舍比女生宿舍早一天停水。"
    ],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 28,
    "part": 2,
    "question": "",
    "image": "images/28.png",
    "options": [
      "參加活動就送機票。",
      "這個活動只有一個月。",
      "住兩個晚上都不用錢。"
    ],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 29,
    "part": 2,
    "question": "",
    "image": "images/29.png",
    "options": [
      "早上有車從奮起湖到火車站。",
      "嘉義高鐵站沒有車到奮起湖。",
      "從奮起湖出發，只能到火車站。"
    ],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 30,
    "part": 2,
    "question": "",
    "image": "images/30.png",
    "options": [
      "半年房租給10000元。",
      "半年房租給30000元。",
      "半年房租給60000元。"
    ],
    "answer": "C",
    "remark": ""
  },

  // Part 3: Gap Filling (31-35) - Shared image
  {
    "id": 31,
    "part": 3,
    "question": "臺灣東部有一種特別的魚，會______海裡飛到水上。",
    "image": "images/31-35.png",
    "options": ["從", "往", "來"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 32,
    "part": 3,
    "question": "這裡的魚有男人魚、女人魚和老人魚三______。",
    "image": "images/31-35.png",
    "options": ["班", "位", "種"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 33,
    "part": 3,
    "question": "這種魚______年春天最多，男人們會一起搭船去海上找魚。",
    "image": "images/31-35.png",
    "options": ["第", "每", "幾"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 34,
    "part": 3,
    "question": "魚是這裡很重要的食物，這裡的大大小孩______需要它。",
    "image": "images/31-35.png",
    "options": ["都", "不", "本來"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 35,
    "part": 3,
    "question": "很多住在別的地方的人，春天放假的______會來這裡旅遊。",
    "image": "images/31-35.png",
    "options": ["問題", "時候", "消息"],
    "answer": "B",
    "remark": ""
  },

  // Part 4: Paragraph Completion (36-45)
  // Paragraph 1 (36-40)
  {
    "id": 36,
    "part": 4,
    "question": "",
    "image": "",
    "options": ["也找到工作", "才找到工作", "越來越多的人", "離開學校以後", "很多人找不到工作", "一家電腦公司找到工作"],
    "answer": "F",
    "remark": ""
  },
  {
    "id": 37,
    "part": 4,
    "question": "",
    "image": "",
    "options": ["也找到工作", "才找到工作", "越來越多的人", "離開學校以後", "很多人找不到工作", "一家電腦公司找到工作"],
    "answer": "D",
    "remark": ""
  },
  {
    "id": 38,
    "part": 4,
    "question": "花了半年多的時間，______（38）。",
    "image": "",
    "options": ["也找到工作", "才找到工作", "越來越多的人", "離開學校以後", "很多人找不到工作", "一家電腦公司找到工作"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 39,
    "part": 4,
    "question": "現在______（39），所以不想結婚、生孩子。",
    "image": "",
    "options": ["也找到工作", "才找到工作", "越來越多的人", "離開學校以後", "很多人找不到工作", "一家電腦公司找到工作"],
    "answer": "E",
    "remark": ""
  },
  {
    "id": 40,
    "part": 4,
    "question": "______（40）____想一個人生活，或是跟爸媽一起住。",
    "image": "",
    "options": ["也找到工作", "才找到工作", "越來越多的人", "離開學校以後", "很多人找不到工作", "一家電腦公司找到工作"],
    "answer": "C",
    "remark": ""
  },
   // Paragraph 2 (41-45)
  {
    "id": 41,
    "part": 4,
    "question": "小孩最喜歡玩了，一個小遊戲，小孩就可以______（41）、很愉快。",
    "image": "",
    "options": ["玩得很開心", "覺得很無聊", "一件麻煩的事", "玩的東西很有趣", "不停地找新遊戲", "在旁邊和他一起玩"],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 42,
    "part": 4,
    "question": "但是，大人不這樣認為，因為小孩玩的遊戲常常讓大人______（42）。",
    "image": "",
    "options": ["玩得很開心", "覺得很無聊", "一件麻煩的事", "玩的東西很有趣", "不停地找新遊戲", "在旁邊和他一起玩"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 43,
    "part": 4,
    "question": "還有，小孩玩一個遊戲，總是玩一會兒就不玩了，大人要______（43）。",
    "image": "",
    "options": ["玩得很開心", "覺得很無聊", "一件麻煩的事", "玩的東西很有趣", "不停地找新遊戲", "在旁邊和他一起玩"],
    "answer": "E",
    "remark": ""
  },
  {
    "id": 44,
    "part": 4,
    "question": "給小孩玩，這讓大人覺得和小孩一起玩遊戲，真是______（44）。",
    "image": "",
    "options": ["玩得很開心", "覺得很無聊", "一件麻煩的事", "玩的東西很有趣", "不停地找新遊戲", "在旁邊和他一起玩"],
    "answer": "C",
    "remark": ""
  },
  {
    "id": 45,
    "part": 4,
    "question": "很多大人不明白遊戲對小孩的重要。小孩玩什麼？怎麼玩？有沒有人______（45）。這些都很重要。",
    "image": "",
    "options": ["玩得很開心", "覺得很無聊", "一件麻煩的事", "玩的東西很有趣", "不停地找新遊戲", "在旁邊和他一起玩"],
    "answer": "F",
    "remark": ""
  },

  // Part 5: Reading Comprehension (46-50)
  {
    "id": 46,
    "part": 5,
    "question": "多良車站是在山上的一個小車站，車站的一邊是山，一邊是海，人們最喜歡來這裡照相。照片裡，海很藍、天很藍、山很綠、雲很白，來這裡旅遊的人最喜歡這裡的風景。<br/> Q: 這段短文寫了什麼？",
    "image": "",
    "options": ["味道", "顏色", "聲音", "溫度"],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 47,
    "part": 5,
    "question": "放暑假了，可是很多學生比平常上學的時候還要忙。因為他們要學鋼琴、學打籃球、學電腦、學很多平常沒有辦法學的課。如果你問這些學生，這都是自己想學的嗎？他們很多人會告訴你，是爸爸媽媽要他們學的。問他們辛苦嗎？有些人認為，學這麼多，以後也許可以有比較好的工作。現在辛苦一點，以後生活就會好一點。<br>Q: 這段短文討論了哪方面的事？",
    "image": "",
    "options": [
      "小孩學這麼多東西的原因",
      "學校為什麼放暑假的原因",
      "小孩學習管理時間的原因",
      "爸媽要小孩讀大學的原因"
    ],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 48,
    "part": 5,
    "question": "有很多人，想從世界地圖找到這個地方，總是找不到。也常常有人會把它和其他國家弄錯。可是，等他們從世界各地來到這裡以後，就愛上這裡，還有人就住在這裡、和這裡的人結婚、生小孩。這裡的夏天很熱、冬天又一直下雨，不過，這裡的人很溫暖，讓從其他地方來的人都有回家的感覺。<br/> Q: 這段短文提到「這個地方」的什麼？ ",
    "image": "",
    "options": [
      "這裡的天氣",
      "生活的習慣",
      "這地方的名字",
      "男人比女人多"
    ],
    "answer": "A",
    "remark": ""
  },
  {
    "id": 49,
    "part": 5,
    "question": "上週日，姊姊從宿舍坐公車回家，她一到家就覺得身體不舒服，想在家休息，所以大家只好改變要去河邊騎腳踏車的計畫，幫媽媽打掃家裡。爸爸一邊聽廣播一邊擦窗戶，我幫媽媽洗衣服，媽媽覺得弟弟的房間最亂，要他把自己的房間弄乾淨。弟弟不願意，就和媽媽說：「我的房間太乾淨，就找不到自己的東西了，我還是去整理姊姊的房間好了。」大家聽了，都笑了。<br/> Q: 這個故事裡的弟弟不願意做什麼事？",
    "image": "",
    "options": [
      "去河邊騎腳踏車",
      "打掃自己的房間",
      "照顧生病的姊姊",
      "在家裡休息一天"
    ],
    "answer": "B",
    "remark": ""
  },
  {
    "id": 50,
    "part": 5,
    "question": "你關心你住的環境嗎？你喜歡這裡？還是討厭這裡？歡迎你加入我們，在五月三十號以前，請你上網，把你的感覺畫出來、寫出來或大聲說出來，和我們一起讓更多住在這裡的人了解自己生活的環境。<br/> Q: 這段短文要人們做什麼事？",
    "image": "",
    "options": [
      "要大家關心家人",
      "要大家參觀風景",
      "請大家打掃環境",
      "請大家參加活動"
    ],
    "answer": "D",
    "remark": ""
  }
];
