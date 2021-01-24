
class Twitter {
    constructor(listElem) {
        this.tweets = new Posts();
        this.elements = {
            listElems: document.querySelector(listElem)
        };
    }

    renderPosts() {

    }

    showUserPost() {

    }

    showLikesPost() {

    }

    showAllPost() {

    }

    openModal() {

    }
}


class Posts {
    constructor({ posts = [] } = {}) {
        this.tweets = posts;
    }

    addPost(tweet) {
        const post = new Post(tweet);
        this.tweets.push(post);
    }

    deletePost(id) {

    }

    likePost(id) {

    }

}

class Post {
    constructor(props) {
        this.id = props.id;
        this.userName = props.userName;
        this.nickname = props.nickname;
        this.postData = props.postDate;
        this.text = props.text;
        this.img = props.img;
        this.likes = props.likes;
        this.liked = false;
    }

    changeLike() {
        this.like = !this.like;
        if (this.liked) {
            this.likes++;
        } else {
            this.likes--;
        }
    }
}

let twitter = new Twitter('.tweet-list');

console.log('twitter: ', twitter);