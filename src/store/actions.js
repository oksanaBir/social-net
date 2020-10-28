export const PUBLISH_POST = 'PUBLISH_POST';
export const DELETE_POST = 'DELETE_POST';
export const CHANGE_POST_PHOTO = 'CHANGE_POST_PHOTO';
export const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT';
export const LIKE_POST = 'LIKE_POST';
export const SHARE_POST = 'SHARE_POST';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const CHANGE_MESSAGE_TEXT = 'CHANGE_MESSAGE_TEXT'; 

export const publishPost = () => ({
    id: Date.now().toString() + Math.random().toString(),
    type: PUBLISH_POST,
    date: Date.now(),
});

export const deletePost = (id) => ({
    id,
    type: DELETE_POST,
});

export const changePostPhoto = (value) => ({
    type: CHANGE_POST_PHOTO,
    photo: value,
});

export const changePostText = (value) => ({
    type: CHANGE_POST_TEXT,
    text: value,
    validation: !(value.length === 0 || !value.trim()),
});

export const likePost = (id, value) => ({
    id,
    type: LIKE_POST,
    likes: value,
});

export const sharePost = (id, value) => ({
    id,
    type: SHARE_POST,
    share: value,
});

export const sendMessage = () => ({
    id: Date.now().toString() + Math.random().toString(),
    type: SEND_MESSAGE,
    date: Date.now(),
});

export const deleteMessage = (id) => ({
    id,
    type: DELETE_MESSAGE,
});

export const changeMessageText = (value) => ({
    type: CHANGE_MESAAGE_TEXT,
    text: value,
    validation: !(value.length === 0 || !value.trim()),
});