// libraries
import renderer from "react-test-renderer";
import BarIndicator from "../BarIndicator";

describe("<BarIndicator />", () => {
  test("Renders correctly", () => {
    const title = "example title";
    const percentageVale = 90;
    const tree = renderer
      .create(<BarIndicator title={title} percentageVale={percentageVale} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
