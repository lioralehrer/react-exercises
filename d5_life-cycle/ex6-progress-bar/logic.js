class Task extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="header"> {this.props.title}</div>
                <div className="circleOfProgress">{this.props.percentage}</div>
                <div className="progress-bar"></div>
            </div>
        )
    }
}

class ProgressBar extends React.Component {
    constructor() {
        super();
        this.state = ({
            percentage: [43, 84, 76]
        })
    }
    componentDidMount() {
        this.interval = setInterval(()=>{
            this.setState({
                percentage :[...this.state.percentage.map((element) => element+Math.floor(Math.random()*5)-1)]
            }) 
        },1000);
            // percentage: [...this.state.percentage.map((element) => {
            //     let x = element + Math.floor(Math.random() * 5) + 1;
            //     console.log(x);
            //     (x < 100) ? x : 100})]
            //     })
            // } , 5000);


        }
render() {
                return(
        <div>
            <Task title="General" percentage={this.state.percentage[0]} />
            <Task title="Uploading" percentage={this.state.percentage[1]} />
            <Task title="Tasks Status" percentage={this.state.percentage[2]} />
        </div >
    )
    }
}
function render() {
    ReactDOM.render(
        <ProgressBar />,
        document.getElementById("root")
    );
}
render();