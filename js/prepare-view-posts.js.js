import {isEscapeKey} from './util.js';
import {loadPost, clearPost} from './view-post.js';

const prepareViewPosts = (posts) => {
  const picturesContainer = document.querySelector('.pictures');
  const pictureList = picturesContainer.querySelectorAll('.picture');
  const bigPictureElement = document.querySelector('.big-picture');
  const closePictureElement = document.querySelector('.big-picture__cancel');

  const openPostModal = (post) => {
    bigPictureElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentEscapeKeydown);

    loadPost(post);
  };

  const closePostModal = () => {
    clearPost();

    bigPictureElement.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentEscapeKeydown);
  };

  function onDocumentEscapeKeydown(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closePostModal();
    }
  }

  pictureList.forEach((element, index) =>
    element.addEventListener('click', (evt) => {
      evt.preventDefault();
      bigPictureElement.click();

      openPostModal(posts[index]);
    })
  );
  closePictureElement.addEventListener('click', closePostModal);
};
export {prepareViewPosts};
