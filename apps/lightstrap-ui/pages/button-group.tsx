const Button = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            Left
          </button>
          <button type="button" className="btn btn-primary">
            Middle
          </button>
          <button type="button" className="btn btn-primary">
            Right
          </button>
        </div>

        <div className="btn-group">
          <a href="#" className="btn btn-primary active" aria-current="page">
            Active link
          </a>
          <a href="#" className="btn btn-primary">
            Link
          </a>
          <a href="#" className="btn btn-primary">
            Link
          </a>
        </div>

        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button type="button" className="btn btn-danger">
            Left
          </button>
          <button type="button" className="btn btn-warning">
            Middle
          </button>
          <button type="button" className="btn btn-success">
            Right
          </button>
        </div>

        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button type="button" className="btn btn-outline-primary">
            Left
          </button>
          <button type="button" className="btn btn-outline-primary">
            Middle
          </button>
          <button type="button" className="btn btn-outline-primary">
            Right
          </button>
        </div>

        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-outline-secondary">
            1
          </button>
          <button type="button" className="btn btn-outline-secondary">
            2
          </button>
          <button type="button" className="btn btn-outline-secondary">
            3
          </button>
          <button type="button" className="btn btn-outline-secondary">
            4
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
