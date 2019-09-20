import React from 'react';
class SearchBar extends React.Component{
    onInpuputChange(event){
        console.log(event.target.value);
    }
    onFormSubmit=event=>{
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }
    state={term:'hello world'};
    render(){
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    {/* <input type="text" onChange={this.onInpuputChange}/> */}
                    <input type="text" onChange={(event)=>{this.setState({term:event.target.value.toUpperCase()})}} value={this.state.term}/>
                </div>
            </form>
        </div>
        );
}
}
export default SearchBar;