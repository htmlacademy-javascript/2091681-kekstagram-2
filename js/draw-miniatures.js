import {getPhotos} from './data.js';

const posts = getPhotos();
const postElement = document.querySelector('.pictures');
const postTemplate = document.querySelector('#picture').content.querySelector('.picture');
const postFragment = document.createDocumentFragment();

posts.forEach(({url, description, likes, comments}) => {
  const createPost = () => {
    const post = postTemplate.cloneNode(true);

    const postImage = post.querySelector('.picture__img');
    postImage.src = url;
    postImage.alt = description;

    post.querySelector('.picture__likes').textContent = likes;

    post.querySelector('.picture__comments').textContent = comments.length;

    postFragment.append(post);
  };

  createPost();
});


postElement.append(postFragment);

export {postElement};

