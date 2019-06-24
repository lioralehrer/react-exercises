class Factorial extends React.Component {
    clacFactorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *=  i;
        }
        return factorial;
    }
    render() {
        let factorial = this.clacFactorial(5);
        return (
            <div>
                <h1>Factorial is:</h1>
                <div>{factorial}</div>
            </div>
        )
    }
}
function render(){
    ReactDOM.render(
        <Factorial />,
        document.getElementById("root")
    );
}
render();


