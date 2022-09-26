import React, { Component } from 'react'

export default class NewsItems extends Component {
    
    render() {
        let {title,description,urlToImage,url,id}=this.props;
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <img src={urlToImage?urlToImage:"https://stock.adobe.com/hu/images/default-profile-picture/215844325"} width="130" height="90" alt="" style={{float:'left'}} />
                        <blockquote className="blockquote mb-0">
                            <p>{description}.</p>
                            <footer className="blockquote-footer">
                               <a href={url}> Read more at</a> <cite title="Source Title">{id}</cite></footer>
                        </blockquote>
                    </div>

                </div>
            </div>
        )
    }
}
