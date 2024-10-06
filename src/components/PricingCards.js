import React, { useState, useEffect } from 'react';
import '../style/PricingCards.css'; // Ensure the correct path to your CSS file

const PricingCards = () => {
  const [openSection, setOpenSection] = useState({});

  // Toggle a section's open/close state
  const toggleSection = (id, section) => {
    setOpenSection((prevState) => ({
      ...prevState,
      [`${id}-${section}`]: !prevState[`${id}-${section}`],  // Toggle the specific section
    }));
  };

  // Scroll animation effect using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });

    const cards = document.querySelectorAll('.pricing-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const cards = [
    {
      id: 'standard',
      title: 'STANDARD',
      price: '1850/sft',
      oldPrice: '1999',
      features: ['This package provides you Basic Method of construction of House, which includes Footing, Basement, RCC Elements, Flooring, Door & Windows, Electrical, and Plumbing & Painting.', '3D Elevation & Structural drawings will be additional charges', 'Simple Elevation Work & PopBorder Works are done'],
      details: {
        Design: ['⦿ 2D Floor Plan'],
        Foundation_Structure:['⦿ Earth work excavation: 6’-0” From NGL','⦿ Height of basement: 2’-0” From NGL,','⦿ Typical roof height: 10’-0” From FFL,',"⦿ Head room roof salb: 8’-0” From FFL","⦿ Parpet wall height: 3’-0” From Terrace Level","⦿ Septic Tank: Upto 2,000 Ltrs"],
        Kitchen: ['⦿ Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 35 Per Sq ft','⦿ Main Sink Faucet Upto 1500 & ISI Marked','⦿ Kitchen Sink: Stainless Steel Upto 2000 Rs','⦿ Kitchen Granite Slab: 20 mm Thick Upto 80 Rs per Sq ft'],
        Bathroom: ['⦿ Wall Tiles For 7 Feet Upto 35 Rs Per Sqft','⦿ Sanitary Ware & CP Fitting Upto Rs 8,000 ','⦿ CPVC/PVC: Any ISI brand','⦿ Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower','⦿ All bathroom fittings are white color & basic model in any ISI brand','⦿ PVC WaterProof Doors'],
        Flooring: ['⦿ Living & Dining Flooring: Tiles Upto 45 Rs Per Sq ft','⦿ Room & Kitchen Flooring: Tiles Upto 45 Rs Per Sq ft','⦿ Balcony & Open Area Flooring: Tiles Upto 35 Rs Per Sq ft','⦿ Staircase Flooring: Anti-skid Tiles Upto 35 Rs Per Sq ft','⦿ Parking Tiles: Anti-skid Tiles Upto 35 Rs Per Sq ft'],
        Painting:{"Interior":['⦿ 1 coat of any ISI brand putty','⦿ 2 coats of any ISI brand emulsion paint for the walls (light colours)','⦿ 1 coat of primer and 2 coats of any emulsion paint for the ceiling'],"Exterior":['⦿ 1 coat of any ISI brand primer','⦿ 1 coat of white cement','⦿ 2 coats of any emulsion paint (light colours)']},
        Entance_Gate :['⦿ MS steel gate Upto 15,000 Rs'],
        Materials:['⦿ Cement: Ramco (or) PRIYA','⦿ Steel: FE 550D Upto Rs. 60,000/Ton','⦿ Sand: M-Sand (or) River-Sand','⦿ Red Bricks: 1st & 2nd Quality'],
        Doors_Windows :['⦿ Main Door: TEAK( Upto 12,000/-) Including Fittings','⦿ Internal Door Frame: Neem Wood','⦿ Internal Door: Flush Door upto Rs. 4000/','⦿ UPVC Window: Sliding 2-Track','⦿ Ventilator: UPVC','⦿ TV CupBoard unit: Simple Design UPTO RS. 7000/-'],
        Electrical:['⦿ Wires – Orbit','⦿ Switches – Anchor Siwtches','⦿ Bedroom – 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control 1 AC point 1 fan point and 2 lights point ','⦿ Bathroom- 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror', '⦿ Hall- 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 1 five amps sockets and switches along with cable point for TV connection','⦿ Dining-1 switch box with switches for 1 fan & 1 light','⦿ Pooja- 1 switch box with switch for 1 light','⦿ Kitchen- 1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with one 15 amps socket & switch for mixie/ oven','⦿ Service-1 switch for light, 1 switch box with 15 amps socket & switch for washing machine'],
        Elevation :['⦿ Simple Design Upto Rs.30,000'],
        OverHead_Tank:['⦿ 1 No.s Upto Rs.1500/-']
      } 
    },
    {
      id: 'classic',
      title: 'CLASSIC',
      price: '2199/sft',
      oldPrice: '2299',
      features: ['This package provides you Design of building structure as per Structural Design drawings Prepared by Engineers for Footing, RCC Elements, provides Quality Hi-Tech Materials for Doors, Windows, Electrical, Plumbing & Painting Works','Architectural Plan,3D Elevation & Structural drawings will be done at free of cost','Good Elevation Design'],
      details: {
        Design: ['⦿ 2D Floor Plan', '⦿ 3D Elevation Design'],
        Foundation_Structure:['⦿ Earth work excavation: 6’-0” From NGL(In case of Pile additional amount charged)','⦿ Height of basement: 3’-0” From NGL,','⦿ Typical roof height: 10’-0” From FFL,',"⦿ Head room roof salb: 8’-0” From FFL","⦿ Parpet wall height: 3’-6” From Terrace Level","⦿ Water Tank: Upto 3,000 Ltrs","⦿ Septic Tank: Upto 2,500 Ltrs"],
        Kitchen: ['⦿ Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 45 Per Sqft','⦿ Main Sink Faucet Upto 2000 & ISI Marked','⦿ Kitchen Sink: Stainless Steel Upto 3000 Rs','⦿ Kitchen Granite Slab: 20 mm Thick Upto 100 Rs per Sqft'],
        Bathroom: ['⦿ Wall Tiles For 7 Feet Upto 45 Rs Per Sqft','⦿ Sanitary Ware & CP Fitting Upto Rs 12,000 ','⦿ CPVC/PVC: Ashirwad/Supreme/Astral','⦿ Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower','⦿ All bathroom fittings are white color & basic model in parryware','⦿ PVC WaterProof Doors'],
        Flooring: ['⦿ Living & Dining Flooring: Tiles Upto 50 Rs Per Sq ft','⦿ Room & Kitchen Flooring: Tiles Upto 50 Rs Per Sq ft','⦿ Balcony & Open Area Flooring: Tiles Upto 45 Rs Per Sq ft','⦿ Staircase Flooring: Anti-skid Tiles Upto 45 Rs Per Sq ft','⦿ Parking Tiles: Anti-skid Tiles Upto 45 Rs Per Sq ft'],
        Painting:{"Interior":['⦿ 2 coats of Asian/ Birla putty ','⦿ 1 coat of Asian primer and 2 coats of Asian tractor emulsion paint for the walls (light colours)','⦿ 1 coat of primer and 2 coats of Asian tractor emulsion paint for the ceiling'],"Exterior":['⦿ 1 coat of  Asian primer','⦿ 1 coat of white cement ','⦿ 2 coats of Asian ace emulsion paint']},
        Entance_Gate :['⦿ MS steel  With Wood Board Pattern Upto  20,000 Rs'],
        Materials:['⦿ Cement: Ramco Super Grade (or) UltraTech','⦿ Steel: FE 550D Upto Rs. 60,000/Ton','⦿ Sand: M-Sand (or) River-Sand','⦿ Red Bricks: 1st Quality'],
        Doors_Windows :['⦿ Main Door: TEAK With Polishing ( Upto 16,000/-) Including Fittings','⦿ Internal Door Frame: TEAK Wood','⦿ Internal Door: Flush Door upto Rs. 6000/','⦿ UPVC Window: Sliding 2 & 3-Track','⦿ Ventilator: UPVC with Exahust Fan','⦿ TV CupBoard unit: Moderate Design UPTO RS. 10000/-'],
        Electrical:['⦿ Wires – Finloex','⦿ Switches – GM Siwtches','⦿ Bedroom – 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control 1 AC point 1 fan point and 2 lights point ','⦿ Bathroom- 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror', '⦿ Hall- 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 1 five amps sockets and switches along with cable point for TV connection','⦿ Dining-1 switch box with switches for 1 fan & 1 light','⦿ Pooja- 1 switch box with switch for 1 light','⦿ Kitchen- 1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with one 15 amps socket & switch for mixie/ oven','⦿ Service-1 switch for light, 1 switch box with 15 amps socket & switch for washing machine'],
        Elevation :['⦿ Moderate Design Upto Rs.75,000'],
        OverHead_Tank:['⦿ 2 No.s Rs.2000 Each']
      }
    },
    {
      id: 'premium',
      title: 'PREMIUM',
      price: '2449/sft',
      oldPrice: '2599',
      features: ['Hi-Fi Smart Home. Designofbuildingstructure as per Structural Designdrawings Prepared by Engineers forFooting, RCC Elements, provides QualityHi-Tech Materials for Doors, Windows,Electrical, Plumbing & Painting Works', 'Architectural Plan,3D Elevation &Structural drawings will be done at free ofcost', 'Grand Elevation design as per price chart.Automatic Door Lock, Automatic Light onoff setup and CCTV Camera connections'],
      details: {
        Design: ['⦿ 2D Floor Plan', '⦿ 3D Elevation Design', '⦿ Structural Designing'],
        Foundation_Structure:['⦿ Earth work excavation: As per Soil Report(In case of Pile additionalamount charged)','⦿ Height of basement: 3’-0” From NGL,','⦿ Typical roof height: 11-0” From FFL,',"⦿ Head room roof salb: 8’-0” From FFL","⦿ Parpet wall height: 3’-6” From Terrace Level","⦿ Water Tank: Upto 6,000 Ltrs","⦿ Septic Tank: Upto 3,500 Ltrs"],
        Kitchen: ['⦿ Ceramic Wall Tiles 2 Feet Above Kitchen Slab Upto 55 Per Sqft','⦿ Main Sink Faucet Upto 2500 & ISI Marked','⦿ Kitchen Sink: Stainless Steel Upto 4000 Rs','⦿ Kitchen Granite Slab: 20 mm Thick Upto 120 Rs per Sqft'],
        Bathroom: ['⦿ Wall Tiles For 7 Feet Upto 55 Rs Per Sqft','⦿ Sanitary Ware & CP Fitting Upto Rs 18,000 ','⦿ CPVC/PVC: Ashirwad/Supreme/Astral','⦿ Bathroom Accessories: EWC, Health Faucet, Wash Basin, 2 in 1 Wall Mixer, Overhead Shower','⦿ All bathroom fittings are white color & basic model in jaquar','⦿ ABS WaterProof Doors'],
        Flooring: ['⦿ Living & Dining Flooring: Tiles Upto 120 Rs Per Sq ft','⦿ Room & Kitchen Flooring: Tiles Upto 120 Rs Per Sq ft','⦿ Balcony & Open Area Flooring: Tiles Upto 55 Rs Per Sq ft','⦿ Staircase Flooring: Anti-skid Tiles Upto 55 Rs Per Sq ft','⦿ Parking Tiles: Anti-skid Tiles Upto 55 Rs Per Sq ft'],
        Painting:{"Interior":['⦿ 2 coats of Asian/ Birla putty ','⦿ 1 coat of Asian primer and 2 coats of Asian tractor emulsion paint for the walls (light colours)','⦿ 1 coat of primer and 2 coats of Asian tractor emulsion paint for the ceiling'],"Exterior":['⦿ 1 coat of weatherproof primer','⦿ 1 coat of white cement ','⦿ 2 coats of Asian ace emulsion paint']},
        Entance_Gate :['⦿ SS steel gate With WoodBoard Pattern Upto 30,000 Rs'],
        Materials:['⦿ Cement: Coromandel (or) UltraTech','⦿ Steel: FE 550D Upto Rs. 60,000/Ton','⦿ Sand: M-Sand (or) River-Sand','⦿ Red Bricks: 1st Quality'],
        Doors_Windows :['⦿ Main Door: TEAK(OR) RED WithPolishing( Upto25,000/-) IncludingFittings & Automatic DoorLock Sensor','⦿ Internal Door Frame: TEAK or RED Wood','⦿ Internal Door: Flush Door upto Rs. 7000/','⦿ UPVC Window: Sliding 3-Track','⦿ Ventilator: UPVC with Exahust Fan','⦿ TV CupBoard unit: Classic Design UPTO RS. 13000/-'],
        Electrical:['⦿ Wires – Finloex','⦿ Switches – Havells Siwtches','⦿ Bedroom – 1 switch box with switches for 1 fan, 2 lights and 1 five amps socket with switch near door and another switch box with same set of switches near bed for two-way control 1 AC point 1 fan point and 2 lights point ','⦿ Bathroom- 1 switch box with 1 switch for light and 1 switch for heater near the door & 15 amps socket for heater. 1 switch box with 1 five amps socket for hair dryer near the mirror', '⦿ Hall- 1 switch box near the door for 2 fans, 2 lights & 1 five amps socket and another switch box with same set of switches near sofa. 1 switch box with 1 five amps sockets and switches along with cable point for TV connection','⦿ Dining-1 switch box with switches for 1 fan & 1 light','⦿ Pooja- 1 switch box with switch for 1 light','⦿ Kitchen- 1 switch box with switch for 2 lights, 1 exhaust fan. 1 switch box with 15 amps socket & switch for refrigerator. 1 switch box with one 15 amps socket & switch for mixie/ oven','⦿ Service-1 switch for light, 1 switch box with 15 amps socket & switch for washing machine'],
        Elevation :['⦿ Moderate Design Upto Rs.1,00,000'],
        OverHead_Tank:['⦿ 3 No.s Rs.2000 Each']
      }
    }
  ];

  return (
    <div className="pricing-container">
      {cards.map((card) => (
        <div key={card.id} className="pricing-card">
          <div className="card-header">
            <h2>{card.title}</h2>
            <p>price may vary depending on no. of floors</p>
            <h3><span className="old-price">₹{card.oldPrice}</span> ₹{card.price}</h3>
          </div>
          <div className="card-body">
            <ul className="feature-list">
              {card.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>

            {/* Collapsible Sections */}
            {Object.keys(card.details).map((section, index) => (
              <div key={index} className="collapsible-section">
                <div className="collapsible-header" onClick={() => toggleSection(card.id, section)}>
                  <span>{section.replace(/_/g, ' ')}</span> {/* Replacing underscores with spaces */}
                  <span>{openSection[`${card.id}-${section}`] ? '-' : '+'}</span>
                </div>

                {/* Render collapsible content if section is open */}
                {openSection[`${card.id}-${section}`] && (
                  Array.isArray(card.details[section]) ? (
                    <ul className="collapsible-content">
                      {card.details[section].map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    Object.keys(card.details[section]).map((subSection, subIndex) => (
                      <div key={subIndex}>
                        <strong>{subSection}:</strong>
                        <ul className="collapsible-content">
                          {card.details[section][subSection].map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingCards;




