
class WithState extends React.Component {
    constructor() {
        super();
        this.show = this.show.bind(this);
        this.state = {
            isVisible: false
        };
    }
    show() {
        this.setState({
            isVisible: this.state.isVisible ? false : true
        })
    }
    render() {
        let show = this.state.isVisible ? "" : "hide";
        return (
            <div><button onClick={this.show}>Click Me</button>
                <div className={"circle " + show}></div></div>
        )
    }
}
function render() {
    ReactDOM.render(
        <WithState/>,
        document.getElementById("root")
    );
}
render();
