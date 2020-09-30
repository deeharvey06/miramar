import React from 'react';
import PropTypes from 'prop-types';
import './TeamMemberForm.css';


class TeamMemberForm extends React.PureComponent {
  static propTypes = {
    addTeamMember: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      story: '',
      favoriteColor: '',
      photoUrl: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTeamMember(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      title: '',
      story: '',
      favoriteColor: '',
      photoUrl: ''
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <div className="form-title">
          <h2>New Team Member</h2>
        </div>

        <div className="form-inputs">
          <div className="inputs">
            <label className="label">First Name</label>
            <input
              className="input"
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </div>

          <div className="inputs">
            <label className="label">Last Name</label>
            <input
              className="input"
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </div>

          <div className="inputs">
            <label className="label">Titles</label>
            <input
              className="input"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className="inputs">
            <label className="label">Favorite Color</label>
            <input
              className="input"
              type="text"
              name="favoriteColor"
              value={this.state.favoriteColor}
              onChange={this.handleChange}
            />
          </div>

          <div className="inputs">
            <label className="label">Photo Url</label>
            <input
              className="input"
              type="text"
              name="photoUrl"
              value={this.state.photoUrl}
              onChange={this.handleChange}
            />
          </div>

          <div className="textarea-section">
            <label className="label">Story</label>
            <textarea
              type="text"
              name="story"
              value={this.state.story}
              onChange={this.handleChange}
            >
            </textarea>
          </div>
        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default TeamMemberForm;