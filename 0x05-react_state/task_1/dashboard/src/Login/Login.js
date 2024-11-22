import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    }
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.email !== prevState.email || this.state.password !== prevState.password) {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({ enableSubmit: true });
      } else {
        if (this.state.enableSubmit !== false) {
          this.setState({ enableSubmit: false });
        }
      }
    }
  }

  render() {
    return (
      <div className={css(styles.AppBody)}>
        <p>
            Login to access the full dashboard
        </p>
        <form className={css(styles.AppBodyForm, styles.small)} onSubmit={this.handleLoginSubmit}>
            <div>
                <label htmlFor="email" className={css(styles.AppBodyLabel)}>
                    Email
                </label>
                <input type="email" name="email" className={css(styles.AppBodyInput)} value={this.state.email} onChange={this.handleChangeEmail}/>
            </div>
            <div>
                <label htmlFor="password" className={css(styles.AppBodyLabel)}>
                    Password
                </label>
                <input type="password" name="password" className={css(styles.AppBodyInput)} value={this.state.password} onChange={this.handleChangePassword}/>
            </div>
            <input type="submit" className={css(styles.AppBodyButton)} value="OK" disabled={this.state.enableSubmit}/>
        </form>
      </div>
    );
  }
}


const styles = StyleSheet.create({
    AppBody: {
        padding: '36px 24px'
    },
    AppBodyInput: {
        padding: '0 16px 0 8px',
        border: '1px solid #D3D3D3',
        borderRadius: '3px'
    },
    AppBodyLabel: {
        marginRight: '5px'
    },
    AppBodyForm: {
        display: 'flex',
        gap: '1rem'
    },
    AppBodyButton: {
        border: '1px solid #D3D3D3',
        borderRadius: '3px',
        background: 'transparent',
        width: 50
    },
    small: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
        }
    }
})

export default Login;