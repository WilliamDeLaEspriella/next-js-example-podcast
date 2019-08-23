import Layout from "../components/Layout";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormLogin from '../components/FormLogin'
export default class extends React.Component {
  static getInitialProps({ req }) {}

  render() {
    return (
      <Layout>
          <FormLogin />

      </Layout>
    );
  }
}
