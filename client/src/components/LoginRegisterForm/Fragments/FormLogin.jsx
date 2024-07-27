import Button from '../Elements/Button'
import DontHaveAnAcc from '../Elements/DontHaveAnAcc'
import Input from '../Elements/Inputs'
function FormLogin() {
  return (
    <form className="space-y-4 md:space-y-6" action="">
    <Input type={"text"} name={"username"} placeHolder={"Username"}/>
    <Input type={"password"} name={"password"} placeHolder={"Password"}/>
    <Button buttonName="Sign in"/>
    <DontHaveAnAcc dontHaveAcc="Don’t have an account yet?" signUp="Sign up"/>
  </form>
  )
}

export default FormLogin
