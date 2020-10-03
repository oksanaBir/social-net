import { CREATE_POST, DELETE_POST, ADD_PHOTO, ADD_TEXT } from './actions';

const initialState = {
    post: {
        postId: Date.now().toString() + Math.random().toString(),
        text: 'ceè',
        likes: 122,
        share: 0,
        date: Date.now(),
    },
    posts: [],
}

export default function app(state = initialState, action){
    switch(action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [
                    ...state.posts.map((post) => {
                        if(post.postId === action.postId) {
                            return {
                                ...post,
                                photo: '',
                                likes: 0,
                                share: 0,
                                date: action.date,
                            }
                        }
                    }),
                ]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.postId != action.postId),
            }
        case ADD_PHOTO:
            return {
                ...state,
                post: { 
                    ...state.post,
                    postId: action.postId,
                    photo: action.photo,
                    text: action.text,
                }
            }
        case ADD_TEXT:
            return {
                ...state,
                post: {
                    ...state.post,
                    postId: action.postId,
                    text: action.text,
                }
            }
    }
    return state;
}