class Button extends React.Component{
    render(){
        return(
            <button className="button">Click Me</button>
        );
    }
}

ReactDOM.render(
    <Button/>,
    document.getElementById("root")
);