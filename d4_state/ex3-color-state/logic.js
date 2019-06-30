class ColorBox extends React.Component{
    constructor(){
        super();
        this.changeColor = this.changeColor.bind(this);
        this.state={
            color : ""
        };
    }
    changeColor(event){
        let newColor = event.target.innerText;
        this.setState({
            color : newColor
        });
    }
    render(){
        return(
            <div><h2>Pick a color for your Box: </h2>
            <button onClick={this.changeColor}>Blue</button>
            <button onClick={this.changeColor}>green</button>
            <button onClick={this.changeColor}>Orange</button>
            <div className={"box "+this.state.color}></div>
            </div>
        )
    }
}


function render(){
    ReactDOM.render(
        <ColorBox/>,
        document.getElementById("root")
    );
}
render();
