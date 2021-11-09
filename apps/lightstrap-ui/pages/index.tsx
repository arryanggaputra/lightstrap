export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="alert alert-danger">
          <span className="block">Ready to dive in?</span>
          <span className="block">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a href="#" className="btn btn-primary">
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a href="#" className=" btn btn-danger">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
