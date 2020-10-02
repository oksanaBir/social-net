export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_PHOTO = 'ADD_PHOTO';
export const ADD_TEXT = 'ADD_TEXT';

export const createPost = () => ({
    postId: Date.now().toString() + Math.random().toString(),
    type: CREATE_POST,
    date: Date.now(),
    photo: '',
    text: '',
    like: 0,
    share: 0,
});

export const deletePost = postId => ({
    postId,
    type: DELETE_POST,
});

export const addPhoto = (postId, value) => ({
    postId,
    type: ADD_PHOTO,
    photo: value,
});

export const addText = (value) => ({
    postId: Date.now().toString() + Math.random().toString(),
    type: ADD_TEXT,
    date: Date.now(),
    photo: '',
    text: value,
    like: 0,
    share: 0,
});

export const likePost = (postId, value) => ({
    postId,
    type: 'LIKE_POST',
    like: value,
});

export const sharePost = (postId, value) => ({
    postId,
    type: 'SHARE_POST',
    share: value,
});