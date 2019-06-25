



class Section extends React.Component {
    render() {
        return (
            <div className="section">
                <div>
                    <img className="circle" src={this.props.src}></img>
                </div>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>

            </div>
        );
    }
}

class TravelApp extends React.Component {
    render() {
        return (
            <div><Section src="./images/around.jpg" title="blabla " text="lalalal"></Section>
                <Section src="./images/TravelPlaces.png" title="mkmkmk"text="mkmkm"></Section>
                <Section src="./images/Travel.png" title="mkmkmk"text="mkmkm"></Section>
            </div>
        )
    }
}
function render() {
    ReactDOM.render(
        <TravelApp />,
        document.getElementById("root")
    );
}
render();
