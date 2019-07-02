class Box extends React.Component {
    constructor(){
        super()
        console.log("Box constractor");
    }
    componentWillMount(){
        console.log("Box will be mounted");
    }
    componentDidMount(){
        console.log("Box was mounted");
    }
    componentWillReceiveProps(nextProps){
        console.log("Box received props!");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("Box was updated");
    }
    render() {
        console.log("Box render");
        let boxStyle = {
            margin: 20,
            padding: 10,
            border: "1px solid black",
            display: this.props.isShown ? "block" : "none"
        }

        return <div style={boxStyle}>{this.props.children}</div>
    }
}

class App extends React.Component {
    constructor() {
        super();
        console.log("App constractor");
        this.state = {
            isShown: true
        }
    }
    componentWillMount(){
        console.log("App will be mounted");
    }
    componentDidMount(){
        console.log("App was mounted");
        setInterval(()=>{
            this.setState({
                isShown :!this.state.isShown
            });
        },3000)
    }
    render() {
        console.log("app render");
        return (
            <Box isShown={this.state.isShown}>
                <Box isShown={this.state.isShown} />
                <Box isShown={this.state.isShown} />
            </Box>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));