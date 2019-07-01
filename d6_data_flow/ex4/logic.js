
class Signing extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = ({
            check1: false,
            check2: false,
            disable1: false
        })

    }
    handleChange(event) {
        console.log("inside handle "+event.target.checked);
        if (event.target.checked) {
            if (event.target.id === "check1") {
                
                this.setState({
                    check1: true
                })
                console.log("inside handle "+event.target.id);
            } else {
                console.log("inside handle "+event.target.id);
                this.setState({
                    check2: true
                })
            }
            if (this.state.check1 && this.state.check2) {
                console.log("inside handle "+this.state.check1 + this.state.check2);
                this.setState({
                    disable1: true
                })
                console.log(this.state.disable);
            }
        }else {
            if (event.target.id === "check1") {
                console.log("inside handle "+event.target.id);
                this.setState({
                    check1: false
                })
            } else {
                console.log("inside handle "+event.target.id);
                this.setState({
                    check2: false
                })
            } 
        }
        
     
    }


    render() {
        return (
            <div>
                <Title title="Terms of Use"></Title>
                <Text text="blabla bla this are the terms my freinds"></Text>
                <div>
                    <CheckThisBox label="I have read the conditions" id="check1" handleChange={this.handleChange}></CheckThisBox>
                    <CheckThisBox label="I accept all the terms " id="check2" handleChange={this.handleChange}></CheckThisBox>
                </div>
                <Button label="Next" checkAbled={this.state.disable1} ></Button>
            </div>
        )
    }
}
class Title extends React.Component {
    render() {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}
class Text extends React.Component {
    render() {
        return (
            <p>{this.props.text}</p>
        )
    }
}
class CheckThisBox extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" id={this.props.id} onChange={this.props.handleChange}></input>
                {this.props.label}
            </div>
        )
    }
}
class Button extends React.Component {
    render() {
        return (
            <button disabled={this.props.checkAbled}>{this.props.label}</button>
        )
    }
}
function render() {
    ReactDOM.render(
        <Signing />,
        document.getElementById("root")
    );
}
render();