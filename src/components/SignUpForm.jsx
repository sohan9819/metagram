export const SignUpForm = () => {
  return (
    <form action='' class='form'>
      <label for='username' class='auth-label'>
        Username<span class='imp-mark'>*</span>
        <br />
        <input
          type='text'
          id='username'
          class='auth-input'
          placeholder='Email Address'
          required
        />
      </label>
      <label for='email' class='auth-label'>
        Email<span class='imp-mark'>*</span>
        <br />
        <input
          type='email'
          id='email'
          class='auth-input'
          placeholder='Email Address'
          required
        />
      </label>
      <label for='password' class='auth-label'>
        Password<span class='imp-mark'>*</span>
        <br />
        <input
          type='password'
          id='password'
          class='auth-input'
          placeholder='Password'
          required
        />
      </label>
      <label for='conf-password' class='auth-label'>
        Confirm Password<span class='imp-mark'>*</span>
        <br />
        <input
          type='password'
          id='conf-password'
          class='auth-input'
          placeholder='Password'
          required
        />
      </label>
      <button class='btn btn-primary' type='submit'>
        SignUp
      </button>
    </form>
  );
};
