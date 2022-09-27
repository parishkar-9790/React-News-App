import React, { Component } from 'react'
import NewsItems from './NewsItems'
import myJSON from './sample.json'
export default class News extends Component {
// news .js is used for forward and back ward andd also laading and unloaing content 
    // articles = []
    constructor() {
        super();
        this.state = {
            articles: [],
            // articles: myJSON.articles,
            loading: true,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=865620e4822c4a768fe74578f9dd28a0`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles,totalArticals:parsedData.totalResults })
    }
    handlePrevClick = async ()=>{
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=865620e4822c4a768fe74578f9dd28a0&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }
    handleNextClick = async ()=>{
        console.log("Next"); 
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=865620e4822c4a768fe74578f9dd28a0&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);  
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
    }
    }
    render() {
        console.log("render")
        return (
            <div className='container my-3'>
                <h2>Top Headlines of this very day!</h2>
                <div className='column'>

                    {this.state.articles.map((element) => {
                        return <div className='col-mx-3' key={element.url} >
                            <NewsItems title={element.title ? element.title.slice(0, 44) : " "} description={element.description ? element.description.slice(0, 120) : " "} urlToImage={element.urlToImage} url={element.url} id={element.source.id} />
                            <br />
                        </div>
                    })}


                </div>
                <div className='d-flex justify-content-between' >
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-danger" onClick={this.handlePrevClick}>&larr; Back</button>
                    <button disabled={this.state.page >= 10} type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>
            </div>
        )
    }
}
