import Input from "./input";
import Label from "./label";
function index({ onChange, value, type, name, placeHolder }) {
  return (
    <div>
      <Label />
      <Input onChange={onChange} value={value} type={type} name={name} placeHolder={placeHolder} />
    </div>
  );
}

export default index;
