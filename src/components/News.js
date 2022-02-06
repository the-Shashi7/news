import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaltProps ={
        country: 'in',
        category:'general'
        
    }
    static propTypes ={
        country : PropTypes.string,
        category : PropTypes.string,
    }

    constructor(){
        super();
        this.state = {
            articles:[],
            loading:false,
            page :1,
            category:"general",
            country:"in"
        }
    }

    async componentDidMount(){
        this.setState({category:"general",country:"in"});
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8be6b0c0182d4b67981323e7de265289&page=1&pageSize=12`;
        this.setState({loading:true});
        let data =  await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        console.log(data);
        this.setState({articles: parsedData.articles, 
                       totalResults:parsedData.totalResults,
                        loading:false});
    }

    
    handleNextClick = async () =>{
        if(this.state.page +1 < Math.ceil(this.state.totalResults/12)){
            window.scrollTo({
                top:0
            })
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8be6b0c0182d4b67981323e7de265289&page=${this.state.page + 1}&pageSize=12`;
            this.setState({loading:true});
            let data =  await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page:this.state.page + 1,
                articles: parsedData.articles,
                loading:false})
           
            }
        }
        
        handlePrevClick = async () =>{
            window.scrollTo({
                top:0
            })
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8be6b0c0182d4b67981323e7de265289&page=${this.state.page - 1}&pageSize=12`;
            this.setState({loading:true});
            let data =  await fetch(url);
            let parsedData = await data.json();
            this.setState({
            page:this.state.page - 1,
            articles: parsedData.articles,
            loading:false})
        }
        Capitalize=(str)=>{
            return str.charAt(0).toUpperCase() + str.slice(1);
            }
    render() {
        return (
            <div className="container my-3">
            <h2> {this.Capitalize(this.props.category)} News</h2>
            {this.state.loading && <Loading/>}
             <div className="row">
             { this.state.articles? this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
                    <NewsItems title ={element.title?element.title.slice(0.32):""} description={element.description?element.description.slice(0,100):""}
                     imageUrl={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/news-icon-19655995.jpg"} timming={element.publishedAt} newsUrl={element.url?element.url:"/"} />
               </div>
             })
             :"content not available"}
            </div>
            <div className="container d-flex justify-content-between my-3">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick = {this.handlePrevClick} > &larr; Previous</button>
                <button type="button" disabled ={this.state.page + 1 >= Math.ceil(this.state.totalResults/12)} className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
            </div>
            </div>
        )
    }
}

export default News
