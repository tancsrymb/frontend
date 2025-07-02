import Image from 'next/image';

export default function Card() {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>

        {/* First Card */}
        <div className='col-md-4 text-center mb-4'>
          <div className="card mx-auto" style={{ width: '18rem' }}>
            <Image src="/images/Card/F11.png" alt="..." width={288} height={180} className="d-block w-100" />
            <div className="card-body">
              <p className="card-text">Ferrari Black</p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className='col-md-4 text-center mb-4'>
          <div className="card mx-auto" style={{ width: '18rem' }}>
            <Image src="/images/Card/F12.png" alt="..." width={288} height={180} className="d-block w-100" />
            <div className="card-body">
              <p className="card-text">Ferrari Red</p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className='col-md-4 text-center mb-4'>
          <div className="card mx-auto" style={{ width: '18rem' }}>
            <Image src="/images/Card/F13.png" alt="..." width={288} height={180} className="d-block w-100" />
            <div className="card-body">
              <p className="card-text">Ferrari Third</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
