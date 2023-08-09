
export default function Responsive(props) {

  const { responsive } = props;

  screen.orientation.addEventListener("change", function (e) {
    if (e.currentTarget.type === "landscape-primary") {
      responsive(e.currentTarget.type);
    } else if (e.currentTarget.type === "portrait-primary") {
      responsive(e.currentTarget.type);
    }
  });
}


