import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function RentReceipt() {
  const [tenantName, setTenantName] =
    useState("abc");

  const [landlordName, setLandlordName] =
    useState("xyz");

  const [rent, setRent] =
    useState("25000");

  const [address, setAddress] =
    useState(
      "New Delhi, India"
    );

  const [month, setMonth] =
    useState("June 2026");

  return (
    <div className="sipPage">

      <div className="sipWrapper">

        <Link
          to="/tools"
          className="sipBack"
        >
          <ArrowLeft size={16} />
          Back to Tools
        </Link>

        <div className="sipHeader">

          <div className="sipBadge">
            TAX DOCUMENT
          </div>

          <h1 className="sipTitle">
            Rent Receipt Generator
          </h1>

          <p className="sipDescription">
            Generate HRA-compliant rent
            receipts instantly for salary
            and tax filing purposes.
          </p>

        </div>

        <div className="sipCard">

          <div className="sipFormGrid">

            <div className="sipField">

              <label>
                Tenant Name
              </label>

              <input
                type="text"
                value={tenantName}
                onChange={(e) =>
                  setTenantName(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="sipField">

              <label>
                Landlord Name
              </label>

              <input
                type="text"
                value={landlordName}
                onChange={(e) =>
                  setLandlordName(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="sipField">

              <label>
                Monthly Rent
              </label>

              <input
                type="number"
                value={rent}
                onChange={(e) =>
                  setRent(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="sipField">

              <label>
                Receipt Month
              </label>

              <input
                type="text"
                value={month}
                onChange={(e) =>
                  setMonth(
                    e.target.value
                  )
                }
              />

            </div>

          </div>

          <div className="sipField full">

            <label>
              Property Address
            </label>

            <textarea
              value={address}
              onChange={(e) =>
                setAddress(
                  e.target.value
                )
              }
            />

          </div>

          <button
            className="receiptButton"
          >
            Generate Receipt
          </button>

          <div className="sipDivider" />

          <div className="receiptPreview">

            <div className="previewLabel">
              Receipt Preview
            </div>

            <h3>
              RENT RECEIPT
            </h3>

            <p>
              Received ₹{rent} from{" "}
              <strong>
                {tenantName}
              </strong>{" "}
              towards rent payment for{" "}
              <strong>
                {month}
              </strong>.
            </p>

            <p>
              Landlord:
              <strong>
                {" "}
                {landlordName}
              </strong>
            </p>

            <p>
              Property:
              <strong>
                {" "}
                {address}
              </strong>
            </p>

          </div>

        </div>

      </div>

      <style>{`

      .sipPage{
        min-height:100vh;
        background:#FAFAF7;
        padding:120px 20px 40px;
      }

      .sipWrapper{
        max-width:820px;
        margin:0 auto;
      }

      .sipBack{
        display:inline-flex;
        align-items:center;
        gap:8px;
        text-decoration:none;
        color:#0B3B36;
        font-size:14px;
        font-weight:600;
        margin-bottom:28px;
      }

      .sipHeader{
        margin-bottom:28px;
      }

      .sipBadge{
        display:inline-flex;
        padding:8px 14px;
        border-radius:999px;
        background:#F1F3EE;
        color:#0B3B36;
        font-size:10px;
        font-weight:700;
        letter-spacing:.12em;
        text-transform:uppercase;
        margin-bottom:18px;
      }

      .sipTitle{
        font-size:clamp(42px,5vw,64px);
        line-height:.95;
        letter-spacing:-0.05em;
        font-weight:850;
        color:#111;
        margin-bottom:16px;
      }

      .sipDescription{
        font-size:15px;
        line-height:1.8;
        color:#5E5E5E;
      }

      .sipCard{
        background:#FFF;
        border-radius:32px;
        border:1px solid rgba(0,0,0,.06);
        padding:28px;
      }

      .sipFormGrid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:16px;
      }

      .sipField{
        display:flex;
        flex-direction:column;
      }

      .sipField label{
        font-size:13px;
        font-weight:600;
        margin-bottom:8px;
        color:#5E5E5E;
      }

      .sipField input,
      .sipField textarea{
        border:1px solid rgba(0,0,0,.08);
        background:#F8F9F5;
        border-radius:16px;
        padding:14px;
        font-size:14px;
        outline:none;
      }

      .sipField textarea{
        resize:none;
        height:100px;
      }

      .full{
        margin-top:16px;
      }

      .receiptButton{
        width:100%;
        margin-top:20px;
        border:none;
        border-radius:18px;
        padding:16px;
        background:#0B3B36;
        color:#FAFAF7;
        font-weight:700;
        cursor:pointer;
      }

      .sipDivider{
        height:1px;
        background:rgba(0,0,0,.06);
        margin:28px 0;
      }

      .receiptPreview{
        background:#F6F7F3;
        border-radius:22px;
        padding:24px;
      }

      .previewLabel{
        font-size:11px;
        font-weight:700;
        letter-spacing:.12em;
        color:#0B3B36;
        margin-bottom:12px;
      }

      .receiptPreview h3{
        margin-bottom:18px;
        color:#111;
      }

      .receiptPreview p{
        line-height:1.8;
        color:#5E5E5E;
        margin-bottom:10px;
      }

      @media(max-width:768px){

        .sipPage{
          padding:110px 16px 30px;
        }

        .sipCard{
          padding:20px;
          border-radius:24px;
        }

        .sipFormGrid{
          grid-template-columns:1fr;
        }

        .sipTitle{
          font-size:44px;
        }

      }

      `}</style>

    </div>
  );
}