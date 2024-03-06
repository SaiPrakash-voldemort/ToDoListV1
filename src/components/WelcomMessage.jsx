import "./WelcomeMessage.css";
const WelcomMessage = ({ toList }) => {
  return (
    <>
      {toList.length === 0 ? (
        <h3 className="headTitle">Have a Good day😃</h3>
      ) : null}
    </>
  );
};
export default WelcomMessage;
