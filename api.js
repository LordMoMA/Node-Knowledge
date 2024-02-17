import fs from 'fs/promises';
import axios from 'axios';

const API = 'https://jsonplaceholder.typicode.com'

const main = async() => {
    try {
        const [usersResponse, postsResponse, commentsResponse] = await Promise.all([
            axios.get(`${API}/users`),
            axios.get(`${API}/posts`),
            axios.get(`${API}/comments`)
        ]);

        const usersData = await usersResponse.data;
        const postsData = await postsResponse.data;
        const commentsData = await commentsResponse.data;

        const postsByUserId = postsData.reduce((acc, post) => {
            acc[post.userId] = (acc[post.userId] || []).concat(post);
            return acc;
        }, {});

        const commentsByPostId = commentsData.reduce((acc, comment) => {
            acc[comment.postId] = (acc[comment.postId] || []).concat(comment);
            return acc;
        }, {});

        const usersWithPostsAndComments = usersData.map(user => {
            const userPosts = postsByUserId[user.id] || [];
            return {
                ...user,
                posts: userPosts.map(post => ({
                    ...post,
                    comments: commentsByPostId[post.id] || []
                }))
            };
        });

        await fs.writeFile('users_posts_comments.json', JSON.stringify(usersWithPostsAndComments, null, 3), 'utf8');
        console.log('Data has been written to the file');

    } catch(error) {
        console.error('Error😤:', error);
    }
}

main()