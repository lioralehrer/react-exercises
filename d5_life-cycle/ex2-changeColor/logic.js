class Box extends React.Component {
    render() {
        console.log("Box render");
        let boxStyle = {
            backgroundColor : this.props.isShown ? "black" : "red",
            margin: 20,
            padding: 10,
            border: "1px solid black",
            height :500,
            width :500,
            borderRadius: this.props.shape ? "" : "50%"
        }
        return <div style={boxStyle}></div>
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isShown: true,
            shape : true
        }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    componentDidMount(){
      this.interval = setInterval(()=>{
            this.setState({
                isShown :!this.state.isShown
            }) 
        },1000);
      setInterval(()=>{
          this.setState({
              shape : !this.state.shape
          })
      },5000)  
    }
    render() {
        console.log("app render");
        return (
            <Box isShown={this.state.isShown} shape={this.state.shape}>
            </Box>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
setTimeout(()=> ReactDOM.unmountComponentAtNode(document.getElementById("root")),10000);