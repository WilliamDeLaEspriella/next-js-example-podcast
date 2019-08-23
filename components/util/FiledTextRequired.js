import { Field, ErrorMessage } from "formik";
export default class FiledTextRequired extends React.Component {
  render() {
    const { errors, status, touched } = this.props.actions;
    return (
      <div className="form-group">
        <label htmlFor={this.props.name}>{this.props.labelName}</label>
        <Field
          name={this.props.name}
          type={this.props.type}
          className={
            "form-control" +
            (errors[this.props.name] && touched[this.props.name]
              ? " is-invalid"
              : "")
          }
        />
        <ErrorMessage
          name={this.props.name}
          component="div"
          className="invalid-feedback"
        />
      </div>
    );
  }
}
