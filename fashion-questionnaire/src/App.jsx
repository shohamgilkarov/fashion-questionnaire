import { useState } from "react";

const SECTIONS = [
  {
    id: "personal",
    title: "פרטים אישיים",
    questions: [
      { id: "name", label: "שם מלא", type: "text", required: true },
      { id: "phone", label: "מספר טלפון", type: "tel", required: true },
      { id: "email", label: "אימייל", type: "email", required: true },
      { id: "brand", label: "שם המותג / הפרויקט", type: "text", required: false },
    ],
  },
  {
    id: "vision",
    title: "חלק א׳ – חזון ומסר",
    questions: [
      {
        id: "q1",
        label: "1. תארי את הסלון שלך במשפט אחד – מה הוא מייצג?",
        type: "textarea",
        placeholder: "לדוגמה: סלון אלגנטי עם אווירה אירופאית, שמלות נסיכתיות עם מגע עדין ורומנטי...",
        required: true,
      },
      {
        id: "q2",
        label: "2. מה המסר המרכזי שאת רוצה שהקמפיין יעביר לכלות?",
        type: "textarea",
        placeholder: "איזה רגש, ערך או סיפור תרצי שהצופה ירגיש?",
        required: true,
      },
      {
        id: "q3",
        label: "3. מה המטרה העיקרית של הקמפיין?",
        type: "radio",
        options: [
          "השקת קולקציית שמלות חדשה",
          "חיזוק הזהות של הסלון",
          "קמפיין לעונת החתונות",
          "תוכן לסושיאל מדיה",
          "אחר",
        ],
        required: true,
      },
    ],
  },
  {
    id: "aesthetic",
    title: "חלק ב׳ – אסתטיקה וסגנון",
    questions: [
      {
        id: "q4",
        label: "4. מהי הפלטה הצבעונית של הקמפיין?",
        type: "textarea",
        placeholder: "לדוגמה: לבן שנהב עם זהב, או ורוד רך עם עמוד ושמנת...",
        required: true,
      },
      {
        id: "q5",
        label: "5. איזה סגנון ויזואלי את רוצה?",
        type: "checkbox",
        options: [
          "מינימליסטי ונקי",
          "דרמטי ואפל",
          "רומנטי ורך",
          "אורבני ועירוני",
          "ספורטיבי ודינמי",
          "פנטזיה / סוריאליסטי",
          "וינטג׳ / רטרו",
          "טבעי / בוהו",
          "עתידני / טכנולוגי",
        ],
        required: false,
      },
      {
        id: "q6",
        label: "6. האם יש מותגים או קמפיינים שמעוררים בך השראה?",
        type: "textarea",
        placeholder: "שמות מותגים, קישורים לתמונות, או תיאור של סגנון שאהבת...",
        required: false,
      },
      {
        id: "q7",
        label: "7. מה את רוצה שיהיה ברקע / בסביבה של התמונות?",
        type: "checkbox",
        options: [
          "סטודיו נקי / רקע חלק",
          "טבע – יער, מדבר, ים",
          "עיר ורחובות",
          "אדריכלות ומרחבים",
          "פנטזיה – עולמות דמיוניים",
          "פנים / interior",
          "אבסטרקטי / גרפי",
          "עדיין לא החלטתי",
        ],
        required: false,
      },
    ],
  },
  {
    id: "models",
    title: "חלק ג׳ – דוגמניות ושיער",
    questions: [
      {
        id: "q8",
        label: "8. איזה מראה דוגמנית AI את רוצה?",
        type: "checkbox",
        options: [
          "בהירה – עור חיוור / בלונדינית",
          "כהה – עור שזוף / שחרחורת",
          "מראה ישראלי",
          "מראה בינלאומי",
          "רזה / גזרה עדינה",
          "גזרה ממוצעת",
        ],
        required: false,
      },
      {
        id: "q9",
        label: "9. סגנון עיצוב שיער לדוגמנית?",
        type: "checkbox",
        options: [
          "חלק ומורד",
          "אסוף גבוה",
          "אסוף נמוך / קוקייה",
          "גלי ורומנטי",
          "קלוע / צמות",
          "עם קישוטי שיער / כתר",
          "תלוי בשמלה",
        ],
        required: false,
      },
      {
        id: "q10",
        label: "10. הערות נוספות לגבי הדוגמנית או הסטיילינג?",
        type: "textarea",
        placeholder: "לדוגמה: חשוב שהשמלה תיראה מלאה ותפוחה, הגב הפתוח חייב להיות בולט...",
        required: false,
      },
    ],
  },
  {
    id: "deliverables",
    title: "חלק ד׳ – תוצרים ופלטפורמות",
    questions: [
      {
        id: "q11",
        label: "11. לאיזה פלטפורמות מיועד הקמפיין?",
        type: "checkbox",
        options: [
          "אינסטגרם – פוסטים",
          "אינסטגרם – סטוריז",
          "אינסטגרם – רילס",
          "TikTok",
          "אתר / חנות אונליין",
          "קטלוג / לוק בוק",
          "פרסום מודפס",
          "לינקדאין",
        ],
        required: false,
      },
      {
        id: "q12",
        label: "12. כמה תמונות סופיות את צריכה?",
        type: "radio",
        options: [
          "עד 10 תמונות",
          "10–20 תמונות",
          "20–40 תמונות",
          "מעל 40 – קטלוג מלא",
        ],
        required: false,
      },
      {
        id: "q13",
        label: "13. האם את צריכה גם תוכן וידאו / רילס?",
        type: "radio",
        options: [
          "לא, רק תמונות סטילס",
          "כן, כמה קליפים קצרים",
          "כן, רילס ואנימציות",
          "עדיין לא יודעת",
        ],
        required: false,
      },
    ],
  },
  {
    id: "logistics",
    title: "חלק ה׳ – לוגיסטיקה ותקציב",
    questions: [
      {
        id: "q14",
        label: "14. מה לוח הזמנים שלך?",
        type: "radio",
        options: [
          "דחוף – תוך שבוע",
          "2–3 שבועות",
          "חודש",
          "גמיש – אין לחץ",
        ],
        required: false,
      },
      {
        id: "q15",
        label: "15. האם יש אלמנטים שחשוב לך שלא יופיעו בקמפיין?",
        type: "textarea",
        placeholder: "לדוגמה: לא רוצה רקעים כהים, לא אלמנטים דתיים, לא מראה מסוים...",
        required: false,
      },
      {
        id: "q16",
        label: "16. האם יש משהו נוסף שחשוב לי לדעת לפני שנתחיל?",
        type: "textarea",
        placeholder: "כל פרט, בקשה מיוחדת, השראה שלא הזכרת, או שאלה שיש לך...",
        required: false,
      },
    ],
  },
];

const PURPLE = "#7c3aed";
const PURPLE_LIGHT = "#f5f3ff";
const PURPLE_MID = "#ede9fe";

const styles = {
  page: {
    minHeight: "100vh",
    background: "#faf9ff",
    fontFamily: "'Segoe UI', Arial, sans-serif",
    direction: "rtl",
    padding: "0 0 4rem",
  },
  hero: {
    background: `linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)`,
    color: "#fff",
    padding: "2.5rem 1.5rem 2rem",
    textAlign: "center",
  },
  heroTag: {
    margin: "0 0 0.35rem",
    fontSize: "0.85rem",
    opacity: 0.8,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: 500,
  },
  heroTitle: {
    fontSize: "1.75rem",
    fontWeight: 700,
    margin: "0 0 0.3rem",
    letterSpacing: "-0.5px",
  },
  heroSubtitle: {
    fontSize: "1.05rem",
    fontWeight: 400,
    margin: "0 0 0.6rem",
    opacity: 0.9,
  },
  heroSub: {
    fontSize: "0.95rem",
    opacity: 0.8,
    margin: 0,
    maxWidth: 500,
    marginInline: "auto",
    lineHeight: 1.6,
  },
  intro: {
    maxWidth: 620,
    margin: "2rem auto 0",
    background: "#fff",
    border: "1.5px solid #ede9fe",
    borderRadius: 16,
    padding: "1.5rem 1.75rem",
    fontSize: "1rem",
    lineHeight: 1.85,
    color: "#374151",
    boxShadow: "0 2px 12px rgba(124,58,237,0.06)",
  },
  sectionCard: {
    maxWidth: 620,
    margin: "1.5rem auto 0",
    background: "#fff",
    border: "1.5px solid #ede9fe",
    borderRadius: 16,
    padding: "1.5rem 1.75rem",
    boxShadow: "0 2px 12px rgba(124,58,237,0.06)",
  },
  sectionTitle: {
    fontSize: "1.05rem",
    fontWeight: 700,
    color: PURPLE,
    marginBottom: "1.25rem",
    paddingBottom: "0.5rem",
    borderBottom: `2px solid ${PURPLE_MID}`,
  },
  questionBlock: {
    marginBottom: "1.5rem",
  },
  label: {
    display: "block",
    fontWeight: 600,
    fontSize: "0.97rem",
    color: "#1f1b4e",
    marginBottom: "0.6rem",
    lineHeight: 1.5,
  },
  input: {
    width: "100%",
    padding: "0.55rem 0.85rem",
    border: "1.5px solid #ddd6fe",
    borderRadius: 8,
    fontSize: "0.95rem",
    outline: "none",
    background: PURPLE_LIGHT,
    color: "#1f1b4e",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "0.6rem 0.85rem",
    border: "1.5px solid #ddd6fe",
    borderRadius: 8,
    fontSize: "0.95rem",
    outline: "none",
    background: PURPLE_LIGHT,
    color: "#1f1b4e",
    minHeight: 90,
    resize: "vertical",
    boxSizing: "border-box",
    fontFamily: "inherit",
  },
  optionRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.4rem",
    cursor: "pointer",
    padding: "0.4rem 0.75rem",
    borderRadius: 8,
    transition: "background 0.15s",
  },
  optionLabel: {
    fontSize: "0.95rem",
    color: "#374151",
    cursor: "pointer",
    flex: 1,
    lineHeight: 1.5,
  },
  submitBtn: {
    display: "block",
    margin: "2rem auto 0",
    background: `linear-gradient(135deg, #7c3aed, #a855f7)`,
    color: "#fff",
    border: "none",
    borderRadius: 50,
    padding: "0.85rem 3rem",
    fontSize: "1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: 0.5,
    boxShadow: "0 4px 18px rgba(124,58,237,0.25)",
  },
  successBox: {
    maxWidth: 500,
    margin: "4rem auto",
    textAlign: "center",
    background: "#fff",
    borderRadius: 20,
    padding: "3rem 2rem",
    border: "2px solid #ede9fe",
    boxShadow: "0 4px 24px rgba(124,58,237,0.1)",
  },
};

function QuestionField({ q, value, onChange }) {
  if (q.type === "text" || q.type === "tel" || q.type === "email") {
    return (
      <input
        type={q.type}
        style={styles.input}
        value={value || ""}
        placeholder={q.placeholder || ""}
        onChange={(e) => onChange(q.id, e.target.value)}
      />
    );
  }
  if (q.type === "textarea") {
    return (
      <textarea
        style={styles.textarea}
        value={value || ""}
        placeholder={q.placeholder || ""}
        onChange={(e) => onChange(q.id, e.target.value)}
      />
    );
  }
  if (q.type === "radio") {
    return (
      <div>
        {q.options.map((opt) => {
          const checked = value === opt;
          return (
            <div
              key={opt}
              style={{ ...styles.optionRow, background: checked ? PURPLE_MID : "transparent" }}
              onClick={() => onChange(q.id, opt)}
            >
              <div style={{
                width: 18, height: 18, borderRadius: "50%",
                border: `2px solid ${checked ? ROSE : "#d4c4a8"}`,
                background: checked ? ROSE : "#fff",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                {checked && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />}
              </div>
              <span style={styles.optionLabel}>{opt}</span>
            </div>
          );
        })}
      </div>
    );
  }
  if (q.type === "checkbox") {
    const selected = value || [];
    return (
      <div>
        {q.options.map((opt) => {
          const checked = selected.includes(opt);
          return (
            <div
              key={opt}
              style={{ ...styles.optionRow, background: checked ? PURPLE_MID : "transparent" }}
              onClick={() => {
                const next = checked ? selected.filter((x) => x !== opt) : [...selected, opt];
                onChange(q.id, next);
              }}
            >
              <div style={{
                width: 18, height: 18, borderRadius: 4,
                border: `2px solid ${checked ? ROSE : "#d4c4a8"}`,
                background: checked ? ROSE : "#fff",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                {checked && (
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                    <path d="M1 4L4 7.5L10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span style={styles.optionLabel}>{opt}</span>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}

export default function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (id, val) => setAnswers((prev) => ({ ...prev, [id]: val }));

  const handleSubmit = async () => {
    const name = answers["name"] || "";
    const email = answers["email"] || "";
    if (!name.trim() || !email.trim()) {
      setError("נא למלא לפחות שם ואימייל כדי להמשיך.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const payload = {
        access_key: "fbfaa537-ca4e-4066-8fc9-0286b7274731",
        email: email,
        name: name,
        ...Object.fromEntries(
          Object.entries(answers).map(([k, v]) => [k, Array.isArray(v) ? v.join(", ") : String(v || "")])
        ),
        _submitted: new Date().toLocaleString("he-IL"),
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) {
        setError("שגיאה בשליחה: " + (data?.message || "נסי שוב"));
        setSubmitting(false);
        return;
      }
    } catch (e) {
      setError("שגיאת רשת, נסי שוב.");
      setSubmitting(false);
      return;
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.successBox}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✨</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: PURPLE, fontWeight: 700, marginBottom: "0.5rem", fontSize: "1.5rem" }}>
            תודה רבה!
          </h2>
          <div style={{ width: 32, height: 1, background: PURPLE, margin: "0.75rem auto 1rem", opacity: 0.7 }} />
          <p style={{ color: "#666", lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
            הפרטים שלך נשלחו בהצלחה. אני אעבור על השאלון ואחזור אלייך עם תוכנית מפורטת להפקה שלנו ✨
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.hero}>
        <p style={styles.heroTag}>Grow by Shoham</p>
        <h1 style={styles.heroTitle}>שאלון הכנה להפקה</h1>
        <p style={styles.heroSubtitle}>קמפיין שמלות כלה ב-AI</p>
      </div>

      <div style={styles.intro}>
        <strong style={{ color: PURPLE }}>היי יקירה 💜</strong>
        <br /><br />
        שמחה שבחרת בי להפקת הקמפיין שלך 💜
        <br /><br />
        כדי שאוכל ליצור עבורך תמונות שמשקפות בדיוק את החזון והסגנון של הסלון שלך, אשמח שתקדישי כמה דקות למלא את השאלון הזה.
        <br /><br />
        ככל שתהיי ספציפית יותר – כך התוצאות יהיו קרובות יותר לחלום 🤍
        <br /><br />
        <em style={{ color: ROSE }}>מחכה לשמוע, שוהם 💜</em>
      </div>

      {SECTIONS.map((sec) => (
        <div key={sec.id} style={styles.sectionCard}>
          <div style={styles.sectionTitle}>{sec.title}</div>
          {sec.questions.map((q) => (
            <div key={q.id} style={styles.questionBlock}>
              <label style={styles.label}>
                {q.label}
                {q.required && <span style={{ color: PURPLE, marginRight: 2 }}>*</span>}
              </label>
              <QuestionField q={q} value={answers[q.id]} onChange={handleChange} />
            </div>
          ))}
        </div>
      ))}

      {error && (
        <p style={{ textAlign: "center", color: "#c0392b", marginTop: "1rem", fontWeight: 500 }}>
          {error}
        </p>
      )}

      <button
        style={{ ...styles.submitBtn, opacity: submitting ? 0.7 : 1 }}
        onClick={handleSubmit}
        disabled={submitting}
      >
        {submitting ? "שולחת..." : "שליחת השאלון ✨"}
      </button>
    </div>
  );
}
