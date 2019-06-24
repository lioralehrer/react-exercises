class ShowNumbers  extends React.Component{
    constructor(){
        super();
       this.num = 100;
       this.printNumbers = this.printNumbers.bind(this);
    }
    printNumbers(){
        let showNumbers =" "
        for (let i = 0; i<=this.num; i++){
            showNumbers = showNumbers +" "+ i;
        } 
          document.getElementById("numbers").innerHTML =  showNumbers;
    }
    render(){
        return(
            <div><button onClick ={this.printNumbers}>Show Numbers</button>
            <div id="numbers"></div></div>
        )
    }
}
function render(){
    ReactDOM.render(
        <ShowNumbers/>,
        document.getElementById("root")
    );
}
render();



