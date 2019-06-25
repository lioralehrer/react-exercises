class Title extends React.Component{
        constructor(props){
            super(props);
        }
    render(){
        var style = {
            "fontFamily": this.props.font
            };
           
        return (
          <div><h2 style={style}>
            {this.props.title}</h2>
            </div>
        )
    }
}


class Page extends React.Component{
    render(){
        return(
            <div>
                <Title title="Hello World" font="cursive"></Title>
                <Title title="Have Fun" font="fantasy"></Title>
                <Title title="Live and Leave"></Title>
            </div>
        )
    }
}

function render(){
    ReactDOM.render(
        <Page/
        >,
        document.getElementById("root")
    );
}
render();
