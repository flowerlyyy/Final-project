import './Blog.scss';
import img1 from '../Blog/cake.png';
import img2 from '../Blog/group84.png';
import img3 from '../Blog/orange.png';
import img4 from '../Blog/picture3.png';
import React from 'react';
export const Blog = () => {
    return (
    <section>
        <div className="blog">
            <div className="blog_right-part">
                <h2>Blog</h2>
                <div>
                    <img className="blog_picture" src={img3} alt="blogpp" />
                </div>
                <h4 className="right_part-h4">
                    Vitamin C - what has the most vitamin C?
                </h4>
                <p className="text-name">Esther Howard</p>
                <p className="text">
                    Maecenas at bibendum orci, nec gravida elit. Sed viverra in est ac consequat. Nulla facilisi. Donec efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae dolor. Integer aliquet
                    orci non...
                </p>
            </div>
            </div>

            <div className="blog_left-part">
                <div className="box">
                    <img className='picture1' src={img2} />
                    <div className="all_text_box">
                        <h3>Fast food - why should we avoid it? How does it affect our health?</h3>
                        <div className="box-p">
                            <b>Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae...</b>
                            <br/><br/>
                            <b>Jerome Bell</b>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src={img4} alt=""/>
                    <div className="all_text_box">
                        <h3>Blood tests - why should they be done regularly?</h3>
                        <div className="box-p">
                            <b></b>
                            <br/> <br/> <br/> <br/>
                            <b>Esther Howard</b>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <img className="image" src={img1} alt=""/>
                    <div className="all_text_box">
                        <h3>Sweets on a diet - can you eat them?</h3>
                        <div className="box-p">
                            <b>Efficitur malesuada scelerisque. Praesent luctus, nisi eget viverra pulvinar, dolor sem dapibus dolor, vel congue dolor massa vitae...</b>
                            <br/> 
                            <br/> 
                            <br/>
                            <b>Courtney Henry</b>
                        </div>
                    </div>
                </div>
            </div>
    </section>
);
};