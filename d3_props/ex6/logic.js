
class Box extends React.Component {
    render() {
        return (
            <div className={this.props.size + " box"} ></div>
        )
    }
}
class BoxApp extends React.Component {
    render() {
        return (
            <div>
                <Box size="rectangle1" />
                <Box size="rectangle2" />
                <Box size="rectangle3" />
                <div>
                    <Box size="one"></Box><Box size="two"></Box ><Box size="three"></Box>
                </div>
                <div>
                    <Box size="four"></Box><Box size="three"></Box><Box size="three"></Box>
                    <Box size="rectangle1" />
                    <Box size="rectangle2" />
                    <Box size="rectangle3" />
                </div>
            </div>
        )
    }
}
function render() {
    ReactDOM.render(
        <BoxApp />,
        document.getElementById("root")
    );
}
render();