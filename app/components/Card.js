import Image from 'next/image';

export default function Card() {
  return (
    <div className='container-fluid' >
      <div className='row justify-content-center'>

        {/* First Card */}
        <div className='col-md-6 text-center mb-4'>
          <div className="card mx-auto" style={{ borderRadius: '15px', border: '5px solid #d40000', overflow: 'hidden', backgroundColor: '#000000' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image src="/images/Driver/Hulkenberg.png" alt="Lewis Hamilton" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="card-body">
              <p className="card-text" style={{ fontWeight: 'bold', color: 'white' }}>
              รอมานาน!! Hulkenberg <br />
              ขึ้นโพเดี้ยมแรกใน Formula1 สำเร็จ
            </p>
            </div>
          </div>
        </div>


        {/* Second Card */}
        <div className='col-md-6 text-center mb-4'>
          <div className="card mx-auto" style={{ borderRadius: '15px', border: '5px solid #d40000', overflow: 'hidden', backgroundColor: '#000000' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image src="/images/Driver/Verstappen.png" alt="Leclerc" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="card-body">
              <p className="card-text" style={{ fontWeight: 'bold', color: 'white' }}>
              Verstappen พลาดโค้งท้าย <br />
              จบอันดับ 5
            </p>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div className='col-md-6 text-center mb-4'>
          <div className="card mx-auto" style={{ borderRadius: '15px', border: '5px solid #d40000', overflow: 'hidden', backgroundColor: '#000000' }}>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <Image src="/images/Driver/Norris.png" alt="Leclerc" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="card-body">
            <p className="card-text" style={{ fontWeight: 'bold', color: 'white' }}>
              Norris ฟอร์มแรงต่อเนื่อง <br />
              คว้าชัยอีกครั้ง!
            </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}