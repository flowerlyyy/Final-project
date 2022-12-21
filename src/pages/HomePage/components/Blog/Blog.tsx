import './Blog.scss';
import cake from './cake.png';
import blood from './blood.png';
import orange from './orange.png';
import pizza from './pizza.png';
import React, { useState } from 'react'; 
interface Post {
    id: number;
    title: string;
    body: string;
    author: string;
    blogImage: string; 
}

const posts:Post[] = [
    {
        id: 1,
        title: 'Vitamin C - what has the most vitamin C?',
        body: "Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae...",
        author: "Esther Howard",
        blogImage: orange
    },
    {
        id: 2,
        title: "Fast food - why should we avoid it? How does it affect our health?",
        body: "Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae...",
        author: "Jerome Bell",
        blogImage: cake
    },
    {
        id: 3,
        title: "Blood tests - why should they be done regularly?",
        body: "Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae...",
        author: "Esther Howard",
        blogImage: blood
    },
    {
        id: 4,
        title: "Sweets on a diet - can you eat them?",
        body: "Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae...",
        author: "Courtney Henry",
        blogImage: pizza
    }
];
export const Blog = () => {
    const [selectedPostId, setSelectedPostId] = useState<number>(posts[0].id);
    const selectedPost = posts.find(post => post.id === selectedPostId) as Post;
    const unselectedPosts = posts.filter(post => post.id !== selectedPostId);

    return (
        <section className="section-blog">
            <div className="blog">
                <div className="blog_right-part">
                    <h2 className='blog-h2'>Blog</h2>
                    <div>
                        <img className="blog_picture" src={selectedPost.blogImage} alt="/" />
                    </div>
                    <h4 >
                        {selectedPost.title}
                    </h4>     
                    <p className="text-p">
                        {selectedPost.body}
                    </p>
                    <p className="text-name">{selectedPost.author}</p>
                </div>
                </div>

                <div className="blog_left-part">
                    {
                        unselectedPosts.map(post => (
                            <div className="box" onClick={() => {
                                setSelectedPostId(post.id)
                            }}>
                                <img className='picture1' src={post.blogImage} />
                                <div className="all_text_box">
                                    <h3>{post.title}</h3>
                                    <div className="box-p">
                                        {post.body} 
                                        <br />
                                        <br />
                                        <p className="text-name">{selectedPost.author}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </section>
    );
};