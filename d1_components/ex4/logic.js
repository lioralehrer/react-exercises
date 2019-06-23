class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <MainPage />
            </div>
        );
    }
}
class NavBar extends React.Component {
    render() {
        return (
            <ul className="navBar">
                <li>SERVICES</li>
                <li>WORK</li>
                <li className="underline">THE TEAM</li>
            </ul>
        )
    }
}
class MainPage extends React.Component {
    render() {
        return (
            <div className="mainPage">
                <Header />
                <Service1 />
                <Service2 />
                <Service3 />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <h1> Services</h1>
                <div className="text">Our vision is simple. We want to create website and applications with both<br /> high quality and easy-to-access content/ the finishe product will be <br /> totally unique and represent awesomeness/</div>

            </div>
        )
    }
} class Service1 extends React.Component {
    render() {
        return (
            <div className="service service1">
                <Circle1 />
                <div><h3>USER INTERFACE DESIGN</h3><div>Wiretraming</div><div>Prototyping</div><div>>Usabilitytesting</div></div>
            </div>
        )

    }
}
class Circle1 extends React.Component {
    render() {
        return (
            <div className="circle circle1"></div>
        );
    }
}
class Service2 extends React.Component {
    render() {
        return (
            <div className="service service2">
                <Circle2 />
                <div><h3>CONECT AND IDEAS</h3><div>Conceptualization</div><div>Digital Branding</div><div>Product Startegy</div> </div>
            </div>
        )

    }
}
class Circle2 extends React.Component {
    render() {
        return (
            <div className="circle circle2"></div>
        );
    }
}
class Service3 extends React.Component {
    render() {
        return (
            <div className="service service3">
                <Circle3 />
                <div><h3>DESIGN AND BRANDIN</h3>
                    <div>Interaction Design</div><div> Graphic Design </div><div> Identity Design </div>
                </div>
            </div>
        )

    }
}
class Circle3 extends React.Component {
    render() {
        return (
            <div className="circle circle3"></div>
        );
    }
}
function render() {
    ReactDOM.render(
        <LandingPage />,
        document.getElementById("root")
    );
}
render();