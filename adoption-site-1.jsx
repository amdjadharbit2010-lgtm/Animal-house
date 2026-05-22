import { useState, useRef, useEffect } from "react";

// ── Translations ──────────────────────────────────────────────
const T = {
  ar: {
    dir: "rtl", appName: "بيت الحيوانات", login: "دخول", register: "إنشاء حساب",
    email: "البريد الإلكتروني", password: "كلمة المرور", fullName: "الاسم الكامل",
    haveAccount: "عندي حساب بالفعل", noAccount: "إنشاء حساب جديد",
    home: "الرئيسية", profile: "الملف الشخصي", settings: "الإعدادات",
    add: "إضافة حيوان", all: "الكل", cat: "قط", dog: "كلب", rabbit: "أرنب", other: "أخرى",
    free: "مجاني", price: "بسعر", publish: "نشر الإعلان", back: "رجوع",
    animalName: "اسم الحيوان", approxAge: "العمر التقريبي", category: "النوع",
    country: "البلد", city: "المدينة", uploadPhoto: "اضغط لرفع صورة",
    noAds: "لا توجد إعلانات بعد", addFirst: "اضغط + لإضافة أول حيوان",
    chat: "شات", send: "إرسال", typeMsg: "اكتب رسالة...",
    followers: "متابع", deals: "صفقة", ads: "إعلان", follow: "متابعة +",
    addBio: "اضغط لإضافة نبذة...", save: "حفظ", logout: "تسجيل الخروج",
    report: "إبلاغ", reportReason: "سبب الإبلاغ", reportSend: "إرسال البلاغ",
    reportSent: "تم إرسال البلاغ ✓", rateApp: "تقييم الموقع",
    rateAppDesc: "كيف تقيم تجربتك؟", submitRating: "إرسال التقييم",
    ratedThanks: "شكراً على تقييمك! ✓", language: "اللغة",
    priceLabel: "السعر بالعملة المحلية", locationLabel: "الموقع",
    fieldRequired: "يرجى ملء الحقل", photoRequired: "يرجى إضافة صورة",
    nameRequired: "يرجى كتابة الاسم", errorLogin: "البريد أو كلمة المرور غير صحيحة",
    errorExist: "البريد مستخدم بالفعل", errorFields: "يرجى ملء جميع الحقول",
    sendPhoto: "إرسال صورة", noMessages: "لا توجد رسائل بعد، ابدأ المحادثة!",
    chatWith: "شات مع", myChats: "رسائلي", noChats: "لا توجد محادثات بعد",
    reportPlaceholder: "اكتب سبب الإبلاغ بالتفصيل...",
  },
  en: {
    dir: "ltr", appName: "Pet House", login: "Login", register: "Create Account",
    email: "Email", password: "Password", fullName: "Full Name",
    haveAccount: "I already have an account", noAccount: "Create new account",
    home: "Home", profile: "Profile", settings: "Settings",
    add: "Add Animal", all: "All", cat: "Cat", dog: "Dog", rabbit: "Rabbit", other: "Other",
    free: "Free", price: "Paid", publish: "Publish", back: "Back",
    animalName: "Animal Name", approxAge: "Approximate Age", category: "Type",
    country: "Country", city: "City", uploadPhoto: "Tap to upload photo",
    noAds: "No listings yet", addFirst: "Tap + to add first animal",
    chat: "Chat", send: "Send", typeMsg: "Type a message...",
    followers: "Followers", deals: "Deals", ads: "Listings", follow: "Follow +",
    addBio: "Tap to add bio...", save: "Save", logout: "Logout",
    report: "Report", reportReason: "Reason for report", reportSend: "Send Report",
    reportSent: "Report sent ✓", rateApp: "Rate the App",
    rateAppDesc: "How do you rate your experience?", submitRating: "Submit Rating",
    ratedThanks: "Thanks for your rating! ✓", language: "Language",
    priceLabel: "Price in local currency", locationLabel: "Location",
    fieldRequired: "Please fill this field", photoRequired: "Please add a photo",
    nameRequired: "Please enter a name", errorLogin: "Wrong email or password",
    errorExist: "Email already in use", errorFields: "Please fill all fields",
    sendPhoto: "Send Photo", noMessages: "No messages yet, start the conversation!",
    chatWith: "Chat with", myChats: "My Chats", noChats: "No conversations yet",
    reportPlaceholder: "Describe the reason in detail...",
  },
  fr: {
    dir: "ltr", appName: "Maison des Animaux", login: "Connexion", register: "Créer un compte",
    email: "E-mail", password: "Mot de passe", fullName: "Nom complet",
    haveAccount: "J'ai déjà un compte", noAccount: "Créer un nouveau compte",
    home: "Accueil", profile: "Profil", settings: "Paramètres",
    add: "Ajouter un animal", all: "Tous", cat: "Chat", dog: "Chien", rabbit: "Lapin", other: "Autre",
    free: "Gratuit", price: "Payant", publish: "Publier", back: "Retour",
    animalName: "Nom de l'animal", approxAge: "Âge approximatif", category: "Type",
    country: "Pays", city: "Ville", uploadPhoto: "Appuyez pour télécharger",
    noAds: "Aucune annonce", addFirst: "Appuyez + pour ajouter",
    chat: "Chat", send: "Envoyer", typeMsg: "Écrire un message...",
    followers: "Abonnés", deals: "Transactions", ads: "Annonces", follow: "Suivre +",
    addBio: "Appuyez pour ajouter une bio...", save: "Enregistrer", logout: "Déconnexion",
    report: "Signaler", reportReason: "Raison du signalement", reportSend: "Envoyer",
    reportSent: "Signalement envoyé ✓", rateApp: "Évaluer l'app",
    rateAppDesc: "Comment évaluez-vous votre expérience?", submitRating: "Soumettre",
    ratedThanks: "Merci pour votre avis! ✓", language: "Langue",
    priceLabel: "Prix en monnaie locale", locationLabel: "Localisation",
    fieldRequired: "Veuillez remplir ce champ", photoRequired: "Veuillez ajouter une photo",
    nameRequired: "Veuillez entrer un nom", errorLogin: "Email ou mot de passe incorrect",
    errorExist: "Email déjà utilisé", errorFields: "Veuillez remplir tous les champs",
    sendPhoto: "Envoyer une photo", noMessages: "Pas de messages, commencez!",
    chatWith: "Chat avec", myChats: "Mes chats", noChats: "Pas de conversations",
    reportPlaceholder: "Décrivez la raison en détail...",
  },
  es: {
    dir: "ltr", appName: "Casa de Animales", login: "Entrar", register: "Crear cuenta",
    email: "Correo", password: "Contraseña", fullName: "Nombre completo",
    haveAccount: "Ya tengo cuenta", noAccount: "Crear nueva cuenta",
    home: "Inicio", profile: "Perfil", settings: "Ajustes",
    add: "Añadir animal", all: "Todo", cat: "Gato", dog: "Perro", rabbit: "Conejo", other: "Otro",
    free: "Gratis", price: "De pago", publish: "Publicar", back: "Volver",
    animalName: "Nombre del animal", approxAge: "Edad aproximada", category: "Tipo",
    country: "País", city: "Ciudad", uploadPhoto: "Toca para subir foto",
    noAds: "Sin anuncios aún", addFirst: "Toca + para añadir",
    chat: "Chat", send: "Enviar", typeMsg: "Escribe un mensaje...",
    followers: "Seguidores", deals: "Tratos", ads: "Anuncios", follow: "Seguir +",
    addBio: "Toca para añadir bio...", save: "Guardar", logout: "Cerrar sesión",
    report: "Reportar", reportReason: "Razón del reporte", reportSend: "Enviar reporte",
    reportSent: "Reporte enviado ✓", rateApp: "Valorar la app",
    rateAppDesc: "¿Cómo valoras tu experiencia?", submitRating: "Enviar valoración",
    ratedThanks: "¡Gracias por tu valoración! ✓", language: "Idioma",
    priceLabel: "Precio en moneda local", locationLabel: "Ubicación",
    fieldRequired: "Por favor rellena este campo", photoRequired: "Por favor añade una foto",
    nameRequired: "Por favor escribe el nombre", errorLogin: "Email o contraseña incorrectos",
    errorExist: "Email ya en uso", errorFields: "Por favor rellena todos los campos",
    sendPhoto: "Enviar foto", noMessages: "Sin mensajes, ¡empieza la conversación!",
    chatWith: "Chat con", myChats: "Mis chats", noChats: "Sin conversaciones",
    reportPlaceholder: "Describe la razón en detalle...",
  },
  zh: {
    dir: "ltr", appName: "宠物之家", login: "登录", register: "创建账户",
    email: "电子邮件", password: "密码", fullName: "全名",
    haveAccount: "我已有账户", noAccount: "创建新账户",
    home: "首页", profile: "个人资料", settings: "设置",
    add: "添加动物", all: "全部", cat: "猫", dog: "狗", rabbit: "兔子", other: "其他",
    free: "免费", price: "付费", publish: "发布", back: "返回",
    animalName: "动物名称", approxAge: "大概年龄", category: "类型",
    country: "国家", city: "城市", uploadPhoto: "点击上传照片",
    noAds: "暂无广告", addFirst: "点击+添加第一个动物",
    chat: "聊天", send: "发送", typeMsg: "输入消息...",
    followers: "粉丝", deals: "交易", ads: "广告", follow: "关注+",
    addBio: "点击添加简介...", save: "保存", logout: "退出登录",
    report: "举报", reportReason: "举报原因", reportSend: "发送举报",
    reportSent: "举报已发送 ✓", rateApp: "评价应用",
    rateAppDesc: "您如何评价您的体验？", submitRating: "提交评价",
    ratedThanks: "感谢您的评价！✓", language: "语言",
    priceLabel: "当地货币价格", locationLabel: "位置",
    fieldRequired: "请填写此字段", photoRequired: "请添加照片",
    nameRequired: "请输入名称", errorLogin: "邮箱或密码错误",
    errorExist: "邮箱已被使用", errorFields: "请填写所有字段",
    sendPhoto: "发送照片", noMessages: "暂无消息，开始对话吧！",
    chatWith: "与...聊天", myChats: "我的聊天", noChats: "暂无对话",
    reportPlaceholder: "详细描述举报原因...",
  },
};

const COUNTRIES = [
  "الجزائر","المغرب","تونس","مصر","السعودية","الإمارات","قطر","الكويت","العراق","سوريا",
  "لبنان","الأردن","ليبيا","السودان","فرنسا","إسبانيا","ألمانيا","المملكة المتحدة",
  "الولايات المتحدة","كندا","الصين","تركيا","أخرى"
];

const LANG_NAMES = { ar:"العربية", en:"English", fr:"Français", es:"Español", zh:"中文" };

// ── Helpers ───────────────────────────────────────────────────
function Avatar({ name, size = 40 }) {
  const colors = ["#e8a87c","#85c1a3","#7eb8d4","#c49bbf","#e8c97e","#a3c4e8"];
  const c = colors[(name || "?").charCodeAt(0) % colors.length];
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: c,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 700, fontSize: size * 0.4, color: "#fff", flexShrink: 0 }}>
      {(name || "?")[0]}
    </div>
  );
}

function Stars({ rating, onChange, size = 20 }) {
  const [hov, setHov] = useState(0);
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map(s => (
        <span key={s}
          onClick={() => onChange && onChange(s)}
          onMouseEnter={() => onChange && setHov(s)}
          onMouseLeave={() => onChange && setHov(0)}
          style={{ fontSize: size, cursor: onChange ? "pointer" : "default",
            color: s <= (hov || rating) ? "#f5a623" : "#ddd", transition: "color 0.15s" }}>★</span>
      ))}
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("ar");
  const t = T[lang];
  const dir = t.dir;

  const [page, setPage] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [filterCat, setFilterCat] = useState("all");
  const [viewProfile, setViewProfile] = useState(null);
  const [chatTarget, setChatTarget] = useState(null); // {userId, animalId}
  const [chats, setChats] = useState({}); // { "uid1-uid2-animalId": [{from,text,imageUrl,time}] }

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [regForm, setRegForm] = useState({ name: "", email: "", password: "" });
  const [addForm, setAddForm] = useState({ name:"", age:"", price:"", isFree:true, category:"cat", country:"", city:"", image:null, imageUrl:"" });
  const [bioEdit, setBioEdit] = useState(false);
  const [bioText, setBioText] = useState("");
  const [authError, setAuthError] = useState("");
  const [addError, setAddError] = useState("");

  // Chat input
  const [chatMsg, setChatMsg] = useState("");
  const chatEndRef = useRef(null);

  // Settings modals
  const [showReport, setShowReport] = useState(null); // animal or user id
  const [reportText, setReportText] = useState("");
  const [reportSent, setReportSent] = useState(false);
  const [showRateApp, setShowRateApp] = useState(false);
  const [appRating, setAppRating] = useState(0);
  const [appRated, setAppRated] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, chatTarget]);

  const S = {
    page: { minHeight: "100vh", background: "#fdf6ee", fontFamily: lang === "zh" ? "'PingFang SC','Microsoft YaHei',sans-serif" : "'Tajawal','Segoe UI',sans-serif", direction: dir },
    card: { background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #0001", padding: 20 },
    input: { width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #e0d5c8", fontSize: 15, outline: "none", boxSizing: "border-box", fontFamily: "inherit", background: "#fdf6ee", direction: dir },
    btn: { padding: "10px 22px", borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 700, fontSize: 14, fontFamily: "inherit" },
    primary: { background: "#c07b54", color: "#fff" },
    secondary: { background: "#eee", color: "#555" },
  };

  // ── Chat key ──
  function chatKey(uid1, uid2, animalId) {
    return [Math.min(uid1, uid2), Math.max(uid1, uid2), animalId].join("-");
  }

  function getMessages() {
    if (!chatTarget || !currentUser) return [];
    return chats[chatKey(currentUser.id, chatTarget.userId, chatTarget.animalId)] || [];
  }

  function sendMessage(imageUrl = null) {
    if (!chatMsg.trim() && !imageUrl) return;
    const key = chatKey(currentUser.id, chatTarget.userId, chatTarget.animalId);
    const msg = { from: currentUser.id, text: chatMsg.trim(), imageUrl, time: Date.now() };
    setChats(prev => ({ ...prev, [key]: [...(prev[key] || []), msg] }));
    setChatMsg("");
  }

  function sendImageInChat(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => sendMessage(ev.target.result);
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  // ── Auth ──
  function handleLogin() {
    setAuthError("");
    const u = users.find(u => u.email === loginForm.email && u.password === loginForm.password);
    if (!u) { setAuthError(t.errorLogin); return; }
    setCurrentUser(u); setPage("home");
  }

  function handleRegister() {
    setAuthError("");
    if (!regForm.name || !regForm.email || !regForm.password) { setAuthError(t.errorFields); return; }
    if (users.find(u => u.email === regForm.email)) { setAuthError(t.errorExist); return; }
    const nu = { id: Date.now(), name: regForm.name, email: regForm.email, password: regForm.password, bio: "", rating: 0, ratingCount: 0, followers: 0, deals: 0 };
    setUsers(p => [...p, nu]); setCurrentUser(nu); setPage("home");
  }

  function handleAddAnimal() {
    setAddError("");
    if (!addForm.image) { setAddError(t.photoRequired); return; }
    if (!addForm.name) { setAddError(t.nameRequired); return; }
    const na = {
      id: Date.now(), ownerId: currentUser.id, ownerName: currentUser.name,
      name: addForm.name, age: addForm.age,
      price: addForm.isFree ? t.free : addForm.price,
      isFree: addForm.isFree, category: addForm.category,
      country: addForm.country, city: addForm.city,
      imageUrl: addForm.imageUrl,
    };
    setAnimals(p => [...p, na]);
    setAddForm({ name:"", age:"", price:"", isFree:true, category:"cat", country:"", city:"", image:null, imageUrl:"" });
    setPage("home");
  }

  function handleImageUpload(e) {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setAddForm(f => ({ ...f, image: file, imageUrl: ev.target.result }));
    reader.readAsDataURL(file);
  }

  function handleFollow(uid) {
    setUsers(p => p.map(u => u.id === uid ? { ...u, followers: u.followers + 1 } : u));
    setViewProfile(v => v && v.id === uid ? { ...v, followers: v.followers + 1 } : v);
  }

  function handleRateUser(uid, stars) {
    setUsers(p => p.map(u => {
      if (u.id !== uid) return u;
      const nc = u.ratingCount + 1, nr = ((u.rating * u.ratingCount) + stars) / nc;
      return { ...u, rating: nr, ratingCount: nc };
    }));
    setViewProfile(v => {
      if (!v || v.id !== uid) return v;
      const nc = v.ratingCount + 1, nr = ((v.rating * v.ratingCount) + stars) / nc;
      return { ...v, rating: nr, ratingCount: nc };
    });
  }

  function saveBio() {
    setUsers(p => p.map(u => u.id === currentUser.id ? { ...u, bio: bioText } : u));
    setCurrentUser(u => ({ ...u, bio: bioText })); setBioEdit(false);
  }

  function sendReport() {
    // In real app: send email. Here we simulate.
    setReportSent(true);
    setTimeout(() => { setShowReport(null); setReportText(""); setReportSent(false); }, 2000);
  }

  const CATS = [
    { key:"all", label: t.all },
    { key:"cat", label: t.cat },
    { key:"dog", label: t.dog },
    { key:"rabbit", label: t.rabbit },
    { key:"other", label: t.other },
  ];
  const getCatLabel = (k) => CATS.find(c => c.key === k)?.label || k;

  const filtered = filterCat === "all" ? animals : animals.filter(a => a.category === filterCat);
  const userAnimals = uid => animals.filter(a => a.ownerId === uid);
  const getUserById = id => users.find(u => u.id === id);

  // My conversations list
  const myConvos = Object.entries(chats).filter(([key]) => {
    const parts = key.split("-");
    return parts[0] == currentUser?.id || parts[1] == currentUser?.id;
  });

  // ── Report modal ──
  const ReportModal = ({ targetLabel }) => (
    <div style={{ position:"fixed", inset:0, background:"#0006", zIndex:100, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ ...S.card, width:320, direction:dir }}>
        <h3 style={{ margin:"0 0 12px", color:"#c07b54" }}>{t.report}: {targetLabel}</h3>
        {reportSent
          ? <div style={{ textAlign:"center", color:"#27ae60", fontSize:18, padding:20 }}>{t.reportSent}</div>
          : <>
            <textarea style={{ ...S.input, minHeight:100, resize:"vertical", marginBottom:12 }}
              placeholder={t.reportPlaceholder} value={reportText}
              onChange={e => setReportText(e.target.value)} />
            <div style={{ display:"flex", gap:8 }}>
              <button style={{ ...S.btn, ...S.primary, flex:1 }} onClick={sendReport}>{t.reportSend}</button>
              <button style={{ ...S.btn, ...S.secondary }} onClick={() => { setShowReport(null); setReportText(""); }}>{t.back}</button>
            </div>
          </>
        }
      </div>
    </div>
  );

  // ── Rate App modal ──
  const RateAppModal = () => (
    <div style={{ position:"fixed", inset:0, background:"#0006", zIndex:100, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ ...S.card, width:300, textAlign:"center", direction:dir }}>
        <div style={{ fontSize:40, marginBottom:8 }}>⭐</div>
        <h3 style={{ color:"#c07b54", margin:"0 0 6px" }}>{t.rateApp}</h3>
        <p style={{ color:"#888", fontSize:14, marginBottom:16 }}>{t.rateAppDesc}</p>
        {appRated
          ? <div style={{ color:"#27ae60", fontSize:18 }}>{t.ratedThanks}</div>
          : <>
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
              <Stars rating={appRating} onChange={setAppRating} size={32} />
            </div>
            <div style={{ display:"flex", gap:8 }}>
              <button style={{ ...S.btn, ...S.primary, flex:1 }} onClick={() => { setAppRated(true); setTimeout(()=>{setShowRateApp(false);setAppRated(false);setAppRating(0);},2000); }}>{t.submitRating}</button>
              <button style={{ ...S.btn, ...S.secondary }} onClick={() => setShowRateApp(false)}>{t.back}</button>
            </div>
          </>
        }
      </div>
    </div>
  );

  // ── Bottom Nav ──
  const BottomNav = () => (
    <div style={{ position:"fixed", bottom:0, left:0, right:0, background:"#fff", boxShadow:"0 -2px 12px #0001", display:"flex", justifyContent:"space-around", padding:"10px 0", zIndex:10 }}>
      <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color: page==="home" ? "#c07b54" : "#aaa" }} onClick={() => setPage("home")}>🏠</button>
      <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color: page==="chats" ? "#c07b54" : "#aaa" }} onClick={() => setPage("chats")}>💬</button>
      <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color: page==="profile" ? "#c07b54" : "#aaa" }} onClick={() => { setViewProfile(null); setPage("profile"); }}>👤</button>
      <button style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, color: page==="settings" ? "#c07b54" : "#aaa" }} onClick={() => setPage("settings")}>⚙️</button>
    </div>
  );

  // ══════════════════════════════════════════════════════════════
  // PAGES
  // ══════════════════════════════════════════════════════════════

  // LOGIN
  if (page === "login") return (
    <div style={{ ...S.page, display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet" />
      <div style={{ ...S.card, width:340, textAlign:"center" }}>
        <div style={{ fontSize:52 }}>🐾</div>
        <h1 style={{ fontSize:26, fontWeight:900, color:"#c07b54", margin:"6px 0 2px" }}>{t.appName}</h1>
        <p style={{ color:"#aaa", marginBottom:20, fontSize:13 }}>🐱 🐶 🐰</p>
        {authError && <div style={{ background:"#ffeaea", color:"#c0392b", borderRadius:8, padding:"8px 12px", marginBottom:12, fontSize:13 }}>{authError}</div>}
        <input style={{ ...S.input, marginBottom:10 }} placeholder={t.email} value={loginForm.email} onChange={e => setLoginForm(f => ({...f, email:e.target.value}))} />
        <input style={{ ...S.input, marginBottom:16 }} type="password" placeholder={t.password} value={loginForm.password} onChange={e => setLoginForm(f => ({...f, password:e.target.value}))} />
        <button style={{ ...S.btn, ...S.primary, width:"100%", marginBottom:8 }} onClick={handleLogin}>{t.login}</button>
        <button style={{ ...S.btn, ...S.secondary, width:"100%" }} onClick={() => { setPage("register"); setAuthError(""); }}>{t.noAccount}</button>
        <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:16 }}>
          {Object.entries(LANG_NAMES).map(([k,v]) => (
            <button key={k} onClick={() => setLang(k)} style={{ ...S.btn, padding:"4px 10px", fontSize:12,
              background: lang===k ? "#c07b54" : "#eee", color: lang===k ? "#fff" : "#555" }}>{k.toUpperCase()}</button>
          ))}
        </div>
      </div>
    </div>
  );

  // REGISTER
  if (page === "register") return (
    <div style={{ ...S.page, display:"flex", alignItems:"center", justifyContent:"center", minHeight:"100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet" />
      <div style={{ ...S.card, width:340, textAlign:"center" }}>
        <div style={{ fontSize:40 }}>🐾</div>
        <h2 style={{ fontWeight:900, color:"#c07b54", margin:"8px 0 18px" }}>{t.register}</h2>
        {authError && <div style={{ background:"#ffeaea", color:"#c0392b", borderRadius:8, padding:"8px 12px", marginBottom:12, fontSize:13 }}>{authError}</div>}
        <input style={{ ...S.input, marginBottom:10 }} placeholder={t.fullName} value={regForm.name} onChange={e => setRegForm(f => ({...f, name:e.target.value}))} />
        <input style={{ ...S.input, marginBottom:10 }} placeholder={t.email} value={regForm.email} onChange={e => setRegForm(f => ({...f, email:e.target.value}))} />
        <input style={{ ...S.input, marginBottom:16 }} type="password" placeholder={t.password} value={regForm.password} onChange={e => setRegForm(f => ({...f, password:e.target.value}))} />
        <button style={{ ...S.btn, ...S.primary, width:"100%", marginBottom:8 }} onClick={handleRegister}>{t.register}</button>
        <button style={{ ...S.btn, ...S.secondary, width:"100%" }} onClick={() => { setPage("login"); setAuthError(""); }}>{t.haveAccount}</button>
      </div>
    </div>
  );

  // ADD ANIMAL
  if (page === "add") return (
    <div style={{ ...S.page, padding:16 }}>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet" />
      <div style={{ maxWidth:480, margin:"0 auto", paddingBottom:80 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
          <button onClick={() => setPage("home")} style={{ ...S.btn, ...S.secondary, padding:"7px 14px" }}>← {t.back}</button>
          <h2 style={{ margin:0, fontWeight:900, color:"#c07b54" }}>{t.add}</h2>
        </div>
        <div style={S.card}>
          {addError && <div style={{ background:"#ffeaea", color:"#c0392b", borderRadius:8, padding:"8px 12px", marginBottom:12, fontSize:13 }}>{addError}</div>}

          {/* Photo */}
          <label style={{ fontWeight:700, color:"#555", display:"block", marginBottom:6 }}>📷 {t.uploadPhoto} *</label>
          <div style={{ border:"2px dashed #e0d5c8", borderRadius:12, padding:16, textAlign:"center", background:"#fdf6ee", cursor:"pointer", marginBottom:14 }}
            onClick={() => document.getElementById("addImg").click()}>
            {addForm.imageUrl
              ? <img src={addForm.imageUrl} alt="" style={{ maxHeight:160, borderRadius:8, maxWidth:"100%" }} />
              : <div style={{ color:"#bbb" }}><div style={{ fontSize:32 }}>📷</div><div style={{ fontSize:13 }}>{t.uploadPhoto}</div></div>}
            <input id="addImg" type="file" accept="image/*" style={{ display:"none" }} onChange={handleImageUpload} />
          </div>

          <label style={{ fontWeight:700, color:"#555", fontSize:13 }}>{t.animalName} *</label>
          <input style={{ ...S.input, marginBottom:12, marginTop:4 }} placeholder="e.g. Misha" value={addForm.name} onChange={e => setAddForm(f => ({...f, name:e.target.value}))} />

          <label style={{ fontWeight:700, color:"#555", fontSize:13 }}>{t.approxAge}</label>
          <input style={{ ...S.input, marginBottom:12, marginTop:4 }} placeholder="e.g. 2 years" value={addForm.age} onChange={e => setAddForm(f => ({...f, age:e.target.value}))} />

          <label style={{ fontWeight:700, color:"#555", fontSize:13 }}>{t.category}</label>
          <select style={{ ...S.input, marginBottom:12, marginTop:4 }} value={addForm.category} onChange={e => setAddForm(f => ({...f, category:e.target.value}))}>
            {CATS.filter(c => c.key !== "all").map(c => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>

          {/* Location */}
          <label style={{ fontWeight:700, color:"#555", fontSize:13 }}>📍 {t.country}</label>
          <select style={{ ...S.input, marginBottom:12, marginTop:4 }} value={addForm.country} onChange={e => setAddForm(f => ({...f, country:e.target.value}))}>
            <option value="">-- {t.country} --</option>
            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <label style={{ fontWeight:700, color:"#555", fontSize:13 }}>🏙️ {t.city}</label>
          <input style={{ ...S.input, marginBottom:12, marginTop:4 }} placeholder={t.city} value={addForm.city} onChange={e => setAddForm(f => ({...f, city:e.target.value}))} />

          {/* Price */}
          <label style={{ fontWeight:700, color:"#555", fontSize:13 }}>💰 {t.price}</label>
          <div style={{ display:"flex", gap:8, margin:"6px 0 12px" }}>
            <button style={{ ...S.btn, flex:1, ...(addForm.isFree ? S.primary : S.secondary) }} onClick={() => setAddForm(f => ({...f, isFree:true}))}>🎁 {t.free}</button>
            <button style={{ ...S.btn, flex:1, ...(!addForm.isFree ? S.primary : S.secondary) }} onClick={() => setAddForm(f => ({...f, isFree:false}))}>💰 {t.price}</button>
          </div>
          {!addForm.isFree && <input style={{ ...S.input, marginBottom:12 }} placeholder={t.priceLabel} type="number" value={addForm.price} onChange={e => setAddForm(f => ({...f, price:e.target.value}))} />}

          <button style={{ ...S.btn, ...S.primary, width:"100%", fontSize:16, marginTop:4 }} onClick={handleAddAnimal}>{t.publish} 🐾</button>
        </div>
      </div>
      <BottomNav />
    </div>
  );

  // CHAT PAGE (single conversation)
  if (page === "chat" && chatTarget) {
    const msgs = getMessages();
    const other = getUserById(chatTarget.userId);
    const animal = animals.find(a => a.id === chatTarget.animalId);
    return (
      <div style={{ ...S.page, display:"flex", flexDirection:"column", height:"100vh" }}>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet" />
        {/* Header */}
        <div style={{ background:"#fff", boxShadow:"0 2px 8px #0001", padding:"12px 16px", display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
          <button onClick={() => setPage("chats")} style={{ ...S.btn, ...S.secondary, padding:"6px 12px" }}>← {t.back}</button>
          {other && <Avatar name={other.name} size={36} />}
          <div>
            <div style={{ fontWeight:700 }}>{other?.name || "?"}</div>
            {animal && <div style={{ fontSize:12, color:"#aaa" }}>{animal.name}</div>}
          </div>
        </div>

        {/* Messages */}
        <div style={{ flex:1, overflowY:"auto", padding:16, display:"flex", flexDirection:"column", gap:10 }}>
          {msgs.length === 0
            ? <div style={{ textAlign:"center", color:"#bbb", marginTop:60, fontSize:14 }}>{t.noMessages}</div>
            : msgs.map((m, i) => {
              const isMe = m.from === currentUser.id;
              return (
                <div key={i} style={{ display:"flex", justifyContent: isMe ? (dir==="rtl" ? "flex-start" : "flex-end") : (dir==="rtl" ? "flex-end" : "flex-start") }}>
                  <div style={{ maxWidth:"75%", background: isMe ? "#c07b54" : "#fff", color: isMe ? "#fff" : "#333",
                    borderRadius: isMe ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
                    padding:"10px 14px", boxShadow:"0 1px 4px #0001", fontSize:14 }}>
                    {m.imageUrl && <img src={m.imageUrl} alt="" style={{ maxWidth:200, borderRadius:8, display:"block", marginBottom: m.text ? 6 : 0 }} />}
                    {m.text && <span>{m.text}</span>}
                  </div>
                </div>
              );
            })
          }
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div style={{ background:"#fff", padding:"12px 16px", boxShadow:"0 -2px 8px #0001", display:"flex", gap:8, alignItems:"center", flexShrink:0 }}>
          <label style={{ cursor:"pointer", fontSize:22 }} title={t.sendPhoto}
            onClick={() => document.getElementById("chatImg").click()}>📷
            <input id="chatImg" type="file" accept="image/*" style={{ display:"none" }} onChange={sendImageInChat} />
          </label>
          <input style={{ ...S.input, flex:1, marginBottom:0 }} placeholder={t.typeMsg}
            value={chatMsg} onChange={e => setChatMsg(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage()} />
          <button style={{ ...S.btn, ...S.primary, padding:"10px 16px" }} onClick={() => sendMessage()}>{t.send}</button>
        </div>
      </div>
    );
  }

  // CHATS LIST
  if (page === "chats") return (
    <div style={{ ...S.page, padding:16 }}>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet" />
      <div style={{ maxWidth:480, margin:"0 auto", paddingBottom:80 }}>
        <h2 style={{ fontWeight:900, color:"#c07b54", marginBottom:16 }}>💬 {t.myChats}</h2>
        {myConvos.length === 0
          ? <div style={{ ...S.card, textAlign:"center", color:"#bbb", padding:50 }}>{t.noChats}</div>
          : myConvos.map(([key, msgs]) => {
            const parts = key.split("-");
            const otherId = parseInt(parts[0]) === currentUser.id ? parseInt(parts[1]) : parseInt(parts[0]);
            const animalId = parseInt(parts[2]);
            const other = getUserById(otherId);
            const animal = animals.find(a => a.id === animalId);
            const last = msgs[msgs.length - 1];
            return (
              <div key={key} style={{ ...S.card, marginBottom:10, display:"flex", alignItems:"center", gap:12, cursor:"pointer" }}
                onClick={() => { setChatTarget({ userId: otherId, animalId }); setPage("chat"); }}>
                {other && <Avatar name={other.name} size={44} />}
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700 }}>{other?.name}</div>
                  <div style={{ fontSize:12, color:"#aaa" }}>{animal?.name}</div>
                  {last && <div style={{ fontSize:13, color:"#888", marginTop:2 }}>{last.imageUrl ? "📷" : last.text}</div>}
                </div>
              </div>
            );
          })
        }
      </div>
      <BottomNav />
    </div>
  );

  // SETTINGS
  if (page === "settings") return (
    <div style={{ ...S.page, padding:16 }}>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet" />
      {showReport && <ReportModal targetLabel={showReport} />}
      {showRateApp && <RateAppModal />}
      <div style={{ maxWidth:480, margin:"0 auto", paddingBottom:80 }}>
        <h2 style={{ fontWeight:900, color:"#c07b54", marginBottom:16 }}>⚙️ {t.settings}</h2>

        {/* Language */}
        <div style={{ ...S.card, marginBottom:14 }}>
          <div style={{ fontWeight:700, marginBottom:12, color:"#555" }}>🌐 {t.language}</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {Object.entries(LANG_NAMES).map(([k,v]) => (
              <button key={k} onClick={() => setLang(k)} style={{ ...S.btn, padding:"7px 16px",
                background: lang===k ? "#c07b54" : "#eee", color: lang===k ? "#fff" : "#555" }}>{v}</button>
            ))}
          </div>
        </div>

        {/* Rate App */}
        <div style={{ ...S.card, marginBottom:14 }}>
          <div style={{ fontWeight:700, marginBottom:8, color:"#555" }}>⭐ {t.rateApp}</div>
          <button style={{ ...S.btn, ...S.primary }} onClick={() => setShowRateApp(true)}>{t.rateApp}</button>
        </div>

        {/* Report */}
        <div style={{ ...S.card, marginBottom:14 }}>
          <div style={{ fontWeight:700, marginBottom:8, color:"#555" }}>🚨 {t.report}</div>
          <button style={{ ...S.btn, background:"#ffeaea", color:"#c0392b" }} onClick={() => setShowReport(t.appName)}>{t.report}</button>
        </div>

        {/* Logout */}
        <div style={S.card}>
          <button style={{ ...S.btn, background:"#ffeaea", color:"#c0392b", width:"100%" }}
            onClick={() => { setCurrentUser(null); setPage("login"); }}>{t.logout}</button>
        </div>
      </div>
      <BottomNav />
    </div>
  );

  // PROFILE
  if (page === "profile") {
    const pu = viewProfile ? (getUserById(viewProfile.id) || viewProfile) : currentUser;
    const isOwn = pu.id === currentUser.id;
    const myA = userAnimals(pu.id);
    return (
      <div style={{ ...S.page, padding:16 }}>
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet" />
        {showReport && <ReportModal targetLabel={pu.name} />}
        <div style={{ maxWidth:480, margin:"0 auto", paddingBottom:80 }}>
          <button onClick={() => { setPage("home"); setViewProfile(null); }} style={{ ...S.btn, ...S.secondary, padding:"7px 14px", marginBottom:14 }}>← {t.back}</button>
          <div style={{ ...S.card, textAlign:"center", marginBottom:14 }}>
            <Avatar name={pu.name} size={68} />
            <h2 style={{ fontWeight:900, margin:"10px 0 4px", color:"#333" }}>{pu.name}</h2>
            <Stars rating={Math.round(pu.rating)} />
            <div style={{ fontSize:12, color:"#aaa", marginBottom:12 }}>({pu.ratingCount})</div>

            {isOwn
              ? bioEdit
                ? <div style={{ marginBottom:12 }}>
                    <textarea style={{ ...S.input, minHeight:70, resize:"vertical" }} value={bioText} onChange={e => setBioText(e.target.value)} placeholder={t.addBio} />
                    <button style={{ ...S.btn, ...S.primary, marginTop:6 }} onClick={saveBio}>{t.save}</button>
                  </div>
                : <div onClick={() => { setBioText(pu.bio); setBioEdit(true); }}
                    style={{ color: pu.bio ? "#555" : "#bbb", fontSize:14, marginBottom:12, cursor:"pointer", padding:8, background:"#fdf6ee", borderRadius:8 }}>
                    {pu.bio || t.addBio}
                  </div>
              : <div style={{ color:"#555", fontSize:14, marginBottom:12 }}>{pu.bio}</div>
            }

            <div style={{ display:"flex", justifyContent:"center", gap:28, marginBottom:16 }}>
              {[{v:pu.followers, l:t.followers},{v:pu.deals, l:t.deals},{v:myA.length, l:t.ads}].map(({v,l}) => (
                <div key={l} style={{ textAlign:"center" }}>
                  <div style={{ fontWeight:900, fontSize:20, color:"#c07b54" }}>{v}</div>
                  <div style={{ fontSize:11, color:"#aaa" }}>{l}</div>
                </div>
              ))}
            </div>

            {!isOwn && (
              <div style={{ display:"flex", gap:8, justifyContent:"center", flexWrap:"wrap" }}>
                <button style={{ ...S.btn, ...S.primary }} onClick={() => handleFollow(pu.id)}>{t.follow}</button>
                <Stars rating={0} onChange={s => handleRateUser(pu.id, s)} />
                <button style={{ ...S.btn, background:"#ffeaea", color:"#c0392b", padding:"8px 14px" }}
                  onClick={() => setShowReport(pu.name)}>🚨 {t.report}</button>
              </div>
            )}
          </div>

          <h3 style={{ fontWeight:900, color:"#555", marginBottom:10 }}>{t.ads} ({myA.length})</h3>
          {myA.length === 0
            ? <div style={{ ...S.card, textAlign:"center", color:"#bbb", padding:36 }}>{t.noAds}</div>
            : myA.map(a => (
              <div key={a.id} style={{ ...S.card, marginBottom:10, display:"flex", gap:12, alignItems:"center" }}>
                <img src={a.imageUrl} alt={a.name} style={{ width:60, height:60, borderRadius:10, objectFit:"cover", flexShrink:0 }} />
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700 }}>{a.name}</div>
                  <div style={{ fontSize:12, color:"#888" }}>{getCatLabel(a.category)} • {a.age}</div>
                  {(a.country || a.city) && <div style={{ fontSize:12, color:"#aaa" }}>📍 {[a.city, a.country].filter(Boolean).join(", ")}</div>}
                  <div style={{ fontWeight:700, color: a.isFree ? "#27ae60" : "#c07b54", fontSize:13 }}>{a.price}</div>
                </div>
              </div>
            ))
          }
        </div>
        <BottomNav />
      </div>
    );
  }

  // HOME
  return (
    <div style={S.page}>
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700;900&display=swap" rel="stylesheet" />
      {showReport && <ReportModal targetLabel={showReport} />}

      {/* Header */}
      <div style={{ background:"#fff", boxShadow:"0 2px 12px #0001", padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:8 }}>
          <span style={{ fontSize:22 }}>🐾</span>
          <span style={{ fontWeight:900, fontSize:17, color:"#c07b54" }}>{t.appName}</span>
        </div>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          <button style={{ ...S.btn, ...S.primary, padding:"7px 14px", fontSize:20, borderRadius:12 }} onClick={() => setPage("add")}>+</button>
          <div onClick={() => { setViewProfile(null); setPage("profile"); }} style={{ cursor:"pointer" }}>
            <Avatar name={currentUser.name} size={34} />
          </div>
        </div>
      </div>

      <div style={{ maxWidth:600, margin:"0 auto", padding:"16px 14px 80px" }}>
        {/* Filter */}
        <div style={{ display:"flex", gap:7, marginBottom:16, overflowX:"auto", paddingBottom:2 }}>
          {CATS.map(c => (
            <button key={c.key} style={{ ...S.btn, flexShrink:0, padding:"6px 14px", fontSize:13, borderRadius:20,
              background: filterCat===c.key ? "#c07b54" : "#fff", color: filterCat===c.key ? "#fff" : "#888",
              border: filterCat===c.key ? "none" : "1.5px solid #e0d5c8" }}
              onClick={() => setFilterCat(c.key)}>{c.label}</button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0
          ? <div style={{ textAlign:"center", color:"#bbb", padding:"70px 0" }}>
              <div style={{ fontSize:52 }}>🐾</div>
              <div style={{ fontSize:17, fontWeight:700, marginTop:10 }}>{t.noAds}</div>
              <div style={{ fontSize:13, marginTop:4 }}>{t.addFirst}</div>
            </div>
          : <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 }}>
              {filtered.map(a => {
                const owner = getUserById(a.ownerId);
                return (
                  <div key={a.id} style={{ ...S.card, padding:0, overflow:"hidden" }}>
                    <div style={{ position:"relative" }}>
                      <img src={a.imageUrl} alt={a.name} style={{ width:"100%", height:130, objectFit:"cover", display:"block" }} />
                      <span style={{ position:"absolute", top:7, right:7, background: a.isFree ? "#27ae60" : "#c07b54",
                        color:"#fff", borderRadius:20, padding:"2px 9px", fontSize:11, fontWeight:700 }}>{a.price}</span>
                      <span style={{ position:"absolute", top:7, left:7, background:"#fff9", borderRadius:20,
                        padding:"2px 9px", fontSize:11, fontWeight:700, color:"#555" }}>{getCatLabel(a.category)}</span>
                    </div>
                    <div style={{ padding:10 }}>
                      <div style={{ fontWeight:900, fontSize:15, marginBottom:1 }}>{a.name}</div>
                      <div style={{ fontSize:11, color:"#aaa" }}>{a.age}</div>
                      {(a.city || a.country) && <div style={{ fontSize:11, color:"#888", marginTop:2 }}>📍 {[a.city, a.country].filter(Boolean).join(", ")}</div>}
                      <div style={{ display:"flex", alignItems:"center", gap:5, margin:"7px 0" }}>
                        <div style={{ cursor:"pointer" }} onClick={() => { if(owner){setViewProfile(owner);setPage("profile");} }}>
                          <Avatar name={a.ownerName} size={20} />
                        </div>
                        <span style={{ fontSize:11, color:"#888", cursor:"pointer" }} onClick={() => { if(owner){setViewProfile(owner);setPage("profile");} }}>{a.ownerName}</span>
                        <button style={{ marginRight:"auto", marginLeft: dir==="rtl" ? "auto" : 0, background:"none", border:"none", cursor:"pointer", color:"#aaa", fontSize:14 }}
                          onClick={() => setShowReport(a.name)}>🚨</button>
                      </div>
                      {/* Chat button */}
                      {a.ownerId !== currentUser.id && (
                        <button style={{ ...S.btn, ...S.primary, width:"100%", fontSize:13, padding:"7px 0" }}
                          onClick={() => { setChatTarget({ userId: a.ownerId, animalId: a.id }); setPage("chat"); }}>
                          💬 {t.chat}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
        }
      </div>

      <BottomNav />
    </div>
  );
}
