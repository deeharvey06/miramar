import React from 'react';
import PropTypes from 'prop-types';
import './TeamMember.css';
import EmptyAvatar from '../../assets/empty_avatar.svg';

class TeamMember extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photoUrl: PropTypes.string,
    story: PropTypes.string,
    favoriteColor: PropTypes.string,
    showForm: PropTypes.func,
  };

  static defaultProps = {
    photoUrl: EmptyAvatar,
    story: null,
    favoriteColor: '#3466F2'
  };

  constructor(props) {
    super(props);

    this.state = {
      showButton: props.id === 'new'
    }
  }

  handleClick = () => {
    this.props.showForm();
  }

  renderJoinTeamButton() {
    return (
      <div>
        {this.state.showButton && <button className="btn" onClick={this.handleClick}>Join the team!</button>}
      </div>
    );
  }


  render() {
    return (
      <div className="container">
        <header>
          <div className="avatar-container">
            <img
              className="avatar"
              src={this.props.photoUrl}
              alt={this.props.name}
            />
          </div>
          <h2 className="title">{this.props.title}</h2>
          <h1 className="name">{this.props.name}</h1>
        </header>

        <div className="body">{this.props.story}</div>

        {this.renderJoinTeamButton()}

        <footer style={{ backgroundColor: this.props.favoriteColor }}>
          <div className="full-width-flex-box">
            <div className="one-third-flex-box stat">9.0</div>
            <div className="one-third-flex-box stat bordered">9.0</div>
            <div className="one-third-flex-box stat">9.0</div>
          </div>

          <div className="full-width-flex-box">
            <div className="one-third-flex-box">CANDID</div>
            <div className="one-third-flex-box">LEARNING</div>
            <div className="one-third-flex-box">GRIT</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default TeamMember;
