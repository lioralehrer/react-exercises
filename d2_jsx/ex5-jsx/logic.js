var data = {
    linkAddress: "https://www.google.com/",
    linkText: "google",
    min: -5,
    max: 5,
    color: "maroon",
    "font-weight": "bold",
    buttonText: "click me"
   };
function render(){
    ReactDOM.render(
        <div><div className="linkTag">
            <a href={data.linkAddress} target="_blank" >Go to Google</a>
        </div>
        <div> <input type="range" name="points" min={data.min} max={data.max}></input></div>
        <button id="click" >{data.buttonText}</button>
        </div>,
        document.getElementById("root")
    );
}
render();

