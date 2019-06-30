class Counter extends React.Component {
    constructor() {
        super();
        this.randomNum = this.randomNum.bind(this);
        this.state = {
            random: Math.floor(Math.random() * 100),
            color: "black"
        }
    }
    randomNum() {
        let newRandom = Math.floor(Math.random() * 100);
        this.setState({
            random: newRandom,
            color: newRandom % 2 === 0 ? "blue" : "red"
        })
    };
    render() {
        return (
            <div>
                <button onClick={this.randomNum}>Increase Me</button>
                <span style={{ color: this.state.color }}>{this.state.random}</span>
            </div>
        )
    }
}

function render() {
    ReactDOM.render(
        <Counter />,
        document.getElementById("root")
    );
}
render();
