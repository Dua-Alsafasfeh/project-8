import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions/userAction'
import '../style/home.css'
import '../style/dash'

class Users extends Component {
  constructor(props) {
    super(props);
    this.state =
      { deleteButton: true };
    this.handleButton = this.handleButton.bind(this)
  }
  componentDidMount() {
    this.props.getUsers()

  }
  handleButton(id) {
    // event.preventDefault();
    document.getElementById(id).style.display = "none";
  }
  render() {
    const { users } = this.props.users
    console.log(this.props.users)

    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="all">
          <div className="admin-header">
            <div className="header-text">
              <h3>Admin Panel 2.0</h3>
              <div className="header-greet">
                <span>
                  <i className="fa"></i> Hello Admin
                </span>
                <a href="" className="logout-btn">
                  <i className="fa"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="admin-sidebar">
            {/* <li>
              <input placeholder="Search..." className="search-input" type="search" />
              <input
                type="submit"
                id="search-btn-1"
                className="fa"
                defaultValue=""
              />
            </li> */}
            <li>
              <a href="#">
                <i className="fa"></i> Dashboard
              </a>
            </li>
            {/* <li>
              <a href="#">
                <i className="fa"></i> Entertainment
              </a>
            </li> */}
            {/* <li>
              <a href="#">
                <i className="fa"></i> Add Update
              </a>
            </li> */}
            {/* <li>
              <a href="#">
                <i className="fa"></i> Create Admin
              </a>
            </li> */}
            {/* <span onclick="size()">
              <li id="all-nav" onclick="myFunction()">
                <a href="#" className="dropdown-btn">
                  <i className="fa"></i> Ban User{" "}
                </a>{" "}
                <i className="fa fa-angle-down" aria-hidden="true" />
                <ul id="nav" className="second-nav-ul">
                  <li className="nav-items">
                    <a href="#">Banned Ips</a>
                  </li>
                </ul>
              </li>
            </span> */}
            {/* <li>
              <a href="#">
                <i className="fa"></i> Server Info
              </a>
            </li> */}
          </div>
          <div className="center-content">
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="all-border">
              <div className="shows-location">
                <div className="location-text">
                  <span className="location">
                    Admin <i className="fa"></i> Dashboard
                  </span>
                </div>
              </div>
              <section>
                <>
                  {/* Card */}
                  <div>
                  {users.map(u =>
                  <div className="card"  key={u.id} style={{ display: this.state.deleteButton ? 'inline' : 'none' }} id={u.id}>
                    {/* Card image */}
                    <div className="view overlay">
                      <img
                        className="card-img w-25"
                        src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
                        alt="Card image cap"
                      />
                      <a href="#!">
                        <div className="mask rgba-white-slight" />
                      </a>
                    </div>
                    {/* Card content */}
                    <div className="card-body">
                      {/* Title */}
                      <h4 className="card-title">Name : {u.name}</h4>
                      <h4 className="card-title">Email : {u.email}</h4>
                      <h4 className="card-title">Phone :{u.phone}</h4>
                      <h4 className="card-title">Website{u.website}</h4>
                      {/* Text */}
                      {/* Button */}
                      <span class='info-box-footer'>
                        <button onClick={() => this.handleButton(u.id)}><a href='#' class='user-href'><span class="pull-left">Delete</span>
                        <span class='pull-right'><i class="fa-solid fa-trash"></i></span></a>
                        </button>
                      </span>
                      {/* <a href="#" className="btn btn-primary">
                        Button
                      </a> */}
                    </div>
                    </div>
                  )}
                  </div>
                  {/* Card */}
                </>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(Users)