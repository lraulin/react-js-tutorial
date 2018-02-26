import React from 'react';

export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      textAlign: "center"
    }
    return (<footer class="container-fluid site-footer">
      <div class="row">
        <div class="col-md-4">
          <h3>Contact Me</h3>
          <p>
            <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>(443) 968-2392</p>
          <p>
            <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
            <a href="mailto:leeraulin@gmail.com">leeraulin@gmail.com</a>
          </p>
          {/* <script
            type="text/javascript"
            src="https://secure.skypeassets.com/i/scom/js/skype-uri.js"></script> */}
          <div id="SkypeButton_Call_lee.raulin_1">
            {/* <script type="text/javascript">
              Skype.ui({"name": "call", "element": "SkypeButton_Call_lee.raulin_1", "participants": ["lee.raulin"], "imageColor": "white",});
            </script> */}
          </div>
        </div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h3>Social Media</h3>
          <ul>
            <li>
              <a class="button social" href="https://www.linkedin.com/in/leeraulin/">
                <i class="fa fa-fw fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a class="button social" href="https://github.com/lraulin">
                <i class="fa fa-fw fa-github"></i>
              </a>
            </li>
            <li>
              <a class="button social" href="https://twitter.com/leeraulin">
                <i class="fa fa-fw fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    );
  }
}
