// Описание случайного комментария

const commentId = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const commentAvatar = [1, 2, 3, 4, 5, 6];

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


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const comments = () => {
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

comments();

// Описание случайной фотографии

const photoId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

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
    comments: comments(),
  };
};

console.log(photos());
