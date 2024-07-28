import FormLogin from '../components/LoginRegisterForm/Fragments/FormLogin';
import AuthLayouts from '../components/LoginRegisterForm/Layouts/AuthLayouts';
export default function LoginPage() {
  return (
    <AuthLayouts title={"Sign in to your account"}>
      <FormLogin />
    </AuthLayouts>
  );
}
