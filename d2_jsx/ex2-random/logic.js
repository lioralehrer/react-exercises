class Random extends React.Component{
    randomWinOrLost(){
        let randomNum = Math.floor(Math.random()*10);
        if (randomNum>5){
            return <h1>You won</h1>
        }
        else 
        return <h3>You lost</h3>
    }
    
    render(){
        let message = this.randomWinOrLost();
        return(
            <div>{message}</div>
        )
    }
}



function render(){
    ReactDOM.render(
        <Random/>,
        document.getElementById("root")
    );
}
render();
