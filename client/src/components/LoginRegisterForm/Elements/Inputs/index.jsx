import Input from "./input";
import Label from "./label";
function index({ type, name, placeHolder }) {
  return (
    <div>
      <Label />
      <Input type={type} name={name} placeHolder={placeHolder} />
    </div>
  );
}

export default index;
