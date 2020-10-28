import {
    PUBLISH_POST,
    DELETE_POST,
    CHANGE_POST_PHOTO,
    CHANGE_POST_TEXT,
    LIKE_POST,
    SHARE_POST,
    SEND_MESSAGE,
    CHANGE_MESSAGE_TEXT,
    DELETE_MESSAGE,
} from './actions';

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
        recipientName: '',
        date: '',
        text: '',
        validation: false,
    },
}

export default function app(state = initialState, action) {
    switch(action.type) {
        case PUBLISH_POST:
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
                    photo: '',
                },
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.id),
            }
        case CHANGE_POST_PHOTO:
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
        case CHANGE_POST_TEXT:
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
            case SEND_MESSAGE:
            return {
                messages: [
                    {
                        ...state.message,
                        id: action.id,
                        date: action.date,
                    },
                    ...state.messages,
                ],
                message: {
                    ...state.message,
                    text: '',
                    validation: false,
                },
            }
    }
    return state;
}