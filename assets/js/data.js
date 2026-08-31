/* ============================================================
   MOCK DATA — Design & Printing Service Platform Prototype
   All data below is static/mock. No backend, no real APIs.
   ============================================================ */

const PIPELINE_STAGES = [
  { key: "pending_payment", label: "Pending Payment Approval", short: "Payment Pending" },
  { key: "payment_verified", label: "Payment Verified", short: "Payment Verified" },
  { key: "design_progress", label: "Design In Progress", short: "Designing" },
  { key: "design_approved", label: "Design Approved", short: "Design Approved" },
  { key: "printing", label: "Printing In Progress", short: "Printing" },
  { key: "quality_check", label: "Quality Check", short: "QC" },
  { key: "ready_dispatch", label: "Ready for Dispatch", short: "Ready" },
  { key: "dispatched", label: "Dispatched / Completed", short: "Completed" },
];

function stageIndex(key){ return PIPELINE_STAGES.findIndex(s => s.key === key); }

// Print Only jobs skip Design In Progress & Design Approved
function pipelineForJobType(jobType){
  if (jobType === "Print Only") {
    return PIPELINE_STAGES.filter(s => s.key !== "design_progress" && s.key !== "design_approved");
  }
  return PIPELINE_STAGES;
}

const CUSTOMERS = [
  { id:"C001", name:"Nimal Perera", email:"nimal.perera@gmail.com", phone:"077 214 5632", whatsapp:"077 214 5632", city:"Colombo", orders:4, active:1, completed:3, lastOrder:"2026-08-22" },
  { id:"C002", name:"Kavindi Fernando", email:"kavindi.f@gmail.com", phone:"071 556 8890", whatsapp:"071 556 8890", city:"Kandy", orders:2, active:1, completed:1, lastOrder:"2026-08-25" },
  { id:"C003", name:"Ruwan Jayasuriya", email:"ruwan.jaya@yahoo.com", phone:"076 332 9981", whatsapp:"076 332 9981", city:"Galle", orders:6, active:2, completed:4, lastOrder:"2026-08-27" },
  { id:"C004", name:"Dilani Wickramasinghe", email:"dilani.w@gmail.com", phone:"070 118 4472", whatsapp:"070 118 4472", city:"Kalutara", orders:1, active:0, completed:1, lastOrder:"2026-08-10" },
  { id:"C005", name:"Chathura Bandara", email:"chathura.b@outlook.com", phone:"075 443 2210", whatsapp:"075 443 2210", city:"Negombo", orders:3, active:1, completed:2, lastOrder:"2026-08-29" },
  { id:"C006", name:"Sanduni Rathnayake", email:"sanduni.r@gmail.com", phone:"072 998 1123", whatsapp:"072 998 1123", city:"Colombo", orders:5, active:1, completed:4, lastOrder:"2026-08-20" },
  { id:"C007", name:"Isuru Gunasekara", email:"isuru.g@gmail.com", phone:"077 665 3390", whatsapp:"077 665 3390", city:"Matara", orders:2, active:0, completed:2, lastOrder:"2026-07-30" },
  { id:"C008", name:"Tharushi Silva", email:"tharushi.silva@gmail.com", phone:"076 221 7784", whatsapp:"076 221 7784", city:"Kandy", orders:3, active:1, completed:2, lastOrder:"2026-08-26" },
  { id:"C009", name:"Lahiru Madushanka", email:"lahiru.m@gmail.com", phone:"071 887 6612", whatsapp:"071 887 6612", city:"Gampaha", orders:1, active:1, completed:0, lastOrder:"2026-08-30" },
  { id:"C010", name:"Nadeesha Kumari", email:"nadeesha.k@gmail.com", phone:"078 334 5521", whatsapp:"078 334 5521", city:"Colombo", orders:7, active:2, completed:5, lastOrder:"2026-08-28" },
  { id:"C011", name:"Kasun Peiris", email:"kasun.peiris@gmail.com", phone:"077 112 8843", whatsapp:"077 112 8843", city:"Kurunegala", orders:2, active:1, completed:1, lastOrder:"2026-08-24" },
  { id:"C012", name:"Ishara Dissanayake", email:"ishara.d@gmail.com", phone:"075 667 9902", whatsapp:"075 667 9902", city:"Galle", orders:4, active:0, completed:4, lastOrder:"2026-08-05" },
  { id:"C013", name:"Buddhika Karunaratne", email:"buddhika.k@gmail.com", phone:"070 445 1198", whatsapp:"070 445 1198", city:"Colombo", orders:3, active:1, completed:2, lastOrder:"2026-08-29" },
  { id:"C014", name:"Anjali Weerasinghe", email:"anjali.w@gmail.com", phone:"077 998 4432", whatsapp:"077 998 4432", city:"Kalutara", orders:2, active:1, completed:1, lastOrder:"2026-08-27" },
  { id:"C015", name:"Sachini Abeywardena", email:"sachini.a@gmail.com", phone:"071 223 6690", whatsapp:"071 223 6690", city:"Colombo", orders:5, active:2, completed:3, lastOrder:"2026-08-30" },
  { id:"C016", name:"Roshan Ekanayake", email:"roshan.e@gmail.com", phone:"076 554 3321", whatsapp:"076 554 3321", city:"Kandy", orders:1, active:1, completed:0, lastOrder:"2026-08-28" },
  { id:"C017", name:"Pavani Rajapaksha", email:"pavani.r@gmail.com", phone:"078 887 2214", whatsapp:"078 887 2214", city:"Matara", orders:3, active:0, completed:3, lastOrder:"2026-07-22" },
  { id:"C018", name:"Damith Senanayake", email:"damith.s@gmail.com", phone:"077 332 1187", whatsapp:"077 332 1187", city:"Colombo", orders:6, active:1, completed:5, lastOrder:"2026-08-21" },
  { id:"C019", name:"Hansika Liyanage", email:"hansika.l@gmail.com", phone:"072 445 6690", whatsapp:"072 445 6690", city:"Negombo", orders:2, active:1, completed:1, lastOrder:"2026-08-25" },
  { id:"C020", name:"Janith Amarasekara", email:"janith.a@gmail.com", phone:"075 112 8834", whatsapp:"075 112 8834", city:"Gampaha", orders:4, active:2, completed:2, lastOrder:"2026-08-30" },
  { id:"C021", name:"Yasodha Rupasinghe", email:"yasodha.r@gmail.com", phone:"071 776 4432", whatsapp:"071 776 4432", city:"Colombo", orders:3, active:1, completed:2, lastOrder:"2026-08-19" },
  { id:"C022", name:"Malaka Herath", email:"malaka.h@gmail.com", phone:"077 443 9021", whatsapp:"077 443 9021", city:"Kurunegala", orders:2, active:0, completed:2, lastOrder:"2026-07-18" },
];

const STAFF = [
  { id:"S001", name:"Suresh Fernando", role:"Super Admin", email:"suresh.f@printcraft.lk", phone:"077 100 2001", status:"Active", initials:"SF", jobs:0 },
  { id:"S002", name:"Priyantha Ranasinghe", role:"Management Officer", email:"priyantha.r@printcraft.lk", phone:"077 100 2002", status:"Active", initials:"PR", jobs:0 },
  { id:"S003", name:"Amali Gunasekara", role:"Management Officer", email:"amali.g@printcraft.lk", phone:"077 100 2003", status:"Active", initials:"AG", jobs:0 },
  { id:"S004", name:"Nuwan Dias", role:"Graphic Designer", email:"nuwan.d@printcraft.lk", phone:"077 100 2004", status:"Active", initials:"ND", jobs:8 },
  { id:"S005", name:"Ashani Wijeratne", role:"Graphic Designer", email:"ashani.w@printcraft.lk", phone:"077 100 2005", status:"Active", initials:"AW", jobs:6 },
  { id:"S006", name:"Chamara Kodikara", role:"Graphic Designer", email:"chamara.k@printcraft.lk", phone:"077 100 2006", status:"Active", initials:"CK", jobs:5 },
  { id:"S007", name:"Ruvini Athukorala", role:"Product Technician", email:"ruvini.a@printcraft.lk", phone:"077 100 2007", status:"Active", initials:"RA", jobs:9 },
  { id:"S008", name:"Sampath Wickrama", role:"Product Technician", email:"sampath.w@printcraft.lk", phone:"077 100 2008", status:"Active", initials:"SW", jobs:7 },
  { id:"S009", name:"Dinusha Perera", role:"Business Development Officer", email:"dinusha.p@printcraft.lk", phone:"077 100 2009", status:"Active", initials:"DP", jobs:0 },
  { id:"S010", name:"Harindra Silva", role:"Business Development Officer", email:"harindra.s@printcraft.lk", phone:"077 100 2010", status:"On Leave", initials:"HS", jobs:0 },
];

const PRODUCTS = [
  { id:"P001", name:"Premium Business Cards", category:"Business Cards", price:1500, unit:"per 100 cards", img:"business-cards", desc:"350gsm matte or gloss laminated business cards with sharp, vibrant printing.", sizes:["3.5 x 2 in","90 x 50 mm"], materials:["350gsm Art Card","Textured Cotton"], finishing:["Matte Lamination","Gloss Lamination","Spot UV","Gold Foil"] },
  { id:"P002", name:"A5 Flyers", category:"Flyers", price:3500, unit:"per 500", img:"flyers", desc:"Full-colour double-sided flyers, perfect for promotions and events.", sizes:["A5","A6","DL"], materials:["150gsm Gloss Art","200gsm Matte"], finishing:["Gloss","Matte","None"] },
  { id:"P003", name:"Tri-Fold Brochures", category:"Brochures", price:6500, unit:"per 250", img:"brochures", desc:"Professional tri-fold brochures for corporate and product marketing.", sizes:["A4 Tri-fold","DL Tri-fold"], materials:["170gsm Art Paper","250gsm Art Card"], finishing:["Gloss Lamination","Matte Lamination"] },
  { id:"P004", name:"A2 Event Posters", category:"Posters", price:1200, unit:"per piece", img:"posters", desc:"Large-format, vivid full-colour posters for events and campaigns.", sizes:["A1","A2","A3"], materials:["150gsm Poster Paper","Synthetic Waterproof"], finishing:["None","Lamination"] },
  { id:"P005", name:"PVC Roll-Up Banners", category:"Banners", price:8500, unit:"per unit", img:"banners", desc:"Durable roll-up banner stands including printed vinyl and stand.", sizes:["85 x 200 cm","60 x 160 cm"], materials:["Flex Vinyl","Backlit Vinyl"], finishing:["Eyelets","Pole Pocket"] },
  { id:"P006", name:"Die-Cut Stickers", category:"Stickers", price:2500, unit:"per 100", img:"stickers", desc:"Custom shaped waterproof vinyl stickers, indoor/outdoor durable.", sizes:["5 x 5 cm","10 x 10 cm","Custom"], materials:["Vinyl Gloss","Vinyl Matte","Clear"], finishing:["Die-Cut","Kiss-Cut"] },
  { id:"P007", name:"Wedding Invitation Cards", category:"Invitations", price:9500, unit:"per 100", img:"invitations", desc:"Elegant custom-designed invitation cards with premium finishing.", sizes:["5 x 7 in","A5"], materials:["300gsm Pearl Card","Textured Cotton"], finishing:["Gold Foil","Embossing","Laser Cut"] },
  { id:"P008", name:"Custom Product Boxes", category:"Packaging", price:14500, unit:"per 100", img:"packaging", desc:"Branded custom packaging boxes for retail and e-commerce products.", sizes:["Small (10x10x5cm)","Medium (15x15x8cm)","Custom"], materials:["300gsm Duplex Board","Corrugated"], finishing:["Matte Lamination","Spot UV Logo"] },
  { id:"P009", name:"Vehicle & Shop Signage", category:"Custom Printing", price:12000, unit:"per sq.ft", img:"signage", desc:"Custom vinyl signage and vehicle wraps, cut and installed to size.", sizes:["Custom"], materials:["Reflective Vinyl","One-Way Vision","Acrylic Panel"], finishing:["Laminated","UV Protected"] },
  { id:"P010", name:"ID Cards & Lanyards", category:"Custom Printing", price:4200, unit:"per 50", img:"idcards", desc:"PVC ID cards with lanyards for staff, students and events.", sizes:["CR80 Standard"], materials:["PVC 0.76mm"], finishing:["Gloss","Matte","Hole Punch"] },
];

const CATEGORIES = ["Business Cards","Flyers","Brochures","Posters","Banners","Stickers","Invitations","Packaging","Custom Printing"];

// ------- helpers to build 30+ realistic orders -------
const _customerNames = CUSTOMERS.map(c=>c.name);
const _products = PRODUCTS;
const _jobTypes = ["Full Service","Design Only","Print Only"];
const _designers = ["Nuwan Dias","Ashani Wijeratne","Chamara Kodikara"];
const _technicians = ["Ruvini Athukorala","Sampath Wickrama"];
const _bdos = ["Dinusha Perera","Harindra Silva"];
const _priorities = ["Normal","High","Urgent"];

function fmtMoney(n){ return "LKR " + n.toLocaleString("en-LK"); }

const ORDERS = [];
(function buildOrders(){
  const stageWeights = ["pending_payment","payment_verified","design_progress","design_approved","printing","quality_check","ready_dispatch","dispatched"];
  let seq = 401;
  for (let i=0;i<34;i++){
    const cust = CUSTOMERS[i % CUSTOMERS.length];
    const prod = _products[i % _products.length];
    let jobType = _jobTypes[i % 3];
    let stage = stageWeights[i % stageWeights.length];
    if (jobType === "Print Only" && (stage === "design_progress" || stage === "design_approved")) {
      stage = "printing";
    }
    seq++;
    const ref = "JOB-2026-" + String(10000+seq).slice(1);
    const qty = [100,250,500,50,1,20][i % 6];
    const amount = prod.price * (qty > 1 ? Math.max(1, Math.round(qty/100)) : 1) + (i%5===0?1500:0);
    const day = 2 + (i % 27);
    const orderDate = "2026-08-" + String(day).padStart(2,"0");
    const paymentMethod = i % 3 === 0 ? "PayHere" : "Bank Transfer";
    const paymentStatus = stage === "pending_payment" ? "Pending Verification" : "Verified";
    const isAI = jobType === "Print Only" ? (i % 4 === 0 ? "Yes" : "No") : null;
    ORDERS.push({
      ref, customer: cust.name, customerId: cust.id, product: prod.name, category: prod.category,
      jobType, stage, qty, amount, orderDate,
      expected: "2026-09-" + String((day % 28)+1).padStart(2,"0"),
      paymentMethod, paymentStatus,
      assignedDesigner: jobType !== "Print Only" ? _designers[i % _designers.length] : null,
      assignedTechnician: _technicians[i % _technicians.length],
      priority: _priorities[i % 3],
      source: i % 3 === 0 ? "BDO Brought" : (i % 3 === 1 ? "Staff Referred" : "Walk In Physical"),
      bdo: i % 3 === 0 ? _bdos[i % 2] : null,
      isAiGenerated: isAI,
      city: cust.city,
      sla: ["On Track","On Track","Due Soon","Overdue"][i % 7 === 0 ? 3 : (i % 4)],
    });
  }
})();

function getOrder(ref){ return ORDERS.find(o => o.ref === ref); }
function stageBadgeClass(stage){
  const map = {
    pending_payment:"badge-pending", payment_verified:"badge-progress", design_progress:"badge-progress",
    design_approved:"badge-progress", printing:"badge-progress", quality_check:"badge-progress",
    ready_dispatch:"badge-progress", dispatched:"badge-completed"
  };
  return map[stage] || "badge-neutral";
}
function stageLabel(stage){ const s = PIPELINE_STAGES.find(x=>x.key===stage); return s? s.label : stage; }

const NOTIFICATION_TEMPLATES = [
  "Order Created","Payment Verified","Proof Ready","Revision Requested","Design Approved",
  "Printing Started","Quality Check","Ready for Dispatch","Completed"
];

const CURRENT_USER = {
  role: localStorage.getItem("__proto_role") || "Customer",
  name: localStorage.getItem("__proto_name") || "Nimal Perera",
};
