class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Title />
                <Services />
            </div>
        );
    }
}

class Menu extends React.Component {
    constructor(){
        super();
        this.boldText = this.boldText.bind(this);
    }
    boldText(id){
        document.getElementById(id).style.fontWeight = "900";
    }
    render() {
        return (
            <div className="menu">
                <span id="menu1" onClick={()=>this.boldText("menu1")}>SERVICES</span>
                <span id="menu2" onClick={()=>this.boldText("menu2")}>WORK</span>
                <span id="menu3" onClick={()=>this.boldText("menu3")}>THE TEAM</span>
                <div></div>
            </div>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>SERVICES</h1>
                <p>
                    our vision is simple, we want to create websites and applications with both high quality
                    design and easy-to-access content. The finished product will be totaly unique and awesome.
                </p>
            </div>
        );
    }
}

class Services extends React.Component {
    render() {
        return (
            <div id="services">
                <Service1 />
                <Service2 />
                <Service3 />
            </div>
        );
    }
}

class Service1 extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon />
                <Description />
            </div >
        );
    }
}

class Icon extends React.Component {
    constructor(){
        super();
        this.changeBackground = this.changeBackground.bind(this);
    }
    changeBackground(){
        document.getElementById("icon1").src ="./images/cloudy.png";
    }
    render() {
        return (
            <div className="icon-wrapper blue"  >
                <img id="icon1" onMouseOver={this.changeBackground} src="./images/note.jpg"></img>
            </div>
        );
    }
}

class Description extends React.Component {
    buildBorder(id){
        document.getElementById(id).style.border= "thick solid #0000FF";
    }
    cancelBorder(id){
        setTimeout(function(){document.getElementById(id).style.border="" }, 1000);
    }
    render() {
        return (
            <div className="title">
                <h5 id="s111"onMouseOver={()=>this.buildBorder("s111")} onMouseOut={()=>this.cancelBorder("s111")}>USER INTERFACE</h5>
                <div id="s112"onMouseOver={()=>this.buildBorder("s112")} onMouseOut={()=>this.cancelBorder("s112")}>Wireframing</div>
                <div id="s113"onMouseOver={()=>this.buildBorder("s113")} onMouseOut={()=>this.cancelBorder("s113")}>Prototyping</div>
                <div id="s114"onMouseOver={()=>this.buildBorder("s114")} onMouseOut={()=>this.cancelBorder("s114")}>Usability Testing</div>
            </div>
        );
    }
}


class Service2 extends React.Component {
    render() {
        return (
            <div className="service">
                <Icon2 />
                <Description2 />
            </div >
        );
    }
}

class Icon2 extends React.Component {
    constructor(){
        super();
        this.changeBackground = this.changeBackground.bind(this);
    }
    changeBackground(){
        document.getElementById("icon2").src ="./images/cloudy.png";
    }
    render() {
        return (
            <div className="icon-wrapper green">
                <img id="icon2" onMouseOver={this.changeBackground} src='./images/pencil.jpg'></img>
            </div>
        );
    }
}

class Description2 extends React.Component {
    buildBorder(id){
        document.getElementById(id).style.border= "thick solid #0000FF";
    }
    cancelBorder(id){
        setTimeout(function(){document.getElementById(id).style.border="" }, 1000);
    }
    render() {
        return (
            <div className="title">
                <h5 id="s11"onMouseOver={()=>this.buildBorder("s11")} onMouseOut={()=>this.cancelBorder("s11")}>CONCEPT AND IDEAS</h5>
                <div id="s12"onMouseOver={()=>this.buildBorder("s12")} onMouseOut={()=>this.cancelBorder("s12")}>Conceptualization</div>
                <div id="s13"onMouseOver={()=>this.buildBorder("s13")} onMouseOut={()=>this.cancelBorder("s13")}>Digital Planning</div>
                <div id="s14"onMouseOver={()=>this.buildBorder("s14")} onMouseOut={()=>this.cancelBorder("s14")}>Product Strategy</div>
            </div>
        );
    }
}

class Service3 extends React.Component {
 
    render() {
        return (
            <div className="service">
                <Icon3 />
                <Description3 />
            </div >
        );
    }
}

class Icon3 extends React.Component {
    constructor(){
        super();
        this.changeBackground = this.changeBackground.bind(this);
    }
    changeBackground(){
        document.getElementById("icon3").src ="./images/cloudy.png";
    }
    render() {
        return (
            <div className="icon-wrapper lilac">
                <img id="icon3" onMouseOver={this.changeBackground} src="./images/images.png"></img>
            </div>
        );
    }
}

class Description3 extends React.Component {
    buildBorder(id){
        document.getElementById(id).style.border= "thick solid #0000FF";
    }
    cancelBorder(id){
        setTimeout(function(){document.getElementById(id).style.border="" }, 1000);
    }
    render() {
        return (
            <div className="title">
                <h5 id="s1"onMouseOver={()=>this.buildBorder("s1")} onMouseOut={()=>this.cancelBorder("s1")}>DESIGN AND BRANDING</h5>
                <div id="s2"onMouseOver={()=>this.buildBorder("s2")} onMouseOut={()=>this.cancelBorder("s2")}>Interactive Design</div>
                <div id="s3"onMouseOver={()=>this.buildBorder("s3")} onMouseOut={()=>this.cancelBorder("s3")}>Graphic Design</div>
                <div id="s4"onMouseOver={()=>this.buildBorder("s4")} onMouseOut={()=>this.cancelBorder("s4")}>Unique Strategy</div>
            </div>
        );
    }
}
function render() {
    ReactDOM.render(
        <App />,
        document.getElementById("root")
    );
}
render();