class UnorderList extends React.Component{
    render(){
      return(
        <ul >
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
    </ul>
      )
    }
}

ReactDOM.render(
      <UnorderList/>,
    document.getElementById("root")
);
