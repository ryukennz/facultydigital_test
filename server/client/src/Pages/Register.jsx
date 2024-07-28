import FormRegister from '../components/LoginRegisterForm/Fragments/FormRegister';
import AuthLayouts from '../components/LoginRegisterForm/Layouts/AuthLayouts';
export default function RegisterPage() {
  return (
    <AuthLayouts title={"Sign up here"}>
      <FormRegister />
    </AuthLayouts>
  );
}
