import React from 'react';
import './Gallery.css';

// Assets papkasidan rasmlarni import qilish
import img1 from '../../../assets/img17.png';
import img2 from '../../../assets/img18.png';
import img3 from '../../../assets/img19.png';
import img4 from '../../../assets/img20.png'; 
import img5 from '../../../assets/img21.png'; // Markaziy rasm
import img6 from '../../../assets/img22.png';
import img7 from '../../../assets/img23.png';
import img8 from '../../../assets/img24.png';
import img9 from '../../../assets/img25.png';

const Gallery = () => {

  return (
    <section className="setup-section">
      <div className="setup-header">
        <span>Share your setup with</span>
        <h2>#FuniroFurniture</h2>
      </div>

      <div className="gallery-grid">
        {/* TEPADAGI 6 TA RASM (1-6) */}
        <div className="img-box item-1"><img src={img1} alt="Setup 1" /></div>
        <div className="img-box item-2"><img src={img2} alt="Setup 2" /></div>
        <div className="img-box item-3"><img src={img3} alt="Setup 3" /></div>
        <div className="img-box item-4"><img src={img4} alt="Setup 4" /></div>
        <div className="img-box item-5"><img src={img5} alt="Main Setup" /></div> {/* Markaziy rasm */}
        <div className="img-box item-6"><img src={img6} alt="Setup 6" /></div>

        {/* PASTDAGI 3 TA RASM (7-9) */}
        <div className="img-box item-7"><img src={img7} alt="Setup 7" /></div>
        <div className="img-box item-8"><img src={img8} alt="Setup 8" /></div>
        <div className="img-box item-9"><img src={img9} alt="Setup 9" /></div>
      </div>
    </section>
  );
};

export default Gallery;
