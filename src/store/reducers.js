import { CREATE_ELEMENT, DELETE_POST, ADD_PHOTO, ADD_TEXT, LIKE_POST, SHARE_POST } from './actions';

const initialState = {
    posts: [],
    messages: [],

    post: {
        id: '',
        text: '',
        authorId: '',
        photo: '',
        date: '',
        likes: 0,
        share: 0,
        validation: false,
    },
    message: {
        id: '',
        recipientId: '',
        recipientName: 'Oksana',
        date: '',
        text: '',
        validation: false,
    },
}

export default function app(state = initialState, action) {
    switch(action.type) {
        case CREATE_ELEMENT:
            return {
                posts: [
                    {
                        ...state.post,
                        id: action.id,
                        date: action.date,
                    },
                    ...state.posts,
                ],
                post: {
                    ...state.post,
                    text: '',
                    validation: false,
                },
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
                    validation: action.validation,
                },
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