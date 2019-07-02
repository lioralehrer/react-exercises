class CheckBox extends React.Component{
    render(){
        return(
           <div>
                  <input type="checkbox" id={this.props.id} checked={this.props.defaultChecked} ></input>
                {this.props.label}
            </div>
        )
    }
}

class App extends React.Component{
    constructor(){
        super();
        this.state=({
                chkbox1 : false,
                chkbox2 : true,
        })
    }
    render(){
        return(
          <div>
                <CheckBox id="c1"label="I read the term of the app" defaultChecked={this.state.chkbox1} ></CheckBox>
                <CheckBox id="c2"label="I accept the term of the app" defaultChecked={this.state.chkbox1}></CheckBox>
                <CheckBox id="c3"label="I want to get the weekly news letter" defaultChecked={this.state.chkbox2}></CheckBox>
                <CheckBox id="c4"label="I want to get adjuted" defaultChecked={this.state.chkbox2} ></CheckBox>
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
