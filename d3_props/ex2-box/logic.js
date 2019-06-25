
class Box extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      
        return(
            <div className={this.props.color +" box"}  ><h4>{this.props.label}</h4></div>
        )
    }
}



class App extends React.Component{
    render(){
        return(
            <div><Box  label="fresh" color="green"></Box>
            <Box  label="calm" color="blue"></Box>
            <Box  label="adventurous" color="pink"></Box>
            <Box  label="happy" color="yellow"></Box>

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
