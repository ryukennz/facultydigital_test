import Button from '../Elements/Button'
import DontHaveAnAcc from '../Elements/DontHaveAnAcc'
import Input from '../Elements/Inputs'
function FormRegister() {
  return (
    <form className="space-y-4 md:space-y-6" action="">
    <Input/>
    <Button buttonName="Sign up"/>
    <DontHaveAnAcc dontHaveAcc="Already have an account yet?" signUp="Sign in"/>
  </form>
  )
}

export default FormRegister
