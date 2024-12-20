// Описание одного комментария

const commentId = Array.from({ length: 31 }, (value, index) => index);

const commentAvatar = Array.from({ length: 6 }, (value, index) => ++index);

const commentMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commentName = [
  'Анна',
  'Михаил',
  'Елизавета',
  'Антон',
  'Татьяна',
  'Алексей',
  'Мария',
  'Константин',
  'Надежда',
  'Сергей',
];


// Функция взята из приммера с созвона, пока генерируется случайное число
// const idGenerator = () => {
//   let currentId = 0;
//   return () => ++currentId;
// };

// const getId = idGenerator();
// // console.log(typeof getId);
// // console.log(getId());

const getRandomInt = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const comment = () => {
  const randomIndexCommentId = getRandomInt(0, commentId.length - 1);
  const randomIndexAvatar = getRandomInt(0, commentAvatar.length - 1);
  const randomIndexMessage = getRandomInt(0, commentMessage.length - 1);
  const randomIndexName = getRandomInt(0, commentName.length - 1);

  return {
    id: commentId[randomIndexCommentId],
    avatar: 'img/avatar-' + commentAvatar[randomIndexAvatar] + '.svg',
    message: commentMessage[randomIndexMessage],
    name: commentName[randomIndexName],
  };
};

comment();


// Описание массива комментариев

// let commentArray = [];
// commentArray.push(comment());
// commentArray.push(comment());
// commentArray.push(comment());
// commentArray.push(comment());
// commentArray.push(comment());

// console.log(commentArray);

// const arrayLength = getRandomInt(0, commentId.length); // Длина массива комментариев

// Не доделано!!! Надо добавить цикл от 0 до arrayLength


// Описание фотографии

const photoId = Array.from({ length: 25 }, (value, index) => value = ++index);

const photoDescription = ['Пляж', 'Указатель на пляж', 'Берег', 'Девушка в купальнике', 'Две миски супа', 'Автомобиль',
  'Клубника на тарелке', 'Морс', 'Самолет над пляжем', 'Обувница', 'Дорожка на пляж', 'Серый Ауди', 'Овощная терелка',
  'Сушикот', 'Сапоги робота', 'Самолет над облаками', 'Хор', 'Ретро автомобиль', 'Тапочки с фонариком',
  'Пальмы у отеля', 'Рагу', 'Закат', 'Краб', 'Концерт', 'Land Rover'];


const photos = () => {
  const randomIndex = getRandomInt(0, photoId.length - 1);

  return {
    id: photoId[randomIndex],
    url: 'photos/' + photoId[randomIndex] + '.jpg',
    description: photoDescription[randomIndex],
    likes: getRandomInt(15, 200),
    comments: [comment(), comment(), comment()],
  };
};

// console.log(photos());


