import React from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";




export default function ContactMethods() {
    const methods = [
  {
    icon: <Phone size={28} />,
    title: "Call Us",
    description:
      "Speak directly with our financial advisors for personalized guidance.",
    value: "022-35386600",
  },
  {
    icon: <Mail size={28} />,
    title: "Email Us",
    description:
      "Send detailed questions and receive expert assistance from our team.",
    value: "customersupport@1fcode.com",
  },
  {
    icon: <MessageCircle size={28} />,
    title: "Live Chat",
    description:
      "Get quick answers and real-time support whenever you need help.",
    value: "Available Mon–Sat",
  },
];
  return (
    <>
      <section className="contactMethodsCM">
        <div className="contactMethodsContainerCM">
          <div className="contactMethodsHeaderCM">
            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2 className="contactMethodsTitleCM">
              Choose the way that
              <span> works for you.</span>
            </h2>
          </div>

          <div className="contactMethodsGridCM">
            {methods.map((method, index) => (
              <div
                key={index}
                className="contactMethodCardCM"
              >
                <div className="contactMethodIconCM">
                  {method.icon}
                </div>

                <h3>{method.title}</h3>

                <p>{method.description}</p>

                <div className="contactMethodFooterCM">
                  <span>{method.value}</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
.contactMethodsCM{
  background:var(--color-bg-ivory);
  padding:40px 24px 80px;
}

.contactMethodsContainerCM{
  max-width:1280px;
  margin:0 auto;
}

.contactMethodsHeaderCM{
  text-align:center;
  margin-bottom:40px;
}

.contactMethodsTitleCM{
  font-size:clamp(38px,5vw,64px);
  line-height:.95;
  letter-spacing:-0.06em;
  font-weight:850;
  color:#111;
  margin-bottom:18px;
}

.contactMethodsTitleCM span{
  font-style:italic;
  font-family:"DM Serif Display",serif;
  font-weight:400;
  color:var(--color-dark-green);
}

.contactMethodsGridCM{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:24px;
}

.contactMethodCardCM{
  position:relative;
  display:flex;
  flex-direction:column;
  height:100%;
  padding:28px;
  border-radius:24px;
  background:linear-gradient(
    180deg,
    rgba(255,255,255,.96),
    rgba(248,248,246,.92)
  );
  border:1px solid rgba(255,255,255,.7);
  backdrop-filter:blur(12px);
  box-shadow:0 16px 40px rgba(0,0,0,.04);
  transition:all .3s ease;
}

.contactMethodCardCM:hover{
  transform:translateY(-4px);
  box-shadow:0 26px 60px rgba(0,0,0,.06);
}

.contactMethodIconCM{
  width:58px;
  height:58px;
  border-radius:16px;
  background:rgba(11,59,54,.08);
  display:flex;
  align-items:center;
  justify-content:center;
  color:var(--color-dark-green);
  margin-bottom:20px;
}

.contactMethodCardCM h3{
  font-size:1.45rem;
  font-weight:700;
  margin-bottom:12px;
  color:var(--color-text-primary);
}

.contactMethodCardCM p{
  color:var(--color-muted);
  line-height:1.7;
  margin-bottom:24px;
  flex:1;
}

.contactMethodFooterCM{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  padding-top:18px;
  border-top:1px solid var(--color-border);
  font-weight:600;
  color:var(--color-dark-green);
}

.contactMethodFooterCM span{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

/* Large Tablets */

@media (max-width:1024px){

  .contactMethodsGridCM{
    grid-template-columns:repeat(2,1fr);
  }

  .contactMethodCardCM:last-child{
    grid-column:span 2;
  }
}

/* Tablets */

@media (max-width:768px){

  .contactMethodsCM{
    padding:32px 20px 60px;
  }

  .contactMethodsHeaderCM{
    margin-bottom:32px;
  }

  .contactMethodsTitleCM{
    font-size:2.5rem;
  }

  .contactMethodsGridCM{
    gap:16px;
  }

  .contactMethodCardCM{
    padding:22px;
    border-radius:20px;
  }

  .contactMethodIconCM{
    width:52px;
    height:52px;
  }

  .contactMethodCardCM h3{
    font-size:1.25rem;
  }
}

/* Mobile */

@media (max-width:640px){

  .contactMethodsGridCM{
    grid-template-columns:1fr;
  }

  .contactMethodCardCM:last-child{
    grid-column:auto;
  }

  .contactMethodsTitleCM{
    font-size:2.1rem;
  }

  .contactMethodCardCM{
    padding:20px;
  }

  .contactMethodFooterCM{
    flex-wrap:wrap;
  }
}

/* Small Mobile */

@media (max-width:480px){

  .contactMethodsCM{
    padding:24px 16px 50px;
  }

  .contactMethodsTitleCM{
    font-size:1.85rem;
    line-height:1;
  }

  .contactMethodCardCM{
    padding:18px;
  }

  .contactMethodIconCM{
    width:48px;
    height:48px;
  }

  .contactMethodCardCM h3{
    font-size:1.15rem;
  }

  .contactMethodCardCM p{
    font-size:14px;
    line-height:1.6;
  }

  .contactMethodFooterCM{
    font-size:14px;
  }
}
`}</style>
    </>
  )
}


