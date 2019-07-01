class App extends React.Component {
    constructor(props){
        super(props);
        this.changeBoxColor = this.changeBoxColor.bind(this);
        this.state = {
            color: ""
        }
    }

    changeBoxColor(event){
        this.setState({
            color: event.target.textContent
        })
    }

    render() {
        return (
            <div>
                <Button handelBoxColor={this.changeBoxColor} color="blue"></Button>
                <Button handelBoxColor={this.changeBoxColor} color="green"></Button>
                <Button handelBoxColor={this.changeBoxColor} color="orange"></Button>
                <div className={"box " + this.state.color}></div>
            </div>
        );
    }
}
class Button extends React.Component{
    render(){
        return(
            <button onClick={this.props.handelBoxColor}>{this.props.color}</button>
        )
    }
}

function render() {
    ReactDOM.render(
        <App/>,
        document.getElementById("root")
    );
}

render();