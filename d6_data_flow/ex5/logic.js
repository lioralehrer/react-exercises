class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Category :</h1>
                <Category category1="names" category2="animals" category3="games"></Category>

            </div>
        )
    }
}
class Category extends React.Component {
    render() {
        return (
            <select>
                <option value={this.props.category1}>{this.props.category1}</option>
                <option value={this.props.category2}>{this.props.category2}</option>
                <option value={this.props.category3}>{this.props.category3}</option>
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
