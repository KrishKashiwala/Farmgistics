import './componentsCss/typestouch.css';

const TypesTouch = ({ imglink, wid, high }: any) => {
    return (
        <div>
            <img
                src={imglink}
                alt="typestouchimages"
                style={{ width: `${wid}`, height: `${high}` }}
            />
        </div>
    );
};
export default TypesTouch;
