    import Link from 'next/link'
 
    export default function NotFound() {
      return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <h2>Not Found</h2>
          <p>Could not find the requested resource.</p>
          <Link href="/" style={{color: 'blue'}}>Return Home</Link>
        </div>
      )
    }
    