class Notification extends React.Component {
    constructor() {
        super();
        this.dismiss = this.dismiss.bind(this);
        this.random = Math.floor(Math.random() * 11);
        this.state = ({
            times: this.random > 0 ? this.random : ""
        })
    }
    dismiss() {
        this.setState({
            times: 0
        })
    }
    render() {
        return (
            <div className="message">
                <span onClick={this.dismiss}>{this.state.times}</span>
            </div>
        )
    }
}


function render() {
    ReactDOM.render(
        <Notification />,
        document.getElementById("root")
    );
}
render();
