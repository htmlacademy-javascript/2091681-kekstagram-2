import {getPosts} from './data.js';

const posts = getPosts();
const postElement = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPost = ({url, description, likes, comments}) => {

  const post = postTemplate.cloneNode(true);

  const postImage = post.querySelector('.picture__img');
  postImage.src = url;
  postImage.alt = description;

  post.querySelector('.picture__likes').textContent = likes;

  post.querySelector('.picture__comments').textContent = comments.length;

  return post;
};

const renderPosts = () => {
  const postFragment = document.createDocumentFragment();
  posts.forEach((el) => postFragment.append(createPost(el)));
  postElement.append(postFragment);
};

export {renderPosts};

