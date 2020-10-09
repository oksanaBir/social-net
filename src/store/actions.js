export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_PHOTO = 'ADD_PHOTO';
export const ADD_TEXT = 'ADD_TEXT';
export const LIKE_POST = 'LIKE_POST';
export const SHARE_POST = 'SHARE_POST';

export const createPost = (postId) => ({
    postId: Date.now().toString() + Math.random().toString(),
    type: CREATE_POST,
    date: Date.now(),
});

export const deletePost = postId => ({
    postId,
    type: DELETE_POST,
});

export const addPhoto = (value) => ({
    type: ADD_PHOTO,
    photo: value,
});

export const addText = (value) => ({
    type: ADD_TEXT,
    text: value,
});

export const likePost = (postId, value) => ({
    postId,
    type: LIKE_POST,
    likes: value,
});

export const sharePost = (postId, value) => ({
    postId,
    type: SHARE_POST,
    share: value,
});