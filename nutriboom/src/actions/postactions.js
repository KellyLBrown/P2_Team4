import {FETCH_POSTS, NEW_POST} from './types/types'

export function fetchPosts() {
    // This is the middleware that allows us to call the dispatch function directly and make async requests.
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
    }
}

export function createPost(postData) {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(postData)
        }).then(res=>res.json()).then(data=>dispatch({type: NEW_POST, payload: data}));
    }
} 