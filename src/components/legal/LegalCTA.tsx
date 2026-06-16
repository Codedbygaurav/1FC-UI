import { Mail } from "lucide-react";
import React from "react";

export default function LegalCTA({
  title = "Your financial privacy matters.",
  description = "If you have questions about how 1FC handles your information, contact us and we'll help you clearly.",
  label="Need Help?"
}) {
  return (
    <>
      <section className="privacyCtaPVC">
        <div className="privacyContainerPVC">
          <div className="privacyCtaBoxPVC">
            <div>
              <div className="privacyCtaLabelPVC">{label}</div>

              <h2 className="privacyCtaTitlePVC">
                {title}
              </h2>

              <p className="privacyCtaTextPVC">
                {description}
              </p>
            </div>

            <button
              className="privacyCtaButtonPVC">
              <Mail size={18} />
              Contact 1FC
            </button>
          </div>
        </div>
      </section>

      <style>{`.privacyCtaPVC{
  padding: 120px 0;
}

.privacyContainerPVC{
  width:100%;
  max-width:1080px;
  margin:0 auto;
  padding:0 24px;
}

.privacyCtaBoxPVC{
  position:relative;
  overflow:hidden;

  background:var(--color-dark-green);

  border-radius:32px;

  padding:60px;

  display:grid;
  grid-template-columns:1fr auto;
  gap:40px;

  align-items:center;

  color:#fff;

  min-height:320px;

  box-shadow:
    0 20px 60px rgba(11,59,54,.15);
}

.privacyCtaBoxPVC::before{
  content:"";
  position:absolute;
  right:-120px;
  top:-120px;

  width:320px;
  height:320px;

  border-radius:50%;

  background:
    rgba(220,235,99,.08);
}

.privacyCtaBoxPVC::after{
  content:"";
  position:absolute;
  right:60px;
  bottom:-120px;

  width:220px;
  height:220px;

  border-radius:50%;

  background:
    rgba(220,235,99,.05);
}

.privacyCtaLabelPVC{
  color:var(--color-accent-lime);

  font-size:11px;
  font-weight:800;

  letter-spacing:.16em;
  text-transform:uppercase;

  margin-bottom:18px;
}

.privacyCtaTitlePVC{
font-family:"Geist-Bold";
      letter-spacing:1px;
  font-size:40px;

  line-height:.92;


  font-weight:900;

  margin:0 0 18px;
}

.privacyCtaTextPVC{
  color:rgba(255,255,255,.75);

  font-size:16px;

  line-height:1.9;

  max-width:540px;

  margin:0;
}

.privacyCtaButtonPVC{
font-family:"Geist-Bold";
      letter-spacing:1px;

  border:none;

  background:var(--color-accent-lime);

  color:var(--color-dark-green);

  padding:18px 28px;

  border-radius:16px;

  font-size:15px;
  font-weight:800;

  cursor:pointer;

  white-space:nowrap;

  display:flex;
  align-items:center;
  gap:10px;

  transition:.25s ease;

  position:relative;
  z-index:2;
}

.privacyCtaButtonPVC:hover{
  transform:translateY(-3px);
}

@media(max-width:768px){

  .privacyCtaPVC{
    padding:80px 0;
  }

  .privacyContainerPVC{
    padding:0 20px;
  }

  .privacyCtaBoxPVC{
    grid-template-columns:1fr;

    text-align:center;

    padding:40px 24px;

    gap:28px;

    min-height:auto;

    border-radius:24px;
  }

  .privacyCtaLabelPVC{
    margin-bottom:12px;
  }

  .privacyCtaTitlePVC{
    font-size:30px;
    line-height:.95;
  }

  .privacyCtaTextPVC{
    max-width:100%;
    font-size:14px;
    margin:0 auto;
  }

  .privacyCtaButtonPVC{
    width:100%;

    justify-content:center;

    min-height:56px;

    border-radius:14px;
  }

  .privacyCtaBoxPVC::before{
    width:180px;
    height:180px;
    right:-80px;
    top:-80px;
  }

  .privacyCtaBoxPVC::after{
    width:120px;
    height:120px;
    bottom:-60px;
    right:20px;
  }
}`}</style>
    </>
  );
}

      
    
  

