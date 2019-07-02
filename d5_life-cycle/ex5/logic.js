class Ques extends React.Component{
    render(){
        return(
            <div><h2>{this.props.question}</h2>
                <input  type="radio" name={this.props.name} value="yes"  onChange={this.props.handleChange} data={this.props.checked}/>yes
                <input  type="radio" name={this.props.name} value="no"  onChange={this.props.handleChange}/>No
            </div>
        )
    }
}
class App extends React.Component{
    constructor(){
        super();
        this.programmedBefore = this.programmedBefore.bind(this);
        this.state=({
            isNotProgram : ""
        })
    }
    programmedBefore(e){
        e.target.value === "no"? this.setState({
            isNotProgram :"checked"
        }) : ""
    }
    render(){
        return(
            <div>
                <Ques question="Have you programmed before?" name="one" handleChange={this.programmedBefore} ></Ques>
                <Ques question="Have you Programmed in Java?" name="two" checked={this.state.isNotProgram}></Ques>
                <Ques question="Have you Programmed in Python?" name="three" checked={this.state.isNotProgram}></Ques>
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