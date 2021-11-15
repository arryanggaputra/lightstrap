const Button = () => {
  return (
    <>
      <div className="flex gap-2">
        <button type="button" className="btn btn-primary active">
          Primary
        </button>
        <button type="button" className="btn btn-secondary active">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>{' '}
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>
        <button type="button" className="btn btn-link">
          Link
        </button>
      </div>

      <div className="flex gap-2">
        <button type="button" disabled className="btn btn-primary">
          Primary
        </button>
        <button type="button" disabled className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" disabled className="btn btn-success">
          Success
        </button>
        <button type="button" disabled className="btn btn-danger">
          Danger
        </button>
        <button type="button" disabled className="btn btn-warning">
          Warning
        </button>
        <button type="button" disabled className="btn btn-info">
          Info
        </button>
        <button type="button" disabled className="btn btn-light">
          Light
        </button>
        <button type="button" disabled className="btn btn-dark">
          Dark
        </button>
        <button type="button" disabled className="btn btn-link">
          Link
        </button>
      </div>
      <div className="flex gap-2">
        <button type="button" className="btn btn-outline-primary">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-outline-success">
          Success
        </button>
        <button type="button" className="btn btn-outline-danger">
          Danger
        </button>
        <button type="button" className="btn btn-outline-warning">
          Warning
        </button>
        <button type="button" className="btn btn-outline-info">
          Info
        </button>
        <button type="button" className="btn btn-outline-light">
          Light
        </button>
        <button type="button" className="btn btn-outline-dark">
          Dark
        </button>
      </div>

      <div className="flex gap-2">
        <button type="button" className="btn btn-primary btn-lg">
          Primary
        </button>
        <button type="button" className="btn btn-secondary btn-lg">
          Secondary
        </button>
        <button type="button" className="btn btn-success btn-lg">
          Success
        </button>
        <button type="button" className="btn btn-danger btn-lg">
          Danger
        </button>
        <button type="button" className="btn btn-warning btn-lg">
          Warning
        </button>
        <button type="button" className="btn btn-info btn-lg">
          Info
        </button>
        <button type="button" className="btn btn-light btn-lg">
          Light
        </button>
        <button type="button" className="btn btn-dark btn-lg">
          Dark
        </button>
      </div>
    </>
  );
};

export default Button;
