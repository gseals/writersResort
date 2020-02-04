// import React from 'react';
// import { Link } from 'react-router-dom';
// import usersData from '../../../helpers/data/usersData';
// import './Achievements.scss';

// class Achievements extends React.Component {
//   state = {
//     userData: {},
//     dataPresent: false,
//   }

//   getUsersDataComponent = () => {
//     const { userPath } = this.props.match.params;
//     usersData.getUserDataByUid(userPath)
//       .then((userData) => this.setState({ userData }))
//       .catch((err) => console.error('error in get users'));
//   }

//   componentDidMount() {
//     this.getUsersDataComponent();
//   }

//   render() {
//     const { userPath } = this.props.match.params;
//     const { dataPresent, userData } = this.state;

//     return (
//       <div className="Achievements">
//         <h1 className="textColor marginTop">User Profile</h1>
//         { dataPresent
//           ? <Link className="btn btn-primary" to={`/achievements/${userPath}/form`}>Create Experiences</Link>
//           : <p>{userData.experience}Test</p>
//         }
//       </div>
//     );
//   }
// }

// export default Achievements;
