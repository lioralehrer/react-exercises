class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Category :</h1>
                <Category></Category>

            </div>
        )
    }
}
class Category extends React.Component {
    render() {
        return (
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
            </select>
        )
    }
}


function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();
