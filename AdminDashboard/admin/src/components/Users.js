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
            <li>
              <input placeholder="Search..." className="search-input" type="search" />
              <input
                type="submit"
                id="search-btn-1"
                className="fa"
                defaultValue=""
              />
            </li>
            <li>
              <a href="#">
                <i className="fa"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa"></i> Users
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa"></i> Add Update
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa"></i> Create Admin
              </a>
            </li>
            <span onclick="size()">
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
            </span>
            <li>
              <a href="#">
                <i className="fa"></i> Server Info
              </a>
            </li>
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
                <div className="site-info">
                  {users.map(u =>
                    //  <div key={u.id} style={{display:this.state.deleteButton?'block':'none'}} id={u.id}>
                    //      <h6 >{u.name}</h6> 
                    //      <button onClick={() => this.handleButton(u.id)} className="btn btn-danger">Delete</button> 
                    //  </div>


                    <div class='all-quick-info' key={u.id} style={{ display: this.state.deleteButton ? 'inline' : 'none' }} id={u.id}>

                      {/* <div class='info-icon'><i class="fa">&#xf0c0;</i></div> */}

                      <div class='text-right'>
                        {/* <div class='info-numbers'><span>15</span></div> */}
                        <div>{u.name}</div>
                      </div>

                      <div class='info-box-footer'>

                        <button  onClick={() => this.handleButton(u.id)}><a href='#' class='user-href'><span class="pull-left">Delete</span>

                          <span class='pull-right'><i class="fa-solid fa-trash"></i></span></a>
                          </button>

                      </div>

                    </div>
                  )}
                  {/* <div className="all-quick-info">
              <div className="info-icon">
                <i className="fa"></i>
              </div>
              <div className="text-right">
                <div className="info-numbers">
                  <span>15</span>
                </div>
                <div>Users</div>
              </div>
              <div className="info-box-footer">
                <a href="#" className="user-href">
                  <span className="pull-left">View Details</span>
                  <span className="pull-right">
                    <i className="fa fa-arrow-circle-right" />
                  </span>
                </a>
              </div>
            </div> */}
                  {/* <div
                    style={{ background: "#f0ad4e", borderColor: "#f0ad4e" }}
                    className="all-quick-info"
                  >
                    <div className="info-icon">
                      {" "}
                      <i className="fa"></i>
                    </div>
                    <div className="text-right">
                      <div className="info-numbers">
                        <span>2</span>
                      </div>
                      <div>Total Admins!</div>
                    </div>
                    <div className="info-box-footer">
                      <a href="#" className="user-href" style={{ color: "#f0ad4e" }}>
                        <span className="pull-left">View Details</span>
                        <span className="pull-right">
                          <i className="fa fa-arrow-circle-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    style={{ background: "#5cb85c", borderColor: "#5cb85c" }}
                    className="all-quick-info"
                  >
                    <div className="info-icon">
                      {" "}
                      <i className="fa fa-envelope" />
                    </div>
                    <div className="text-right">
                      <div className="info-numbers">
                        <span>1,330</span>
                      </div>
                      <div>Total Messages!</div>
                    </div>
                    <div className="info-box-footer">
                      <a href="#" className="user-href" style={{ color: "#5cb85c" }}>
                        <span className="pull-left">View Details</span>
                        <span className="pull-right">
                          <i className="fa fa-arrow-circle-right" />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    style={{ background: "#ff5256", borderColor: "#ff5256" }}
                    className="all-quick-info"
                  >
                    <div className="info-icon">
                      <i className="fa"></i>
                    </div>
                    <div className="text-right">
                      <div className="info-numbers">
                        <span>15</span>
                      </div>
                      <div>Banned Users!</div>
                    </div>
                    <div className="info-box-footer">
                      <a href="#" className="user-href" style={{ color: "#ff5256" }}>
                        <span className="pull-left">View Details</span>
                        <span className="pull-right">
                          <i className="fa fa-arrow-circle-right" />
                        </span>
                      </a>
                    </div>
                  </div> */}
                </div>
                {/* <div className="message-server">
                  <span className="warn-message">
                    <i className="fa"></i>
                  </span>
                  <span className="warn-message">dashboard warning message!</span>
                  <span className="right warn-message">
                    <i className="fa fa-times" />
                  </span>
                </div> */}
                {/* <div className="new-content-holder">
                  <div className="notifications">
                    <div className="notify-header">
                      <h2>
                        <i className="fa"></i> Notifications
                      </h2>
                      <div className="action-holder">
                        <i className="fa"></i> <i className="fa"></i>
                      </div>
                    </div>
                    <div className="notify-box">
                      <div className="sender">
                        <img
                          src="https://tinyurl.com/wnje5dc"
                          width={30}
                          align="middle"
                        />
                        <a href="#" title="view message">
                          <span>FLUFFERS</span>
                        </a>
                        <span className="mail-icon">
                          <i className="fa fa-envelope" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="notifications">
                    <div className="notify-header">
                      <h2>
                        <i className="fa"></i> Bandwidth
                      </h2>
                      <div className="action-holder">
                        <i className="fa"></i> <i className="fa"></i>
                      </div>
                    </div>
                    <div className="notify-box">
                      <div className="sender">
                        <span>
                          <i style={{ fontSize: 24, color: "grey" }} className="fa">
                            
                          </i>
                        </span>
                        <span style={{ color: "grey", fontSize: 10 }}>
                          192.168.0.0 / 20.4 GIB
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="notifications">
                    <div className="notify-header">
                      <h2>
                        <i className="fa"></i> Server Info
                      </h2>
                      <div className="action-holder">
                        <i className="fa"></i> <i className="fa"></i>
                      </div>
                    </div>
                    <div className="notify-box">
                      <span>60% / 70°F / 3.3 Ghz</span>
                      <span style={{ float: "right" }}>CPU</span>
                      <div className="fluff-grey">
                        <div
                          className="fluff-blue"
                          style={{ height: 25, width: "60%" }}
                        ></div>
                      </div>
                      <span>25% / 4GB / (16GB)</span>
                      <span style={{ float: "right" }}>MEM</span>
                      <div className="fluff-grey">
                        <div
                          className="fluff-blue"
                          style={{ height: 25, width: "25%" }}
                        ></div>
                      </div>
                      <span>70% / 100GB / 50GB</span>
                      <span style={{ float: "right" }}>BANDWIDTH</span>
                      <div className="fluff-grey">
                        <div
                          className="fluff-blue"
                          style={{ height: 25, width: "70%" }}
                        ></div>
                      </div>
                      <span>10% / 100GB / 1TB</span>
                      <span style={{ float: "right" }}>DISC SPACE</span>
                      <div className="fluff-grey">
                        <div
                          className="fluff-blue"
                          style={{ height: 25, width: "10%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="newest-members">
                  <div
                    style={{ width: "-webkit-fill-available" }}
                    className="notifications"
                  >
                    <div className="notify-header">
                      <h2>
                        <i className="fa"></i> Newest Members
                      </h2>
                      <div className="action-holder">
                        <i className="fa"></i> <i className="fa"></i>
                      </div>
                    </div>
                    <div className="notify-box">
                      <table id="customers">
                        <tbody>
                          <tr>
                            <th>Joined</th>
                            <th>Username</th>
                            <th>IP</th>
                            <th>Banned</th>
                            <th>Actions</th>
                          </tr>
                          <tr>
                            <td>1 week ago</td>
                            <td>FLUFFERS</td>
                            <td>127.0.0.1</td>
                            <td>NO</td>
                            <td>
                              <a className="actions-btns" href="#">
                                <i className="fa"></i>
                              </a>
                              <a className="actions-btns2" href="#">
                                <i className="fa fa-times" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="view-all-members">
                        <span className="view-all-btn1">
                          <a href="#">View All Members</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
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