import React , {Component} from 'react';
import SeriesList from '../../components/SeriesList/index';

class Series extends Component
{
    state = {
        series : []
      }
    
    
    seriesOnChange = (e)=>{
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState( {series : json}));
    }
    render(){
      return(
          <div>
               the length of components is {this.state.series.length}
               <div>
                   <input type="text" onChange={this.seriesOnChange} />
               </div>
               <SeriesList  list = {this.state.series}/>
          </div>
    )
  }
}

export default Series;