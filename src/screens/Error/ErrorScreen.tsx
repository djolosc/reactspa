import { Button } from "../../components";
import { useNavigation } from "../../hooks";

const ErrorScreen = () => {
  const { navigateHome } = useNavigation();

  return (
    <div>
      <h1>OOPS! PAGE NOT FOUND</h1>
      <h4>Sorry, the page you're looking for doesn't exist</h4>
      <Button onClick={navigateHome} buttonTitle={"Return Home"} />
    </div>
  );
};

export default ErrorScreen;
