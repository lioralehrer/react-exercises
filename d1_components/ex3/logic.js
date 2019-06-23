class Quiz extends React.Component {
    render() {
        return (
            <div id="quiz">
                <QuizTitle />
                <Q1 />
               <Q2/>
            </div>
        )
    }
}
class QuizTitle extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>How Do You Like Front End?</h1>
                
            </div>

        )
    }
}
class Q1 extends React.Component {
    render() {
        return (
            <div id="q1">
                <Q1Title />
                <Q1Input/>
            </div>
        )

    }
}
class Q1Title extends React.Component {
    render() {
        return (
            <div>
                <h2>How Much do you love front end?</h2>
               
            </div>

        )
    }
}
class Q1Input extends React.Component {
    render() {
        return (
            <div>
                <input></input>
            </div>

        )
    }
}
class Q2 extends React.Component {
    render() {
        return (
            <div id="q2">
                <Q2Title />
                <Q2Input />
            </div>
        )

    }
}
class Q2Title extends React.Component {
    render() {
        return (
            <div>
                <h2>What is your favourite front end feature/topic?</h2>
                
            </div>
        )
    }
}
class Q2Input extends React.Component {
    render() {
        return (
            <input></input>
        )
    }
}


ReactDOM.render(
    <Quiz />,
    document.getElementById("root")
);