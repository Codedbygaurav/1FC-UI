import {
  Mail,
  ArrowRight,
} from "lucide-react";

export default function ArticleCTA() {
  return (
    <>
      <section className="ArticleCTA">

        <div className="ArticleCTAContainer">

          <div className="ArticleCTAContent">

            <div className="ArticleCTALabel">
              1FC INSIGHTS
            </div>

            <h2>
              Want more
              <br />
              financial insights?
            </h2>

            <p>
              Join thousands of readers receiving
              practical financial guidance, market
              updates and expert insights every week.
            </p>

            <form className="ArticleCTAForm">

              <div className="ArticleCTAInput">

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

            <div className="ArticleCTATrust">

              <span>✓ Weekly Insights</span>

              <span>✓ No Spam</span>

              <span>✓ Unsubscribe Anytime</span>

            </div>

          </div>

        </div>

      </section>

      <style>{`

      .ArticleCTA{
        padding:0 24px 120px;
      }

      .ArticleCTAContainer{
        max-width:1280px;
        margin:auto;
      }

      .ArticleCTAContent{
        position:relative;
        overflow:hidden;

        background:
        var(--color-dark-green);

        border-radius:32px;

        padding:70px;

        text-align:center;

        color:white;

        box-shadow:
        0 30px 90px rgba(11,59,54,.15);
      }

      .ArticleCTAContent::before{
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

      .ArticleCTAContent::after{
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

      .ArticleCTALabel{
        color:
        var(--color-accent-lime);

        font-size:11px;
        font-weight:800;

        letter-spacing:.14em;

        text-transform:uppercase;

        margin-bottom:18px;
      }

      .ArticleCTAContent h2{
        font-size: clamp(52px, 6vw, 62px);
        font-weight:800;

        line-height:.95;

        letter-spacing:-.05em;

        margin:0 0 18px;
      }

      .ArticleCTAContent p{
        max-width:620px;

        margin:0 auto 36px;

        color:
        rgba(255,255,255,.75);

        line-height:1.9;
      }

      .ArticleCTAForm{
        display:flex;
        gap:12px;

        max-width:720px;

        margin:0 auto;
      }

      .ArticleCTAInput{
        flex:1;

        height:58px;

        display:flex;
        align-items:center;
        gap:12px;

        padding:0 18px;

        border-radius:16px;

        background:
        rgba(255,255,255,.08);

        border:
        1px solid rgba(255,255,255,.08);
      }

      .ArticleCTAInput svg{
        color:
        rgba(255,255,255,.6);
      }

      .ArticleCTAInput input{
        flex:1;

        border:none;
        outline:none;

        background:none;

        color:white;

        font-size:15px;
      }

      .ArticleCTAInput input::placeholder{
        color:
        rgba(255,255,255,.55);
      }

      .ArticleCTAForm button{
      font-family:"Geist-Bold";
          letter-spacing: 1px;
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

      .ArticleCTATrust{
        margin-top:28px;

        display:flex;
        justify-content:center;
        flex-wrap:wrap;

        gap:18px;

        color:
        rgba(255,255,255,.7);

        font-size:13px;
      }

      @media(max-width:768px){

        .ArticleCTA{
          padding:0 20px 90px;
        }

        .ArticleCTAContent{
          padding:40px 24px;
          border-radius:24px;
        }

        .ArticleCTAContent h2{
          font-size:40px;
        }

        .ArticleCTAForm{
          flex-direction:column;
        }

        

        .ArticleCTAInput input{
          height:40px;
        }

        .ArticleCTAForm button{
          width:100%;
          height:54px;
          justify-content:center;
        }

        .ArticleCTATrust{
          flex-direction:column;
          gap:10px;
        }

      }

      `}</style>
    </>
  );
}