import {getRandomInt} from './util.js';
import {getId} from './util.js';


const PHOTO_COUNT = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const MIN_COMMENT_ID = 0;
const MAX_COMMENT_ID = 30;

const USER_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USER_NAMES = [
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

const PHOTO_DESCRIPTION = ['Пляж', 'Указатель на пляж', 'Берег', 'Девушка в купальнике', 'Две миски супа', 'Автомобиль',
  'Клубника на тарелке', 'Морс', 'Самолет над пляжем', 'Обувница', 'Дорожка на пляж', 'Серый Ауди', 'Овощная терелка',
  'Сушикот', 'Сапоги робота', 'Самолет над облаками', 'Хор', 'Ретро автомобиль', 'Тапочки с фонариком',
  'Пальмы у отеля', 'Рагу', 'Закат', 'Краб', 'Концерт', 'Land Rover'
];

const getCommentId = getId();

const getPhotoId = getId();

const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInt(MIN_AVATAR_ID, MAX_AVATAR_ID)}`,
  message: USER_COMMENTS[getRandomInt(0, USER_COMMENTS.length - 1)],
  name: USER_NAMES[getRandomInt(0, USER_NAMES.length - 1)]
});

getComment();

const getPhotoDescription = () => {
  const id = getPhotoId();

  return {
    id,
    url:`photos/${id}.jpg`,
    description: PHOTO_DESCRIPTION[id - 1],
    likes:getRandomInt(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length:getRandomInt(MIN_COMMENT_ID, MAX_COMMENT_ID)}, getComment)
  };
};

const getPhotos = () => Array.from({length:PHOTO_COUNT}, getPhotoDescription);

export {getPhotos};
