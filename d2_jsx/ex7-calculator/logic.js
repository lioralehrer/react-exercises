var count = 0;
class CalculatorApp extends React.Component {
    constructor(){
        super();
        this.squard = this.squard.bind(this);
        this.sigma = this.sigma.bind(this);
        this.heighest = this.heighest.bind(this);
    }
    squard(num) {
        let result = num * num
        return result;
    }
    squardRoot(num){
        let result = Math.sqrt(num, 2);
        return  result;
    }
    sigma(num){
        let result = 0;
        for (let i =1; i<num;i++){
            result +=i;
        }
        return result;
    }
    heighest(num){
        let result = 0;
        let x = this.squard(num);
        let y = this.sigma(num);
        if (x>y){
            result = x;
        }else {
            result = y;
        }
        console.log("inside heighest");
        return result;
    }
    render() {
        return (
            <div>
                <Calc title="Calculate Square" func={this.squard} />
                <Calc title="Calculate Square Root" func={this.squardRoot} />
                <Calc title="Calculate Sigma" func={this.sigma} />
                <Calc title="Calculate Heighest Between Squard and Sigma" func={this.heighest} />
            </div>
        )
    }

}
class Calc extends React.Component {
    constructor() {
        super();
        this.myId = count++;
        this.calculate = this.calculate.bind(this);
    }
    calculate() {
        let input = document.getElementById("inputNum" + this.myId).value;
        let result = this.props.func(parseInt(input))
        document.getElementById("result" + this.myId).innerHTML = result;

    }
    render() {
        return (
            <div className="container">
                <h2>{this.props.title}</h2>
                <div className="place">
                    <label htmlFor="number" >Enter Number:  </label>
                    <input type="text" id={"inputNum" + this.myId} onBlur={this.calculate}></input>
                    <div className="place">
                        <label htmlFor="result">Result: </label>
                        <span id={"result" + this.myId} ></span>
                    </div>
                </div>
            </div>
        )
    }

}
function render() {
    ReactDOM.render(
        <CalculatorApp />,
        document.getElementById("root")
    );
}
render();
