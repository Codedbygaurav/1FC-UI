import { useState } from "react";
import { ArrowLeft, FileText } from "lucide-react";
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

        <div className="receiptBuilder">

  <div className="receiptForm">

    <div className="sipFormGrid">

      <div className="sipField">
        <label>Tenant Name</label>
        <input
          type="text"
          value={tenantName}
          onChange={(e) =>
            setTenantName(e.target.value)
          }
        />
      </div>

      <div className="sipField">
        <label>Landlord Name</label>
        <input
          type="text"
          value={landlordName}
          onChange={(e) =>
            setLandlordName(e.target.value)
          }
        />
      </div>

      <div className="sipField">
        <label>Monthly Rent</label>
        <input
          type="number"
          value={rent}
          onChange={(e) =>
            setRent(e.target.value)
          }
        />
      </div>

      <div className="sipField">
        <label>Receipt Month</label>
        <input
          type="text"
          value={month}
          onChange={(e) =>
            setMonth(e.target.value)
          }
        />
      </div>

    </div>

    <div className="sipField full">
      <label>Property Address</label>
      <textarea
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />
    </div>

    <button className="receiptButton">
      Download PDF <FileText/>
    </button>

  </div>

  <div className="receiptPreviewCard">

    <div className="receiptPreviewHeader">

      <div className="receiptSectionLabel">
        LIVE PREVIEW
      </div>

      <div className="previewBadge">
        HRA READY
      </div>

    </div>

    <h3 className="receiptTitle">
      Rent Receipt
    </h3>

    <div className="previewBlock">

      <p>
        Received ₹{rent} from
        <strong> {tenantName+" "}</strong>
        towards rent payment for
        <strong> {month}</strong>.
      </p>

      <div className="previewDivider" />

      <p>
        Landlord:
        <strong> {landlordName}</strong>
      </p>

      <p>
        Property:
        <strong> {address}</strong>
      </p>

      <div className="previewSignature">
        <span>Signature of Landlord</span>
        <strong>{landlordName}</strong>
      </div>

    </div>

  </div>

</div>

      </div>

      <style>{`.sipPage{
  min-height:100vh;
  background:#FAFAF7;
  padding:120px 20px 40px;
}

.sipWrapper{
  max-width:1280px;
  margin:0 auto;
}

.sipBack{
font-family: "Geist-Bold";
  letter-spacing: 1px;
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
font-family: "Geist-SemiBold";
  letter-spacing: 1px;
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
  max-width:620px;
  font-size:15px;
  line-height:1.8;
  color:#5E5E5E;
}

/* =========================
   RECEIPT BUILDER
========================= */

.receiptBuilder{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:28px;
  margin-top:32px;
}

.receiptForm{
  background:#fff;
  border:1px solid rgba(0,0,0,.06);
  border-radius:32px;
  padding:28px;
  box-shadow:0 20px 60px rgba(11,59,54,.06);
}

.receiptPreviewCard{
  background:
    linear-gradient(
      180deg,
      #0B3B36,
      #082D29
    );

  color:#FAFAF7;
  border-radius:32px;
  padding:28px;
  position:sticky;
  top:100px;
  align-self:start;
}

.receiptSectionLabel{
  font-size:11px;
  font-weight:700;
  letter-spacing:.12em;
  text-transform:uppercase;
  color:#EAE26A;
}

.previewBadge{
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  border-radius:999px;
  padding:8px 12px;
  font-size:11px;
  font-weight:700;
}

/* =========================
   FORM
========================= */

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
  width:100%;
  box-sizing:border-box;
  border:none;
  background:#F6F7F3;
  border-radius:18px;
  padding:14px 16px;
  font-size:14px;
  outline:none;
  transition:.2s;
}

.sipField input:focus,
.sipField textarea:focus{
  box-shadow:
    0 0 0 2px rgba(11,59,54,.12);
}

.sipField textarea{
  resize:none;
  min-height:120px;
}

.full{
  margin-top:18px;
}

.receiptButton{
display:inline-flex;
justify-content:center;
align-items:center;
gap:10px;
  width:100%;
  margin-top:24px;
  border:none;
  border-radius:18px;
  padding:16px;
  background:
    linear-gradient(
      135deg,
      #0B3B36,
      #174C45
    );

  color:#FAFAF7;
  font-weight:700;
  font-size:15px;
  cursor:pointer;
  transition:.25s;
}

.receiptButton:hover{
  transform:translateY(-2px);
}

/* =========================
   PREVIEW
========================= */

.receiptPreviewHeader{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:24px;
}

.receiptTitle{
  font-size:2rem;
  font-weight:800;
  letter-spacing:-.04em;
  margin-bottom:24px;
}

.previewBlock{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  border-radius:20px;
  padding:22px;
}

.previewBlock p{
  line-height:1.8;
  color:rgba(255,255,255,.82);
  margin-bottom:14px;
}

.previewBlock strong{
  color:#fff;
}

.previewDivider{
  height:1px;
  background:rgba(255,255,255,.08);
  margin:20px 0;
}

.previewSignature{
  margin-top:40px;
}

.previewSignature span{
  display:block;
  opacity:.7;
  margin-bottom:10px;
  font-size:13px;
}

.previewSignature strong{
  font-size:1rem;
  font-weight:700;
}

/* =========================
   TABLET
========================= */

@media (max-width:1024px){

  .receiptBuilder{
    grid-template-columns:1fr;
  }

  .receiptPreviewCard{
    position:static;
  }

}

/* =========================
   MOBILE
========================= */

@media (max-width:768px){

  .sipPage{
    padding:110px 16px 30px;
  }

  .sipTitle{
    font-size:44px;
  }

  .receiptBuilder{
    gap:18px;
  }

  .sipFormGrid{
    grid-template-columns:1fr;
  }

  .receiptForm,
  .receiptPreviewCard{
    padding:20px;
    border-radius:24px;
  }

  .receiptTitle{
    font-size:1.7rem;
  }

}

/* =========================
   SMALL MOBILE
========================= */

@media (max-width:480px){

  .receiptForm,
  .receiptPreviewCard{
    padding:16px;
    border-radius:20px;
  }

  .receiptTitle{
    font-size:1.5rem;
  }

  .receiptButton{
    padding:14px;
  }

}`}</style>

    </div>
  );
}