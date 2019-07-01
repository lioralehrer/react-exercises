class App extends React.Component{
    constructor(){
        super();
        this.write = this.write.bind(this);
        this.state={
            text : ""
        }
    }
    write(text){
        this.setState({
            text : text
        })
    }
    render(){
        return(
            <div>
                <Input handleText={this.write}></Input>
                <span>{this.state.text}</span>
            </div>
        );
    }
}
class Input extends React.Component{
    constructor(){
        super();
        this.handleChange= this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.handleText(event.target.value);
    }
    render(){
        return(
            <div>
                <label>Select a user name: </label>
                <input type="text" onChange={this.handleChange} ></input>
            </div>
           
        )
    }
}


function render(){
    ReactDOM.render(
        <App/>,
        document.getElementById("root")
    );
}
render();
