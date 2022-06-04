export const SignInForm = () => {
  return (
    <form action='' class='form'>
      <label for='email' class='auth-label'>
        Email<span class='imp-mark'>*</span>
        <br />
        <input
          type='email'
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
          class='auth-input'
          placeholder='Password'
          required
        />
      </label>
      <button class='btn btn-primary' type='submit'>
        SignIn
      </button>
    </form>
  );
};
