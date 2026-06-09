export default function ArticleCover() {
  return (
    <>
      <section className="ArticleCover">

        <div className="ArticleCoverContainer">

          <div className="ArticleCoverCard">

            <img
              src="/blog/Featured.jpg"
              alt="Article Cover"
            />

          </div>

        </div>

      </section>

      <style>{`

      .ArticleCover{
        padding:48px 24px 120px;
      }

      .ArticleCoverContainer{
        max-width:1280px;
        margin:auto;
      }

      .ArticleCoverCard{
        overflow:hidden;

        border-radius:32px;

        border:1px solid #ECEFF3;

        box-shadow:
        0 20px 50px rgba(11,59,54,.06);
      }

      .ArticleCoverCard img{
        width:100%;
        height:550px;
        object-fit:cover;
        display:block;
      }

      @media(max-width:1024px){

        .ArticleCoverCard img{
          height:500px;
        }

      }

      @media(max-width:768px){

        .ArticleCover{
          padding:0 20px 90px;
        }

        .ArticleCoverCard{
          border-radius:24px;
        }

        .ArticleCoverCard img{
          height:280px;
        }

      }

      `}</style>
    </>
  );
}