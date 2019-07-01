class BoxApp extends React.Component {
    constructor(){
        super();
        this.changeBorder = this.changeBorder.bind(this);
        this.state={
            color : "white"
        }
    }
    changeBorder(newcolor){
        this.setState({
            color : newcolor
        })
    }
    render() {
        return (
            <div className="border" style={{color:this.state.color}}>
                <Box color="lightgreen" changeColor={this.changeBorder}>
                <Box color="lightskyblue" changeColor={this.changeBorder}>
                    <Box color="lightpink" changeColor={this.changeBorder}>
                        <Box color="plum" changeColor={this.changeBorder}></Box>
                        <Box color="plum"changeColor={this.changeBorder}></Box>
                    </Box>
                </Box>
            </Box></div>
        )
    }
}

class Box extends React.Component {
    constructor() {
        super();
        this.handleColor = this.handleColor.bind(this);
    }
    handleColor(event){
        event.stopPropagation();
        let color = event.target.style.backgroundColor;
        this.props.changeColor(color);
        console.log(color);
        
       
    }
    render() {
        return (
            <div style={{backgroundColor:this.props.color}}  onClick={this.handleColor}>{this.props.children}</div>
        )
    }
}

function render() {
    ReactDOM.render(
        <BoxApp />,
        document.getElementById("root")
    );
}
render();