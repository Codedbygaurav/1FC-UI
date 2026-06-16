import {
  Search,
} from "lucide-react";

const categories = [
  "All",
  "Investing",
  "Savings",
  "Insurance",
  "Tax Planning",
  "Loans",
  "Financial Literacy",
];

export default function BlogSearch() {
  return (
    <>
      <section className="BlogSearch">

        <div className="BlogSearchContainer">

          <div className="SearchWrapper">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search articles, guides and financial topics..."
            />

          </div>

          <div className="CategoryFilters">

            {categories.map((category) => (
              <button
                key={category}
                className={`CategoryChip ${
                  category === "All"
                    ? "active"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}

          </div>

        </div>

      </section>

      <style>{`

      .BlogSearch{
        padding:0 24px 80px;
      }

      .BlogSearchContainer{
        max-width:1000px;
        margin:auto;
      }

      .SearchWrapper{
        height:68px;

        background:white;

        border:1px solid #ECEFF3;

        border-radius:22px;

        padding:0 24px;

        display:flex;
        align-items:center;
        gap:14px;

        transition:.25s ease;

        box-shadow:
        0 10px 30px rgba(11,59,54,.04);
      }

      .SearchWrapper:focus-within{
        border-color:
        var(--color-accent-lime);

        box-shadow:
        0 15px 40px rgba(11,59,54,.08);
      }

      .SearchWrapper svg{
        color:#667085;
        flex-shrink:0;
      }

      .SearchWrapper input{
        flex:1;
        font-family:"Geist-SemiBold";
      letter-spacing:1px;

        border:none;
        outline:none;

        background:none;

        font-size:15px;

        color:#111;
      }

      .SearchWrapper input::placeholder{
        color:#98A2B3;
      }

      .CategoryFilters{
      font-family:"Geist-Bold";
      letter-spacing:1px;
        display:flex;
        flex-wrap:wrap;
        gap:12px;

        justify-content:center;

        margin-top:24px;
      }

      .CategoryChip{
        height:42px;

        border:none;

        padding:0 18px;

        border-radius:999px;

        background:white;

        border:1px solid #ECEFF3;

        color:#344054;

        font-size:13px;
        font-weight:700;

        cursor:pointer;

        transition:.25s ease;
      }

      .CategoryChip:hover{
        border-color:
        var(--color-accent-lime);
      }

      .CategoryChip.active{
        background:
        var(--color-dark-green);

        color:white;

        border-color:
        var(--color-dark-green);
      }

      @media(max-width:768px){

        .BlogSearch{
          padding:0 20px 50px;
        }

        .SearchWrapper{
          height:58px;
          border-radius:18px;
          padding:0 18px;
        }

        .CategoryFilters{
          justify-content:flex-start;
          overflow-x:auto;

          flex-wrap:nowrap;

          padding-bottom:4px;

          scrollbar-width:none;
        }

        .CategoryFilters::-webkit-scrollbar{
          display:none;
        }

        .CategoryChip{
          flex-shrink:0;
        }

      }

      `}</style>

    </>
  );
}