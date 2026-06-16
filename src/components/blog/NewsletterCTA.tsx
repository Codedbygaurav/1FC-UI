import {
  Mail,
  ArrowRight,
} from "lucide-react";

export default function NewsletterCTA() {
  return (
    <>
      <section className="NewsletterCTA">

        <div className="NewsletterContainer">

          <div className="NewsletterContent">

            <div className="NewsletterLabel">
              NEWSLETTER
            </div>

            <h2>
              Stay ahead with
              <br />
              financial insights.
            </h2>

            <p>
              Get practical financial knowledge,
              market updates and expert guidance
              delivered directly to your inbox.
            </p>

            <form className="NewsletterForm">

              <div className="NewsletterInputWrap">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="Enter your email address"
                />

              </div>

              <button type="submit">

                Subscribe

                <ArrowRight size={18} />

              </button>

            </form>

            <div className="NewsletterTrust">

              <span>✓ Weekly Insights</span>

              <span>✓ No Spam</span>

              <span>✓ Unsubscribe Anytime</span>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .NewsletterCTA{
        padding:0 24px 120px;
      }

      .NewsletterContainer{
        max-width:1280px;
        margin:auto;
      }

      .NewsletterContent{
        position:relative;
        overflow:hidden;

        background:
        var(--color-dark-green);

        border-radius:32px;

        padding:70px;

        color:white;

        text-align:center;

        box-shadow:
        0 30px 90px rgba(11,59,54,.15);
      }

      .NewsletterContent::before{
        content:"";

        position:absolute;

        top:-120px;
        right:-120px;

        width:320px;
        height:320px;

        border-radius:50%;

        background:
        rgba(220,235,99,.08);
      }

      .NewsletterContent::after{
        content:"";

        position:absolute;

        bottom:-100px;
        left:-80px;

        width:240px;
        height:240px;

        border-radius:50%;

        background:
        rgba(220,235,99,.05);
      }

      .NewsletterLabel{
        color:
        var(--color-accent-lime);

        font-size:11px;
        font-weight:800;

        letter-spacing:.14em;

        text-transform:uppercase;

        margin-bottom:18px;
      }

      .NewsletterContent h2{
      font-family:"Geist-Bold";
        font-size: clamp(52px, 6vw, 62px);
        font-weight:800;

        line-height:.95;

        letter-spacing:1px;

        margin:0 0 18px;
      }

      .NewsletterContent p{
        max-width:620px;

        margin:0 auto 36px;

        color:
        rgba(255,255,255,.75);

        line-height:1.6;
      }

      .NewsletterForm{
        display:flex;
        justify-content:center;
        gap:12px;

        max-width:720px;
        margin:0 auto;
      }

      .NewsletterInputWrap{
        flex:1;

        height:58px;

        background:
        rgba(255,255,255,.08);

        border:
        1px solid rgba(255,255,255,.08);

        border-radius:16px;

        display:flex;
        align-items:center;

        gap:12px;

        padding:0 18px;
      }

      .NewsletterInputWrap svg{
        color:
        rgba(255,255,255,.6);
      }

      .NewsletterInputWrap input{
        flex:1;

        border:none;
        outline:none;

        background:none;

        color:white;

        font-size:15px;
      }

      .NewsletterInputWrap input::placeholder{
        color:
        rgba(255,255,255,.55);
      }

      .NewsletterForm button{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        height:58px;

        border:none;

        background:
        var(--color-accent-lime);

        color:
        var(--color-dark-green);

        padding:0 24px;

        border-radius:16px;

        font-weight:800;

        cursor:pointer;

        display:flex;
        align-items:center;
        gap:10px;
      }

      .NewsletterTrust{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;

        gap:18px;

        margin-top:28px;

        color:
        rgba(255,255,255,.7);

        font-size:13px;
      }

      @media(max-width:768px){

        .NewsletterCTA{
          padding:0 20px 90px;
        }

        .NewsletterContent{
          padding:40px 24px;
          border-radius:24px;
        }

        .NewsletterContent h2{
          font-size:40px;
        }

        .NewsletterForm{
          flex-direction:column;
        }

        .NewsletterInputWrap input{
          height:40px;
        }
        
        
        

        .NewsletterForm button{
          width:100%;
          justify-content:center;
          height:54px;
        }

        .NewsletterTrust{
          flex-direction:column;
          gap:10px;
        }

      }

      `}</style>

    </>
  );
}