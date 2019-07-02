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
            backgroundColor : this.props.isShown ? "black" : "red",
            margin: 20,
            padding: 10,
            border: "1px solid black",
            height :500,
            width :500

             
        }

        return <div style={boxStyle}></div>
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
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    componentDidMount(){
        console.log("App was mounted");
        let counter = 0;
      this.interval = setInterval(()=>{
            this.setState({
                isShown :!this.state.isShown
            }) ,counter++;
        },1000)
        counter===10? clearInterval(change):"";
    }
    render() {
        console.log("app render");
        return (
            <Box isShown={this.state.isShown}>
            </Box>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
setTimeout(()=> ReactDOM.unmountComponentAtNode(document.getElementById("root")),10000);