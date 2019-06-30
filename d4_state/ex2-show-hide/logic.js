class ShowHide extends React.Component {
    constructor() {
        super();
        this.toggleBox = this.toggleBox.bind(this);
        this.state = {
            show = true
        };
    }
    toggleBox() {
        let newshow = this.state.show === true ? false : true;
        this.setState({
            show: newshow
        })

    }
    render() {
        let selectClass = this.state.show ? "" : "hide";
        return (
            <div>
                <button onClick={this.toggleBox}>Show / Hide Box</button>
                <div className={"box " + selectClass}></div>
            </div>
        )
    }
}

function render() {
    ReactDOM.render(
        <ShowHide />,
        document.getElementById("root")
    );
}
render();
