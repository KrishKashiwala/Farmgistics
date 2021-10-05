import { Redirect } from "react-router-dom";
import "./componentsCss/typestouch.css";

const TypesTouch = ({ imglink, wid, high, content, secondContent }: any) => {
  if (localStorage.getItem("id") === null) return <Redirect to='/not-found' />;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <img
        src={imglink}
        alt='typestouchimages'
        style={{
          width: `${wid}`,
          height: `${high}`,
        }}
      />
      <span className='type_content'>{content}</span>

      <span className='type_content_1'>{secondContent}</span>
      <br />
      <a href='google.com' className='btn types_a'>
        SHOP NOW
      </a>
    </div>
  );
};
export default TypesTouch;
