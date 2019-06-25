var data1 = {
    title: "Calculate Squared Number",
    inputNumber: "",
    result: ""
}
var data2 = {
    title: "Calculate Squared  Root Number",
    inputNumber: "",
    result: ""
}
var data3 = {
    title: "Calculate Sigma Number",
    inputNumber: "",
    result: ""
}
var data4 = {
    title: "Calculate Heighest Between Squared and Sigma ",
    inputNumber: "",
    result: ""
}
class CalculatorApp extends React.Component {
    render() {
        return (
            <div>
                <Calc />
                <Calc />
                <Calc />
                <Calc />
            </div>
        )
    }

}
class Calc extends React.Component {
    constructor() {
        super();
        // this.squard = this.squard.bind(this);
    }
    squard(num) {
        let result = 0;
        if (num === 0) {
            result = 1;
        } else {
            result = num * num;
        }
        document.getElementById("result").innerHTML=result;
    }

    render() {
        return (
            <div className="container">
                <h2>{data1.title}</h2>
                <div className="place">
                    <label htmlFor="number" >Enter Number:  </label>
                    <input type="number" name="number" id="inputNum" onMouseLeave={()=>this.squard(this.value)}></input>
                    <div className="place">
                        <label htmlFor="result">Result: </label>
                        <input type="number" name="result"id="result"></input>
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
