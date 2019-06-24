class Hello extends React.Component{
    constructor(){
        super();
        this.counter =0;
        this.sayHello = this.sayHello.bind(this);
    }
    sayHello(){
        this.counter++;
         document.getElementById("hello").innerHTML="Hello World "+this.counter;
        
    }

    
    render(){
        return(
            <div>
                 <button onClick={this.sayHello} >Click Here</button>
                 <h1 id="hello"></h1>
            </div>
           
        )
    }
}

ReactDOM.render(
    <Hello/>,
    document.getElementById("root")
);