import { Formik, Form } from "formik";
import { emailValidation, passwordValidation } from "./util/yupValidations";
import FiledTextRequired from "./util/FiledTextRequired";
import * as Yup from "yup";

export default class FormLogin extends React.Component {
  intialValues = {
    email: "",
    password: ""
  };
  validationSchema = Yup.object().shape({
    email: emailValidation,
    password: passwordValidation
  });

  handlerRender(actions) {
    return (
      <Form>
        <FiledTextRequired
          actions={actions}
          name="email"
          labelName="Email"
          type="text"
        />

        <FiledTextRequired
          actions={actions}
          name="password"
          labelName="Password"
          type="password"
        />
        <div className="form-group">
          <button type="submit" className="btn btn-primary mr-2">
            Register
          </button>
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </div>
      </Form>
    );
  }
  render() {
    return (
      <Formik
        initialValues={this.intialValues}
        validationSchema={this.validationSchema}
        onSubmit={fields => {
          return alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={this.handlerRender}
      />
    );
  }
}
