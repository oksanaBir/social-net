import { CREATE_POST, DELETE_POST, ADD_PHOTO, ADD_TEXT, LIKE_POST, SHARE_POST } from './actions';

const initialState = {
    posts: [],
    post: {
        postId: '',
        text: '',
        photo: '',
        date: '',
        likes: 0,
        share: 0,
    },
}

export default function app(state = initialState, action) {
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
                        if(action.postId === post.postId) {
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
        case LIKE_POST:
            return {
                ...state,
                posts: [
                    ...state.posts.map((post) => {
                        if(action.postId === post.postId) {
                            return {
                                ...post,
                                likes: action.likes,
                            }
                        } return post
                    })
                ]
            }
            case SHARE_POST:
                return {
                    ...state,
                    posts: [
                        ...state.posts.map((post) => {
                            if(action.postId === post.postId) {
                                return {
                                    ...post,
                                    share: action.share,
                                }
                            } return post
                        })
                    ]
                }
    }
    return state;
}