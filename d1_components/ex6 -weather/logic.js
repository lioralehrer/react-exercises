class Weather extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Days />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <Icon />
                <Place />
            </div>
        )
    }
}
class Icon extends React.Component {
    render() {
        return (
            <div className="icon"></div>
        )
    }
}
class Place extends React.Component {
    render() {
        return (
            <div className="place">
                <Country />
                <City />
                <DescribeWeather />
            </div>
        );
    }
}
class Country extends React.Component {
    render() {
        return (
            <h3>Serbia</h3>
        )
    }
}
class City extends React.Component {
    render() {
        return (
            <h1>Belgrad</h1>
        );
    }
}
class DescribeWeather extends React.Component {
    render() {
        return (
            <div>
                <h3>Sunny </h3>
                <Celsius />
            </div>
        );
    }
}
class Celsius extends React.Component {
    render() {
        return (
            <h3> 19 *C</h3>
        )
    }
}
class  Days extends React.Component {
    render() {
        return (
            <div className="days">
                <Day1 />
                <Day2 />
                <Day3 />
            </div>
        )
    }
}
class Day1 extends React.Component{
    render(){
        return(
            <div className="day">
                <LeftSide1/>
                <Icon/>
                <RightSide1/>
            </div>
        )
    }
}
class LeftSide1 extends React.Component{
    render(){
        return(
            <div className="leftSide">
                <h3>mo <br/>16.02</h3>
            </div>
            
        )
    }
} 
class RightSide1 extends React.Component{
    render(){
        return(
            <div className="rightSide">
                <DescribeWeather/>
                {/* <Icons/> */}
            </div>
        )
    }
}
class Day2 extends React.Component{
    render(){
        return(
            <div className="day">
                <LeftSide2/>
                <IconRain/>
                <RightSide2/>
            </div>
        )
    }
}
class LeftSide2 extends React.Component{
    render(){
        return(
            <div className="leftSide">
                <h3>tu <br/>17.02</h3>
            </div>
            
        )
    }
}
class IconRain extends React.Component{
    render(){
        return(
            <div className="iconRain"></div>
        )
    }
} 
class RightSide2 extends React.Component{
    render(){
        return(
            <div className="rightSide">
                <DescribeWeather/>
                {/* <Icons/> */}
            </div>
        )
    }
}
class Day3 extends React.Component{
    render(){
        return(
            <div className="day">
                <LeftSide3/>
                <IconCloudy/>
                <RightSide3/>
            </div>
        )
    }
}
class LeftSide3 extends React.Component{
    render(){
        return(
            <div className="leftSide">
                <h3>we <br/>18.02</h3>
            </div>
            
        )
    }
} 
class IconCloudy extends React.Component{
    render(){
        return(
            <div className="iconCloudy"></div>
        )
    }
}
class RightSide3 extends React.Component{
    render(){
        return(
            <div className="rightSide">
                <h3>Cloudy <br/> 17 *C</h3>
                {/* <Icons/> */}
            </div>
        )
    }
}

ReactDOM.render(
    <Weather />,
    document.getElementById("root")
);