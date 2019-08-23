import Head from "next/head";
export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <title>React + Formik - Form Validation Example</title>
          <link href="//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" />
        </header>
        <div className="jumbotron">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h3>React + Formik - Form Validation</h3>
                    {this.props.children}
                </div>
            </div>
        </div>
    </div>
        
      </div>
    );
  }
}
