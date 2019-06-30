
class ColorApp extends React.Component{
    render(){
        return(
            <div>
                <h1>Which colors do you want?</h1>
                <h3>(disable the ones you don't want a click)</h3> 
                <Button color="blue" /> 
                <Button color="purple"/>
                <Button color="green"/>
                <Button color="red"/>
                <Button color="pink"/>  
            </div>
        )
    }
}

class Button extends React.Component{
    constructor(){
        super();
        this.show = this.show.bind(this);
        this.state ={
            show : true
        };

    }
    show(){
        this.setState({
            show : false
        });
    }
    render(){
        let addClass = this.state.show?"":"hide"; 
        return(
            <button onClick={this.show} className={addClass}>{this.props.color}</button>
        )
    }
}

function render(){
    ReactDOM.render(
        <ColorApp/>,
        document.getElementById("root")
    );
}
render();
