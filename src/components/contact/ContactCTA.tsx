
import { ArrowRight, Calendar, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <>
      <section className="contactCtaSectionCT">
        <div className="contactCtaContainerCT">
          <div className="contactCtaContentCT">
            <div className="contactCtaBadgeCT">
              LET'S START THE CONVERSATION
            </div>

            <h2 className="contactCtaTitleCT">
              Financial clarity starts
              
              with a <span>conversation.</span>
            </h2>

            <p className="contactCtaDescCT">
              Whether you're seeking financial guidance,
              exploring partnership opportunities, or simply
              have a question, our team is ready to help.
            </p>

            <div className="contactCtaActionsCT">
              <button className="contactCtaPrimaryCT">
                Book a Demo
                <ArrowRight size={18} />
              </button>

              <button className="contactCtaSecondaryCT">
                <Phone size={18} />
                Contact Sales
              </button>
            </div>

            <div className="contactCtaStatsCT">
              <div className="statCT">
                <h3>24h</h3>
                <span>Average Response</span>
              </div>

              <div className="statCT">
                <h3>98%</h3>
                <span>Client Satisfaction</span>
              </div>

              <div className="statCT">
                <h3>500+</h3>
                <span>Successful Consultations</span>
              </div>
            </div>
          </div>

          <div className="contactCtaVisualCT">
            <div className="floatingCardCT cardOneCT">
              <Calendar size={18} />
              <span>Consultation Booked</span>
            </div>

            <div className="floatingCardCT cardTwoCT">
              <span>Response Time</span>
              <strong>&lt; 24 Hours</strong>
            </div>

            
            <img
              src="/mascotHalf.png"
              alt="Mascot"
              className="contactMascotCT"
            />
          </div>
        </div>
      </section>

      <style>{`
.contactCtaSectionCT{
  background:var(--color-bg-ivory);
  padding:0 24px 90px;
}

.contactCtaContainerCT{
  max-width:1280px;
  margin:0 auto;
  background:linear-gradient(
    135deg,
    var(--color-dark-green),
    var(--color-secondary-green)
  );
  border-radius:36px;
  padding:56px;
  position:relative;
  overflow:hidden;
  display:grid;
  grid-template-columns:1.15fr .85fr;
  gap:24px;
  align-items:center;
}

.contactCtaContainerCT::before{
  content:"";
  position:absolute;
  width:520px;
  height:520px;
  border-radius:50%;
  background:rgba(220,235,99,.05);
  right:-220px;
  top:-220px;
}

.contactCtaBadgeCT{
font-family:"Geist-SemiBold";
        letter-spacing:1px;
  display:inline-block;
  padding:8px 14px;
  border-radius:999px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.08);
  color:var(--color-accent-lime);
  font-size:12px;
  margin-bottom:20px;
}

.contactCtaTitleCT{
font-family:"Geist-Bold";
        letter-spacing:1px;
  color:white;
  font-size:clamp(2.8rem,4.8vw,4.8rem);
  line-height:.95;

  margin-bottom:18px;
}

.contactCtaTitleCT span{
  font-style:italic;
  font-weight:400;
  color:var(--color-accent-lime);
}

.contactCtaDescCT{
  max-width:560px;
  color:rgba(255,255,255,.75);
  line-height:1.55;
  margin-bottom:28px;
}

.contactCtaActionsCT{
font-family:"Geist-Bold";
        letter-spacing:1px;
  display:flex;
  gap:12px;
  flex-wrap:wrap;
  margin-bottom:32px;
}

.contactCtaPrimaryCT{
  height:56px;
  padding:0 24px;
  border:none;
  border-radius:14px;
  background:var(--color-accent-lime);
  color:var(--color-dark-green);
  font-weight:700;
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  transition:.3s ease;
}

.contactCtaPrimaryCT:hover{
  transform:translateY(-2px);
}

.contactCtaSecondaryCT{
  height:56px;
  padding:0 24px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,.12);
  background:rgba(255,255,255,.08);
  color:white;
  font-weight:600;
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
  transition:.3s ease;
}

.contactCtaSecondaryCT:hover{
  transform:translateY(-2px);
}

.contactCtaStatsCT{
  display:flex;
  gap:28px;
  flex-wrap:wrap;
}

.statCT h3{
  color:var(--color-accent-lime);
  font-size:1.7rem;
  margin-bottom:4px;
}

.statCT span{
  color:rgba(255,255,255,.7);
  font-size:13px;
}

.contactCtaVisualCT{
  position:relative;
  min-height:300px;
}

.contactMascotCT{
  position:absolute;
  bottom:-170px;
  right:-10px;
  height:600px;
  object-fit:contain;
  z-index:2;
}

.floatingCardCT{
  position:absolute;
  background:white;
  border-radius:18px;
  padding:16px 18px;
  box-shadow:0 16px 35px rgba(0,0,0,.12);
  z-index:3;
}

.cardOneCT{
  top:40px;
  left:20px;
  display:flex;
  align-items:center;
  gap:10px;
}

.cardTwoCT{
  bottom:60px;
  left:0;
  display:flex;
  flex-direction:column;
  gap:4px;
}

.cardTwoCT span{
  color:var(--color-muted);
  font-size:12px;
}

.cardTwoCT strong{
  color:var(--color-dark-green);
  font-size:1.2rem;
}

/* ---------- Large Tablet ---------- */

@media(max-width:1100px){

  .contactCtaContainerCT{
    grid-template-columns:1fr;
    padding:40px 32px;
    gap:24px;
  }
    .contactCtaVisualCT{
  min-height:auto;
}

 

  .contactMascotCT{
  display:none;
   
  }

  .floatingCardCT{
    display:none;
  }
}

/* ---------- Tablet ---------- */

@media(max-width:768px){

  .contactCtaSectionCT{
    padding:0 16px 60px;
  }

  .contactCtaContainerCT{
    padding:28px 22px;
    border-radius:28px;
    gap:20px;
  }

  .contactCtaBadgeCT{
    margin-bottom:16px;
  }

  .contactCtaTitleCT{
    font-size:2rem;
    line-height:1;
    margin-bottom:14px;
  }

  .contactCtaDescCT{
    font-size:14px;
    line-height:1.65;
    margin-bottom:22px;
  }

  .contactCtaActionsCT{
    flex-direction:column;
    gap:10px;
    margin-bottom:24px;
  }

  .contactCtaPrimaryCT,
  .contactCtaSecondaryCT{
    width:100%;
    height:52px;
    justify-content:center;
  }

  .contactCtaStatsCT{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:12px;
  }

  .statCT{
    text-align:center;
  }

  .statCT h3{
    font-size:1.4rem;
  }

  .statCT span{
    font-size:11px;
  }

  

  
}


`}</style>
    </>
  );
};
