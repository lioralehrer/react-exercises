class Ques extends React.Component{
    render(){
        return(
            <div><h2>{this.props.question}</h2>
                <input  type="radio" name={this.props.name}/>yes
                <input  type="radio" name={this.props.name}/>No
            </div>
        )
    }
}
class App extends React.Component{
    render(){
        return(
            <div>
                <Ques question="Have you programmed before?" name="one"></Ques>
                <Ques question="Have you Programmed in Java?" name="two"></Ques>
                <Ques question="Have you Programmed in Python?" name="three"></Ques>
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