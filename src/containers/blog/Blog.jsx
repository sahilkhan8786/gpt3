import React from 'react'
import './blog.css'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import { Article } from '../../components'
const Blog = () => {
    return (
        <div className='gpt3__blog section__padding'>
            <div className='gpt3__blog-heading'>
                <h1 className='gradient__text'>
                    A lot is happening, We are blogging about it
                </h1>
                <div className='gpt3__blog-container'>
                    <div className='gpt3__blog-container_groupA'>
                        <Article
                            imgURL={blog01}
                            date='Sep 26, 2023'
                            title='GPT-3 and Open Ai is the future. let us explore how it is?'
                        />

                    </div>
                    <div className='gpt3__blog-container_groupB'>
                        <Article
                            imgURL={blog02}
                            date='Sep 26, 2023'
                            title='GPT-3 and Open Ai is the future. let us explore how it is?'
                        />
                        <Article
                            imgURL={blog03}
                            date='Sep 26, 2023'
                            title='GPT-3 and Open Ai is the future. let us explore how it is?'
                        />
                        <Article
                            imgURL={blog04}
                            date='Sep 26, 2023'
                            title='GPT-3 and Open Ai is the future. let us explore how it is?'
                        />
                        <Article
                            imgURL={blog05}
                            date='Sep 26, 2023'
                            title='GPT-3 and Open Ai is the future. let us explore how it is?'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog