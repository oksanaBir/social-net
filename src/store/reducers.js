import { CREATE_POST, DELETE_POST, ADD_PHOTO, ADD_TEXT } from './actions';

const initialState = {
    post: {
        postId: '',
        text: '',
        photo: '',
        date: '',
        likes: 0,
        share: 0,
    },
    posts: [],
}

export default function app(state = initialState, action){
    switch(action.type) {
        case CREATE_POST:
            return {
                posts: [
                    ...state.posts,
                    {
                        ...state.post,
                        postId: action.postId,
                        date: action.date,
                    }
                ],
                post: {
                    ...state.post,
                    text: '',
                }
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.postId != action.postId),
            }
        case ADD_PHOTO:
            return {
                ...state,
                posts: [
                    ...state.posts.map((post) => {
                        if(action.postId === post.postId){
                            return {
                                ...post,
                                photo: action.photo,
                            }
                        } return post
                    })
                ]
            }
        case ADD_TEXT:
            return {
                ...state,
                post: {
                    ...state.post,
                    text: action.text,
                }
            }
    }
    return state;
}