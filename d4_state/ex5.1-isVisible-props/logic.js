class WithProps extends React.Component{
    render(){
        return(
            <div>
                <Circle name="hide"/>
                <Circle name=""/>
                <Circle name=""/>
            </div>
        )
    }
}
class Circle extends React.Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div className={"circle "+ this.props.name}></div>
        )
    }
}

function render(){
    ReactDOM.render(
        <WithProps/>,
        document.getElementById("root")
    );
}
render();
