import { connect } from "react-redux";
import { Formik, Form } from "formik";
import { emailValidation, passwordValidation } from "./util/yupValidations";
import FiledTextRequired from "./util/FiledTextRequired";
import * as Yup from "yup";
import * as userActions from "../redux_components/actions/userActions";
class FormLogin extends React.Component {

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
            Login
          </button>
        </div>
      </Form>
    );
  }
  render() {
    return (
      <React.Fragment>
        <Formik
          initialValues={this.intialValues}
          validationSchema={this.validationSchema}
          onSubmit={fields => {
            this.props.LoginUser(fields.email, fields.password);
          }}
          render={this.handlerRender}
        />
        {this.props.error ? <div>{this.props.error}</div> : null}
      </React.Fragment>
    );
  }
}
const mapStateToProps = reducers => reducers.userReducers;
export default connect(
  mapStateToProps,
  userActions
)(FormLogin);
