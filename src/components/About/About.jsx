import './About.css'

export default function About() {
  return (
    <div id='about' className="row">
      <div className="col-md-6 text-center">
        <iframe id='aboutFrame' src="https://lottie.host/embed/cd24663c-6292-428b-8395-f2190963084c/NodrLdD5FM.json"></iframe>
      </div>
      <div id='aboutText' className="col-md-4">
        <h1 className="text-center">Thanks For Stopping By!</h1>
        <p className='text-center'>Thank you for visiting my ToDo application! This application was made using many packages such as <a href="https://reactrouter.com/en/main" target='_blank' rel='noreferrer'>React Router Dom</a> and <a href="https://axios-http.com/docs/intro" target='_blank' rel='noreferrer'>Axios</a> for API handling. This application communicates with a <a href="https://learn.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver16" target='_blank' rel='noreferrer'>T-SQL</a> database via an <a href="https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-8.0&tabs=visual-studio" target='_blank' rel='noreferrer'>ASP.NET Core 6 Web API</a>. <a href="https://firebase.google.com/docs" target='_blank' rel='noreferrer'>Google Firebase</a> is used for authorization, schema validation and form handling using <a href="https://www.npmjs.com/package/yup" target='_blank' rel='noreferrer'>Yup</a> and <a href="https://www.npmjs.com/package/formik" target='_blank' rel='noreferrer'>Formik</a>. View the source code on GitHub!
        </p>
      </div>
    </div>
  )
}