// We want to create 4 components: Box1, Box2, Box3, Box4.
// Box1 is the big green box.
// Box4 is the smallest purple box – we use it twice.
// Note that the boxes contain one another. Box 1 contains Box 2, which contains Box 3, which contains 2 Box 4
// components.

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

