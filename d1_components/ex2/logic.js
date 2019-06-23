class App extends React.Component {
    render() {
        return (
            <div>
                <Box1 />
            </div>
        
        );
    }
}
class Box1 extends React.Component {
    render() {
        return (
            <div id="box1"><Box2/></div>
        )
    }
}
class Box2 extends React.Component {
    render() {
        return (

            <div id="box2"><Box3/></div>

        )
    }
}
class Box3 extends React.Component {
    render() {
        return (
            <div id="box3"><Box4/><Box4/></div>
        )
    }
}
class Box4 extends React.Component {
    render() {
        return (
            <div id="box4"></div>
        )
    }
}



ReactDOM.render(
    <Box1 />,
    document.getElementById("root")
);

