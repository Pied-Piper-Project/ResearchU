import { Link, withRouter } from 'react-router-dom';

function Pages(props){
  return(
    <div className = 'Pages'>
      <nav class="navbar navbar-expand navbar-light bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/ResearchU">
            ResearchU Navigation Bar
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/ResearchU" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/ResearchU">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/AboutUs" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/AboutUs">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Pages)