class App extends React.Component {
    constructor() {
        super();
        this.handelItems1 = this.handelItems1.bind(this);
        this.handelItems2 = this.handelItems2.bind(this);
        this.handelItems3 = this.handelItems3.bind(this);
        this.state = ({
            item1: "",
            item2: "",
            item3: ""
        })
    }
    handelItems1() {
        this.setState({
            item1: "Yael",
            item2: "Shira",
            item3: "Ohad"
        })
    }
    handelItems2() {
        this.setState({
            item1: "monkey",
            item2: "dog",
            item3: "tiger"
        })
    }
    handelItems3() {
        this.setState({
            item1: "monopoly",
            item2: "memory-game",
            item3: "minecraft"
        })
    }
  

    render() {
        return (
            <div>
                <h1>Category :</h1>
                <Category category1="names" categoryItems1={this.handelItems1} category2="animals" categoryItems2={this.handelItems2} category3="games" categoryItems3={this.handelItems3} selectedCategory={this.handelSelector}></Category>
                <h2>Sub Category : </h2>
                <Category category1={this.state.item1} category2={this.state.item2} category3={this.state.item3}></Category>
            </div>
        )
    }
}
class Category extends React.Component {
    render() {
        return (
            <select onChange={this.props.selectedCategory}>
                <option value={this.props.category1} onClick={this.props.categoryItems1}>{this.props.category1}</option>
                <option value={this.props.category2} onClick={this.props.categoryItems2}>{this.props.category2}</option>
                <option value={this.props.category3} onClick={this.props.categoryItems3}>{this.props.category3}</option>
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
