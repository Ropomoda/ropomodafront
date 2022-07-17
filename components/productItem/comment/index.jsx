import { Avatar, Comment, Tooltip } from 'antd'
import React from 'react'
import moment from 'moment';

function Home() {
    return (
        <div className='mx-2'>
            <Comment
                author={<a>محسن پورعینی</a>}
                avatar={<Avatar
                    src={`https://joeschmoe.io/api/v1/random?t=${Math.random()}`}
                    alt="محسن پورعینی" />}
                content={
                    <p>
                        We supply a series of design principles, practical patterns and high quality design
                        resources (Sketch and Axure), to help people create their product prototypes beautifully
                        and efficiently.
                    </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{moment().fromNow()}</span>
                    </Tooltip>
                }
            />
        </div>
    )
}

export default Home