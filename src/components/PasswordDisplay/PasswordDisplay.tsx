import './PasswordDisplay.scss';

export default function PasswordDisplay({
  password,
  showPassword,
}: {
  password: string;
  showPassword: boolean;
}) {
  function handleCopy() {
    navigator.clipboard.writeText(password);
  }

  return (
    <article className="container">
      <div className="input-sign">
        <label className="input-sign-text">PLAIN SIGHT</label>
      </div>
      <input
        defaultValue={password}
        className="input-text-field"
        type={showPassword ? 'text' : 'password'}
        disabled
      />
      <img
        onClick={handleCopy}
        className="container__copy-icon"
        src="/assets/copy-icon.svg"
        alt="Copy"
      />
    </article>
  );
}
