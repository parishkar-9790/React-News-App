import React, { Component } from 'react'

export default class NewsItems extends Component {
    articles=[
        {
        "source": {
                    "id": "engadget",
                    "name": "Engadget"
                },
                "author": "Igor Bonifacic",
                "title": "Apple Pay Later may not arrive until next year due to 'technical and engineering' setbacks",
                "description": "Apple Pay Later\r\n may not arrive until next spring, according to Bloomberg’s Mark Gurman. As you may recall, Apple announced the buy now, pay later feature at WWDC 2022 and said, at the time, that it would arrive alongside iOS 16. Well, the latest version of …",
                "url": "https://www.engadget.com/apple-pay-later-delayed-report-154805741.html",
                "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/a67d76f0-e5be-11ec-9fd7-df4cf37ed434",
                "publishedAt": "2022-09-25T15:48:05Z",
                "content": "Apple Pay Later may not arrive until next spring, according to Bloombergs Mark Gurman. As you may recall, Apple announced the buy now, pay later feature at WWDC 2022 and said, at the time, that it wo… [+1070 chars]"
            },
        {
        "source": {
                    "id": null,
                    "name": "Forbes"
                },
                "author": "Jon Younger, Contributor, \n Jon Younger, Contributor\n https://www.forbes.com/sites/jonyounger/",
                "title": "A Dozen Good Reasons To Freelance",
                "description": "Here are a dozen very good reasons to consider a full-time career in freelancing.",
                "url": "https://www.forbes.com/sites/jonyounger/2022/09/25/a-dozen-good-reasons-to-freelance/",
                "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6330415ec99e21229d44b11e/0x0.jpg?format=jpg&crop=1071,602,x0,y41,safe&width=1200",
                "publishedAt": "2022-09-25T11:58:05Z",
                "content": "Getty\r\ngetty\r\nSomeone recently asked whether I would recommend the shift from full-time employment to freelancing. In support I offered all kinds of general stats, but none generated much interest. T… [+7005 chars]"
            },
        {
        "source": {
                    "id": null,
                    "name": "Daily Beast"
                },
                "author": "Tom Sykes, Tim Teeman",
                "title": "Meghan Markle Was ‘Narcissistic Sociopath’ Who Wanted to Be Rejected by Royals, Former Aides Say",
                "description": "Chris Jackson/Getty Images\r\nWelcome to this week’s edition of Royalist, The Daily Beast’s newsletter for all things royal and Royal Family. Subscribe here to get it in your inbox every Sunday.Meghan, the “narcissistic sociopath”Things got so bad between Princ…",
                "url": "https://www.thedailybeast.com/meghan-markle-was-narcissistic-sociopath-who-wanted-to-be-rejected-by-royals-former-aides-say",
                "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_334,w_594,x_0,y_39/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1664108210/gettyimages-1425876833-594x594_iqdarn",
                "publishedAt": "2022-09-25T12:48:23Z",
                "content": "Welcome to this weeks edition of Royalist, The Daily Beasts newsletter for all things royal and Royal Family. Subscribe here to get it in your inbox every Sunday.\r\nMeghan, the narcissistic sociopath\r… [+13420 chars]"
            },
        {
        "source": {
                    "id": null,
                    "name": "Taisy0.com"
                },
                "author": "taisy0",
                "title": "Apple、2023年は多数の新製品を投入か − ｢MacBook Air 15インチ｣やより大型の｢iPad｣など",
                "description": "BloombergのMark Gurman氏が、ニュースレター「Power On」の最新版において、Appleが2023年に投入することが予想される新製品に関する情報を報告しています。 来年は多数の新製品が投入される見込 ...",
                "url": "https://taisy0.com/2022/09/25/162673.html",
                "urlToImage": "https://taisy0.com/wp-content/uploads/2022/06/th_Apple-WWDC22-MacBook-Air-hero-220606_big.large_2x.jpg",
                "publishedAt": "2022-09-25T14:56:44Z",
                "content": "BloombergMark GurmanPower OnApple2023\r\nMacBook Air 15M3iMacMac ProHomePodAR/VRiPad\r\nApple TVHomePodFaceTime\r\nMacBook Air 1515.2iPad14.1Pro\r\nMacBook Air 1515.2 1314.1iPad”Pro”"
            }
        ]
    constructor(){
        super();
        console.log('hello i am a constructor');
        this.state={
            articles: this.articles,
            loading:false
        }
    }
    render() {
        let {title,description,urlToImage}=this.props;
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        {title}
                    </div>
                    <div className="card-body">
                        <img src={urlToImage} width="46" height="36" alt="" style={{float:'left'}} />
                        <blockquote className="blockquote mb-0">
                            <p>{description}.</p>
                            <footer className="blockquote-footer">
                               <a href="/"> Someone famous in</a> <cite title="Source Title">Read More</cite></footer>
                        </blockquote>
                    </div>

                </div>
            </div>
        )
    }
}
