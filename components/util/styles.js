export const Styles = () => (
  <style jsx>
    {`
    fieldset {
      position: relative;
      padding: 0;
      margin: 0;
      border: 0;
    
      & + & {
        margin-top: 24px;
      }
    
      &:nth-last-of-type(2) {
        margin-top: 32px;
      }
    
      &:last-of-type {
        text-align: center;
      }
    }
    .field_form {
      margin-top: 20px; 
      padding: 7px 0;
      width: 100%;
      font-family: inherit;
      font-size: 14px;
      border-top: 0;
      border-right: 0;
      border-bottom: 1px solid #ddd;
      border-left: 0;
      transition: border-bottom-color 0.25s ease-in;
    
      focus {
        border-bottom-color: #e5195f;
        outline: 0;
      }
    }

    .error_message {
      display: flex;
      font-size: 12px;
      color: red;
    }

  `}
  </style>
)
