import Image from 'next/image';

export default function Card() {
  return (
    <div className='container-fluid' style={{ backgroundColor: '#000000' }} >
      <div className='row justify-content-center' style={{ backgroundColor: '#000000' }}>

        {/* First Card */}
        <div className='col-md-6 text-center mb-4'>
          <div className="card mx-auto" style={{ borderRadius: '15px', border: '5px solid #d40000', overflow: 'hidden', backgroundColor: '#000000' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image src="/images/Driver/Stroll.png" alt="-" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="card-body">
              <p className="card-text" style={{ fontWeight: 'bold', color: 'white' }}>Lance Stroll</p>
            </div>
          </div>
        </div>


        {/* Second Card */}
        <div className='col-md-6 text-center mb-4'>
          <div className="card mx-auto" style={{ borderRadius: '15px', border: '5px solid #d40000', overflow: 'hidden', backgroundColor: '#000000' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image src="/images/Driver/Alonso.png" alt="-" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="card-body">
              <p className="card-text" style={{ fontWeight: 'bold', color: 'white' }}>Fernando Alonso</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
