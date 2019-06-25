
class Box extends React.Component {
    render() {
        return (
            <div className={this.props.numberOfBox}>{this.props.children}</div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div> 
                 <Box numberOfBox="one">
                <Box numberOfBox="two">
                    <Box numberOfBox="three">
                        <Box numberOfBox="four"></Box>
                        <Box numberOfBox="four"></Box>
                    </Box>
                </Box>
            </Box>
            </div>
        )
    }
}
function render() {
    ReactDOM.render(
        <App/>,
        document.getElementById("root")
    );
}
render();
