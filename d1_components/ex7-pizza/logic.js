class Pizza extends React.Component{
    render(){
        return(
            <div>
                <SideBar/>
                <MainPizza/>
            </div>

        )
    }
}
class SideBar extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}
class MainPizza extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}

function render(){
    ReactDOM.render(
        <Pizza/>,
        document.getElementById("root")
    );
}
render();
