import Layout from "../components/Layout";
import FormLogin from '../components/FormLogin'
import { Store } from "../redux_components/store";
const Login = ()=> (
      <Store>
        <Layout>
          <FormLogin />
        </Layout>
      </Store>
)

export default Login;