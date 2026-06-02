import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
} from "lucide-react";


export default function ContactFormSection() {
  return (
    <>
      <section className="contactFormCF">
        <div className="contactFormContainerCF">
          <div className="contactFormCardCF">
            <div className="section-label">
              SEND A MESSAGE
            </div>

            <h2 className="contactFormTitleCF">
              Tell us how we can
              <span> help.</span>
            </h2>

            <p className="contactFormDescCF">
              Fill out the form below and our team will
              get back to you as soon as possible.
            </p>

            <form className="contactFormFieldsCF">
              <div className="contactFormGridCF">
                <div className="fieldCF">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="fieldCF">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="contactFormGridCF">
  <div className="fieldCF">
    <label>Phone Number</label>
    <input
      type="tel"
      placeholder="+91 98765 43210"
    />
  </div>

  <div className="fieldCF">
    <label>Product Interested In</label>

    <select className="selectFieldCF">
      <option>Select a product</option>
      <option>Personal Loan</option>
      <option>Home Loan</option>
      <option>Business Loan</option>
      <option>Loan Against Property</option>
      <option>Credit Card</option>
      <option>Insurance</option>
    </select>
  </div>
</div>

<div className="fieldCF">
  <label>Message</label>
  <textarea
    rows={4}
    placeholder="Tell us about your requirements..."
  />
</div>


              <button
                type="submit"
                className="contactSubmitBtnCF"
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </form>
          </div>

          <div className="contactInfoPanelCF">
            <div className="contactInfoHeaderCF">
              <h3>Contact Information</h3>
              <p>
                Reach us through any of the channels below.
              </p>
            </div>

            <div className="contactInfoListCF">
              <div className="infoItemCF">
                <div className="infoIconCF">
                  <Phone size={20} />
                </div>

                <div>
                  <span>Phone</span>
                  <h4>+91 98765 43210</h4>
                </div>
              </div>

              <div className="infoItemCF">
                <div className="infoIconCF">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <h4>hello@yourcompany.com</h4>
                </div>
              </div>

              <div className="infoItemCF">
                <div className="infoIconCF">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Office</span>
                  <h4>New Delhi, India</h4>
                </div>
              </div>

              <div className="infoItemCF">
                <div className="infoIconCF">
                  <Clock3 size={20} />
                </div>

                <div>
                  <span>Hours</span>
                  <h4>Mon - Sat • 9 AM - 7 PM</h4>
                </div>
              </div>
            </div>

            <div className="responseCardCF">
              <span>Average Response Time</span>
              <h2>&lt; 24 Hours</h2>
            </div>

            
          </div>
        </div>
      </section>

      <style>{`
.contactFormCF{
  background:var(--color-bg-ivory);
  padding:0 24px 60px;
}

.contactFormContainerCF{
  max-width:1280px;
  margin:0 auto;
  display:grid;
  grid-template-columns:1.15fr .85fr;
  gap:24px;
  align-items:stretch;
}

.contactFormCardCF{
  background:white;
  border:1px solid var(--color-border);
  border-radius:32px;
  padding:32px;
  display:flex;
  flex-direction:column;
  height:100%;
}

.contactFormTitleCF{
  font-size:clamp(34px,4vw,56px);
  line-height:.95;
  letter-spacing:-0.05em;
  font-weight:850;
  color:#111;
  margin-bottom:12px;
}

.contactFormTitleCF span{
  font-style:italic;
  font-family:"DM Serif Display",serif;
  font-weight:400;
  color:#0B3B36;
}

.contactFormDescCF{
  color:var(--color-muted);
  margin-bottom:24px;
  line-height:1.6;
  font-size:15px;
}

.contactFormFieldsCF{
  flex:1;
  display:flex;
  flex-direction:column;
  gap:16px;
}

.contactFormGridCF{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
}

.fieldCF{
  display:flex;
  flex-direction:column;
}

.fieldCF label{
  margin-bottom:6px;
  font-size:14px;
  font-weight:600;
  color:var(--color-text-primary);
}

.fieldCF input,
.fieldCF textarea,
.selectFieldCF{
  width:100%;
  border:1px solid var(--color-border);
  background:var(--color-soft-neutral);
  border-radius:14px;
  font-size:15px;
  outline:none;
  transition:.3s;
  font-family:var(--font-main);
}

.fieldCF input,
.selectFieldCF{
  height:56px;
  padding:0 16px;
}

.fieldCF textarea{
  min-height:100px;
  padding:16px;
  resize:none;
}

.fieldCF input:focus,
.fieldCF textarea:focus,
.selectFieldCF:focus{
  border-color:var(--color-secondary-green);
  box-shadow:0 0 0 3px rgba(23,76,69,.08);
}

.selectFieldCF{
  cursor:pointer;
  appearance:none;
  -webkit-appearance:none;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%230B3B36' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
  background-repeat:no-repeat;
  background-position:right 16px center;
  padding-right:42px;
}

.contactSubmitBtnCF{
  margin-top:auto;
  height:56px;
  border:none;
  border-radius:16px;
  background:var(--color-dark-green);
  color:white;
  font-weight:700;
  font-size:16px;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  cursor:pointer;
  transition:.3s;
}

.contactSubmitBtnCF:hover{
  transform:translateY(-2px);
}

.contactInfoPanelCF{
  background:linear-gradient(
    135deg,
    var(--color-dark-green),
    var(--color-secondary-green)
  );
  border-radius:32px;
  padding:32px;
  color:white;
  display:flex;
  flex-direction:column;
  height:100%;
}

.contactInfoHeaderCF h3{
  font-size:2rem;
  font-weight:700;
  margin-bottom:10px;
}

.contactInfoHeaderCF p{
  color:rgba(255,255,255,.75);
  margin-bottom:24px;
  line-height:1.6;
}

.contactInfoListCF{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.infoItemCF{
  display:flex;
  align-items:center;
  gap:14px;
  padding:16px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.08);
  border-radius:18px;
}

.infoIconCF{
  width:56px;
  height:56px;
  flex-shrink:0;
  border-radius:14px;
  background:rgba(220,235,99,.15);
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--color-accent-lime);
}

.infoItemCF span{
  font-size:12px;
  opacity:.75;
}

.infoItemCF h4{
  margin-top:4px;
  font-size:1rem;
  line-height:1.35;
}

.responseCardCF{
  margin-top:15px;
  background:var(--color-accent-lime);
  color:var(--color-dark-green);
  border-radius:22px;
  padding:20px;
}

.responseCardCF span{
  font-size:12px;
  opacity:.75;
}

.responseCardCF h2{
  margin-top:8px;
  font-size:2rem;
  font-weight:800;
  line-height:1;
}

/* ---------- Tablet ---------- */

@media(max-width:992px){

  .contactFormContainerCF{
    grid-template-columns:1fr;
    gap:18px;
  }

  .contactFormCardCF,
  .contactInfoPanelCF{
    height:auto;
    padding:24px;
  }

  .responseCardCF{
    margin-top:16px;
  }
}

/* ---------- Mobile ---------- */

@media(max-width:768px){

  .contactFormCF{
    padding:0 16px 40px;
  }

  .contactFormContainerCF{
    gap:16px;
  }

  .contactFormCardCF,
  .contactInfoPanelCF{
    padding:18px;
    border-radius:20px;
  }

  .contactFormGridCF{
    grid-template-columns:1fr;
    gap:12px;
  }

  .contactFormTitleCF{
    font-size:2rem;
    line-height:1;
    margin-bottom:8px;
  }

  .contactFormDescCF{
    font-size:14px;
    margin-bottom:16px;
    line-height:1.6;
  }

  .contactFormFieldsCF{
    gap:12px;
  }

  .fieldCF label{
    font-size:13px;
    margin-bottom:4px;
  }

  .fieldCF input,
  .selectFieldCF{
    height:48px;
    font-size:14px;
  }

  .fieldCF textarea{
    min-height:90px;
    padding:14px;
    font-size:14px;
  }

  .contactSubmitBtnCF{
    height:50px;
    font-size:15px;
  }

  .contactInfoHeaderCF h3{
    font-size:1.5rem;
    margin-bottom:6px;
  }

  .contactInfoHeaderCF p{
    font-size:13px;
    margin-bottom:16px;
  }

  .contactInfoListCF{
    gap:8px;
  }

  .infoItemCF{
    padding:12px;
    gap:10px;
    border-radius:14px;
  }

  .infoIconCF{
    width:42px;
    height:42px;
    border-radius:10px;
  }

  .infoItemCF h4{
    font-size:.9rem;
  }

  .responseCardCF{
    margin-top:12px;
    padding:14px;
    border-radius:16px;
  }

  .responseCardCF h2{
    font-size:1.4rem;
    margin-top:4px;
  }
}

/* ---------- Small Mobile ---------- */

@media(max-width:480px){

  .contactFormCF{
    padding:0 12px 32px;
  }

  .contactFormCardCF,
  .contactInfoPanelCF{
    padding:16px;
  }

  .contactFormTitleCF{
    font-size:1.75rem;
  }

  .contactFormDescCF{
    font-size:13px;
  }

  .fieldCF input,
  .selectFieldCF{
    height:46px;
  }

  .fieldCF textarea{
    min-height:80px;
  }

  .contactSubmitBtnCF{
    height:48px;
    font-size:14px;
  }

  .infoIconCF{
    width:38px;
    height:38px;
  }

  .responseCardCF h2{
    font-size:1.25rem;
  }
}
`}</style>
    </>
  )
}


