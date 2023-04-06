// styles
import "./barIndicator.scss";

type TBarIndicator = {
  title: string;
  percentageVale: number;
};
function BarIndicator({ title, percentageVale }: TBarIndicator) {
  return (
    <div className="indicator-container">
      <span>{title}</span>
      <span className="indicator-container__bar">
        <span
          className="indicator-container__bar__filler"
          style={{ width: `${percentageVale}%` }}
        />
      </span>
    </div>
  );
}

export default BarIndicator;
