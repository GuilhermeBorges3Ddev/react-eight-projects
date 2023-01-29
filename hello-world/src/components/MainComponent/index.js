import "./MainComponent.css";

function MainComponent(props) {
  const MainText = () => {
    if (props.username && props.username.length > 0)
      return `Hello user ${props.username}!`;
    return "Hello user anonymous!";
  };
  return (
    <div className="MainComponent">
      <header className="MainComponent-Header">{MainText()}</header>
    </div>
  );
}

export default MainComponent;
