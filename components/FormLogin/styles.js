export const Styles = () => (
  <style jsx>
    {`
    .div__form-wraper {
      font-family: sans-serif;
      text-align: center;
    }
    .div_card-wraper {
      display: block;
      overflow: hidden;
      padding: 0 0 32px;  
      margin: 150px auto 0;
      background-color: white;
      width: 500px;
      font-family: Quicksand, arial, sans-serif;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
      border-radius: 5px;
    }
    header {
      padding-top: 32px;
      padding-bottom: 32px;
    }
    h1 {
      font-size: 24px;
      color: #000;
      font-weight: bold;
      text-align: center;
    }

    .div__error {
      color: #D8000C;
      height: 30px;
      background-color: #FFD2D2; 
      -webkit-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-align-content: center;
      align-content: center;
    }
    .div__card-body {
      padding-right: 32px;
      padding-left: 32px;
    }
  `}
  </style>
)
