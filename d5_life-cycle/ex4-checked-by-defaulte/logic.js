class CheckBox extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" id={this.props.id} checked={this.props.defaultChecked} onChange={this.props.onChange} ></input>
                {this.props.label}
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = ({
            
        })
    }
    componentDidMount(){
        this.setState({
            chkbox2: true
        })
    }
    onChange(){
      this.setState({
        chkbox2 : !chkbox2
      })
         
        
    }
    render() {
        return (
            <div>
                <CheckBox id="c1" label="I read the term of the app"  ></CheckBox>
                <CheckBox id="c2" label="I accept the term of the app" ></CheckBox>
                <CheckBox id="c3" label="I want to get the weekly news letter" defaultChecked={this.state.chkbox2} onChange={this.isChange}></CheckBox>
                <CheckBox id="c4" label="I want to get adjuted" defaultChecked={this.state.chkbox2} onChange={this.isChange}></CheckBox>
            </div>
        )
    }
}

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();
