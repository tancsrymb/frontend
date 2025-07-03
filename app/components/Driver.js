import Image from 'next/image';

const Card = ({ name, image }) => (
  <div className="card mx-auto" style={{ borderRadius: '15px', border: '5px solid #d40000', overflow: 'hidden', backgroundColor: '#000000' }}>
    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
    </div>
    <div className="card-body">
      <p className="card-text" style={{ fontWeight: 'bold', color: 'white' }}>{name}</p>
    </div>
  </div>
);

export default function Driver() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#000000' }}>
      <div className="row justify-content-center" style={{ backgroundColor: '#000000' }}>

        {/* 20 Drivers */}
        <div className="col-md-3 text-center mb-4">
          <Card name="Oscar Piastri" image="/images/Driver/Piastri.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Lando Norris" image="/images/Driver/Norris.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Charles Leclerc" image="/images/Driver/Leclerc.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Lewis Hamilton" image="/images/Driver/Hamilton.png" />
        </div>

        <div className="col-md-3 text-center mb-4">
          <Card name="George Russell" image="/images/Driver/Russell.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Kimi Antonelli" image="/images/Driver/Antonelli.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Max Verstappen" image="/images/Driver/Verstappen.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Yuki Tsunoda" image="/images/Driver/yuki.png" />
        </div>

        <div className="col-md-3 text-center mb-4">
          <Card name="Alexander Albon" image="/images/Driver/Albon.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Carlos Sainz" image="/images/Driver/Sainz.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Liam Lawson" image="/images/Driver/Lawson.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Isack Hadjar" image="/images/Driver/Hadjar.png" />
        </div>

        <div className="col-md-3 text-center mb-4">
          <Card name="Esteban Ocon" image="/images/Driver/Ocon.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Oliver Bearman" image="/images/Driver/Bearman.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Lance Stroll" image="/images/Driver/Stroll.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Fernando Alonso" image="/images/Driver/Alonso.png" />
        </div>

        <div className="col-md-3 text-center mb-4">
          <Card name="Nico Hulkenberg" image="/images/Driver/Hulkenberg.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Gabriel Bortoleto" image="/images/Driver/Bortoleto.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Pierre Gasly" image="/images/Driver/Gasly.png" />
        </div>
        <div className="col-md-3 text-center mb-4">
          <Card name="Franco Colapinto" image="/images/Driver/Colapinto.png" />
        </div>

      </div>
    </div>
  );
}
