



class Section extends React.Component {
    render(){
        return(
            <div className="section">
               
                <Icon image={this.props.image}></Icon>
                <Title title={this.props.title}></Title>
               <Text  text={this.props.text} ></Text>
              
                
            </div>
        );
    }
}
class Icon extends React.Component{
    render(){
        return(
            <div className="circle">
                <img src={this.props.image} ></img>
            </div>
        );
    }
}
class Title extends React.Component{
    render(){
        return(
            <div className="text">
                 <h3>{this.props.title}</h3>
            </div>
        )
    }
}
class Text extends React.Component{
    render(){
        return(
            <div className="text">
            <p>{this.props.text}</p>
            </div>
        )
    }
}


class TravelApp extends React.Component{
    render(){
        return(
            <div><Section image="./images/around.jpg" title="blabla " text="lalalal"></Section>
            <Section image="./images/TravelPlaces.png"></Section>
            <Section image="./images/Travel.png"></Section>
            </div>
        )
    }
}
function render(){
    ReactDOM.render(
        <TravelApp/>,
        document.getElementById("root")
    );
}
render();
