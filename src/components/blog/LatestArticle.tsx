import {
  ArrowRight,
  Clock3,
  FileText,
} from "lucide-react";

import { useState } from "react";
import BlogSearch from "./BlogSearch";

const articles: any[] = [
//   {
//     category: "Investing",
//     title: "How to Build Wealth Through Long-Term Investing",
//     description:
//       "Learn the principles of long-term investing and creating sustainable wealth.",
//     readTime: "5 min read",
//     image:
//       "/blog/firstCard.jpeg",
//   },
//   {
//     category: "Savings",
//     title: "Creating an Emergency Fund That Actually Works",
//     description:
//       "A practical guide to building financial security step by step.",
//     readTime: "4 min read",
//     image:
//       "/blog/secondCard.jpeg",
//   },
//   {
//     category: "Insurance",
//     title: "Choosing the Right Insurance Coverage",
//     description:
//       "Understand different insurance products and how to evaluate them.",
//     readTime: "6 min read",
//     image:
//       "/blog/thirdCard.jpeg",
//   },
//   {
//     category: "Tax Planning",
//     title: "Smart Tax Saving Strategies for Professionals",
//     description:
//       "Optimize your finances while staying compliant with regulations.",
//     readTime: "7 min read",
//     image:
//       "/blog/fourthCard.jpeg",
//   },
//   {
//     category: "Loans",
//     title: "How to Compare Loans Before Borrowing",
//     description:
//       "Key factors to consider before taking a personal or business loan.",
//     readTime: "5 min read",
//     image:
//       "/blog/fifthCard.jpeg",
//   },
//   {
//     category: "Financial Literacy",
//     title: "Financial Terms Everyone Should Know",
//     description:
//       "Simple explanations of the concepts that shape your financial life.",
//     readTime: "4 min read",
//     image:
//       "/blog/sixthCard.jpeg",
//   },

//   {
//   category: "Investing",
//   title: "Understanding Mutual Funds for Beginners",
//   description:
//     "A beginner-friendly guide to mutual fund investing and wealth creation.",
//   readTime: "5 min read",
//   image: "/blog/firstCard.jpeg",
// },
// {
//   category: "Insurance",
//   title: "Term Insurance vs Life Insurance",
//   description:
//     "Understand the key differences before choosing coverage.",
//   readTime: "6 min read",
//   image: "/blog/secondCard.jpeg",
// },
// {
//   category: "Tax Planning",
//   title: "Best Tax Saving Options Under 80C",
//   description:
//     "Explore deductions and investments that help reduce tax liability.",
//   readTime: "7 min read",
//   image: "/blog/thirdCard.jpeg",
// },
// {
//   category: "Savings",
//   title: "5 Habits That Improve Financial Discipline",
//   description:
//     "Small changes that can make a huge impact on your finances.",
//   readTime: "4 min read",
//   image: "/blog/fourthCard.jpeg",
// },
// {
//   category: "Loans",
//   title: "How Credit Scores Affect Loan Approval",
//   description:
//     "Learn why your credit history matters and how to improve it.",
//   readTime: "5 min read",
//   image: "/blog/fifthCard.jpeg",
// },
// {
//   category: "Financial Literacy",
//   title: "The Difference Between Assets and Liabilities",
//   description:
//     "A simple explanation of two important financial concepts.",
//   readTime: "3 min read",
//   image: "/blog/sixthCard.jpeg",
// },
];

export default function LatestArticles() {
  const [currentPage, setCurrentPage] =
  useState(1);

const articlesPerPage = 6;

const totalPages = Math.ceil(
  articles.length / articlesPerPage
);

const startIndex =
  (currentPage - 1) * articlesPerPage;

const visibleArticles =
  articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );
  return (
    <>
      <section className="LatestArticles">

        <div className="ArticlesHeader">

          <div className="section-label">
            LATEST ARTICLES
          </div>

          <h2 className="section-title">
            Fresh insights.
            <br />
            <span>Practical knowledge.</span>
          </h2>

          <p className="section-subtitle">
            Explore our latest articles, guides and
            financial learning resources.
          </p>

        </div>

        <BlogSearch/>

        {articles.length === 0 ? (
  <div className="NoBlogsState">

    <div className="NoBlogsIcon"><FileText size={70}/></div>

    <h3>No Blogs Yet</h3>

    <p>
      We're working on fresh financial insights and
      educational resources. Check back soon for new
      articles and updates.
    </p>

    <a href="#" className="NoBlogsButton">
      New Blogs Coming Soon
    </a>

  </div>
) : (
  <>
  <div className="ArticlesGrid">

          

          {visibleArticles.map((article, index) => (
            <article
              key={index}
              className="ArticleCard"
            >

              <div className="ArticleImage">

                <img
                  src={article.image}
                  alt={article.title}
                />

                <div className="ArticleCategory">
                  {article.category}
                </div>

              </div>

              <div className="ArticleContent">

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.description}
                </p>

                <div className="ArticleFooter">

                  <div className="ArticleMeta">

                    <Clock3 size={14} />

                    {article.readTime}

                  </div>

                  <a href="/blog-details" className="ArticleButton">

                    Read

                    <ArrowRight size={16} />

                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>
         <div className="PaginationWrapper">

  <button
    className="PaginationButton"
    disabled={currentPage === 1}
    onClick={() =>
      setCurrentPage(currentPage - 1)
    }
  >
    Previous
  </button>

  <div className="PaginationNumbers">

    {[...Array(totalPages)].map(
      (_, index) => (
        <button
          key={index}
          className={`PageNumber ${
            currentPage === index + 1
              ? "active"
              : ""
          }`}
          onClick={() =>
            setCurrentPage(index + 1)
          }
        >
          {index + 1}
        </button>
      )
    )}

  </div>

  <button
    className="PaginationButton"
    disabled={
      currentPage === totalPages
    }
    onClick={() =>
      setCurrentPage(currentPage + 1)
    }
  >
    Next
  </button>

</div>
</>
)}

        
       

      </section>

      <style>{`

      .LatestArticles{
        max-width:1280px;
        margin:auto;
        padding:0 24px 140px;
      }

      .ArticlesHeader{
        text-align:center;
        max-width:850px;
        margin:0 auto 70px;
      }

      .ArticlesGrid{
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:24px;
      }

      .ArticleCard{
        background:#fff;
        border:1px solid #ECEFF3;
        border-radius:28px;
        overflow:hidden;
        transition:.3s ease;
      }

      .ArticleCard:hover{
        transform:translateY(-8px);

        border-color:
        var(--color-accent-lime);

        box-shadow:
        0 20px 50px rgba(11,59,54,.08);
      }

      .ArticleImage{
        position:relative;
        height:220px;
      }

      .ArticleImage img{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
      }

      .ArticleCategory{
        position:absolute;
        top:16px;
        left:16px;

        background:
        rgba(11,59,54,.9);

        color:white;

        padding:8px 12px;

        border-radius:999px;

        font-size:11px;
        font-weight:700;
      }

      .ArticleContent{
        padding:24px;
        
      }

      .ArticleContent h3{
        font-family: "Geist-Bold";
        letter-spacing:1px;
        margin:0 0 14px;
        font-size:24px;
        line-height:1.15;
        font-weight:800;
        color:#111;
      }

      .ArticleContent p{
        margin:0;
        color:#667085;
        line-height:1.6;
        font-weight:500;
        letter-spacing:-1px;
      }

      .ArticleFooter{
        margin-top:24px;

        display:flex;
        align-items:center;
        justify-content:space-between;
      }

      .ArticleMeta{
      font-family: "Geist-SemiBold"; 
          letter-spacing:1px; 
        display:flex;
        align-items:center;
        gap:8px;

        color:#667085;
        font-size:13px;
      }

      .ArticleButton{
      font-family: "Geist-Bold";
          letter-spacing:1px;
        border:none;
        background:none;

        display:flex;
        align-items:center;
        gap:6px;

        color:var(--color-dark-green);

        font-weight:700;

        cursor:pointer;
      }

      .PaginationWrapper{
  margin-top:60px;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:16px;
}

.PaginationNumbers{
  display:flex;
  gap:10px;
}

.PageNumber{
  width:46px;
  height:46px;

  border-radius:14px;

  border:1px solid #ECEFF3;

  background:white;

  font-weight:700;

  cursor:pointer;

  transition:.25s ease;
}

.PageNumber:hover{
  border-color:
  var(--color-accent-lime);
}

.PageNumber.active{
  background:
  var(--color-dark-green);

  color:white;

  border-color:
  var(--color-dark-green);
}

.PaginationButton{
font-family: "Geist-Bold";
          letter-spacing:1px;
  height:46px;

  padding:0 18px;

  border-radius:14px;

  border:1px solid #ECEFF3;

  background:white;

  font-weight:700;

  cursor:pointer;

  transition:.25s ease;
}

.PaginationButton:hover:not(:disabled){
  border-color:
  var(--color-accent-lime);
}

.PaginationButton:disabled{
  opacity:.45;
  cursor:not-allowed;
}

.NoBlogsState{
  max-width:700px;
  margin:60px auto;
  padding:80px 40px;
  text-align:center;
  background: #fff;
border: 1px solid #edf1f3;
box-shadow: 0 24px 60px rgba(0,0,0,.06);
border-radius: 32px;

}

.NoBlogsIcon{
width:88px;
  height:88px;
  margin:0 auto 24px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:24px;

  background:var(--color-accent-lime);
  
  color: var(--color-dark-green)
}

.NoBlogsState h3{
  font-family:"Geist-Bold";
  font-size:38px;
  margin:0 0 16px;
  color:#111;
}

.NoBlogsState p{
  max-width:500px;
  margin:0 auto 30px;

  color:#667085;

  line-height:1.6;
  font-size:16px;
}

.NoBlogsButton{
  display:inline-flex;
  align-items:center;
  justify-content:center;

  height:54px;
  padding:0 26px;

  border-radius:16px;

  text-decoration:none;

  background:
  var(--color-dark-green);

  color:white;

  font-family:"Geist-Bold";
  letter-spacing:1px;

  transition:.25s ease;
}

.NoBlogsButton:hover{
  transform:translateY(-2px);
}




      @media(max-width:1100px){

        .ArticlesGrid{
          grid-template-columns:repeat(2,1fr);
        }

      }

      @media(max-width:768px){

        .LatestArticles{
          padding:0 20px 90px;
        }

        .ArticlesHeader{
          margin-bottom:40px;
        }

        .ArticlesGrid{
          grid-template-columns:1fr;
          gap:18px;
        }

        .ArticleImage{
          height:200px;
        }

        .ArticleContent{
          padding:20px;
        }

        .ArticleContent h3{
          font-size:22px;
        }

        .PaginationWrapper{
    flex-wrap:wrap;
    gap:12px;
    margin-top:40px;
  }

  .PageNumber{
    width:42px;
    height:42px;
  }

  
  .NoBlogsState{
    padding:50px 24px;
  }

  .NoBlogsState h3{
    font-size:30px;
  }

  .NoBlogsIcon{
    font-size:56px;
  }

  

      }

      `}</style>

    </>
  );
}