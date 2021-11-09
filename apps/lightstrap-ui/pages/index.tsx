import Link from 'next/link';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div>
      <Link href="/button">
        <a className="btn btn-primary">Button</a>
      </Link>
      <Link href="/alert">
        <a className="btn btn-primary">alert</a>
      </Link>
    </div>
  );
}

export default Index;
