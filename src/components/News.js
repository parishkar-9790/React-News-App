import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines of this very day!</h2>
                <div className='row'>

                    <div className='col-md-3'>
                        <NewsItems title="my title" description="mydesc" />

                    </div>
                    <div className='col-md-3'>
                        <NewsItems title="my title" description="mydesc" />

                    </div>
                    <div className='col-md-3'>
                        <NewsItems title="my title" description="mydesc" />

                    </div>
                    <div className='col-md-3'>
                        <NewsItems title="my title" description="mydesc" />

                    </div>
                    <div className='row-mx-3'>

                        <NewsItems title="my title" description="mydesc" />
                    </div>
                    <div className='row-mx-3'>

                        <NewsItems title="my title" description="mydesc" />
                    </div>
                    <div className='row-mx-3'>

                        <NewsItems title="my title" description="mydesc" />
                    </div>
                    <div className='row-mx-3'>

                        <NewsItems title="my title" description="mydesc" />
                    </div>
                </div>
                <NewsItems />
                <NewsItems />
            </div>
        )
    }
}
