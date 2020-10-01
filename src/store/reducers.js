import { createPost, deletePost, addPhoto, addText } from './actions';

const initialState = {
    posts: [],
    // post: {
    //     amount: 0,
    //     like: 0,
    //     share: 0
    // },
    // createPost: {
    //     photo: [],
    //     text: '',
    // },
}

export default function app(state = initialState, action){
    switch(action.type) {
        case(createPost.type):
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        postId: action.postId,
                        photo: action.photo,
                        text: action.text,
                    }
                ]
            }
        case('DELETE_POST'):
            return {
                ...state,
                posts: state.posts.filter(post => post.postId != action.postId),
            }
        case('ADD_PHOTO'):
            return {
                ...state,
                posts: [
                    ...state.posts.map((post) => {
                        if(post.postId === action.postId){
                            return {
                                ...post,
                                photo: action.photo,
                            }
                        }
                        return post;
                    })
                ]
            }
        case(addText.type):
            return {
                ...state,
                posts: [
                    ...state.posts.map((post) => {
                        if(post.postId === action.postId){
                            return {
                                ...post,
                                text: action.text,
                            }
                        }
                        return post;
                    })
                ]
            }
    }
    return state;
}