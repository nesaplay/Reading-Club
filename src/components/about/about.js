import React, { Component } from 'react';

let about = 'This is a place where people can read short stories from their favorite authors. Get more than just reading a book - get a personal touch from the creator himself.';
let story = 'Here I am showcasing using React library, RESTFul API, Routing and communication between different entities. Data provided by JSONPlaceholder, expandable by utilizing local storage. CSS Framework - Materialize.';

const About = () => {
        return (
            <main className='container center-align'>
                <section className='section container'>
                    <h2 className='teal-text'> OUR STORY </h2>
                    <p className='flow-text'> {about} </p>
                </section>
                <section className='section container'>
                    <h2 className='teal-text'>ABOUT DEVELOPER </h2>
                    <p className='flow-text'> {story} </p>
                </section>
            </main>
        );
}

export default About;