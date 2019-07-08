// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import userActions from '../../services/user/reducer';
import ReactPaginate from 'react-paginate';

class Home extends Component {

  state = {
    pageNum: 0,
    pageCount: 0
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getListUsers(1);
  }

  handlePageClick = data => {
    let selected = data.selected + 1;
    this.setState({ pageNum: selected }, () => {
      this.props.getListUsers(this.state.pageNum)
    });
  };

  render() {
    const { listUser } = this.props
    console.log(listUser)
    return (
      <div className="Home">
        <div className="container">
          <div className="section-category ">
            <div className="category-title d-flex align-items-center mb-4">
              <div>
                <img src="http://tecnoauto.com.ec/wp-content/uploads/2018/10/img-user.png" />
                <span>Usuarios</span>
              </div>
            </div>
            {listUser &&
              <>
                <div className="list-group my-4">
                  {listUser.data.map((user, i) => {
                    return <a key={i} onClick={()=>this.props.history.push(`/user/${user.id}`)} className="list-group-item list-group-item-action d-flex w-100 ">
                      <img src={user.avatar} />
                      <div className="d-flex flex-column mr-auto">
                        <h5 className="mb-1">{`${user.first_name} ${user.last_name}`}</h5>
                        <small>{user.email}</small>
                      </div>
                      <button className="btn btn-primary" >Ver</button>
                    </a>
                  })}
                </div>
                <ReactPaginate
                  previousLabel={'anterior'}
                  previousClassName={'previous'}
                  nextClassName={'next'}
                  nextLabel={'siguiente'}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageClassName={'page'}
                  pageCount={listUser.total_pages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
              </>
            }

          </div>
        </div>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  listUser: state.user.listUser
})

const mapDispatchToProps = {
  getListUsers: userActions.getListUsers
}

export default connect(mapStateToProps, mapDispatchToProps)((Home));
