// Import tất cả hình ảnh sản phẩm từ thư mục assets
import wheyGold from '../../assets/Wheyprotein/whey gold.png' // Whey Protein Gold Standard
import d3k2 from '../../assets/Vitamin/D3K2.png' // Vitamin D3K2
import preworkout from '../../assets/Pre workout/pre workout.png' // Pre-workout
import omega3 from '../../assets/Omega-3/omega3-1.png' // Omega-3
import omega3Sports from '../../assets/Omega-3/sports omega-3.png' // Omega-3 Sports
import omega3Biotech from '../../assets/Omega-3/biotech-usa-mega-omega-3.png' // Biotech Omega-3
import omega3Nutricost from '../../assets/Omega-3/nutricost-omega3.png' // Nutricost Omega-3
import omega3Now from '../../assets/Omega-3/now-omega-3.png' // NOW Omega-3
import omega3Spring from '../../assets/Omega-3/omega3 spring.png' // Spring Omega-3
import omega3Ostrovit from '../../assets/Omega-3/ostrovit-omega3-d3-k2.png' // Ostrovit Omega-3
import omega3Webber from '../../assets/Omega-3/webber-naturals-triple-strength-omega-3.png' // Webber Omega-3
import creatine from '../../assets/Creatine/creatine.png' // Creatine
import amixCreatine from '../../assets/Creatine/amix-creatine-monohydrate.png' // AMIX Creatine
import pvlCreatine from '../../assets/Creatine/PVL creatine.png' // PVL Creatine
import ostrovitCreatine from '../../assets/Creatine/creatine ostrovit.png' // Ostrovit Creatine
import mutantCreakong from '../../assets/Creatine/mutant-creakong.png' // Mutant Creatine
import vitaxtrongCreatine from '../../assets/Creatine/vitaxtrong-super-micronized-creatine.png' // Vitaxtrong Creatine
import kevinLevroneCreatine from '../../assets/Creatine/kevin-levrone-gold-creatine.png' // Kevin Levrone Creatine
import nowCreatine from '../../assets/Creatine/now-creatine-monohydrate.png' // NOW Creatine
import nuTrend from '../../assets/Wheyprotein/nutrend-100.png' // Nutrend Whey
import hydroZero from '../../assets/Wheyprotein/hydrozero.png' // Hydro Zero Whey
import isoGold from '../../assets/Wheyprotein/Isogold.png' // ISO Gold Whey
import mutantIsoSurge from '../../assets/Wheyprotein/mutant-iso.png' // Mutant ISO Surge
import appliedWhey from '../../assets/Wheyprotein/applied-diet.png' // Applied Whey
import kevinLevrone from '../../assets/Wheyprotein/levro.png' // Kevin Levrone Whey
import ruleOne from '../../assets/Wheyprotein/rule1.png' // Rule One Whey
import nutrabolics from '../../assets/Wheyprotein/hydropure.png' // Nutrabolics Whey
import wheyNitro from '../../assets/Wheyprotein/muscletech whey.png' // MuscleTech Whey
import nutrixIsoFit from '../../assets/Wheyprotein/nutrex-isofit.png' // Nutrex IsoFit
import labradaIsoWhey from '../../assets/Wheyprotein/labrada whey.png' // Labrada Whey
import ostroVit from '../../assets/Wheyprotein/ostrovit whey.png' // Ostrovit Whey
import nutriCost from '../../assets/Wheyprotein/nutricost-grass-fed-whey.png' // Nutricost Whey
import perfectDiesel from '../../assets/Wheyprotein/diesel whey.png' // Perfect Diesel Whey
import wheyBPI from '../../assets/Wheyprotein/bpi-iso-hd.png' // BPI Whey
import amixD3K2 from '../../assets/Vitamin/amix-d3-k2-mg-zn.png' // AMIX D3K2
import bioTechd3k2 from '../../assets/Vitamin/biotechd3k2.png' // Biotech D3K2
import nowD3K2 from '../../assets/Vitamin/now-vitamin-d3-k2.png' // NOW D3K2
import ostroVitD3K2 from '../../assets/Vitamin/ostrovit d3k2.png' // Ostrovit D3K2
import vitaminD3K2 from '../../assets/Vitamin/vitamink2+d3.png' // Vitamin D3K2
import D3K2Nutricost from '../../assets/Vitamin/nutricost k2d3.png' // Nutricost D3K2
import preworkout2 from '../../assets/Pre workout/pre-workout-the-curse.png' // Pre-workout The Curse
import preworkoutC4 from '../../assets/Pre workout/cellucor-icy.png' // C4 Pre-workout
import preworkoutBase from '../../assets/Pre workout/nutrabio-base.png' // Nutrabio Base
import preworkoutGhost from '../../assets/Pre workout/ghost-legend.png' // Ghost Legend
import preworkoutPump from '../../assets/Pre workout/applied-pump-3g.png' // Applied Pump
import preworkoutBuck from '../../assets/Pre workout/bucked-up.png' // Bucked Up
import preworkoutLon from '../../assets/Pre workout/abe-pre-workout-lon.png' // ABE Pre-workout
import massSerious from '../../assets/Mass/mass serious.png' // Serious Mass
import biotechHyperMass from '../../assets/Mass/biotech-hyper-mass.png' // Biotech Hyper Mass
import appliedMass from '../../assets/Mass/sua-tang-can-applied-nutrition.png' // Applied Mass
import mutantMass from '../../assets/Mass/mutant mass.png' // Mutant Mass
import labradaMass from '../../assets/Mass/labrada-muscle-mass-gainer.png' // Labrada Mass
import onSeriousMass from '../../assets/Mass/on-serious-mass-chocolate.png' // ON Serious Mass
import hulkMass from '../../assets/Mass/hulk mass.png' // Hulk Mass
import bpiBulkMuscle from '../../assets/Mass/bpi-bulk-muscle.png' // BPI Bulk Muscle




// Dữ liệu sản phẩm - Mảng chứa thông tin tất cả sản phẩm
export const productsData = [
  // Whey Protein - ID từ 1-16
  {
    id: 1, // ID duy nhất cho sản phẩm
    name: "Whey Protein Gold Standard", // Tên sản phẩm
    price: "2.200.000₫", // Giá sản phẩm
    description: "Protein chất lượng cao, 24g protein/serving", // Mô tả sản phẩm
    image: wheyGold, // Hình ảnh sản phẩm
    category: "Whey Protein" // Danh mục sản phẩm
  },
  {
    id: 2,
    name: "Nutrend 100% Whey Protein",
    price: "1.690.000₫",
    description: "Thành phần chính: Grass-Fed Cows, Whey Isolate, Whey Concentrate, 23g protein/serving",
    image: nuTrend,
    category: "Whey Protein"
  },
  {
    id: 3,
    name: "BioTechUSA Hydro Whey Zero",
    price: "2.300.000₫",
    description: "Whey Hydrolyzed & Whey Isolate,18g protein/serving",
    image: hydroZero,
    category: "Whey Protein"
  },
  {
    id: 4,
    name: "PVL ISO Gold - Premium Whey Protein With Probiotic",
    price: "2.550.000₫",
    description: "27g Protein: Whey Isolate & Hydrolysate",
    image: isoGold,
    category: "Whey Protein"
  },
  {
    id: 5,
    name: "Mutant ISO Surge",
    price: "2.300.000₫",
    description: "Whey Protein Isolate & Hydrolysate, 25g protein/serving",
    image: mutantIsoSurge,
    category: "Whey Protein"
  },
  {
    id: 6,
    name: "Applied Diet Whey Protein",
    price: "1.490.000₫",
    description: "Hỗ trợ xây dựng và duy trì cơ bắp",
    image: appliedWhey,
    category: "Whey Protein"
  },
  {
    id: 7,
    name: "Kevin Levrone Levro ISO Whey",
    price: "1.590.000₫",
    description: "100% whey protein isolate, 25g protein hỗ trợ xây dựng cơ bắp ",
    image: kevinLevrone,
    category: "Whey Protein"
  },
  {
    id: 8,
    name: "Rule 1 Protein",
    price: "2.050.000₫",
    description: "Whey Protein Isolate & Hydrolyzate, 25G Protein (tỷ lệ đạt 83.3%) cơ bắp ",
    image: ruleOne,
    category: "Whey Protein"
  },
  {
    id: 9,
    name: "Nutrabolics Hydropure",
    price: "2.550.000₫",
    description: "100% Hydrolyzed Whey Protein, 28g Protein",
    image: nutrabolics,
    category: "Whey Protein"
  },
  {
    id: 10,
    name: "MuscleTech NITRO-TECH",
    price: "1.650.000₫",
    description: "30G Protein chất lượng 3G Creatine Monohydrate tăng sức mạnh và hiệu suất",
    image: wheyNitro,
    category: "Whey Protein"
  },
  {
    id: 11,
    name: "Nutrex ISOFIT",
    price: "1.990.000₫",
    description: "25g Protein, 12g EAA, 5.8g BCAA, 100% Instantized Whey Isolate ",
    image: nutrixIsoFit,
    category: "Whey Protein"
  },
  {
    id: 12,
    name: "Labrada Iso Whey, 100% Whey Protein Isolate",
    price: "2.250.000₫",
    description: "100% Whey Protein Isolate, 25g Protein",
    image: labradaIsoWhey,
    category: "Whey Protein"
  },
  {
    id: 13,
    name: "OstroVit Whey Protein",
    price: "1.390.000₫",
    description: "100% Whey Protein Isolate, 25g Protein, 5.5g BCAA, 4g Glutamine",
    image: ostroVit,
    category: "Whey Protein"
  },
  {
    id: 14,
    name: "Nutricost Grass-Fed Whey Protein Isolate Powder",
    price: "1.990.000₫",
    description: "100% Whey Protein Isolate, Whey Protein từ bò ăn cỏ, Hormone Free & Non-GMO, 25g Protein, 5.5g BCAA, 4g Glutamine",
    image: nutriCost,
    category: "Whey Protein"
  },
  {
    id: 15,
    name: "Perfect Diesel Whey Isolate New Zealand",
    price: "3.050.000₫",
    description: "27g protein (tỷ lệ 90%) 13g EAA, 7g BCAA, Nguồn nguyên liệu vượt trội đến từ sữa bò New Zealand",
    image: perfectDiesel,
    category: "Whey Protein"
  },
  {
    id: 16,
    name: "BPI ISO HD 100% Pure Isolate Protein",
    price: "1.850.000₫",
    description: "100% Whey Protein Isolate 25g Protein, 120 Calories, 1G Fat & Sugar Free",
    image: wheyBPI,
    category: "Whey Protein"
  },

  // Vitamin - ID từ 17-23
  {
    id: 17,
    name: "Sports Research D3 + K2",
    price: "490.000₫",
    description: "Giảm tiêu xương, Chống mất cơ, Tăng cường hệ miễn dịch",
    image: d3k2,
    category: "Vitamin"
  },
  {
    id: 18,
    name: "Amix D3-K2-Mg-Zn",
    price: "440.000₫",
    description: "50mcg vitamin D3, 15mg Kẽm, 125mg Magie, 15mcg vitamin K2",
    image: amixD3K2,
    category: "Vitamin"
  },
  {
    id: 19,
    name: "BioTech USA Ca D3 K2",
    price: "500.000₫",
    description: "Canxi, Vitamin D3, Vitamin K2, Phosphorus",
    image: bioTechd3k2,
    category: "Vitamin"
  },
  {
    id: 20,
    name: "Now Vitamin D-3 & K-2, 1,000 IU / 45 mcg",
    price: "320.000₫",
    description: "1000 IU Vitamin D3 và 45 mcg Vitamin K2 (MK-4), Tối ưu khả năng hấp thụ canxi vào xương, hỗ trợ sức khỏe hệ tim mạch",
    image: nowD3K2,
    category: "Vitamin"
  },
  {
    id: 21,
    name: "OstroVit D3-K2",
    price: "220.000₫",
    description: "4000 IU Vitamin D3, 100 mcg Vitamin K2 MK7, Tăng cường sức khỏe hệ xương và tim mạch",
    image: ostroVitD3K2,
    category: "Vitamin"
  },
  {
    id: 22,
    name: "Bronson Vitamin K2 + D3, Vitamin K2 as MK-7",
    price: "260.000₫",
    description: "Cải thiện sức khỏe, tăng cường sức đề kháng, miễn dịch hiệu quả, thúc đẩy xương luôn chắc khỏe, phục hồi chấn thương hiệu quả",
    image: vitaminD3K2,
    category: "Vitamin"
  },
  {
    id: 23,
    name: "Nutricost Vitamin K2 + D3",
    price: "550.000₫",
    description: "Bổ sung Vitamin D3 5000IU & Vitamin K2-MK7, hỗ trợ xương và khớp khỏe mạnh",
    image: D3K2Nutricost,
    category: "Vitamin"
  },

  // Pre-Workout - ID từ 24-31
  {
    id: 24,
    name: "Applied ABE Pre-Workout",
    price: "900.000₫",
    description: "Sử dụng trước khi tập - Hỗ trợ tăng sức mạnh",
    image: preworkout,
    category: "Pre-Workout"
  },
  {
    id: 25,
    name: "Cobra Labs The Curse",
    price: "650.000₫",
    description: "Tỉnh táo, hưng phấn hơn khi tập luyện, tăng sức bền, sức chịu đựng, giảm mỏi mệt cơ",
    image: preworkout2,
    category: "Pre-Workout"
  },
  {
    id: 26,
    name: "Cellucor C4 OriginaI",
    price: "750.000₫",
    description: "Caffeine, Beta-Alanine, Creatine Nitrate (NO3), Arginine AKG, Methylcobalamin, N-Acetyl-L-Tyrosine",
    image: preworkoutC4,
    category: "Pre-Workout"
  },
  {
    id: 27,
    name: "NutraBio Base Pre-Workout",
    price: "850.000₫",
    description: "6g L-Citrulline, 3.2g Beta-Alanine, Siêu tinh khiết, Hydrat hóa tối ưu, Tăng cường tập trung, Hương vị đặc sắc",
    image: preworkoutBase,
    category: "Pre-Workout"
  },
  {
    id: 28,
    name: "GHOST Legend Pre-Workout v4",
    price: "1.050.000₫",
    description: "TOP PRE WORKOUT ĐƯỢC ƯU THÍCH NHẤT, 6000 mg L-Citrulline,, 2000mg L-Tyrosine, 300mg Natural Caffeine,..",
    image: preworkoutGhost,
    category: "Pre-Workout"
  },
  {
    id: 29,
    name: "Applied PUMP 3G Pre-Workout",
    price: "850.000₫",
    description: "Tăng tập trung, tỉnh táo, giảm mệt mỏi, buồn ngủ, Thúc đẩy mức năng lượng, gia tăng sức mạnh, Cải thiện sức bền, sức chịu đựng giúp hoàn thành những bài tập khó hơn",
    image: preworkoutPump,
    category: "Pre-Workout"
  },
  {
    id: 30,
    name: "Bucked Up Pre-Workout",
    price: "995.000₫",
    description: "6000mg Citrulline, 2000mg Beta Alanine, 200mg Caffeine, 200mg Alpha GPC, 100mg Taurine, Hương vị độc đáo",
    image: preworkoutBuck,
    category: "Pre-Workout"
  },
  {
    id: 31,
    name: "Applied Nutrition - Lon ABE, 330ml",
    price: "60.000₫",
    description: "0 đường, 0 calo, 2g Citrulline, 2g Beta-Alanine, 200mg Taurine, 200mg Caffeine, Vitamin B3 & B12 \nSản phẩm đạt chứng nhận ISO 22000, BRC, GMP và Halal",
    image: preworkoutLon,
    category: "Pre-Workout"
  },

  // Omega-3 - ID từ 32-39
  {
    id: 32,
    name: "Sports Research Vegan Omega-3",
    price: "750.000₫",
    description: "Omega 3 tinh khiết từ dầu tảo, 1 viên chứa 210mg DHA và 105mg EPA.",
    image: omega3,
    category: "Omega-3"
  },
  {
    id: 33,
    name: "BioTech USA Mega Omega-3",
    price: "800.000₫",
    description: "Thành phần chính: 800mg Omega 3, 400mg EPA, 300mg DHA, Vitamin E.",
    image: omega3Biotech,
    category: "Omega-3"
  },
  {
    id: 34,
    name: "Nutricost Omega-3",
    price: "790.000₫",
    description: "2500mg Omega-3, 1200mg EPA, 910mg DHA, Không Gluten, không biến đổi gen.",
    image: omega3Nutricost,
    category: "Omega-3"
  },
  {
    id: 35,
    name: "NOW Omega-3 1000mg Fish Oil",
    price: "920.000₫",
    description: "Serving Size: 2 viên \n2000mg Omega3 \n360mg EPA \n240mg DHA \nChất béo tốt cho sức khỏe.",
    image: omega3Now,
    category: "Omega-3"
  },
  {
    id: 36,
    name: "Spring Valley Omega-3",
    price: "450.000₫",
    description: "1000mg Omega-3 \n645mg EPA \n310mg DHA \nHương chanh tự nhiên.",
    image: omega3Spring,
    category: "Omega-3"
  },
  {
    id: 37,
    name: "OstroVit Omega 3 D3 + K2 plus Vitamin E",
    price: "450.000₫",
    description: "330mg EPA, 220mg DHA, 2000 IU Vitamin D3, Hỗ trợ chức năng tim mạch, Hỗ trợ hoạt động bình thường của não,Có tác dụng khoáng hóa trên xương và răng của bạn.",
    image: omega3Ostrovit,
    category: "Omega-3"
  },
  {
    id: 38,
    name: "Webber Naturals Triple Strength Omega-3",
    price: "870.000₫",
    description: "600mg EPA, 300mg DHA, Đạt tiêu chuẩn IVO về độ tinh khiết, hiệu lực và tính bền vững, Dạng Triglyceride dễ hấp thu, Không gây ợ tanh, không để lại dư vị.",
    image: omega3Webber,
    category: "Omega-3"
  },
  {
    id: 39,
    name: "Premium Omega-3 Fish Oil",
    price: "890.000₫",
    description: "1250mg dầu cá, 690mg EPA, 260mg DHA \nKhông chất độn, không biến đổi gen, không hương liệu giả, không tồn dư kim loại nặng, tạp chất.",
    image: omega3Sports,
    category: "Omega-3"
  },

  // Creatine - ID từ 40-47
  {
    id: 40,
    name: "Amix Creatine Monohydrate Creapure \nUnflavored",
    price: "750.000₫",
    description: "3g Creatine Monohydrate Super Micronized \nCông thức Creapure tinh khiết 99.99%.",
    image: amixCreatine,
    category: "Creatine"
  },
  {
    id: 41,
    name: "PVL 100% German Creatine Creapure",
    price: "550.000₫",
    description: "5G Creapure - Creatine Monohydrate \nNguồn Creatine có tỷ lệ hấp thụ lên đến 99%.",
    image: pvlCreatine,
    category: "Creatine"
  },
  {
    id: 42,
    name: "OstroVit Creatine Monohydrate Creapure",
    price: "550.000₫",
    description: "3.5G Creapure - Micronized Creatine Monohydrate \nChứng nhận IFS FOOD \nCologne List \nChứng nhận Kosher, Halal.",
    image: ostrovitCreatine,
    category: "Creatine"
  },
  {
    id: 43,
    name: "Mutant Creakong",
    price: "850.000₫",
    description: "Blend 3 loại Creatine: Monohydrate, MagnaPower®, Tri-Creatine Citrate, tăng sức mạnh vượt trội.",
    image: mutantCreakong,
    category: "Creatine"
  },
  {
    id: 44,
    name: "Vitaxtrong Super Micronized Creatine",
    price: "420.000₫",
    description: "5g micronized creatine \nBột siêu mịn, siêu hấp thụ \n0 calo, 0 carb, 0 suger \nTrọng lượng tăng 10%, giá không đổi \nTăng sức mạnh, sức bền.",
    image: vitaxtrongCreatine,
    category: "Creatine"
  },
  {
    id: 45,
    name: "Kevin Levrone Gold Creatine",
    price: "780.000₫",
    description: "5G/1sv Creatine Monohydrate, hỗ trợ tăng cơ, phục hồi nhanh, tăng sức mạnh.",
    image: kevinLevroneCreatine,
    category: "Creatine"
  },
  {
    id: 46,
    name: "NOW Creatine Monohydrate",
    price: "390.000₫",
    description: "Creatine Monohydrate tinh khiết, hỗ trợ tăng sức mạnh, tăng hiệu suất tập luyện.",
    image: nowCreatine,
    category: "Creatine"
  },
  {
    id: 47,
    name: "Amix Creatine Creapure Chewables",
    price: "640.000₫",
    description: "2500mg Creatine Monohydrate \nCông thức Creapure tinh khiết 99.99% \nDạng kẹo tiện lợi, dễ sử dụng.",
    image: creatine,
    category: "Creatine"
  },

  // Sữa tăng cơ, tăng cân - ID từ 48-55
  {
    id: 48,
    name: "Serious Mass Optimum Nutrition (Socola)",
    price: "2.280.000₫",
    description: "Sữa tăng cân nổi tiếng, 1250 kcal, 50g protein, 252g carb, 25 vitamin và khoáng chất/serving. Hương vị socola thơm ngon.",
    image: onSeriousMass,
    category: "Sữa tăng cơ, tăng cân"
  },
  {
    id: 49,
    name: "Biotech Hyper Mass",
    price: "1.950.000₫",
    description: "Sữa tăng cân, tăng cơ với 65g carb, 21g protein, bổ sung chất xơ, không đường hóa học.",
    image: biotechHyperMass,
    category: "Sữa tăng cơ, tăng cân"
  },
  {
    id: 50,
    name: "Applied Nutrition Critical Mass",
    price: "1.200.000₫",
    description: "Sữa tăng cân, tăng cơ, bổ sung enzyme tiêu hóa, 42g protein, 190g carb/serving.",
    image: appliedMass,
    category: "Sữa tăng cơ, tăng cân"
  },
  {
    id: 51,
    name: "Mutant Mass Muscle Gainer",
    price: "1.550.000₫",
    description: "Sữa tăng cân, tăng cơ, 56g protein, 192g carb, 1100 kcal/serving, hỗ trợ phục hồi và phát triển cơ bắp.",
    image: mutantMass,
    category: "Sữa tăng cơ, tăng cân"
  },
  {
    id: 52,
    name: "Labrada Muscle Mass Gainer",
    price: "1.990.000₫",
    description: "Sữa tăng cân, tăng cơ, 52g protein, 250g carb, 1244 kcal/serving, bổ sung vitamin và khoáng chất.",
    image: labradaMass,
    category: "Sữa tăng cơ, tăng cân"
  },
  {
    id: 53,
    name: "Mass Serious Gainer",
    price: "1.600.000₫",
    description: "Sữa tăng cân, tăng cơ, 50g protein, 250g carb, 1200 kcal/serving, bổ sung vitamin và khoáng chất.",
    image: massSerious,
    category: "Sữa tăng cơ, tăng cân"
  },
  {
    id: 54,
    name: "Perfect Sport HULK Clean Mass Gainer",
    price: "1.680.000₫",
    description: "1030 Calories \n60g Protein tăng cơ nạc chất lượng \nTỷ lệ Carb : Protein là 3:1 \nLượng đường cực thấp \nCung cấp chất béo tốt.",
    image: hulkMass,
    category: "Sữa tăng cơ, tăng cân"
  },
  {
    id: 55,
    name: "Hyper Mass Advanced",
    price: "1.600.000₫",
    description: "Sữa tăng cân, tăng cơ, 54g protein, 210g carb, 1150 kcal/serving, hỗ trợ phục hồi và phát triển cơ bắp.",
    image: bpiBulkMuscle,
    category: "Sữa tăng cơ, tăng cân"
  },
]

// Categories Data
export const categoriesData = [
  "Tất cả", 
  "Whey Protein", 
  "Vitamin", 
  "Pre-Workout", 
  "Omega-3", 
  "Creatine",
  "Sữa tăng cơ, tăng cân"
]

// Featured Products Data (for homepage)
export const featuredProductsData = [
  {
    id: 101,
    name: "Whey Protein Gold Standard",
    price: "2.200.000₫",
    description: "Protein chất lượng cao, 24g protein mỗi serving",
    image: wheyGold
  },
  {
    id: 102,
    name: "Sports Research D3 + K2",
    price: "490.000₫",
    description: "Giảm tiêu xương, Chống mất cơ, Tăng cường hệ miễn dịch",
    image: d3k2
  },
  {
    id: 103,
    name: "Applied ABE Pre-Workout",
    price: "900.000₫",
    description: "Sử dụng trước khi tập - Hỗ trợ tăng sức mạnh",
    image: preworkout
  },
  {
    id: 104,
    name: "Dầu tảo Sports Research Vegan Omega-3",
    price: "750.000₫",
    description: "Hỗ trợ sức khỏe tim mạch, não bộ và thị lực",
    image: omega3
  },
  {
    id: 105,
    name: "Amix Creatine",
    price: "640.000₫",
    description: "Gia tăng sức mạnh cơ bắp, Bơm cơ căng phồng, Hỗ trợ tổng hợp protein",
    image: creatine
  }
]

// Brands Data
export const brandsData = [
  // Always Visible Brands
  {
    id: 1,
    name: "ON",
    subtitle: "OPTIMUM NUTRITION",
    color: "text-black"
  },
  {
    id: 2,
    name: "nutrabolics.",
    subtitle: "",
    color: "text-black"
  },
  {
    id: 3,
    name: "Dymatize",
    subtitle: "PERFECTING ATHLETIC NUTRITION",
    color: "text-red-600"
  },
  {
    id: 4,
    name: "now",
    subtitle: "☀",
    color: "text-green-600",
    icon: "☀"
  },
  {
    id: 5,
    name: "REDCON1",
    subtitle: "",
    color: "text-red-600"
  },
  {
    id: 6,
    name: "R1",
    subtitle: "RULE 1",
    color: "text-orange-500"
  },
  {
    id: 7,
    name: "APPLIED NUTRITION",
    subtitle: "⚛",
    color: "text-black",
    icon: "⚛"
  },
  {
    id: 8,
    name: "AMIX",
    subtitle: "ADVANCED NUTRITION",
    color: "text-red-600"
  },
  
  // Hidden Brands (shown when expanded)
  {
    id: 9,
    name: "bpi",
    subtitle: "SPORTS",
    color: "text-blue-600",
    icon: "⭐",
    hidden: true
  },
  {
    id: 10,
    name: "MHP",
    subtitle: "MAXIMUM HUMAN PERFORMANCE",
    color: "text-blue-600",
    icon: "⭐",
    hidden: true
  },
  {
    id: 11,
    name: "MUTANT",
    subtitle: "Leave Humanity Behind!",
    color: "text-black",
    icon: "☣",
    hidden: true
  },
  {
    id: 12,
    name: "nutricost",
    subtitle: "",
    color: "text-blue-600",
    line: "bg-orange-500",
    hidden: true
  },
  {
    id: 13,
    name: "LABRADA",
    subtitle: "NUTRITION",
    color: "text-red-600",
    hidden: true
  },
  {
    id: 14,
    name: "PVL",
    subtitle: "PURE VITA LABS",
    color: "text-black",
    hidden: true
  },
  {
    id: 15,
    name: "M",
    subtitle: "MUSCLETECH",
    color: "text-black",
    hidden: true
  },
  {
    id: 16,
    name: "Nutrex",
    subtitle: "RESEARCH",
    color: "text-black",
    hidden: true
  },
  {
    id: 17,
    name: "OstroVit®",
    subtitle: "TECHNOLOGY OF NUTRITION",
    color: "text-purple-600",
    hidden: true
  },
  {
    id: 18,
    name: "BLACKMORES®",
    subtitle: "",
    color: "text-black",
    hidden: true
  }
]

// Contact Information Data
export const contactInfoData = [
  {
    id: 1,
    title: "Địa chỉ",
    value: "123 Đường ABC, Quận 1, TP.HCM",
    icon: "📍",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    googleMapsUrl: "https://maps.google.com/?q=123+Đường+ABC,+Quận+1,+TP.HCM"
  },
  {
    id: 2,
    title: "Điện thoại",
    value: "0909 123 456",
    icon: "📞",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    id: 3,
    title: "Email",
    value: "info@kvwheyshop.com",
    icon: "✉️",
    bgColor: "bg-red-100",
    iconColor: "text-red-600"
  },
  {
    id: 4,
    title: "Giờ làm việc",
    value: "Thứ 2 - Chủ nhật: 8:00 - 22:00",
    icon: "🕒",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  }
]

// Hero Section Data
export const heroData = {
  title: "Thực Phẩm Bổ Sung Chất Lượng Cao",
  description: "Cung cấp các sản phẩm thực phẩm bổ sung chất lượng cao cho người tập luyện\nCam Kết Chính Hãng 100%, Bồi Thường 20 Lần Nếu Phát Hiện Hàng Giả.",
  buttonText: "Mua Ngay"
}

// Company Information
export const companyData = {
  name: "KVWheyShop",
  description: "Chuyên cung cấp các sản phẩm thực phẩm bổ sung chất lượng cao",
  copyright: "© 2024 KVWheyShop. Tất cả quyền được bảo lưu.",
  tagline: "Uy Tín 10 Năm Bán Hàng - Cam Kết Chính Hãng 100%, Bồi Thường 20 Lần Nếu Phát Hiện Hàng Giả.",
  Facebook: "https://www.facebook.com/kvwheyshop",
  Instagram: "https://www.instagram.com/kvwheyshop",
  Twitter: "https://x.com/kvwheyshop",
  Youtube: "https://www.youtube.com/kvwheyshop",
  Tiktok: "https://www.tiktok.com/@kvwheyshop",
}

// Navigation Data
export const navigationData = [
  {
    id: 1,
    name: "Trang chủ",
    path: "/"
  },
  {
    id: 2,
    name: "Sản phẩm",
    path: "/products"
  },
  {
    id: 3,
    name: "Kiến thức",
    path: "/kien-thuc"
  },
  {
    id: 4,
    name: "Liên hệ",
    path: "/contact"
  },
  {
    id: 5,
    name: "Đăng nhập",
    path: "/login"
  },
  {
    id: 6,
    name: "Giỏ hàng",
    path: "/GioHang"
  }
]

// Form Placeholders
export const formPlaceholders = {
  login: {
    email: "Nhập email của bạn",
    password: "Nhập mật khẩu",
    confirmPassword: "Nhập lại mật khẩu"
  },
  contact: {
    name: "Nhập họ và tên",
    email: "Nhập email",
    phone: "Nhập số điện thoại",
    message: "Nhập nội dung tin nhắn"
  }
}

// Page Titles
export const pageTitles = {
  home: "Sản Phẩm Nổi Bật",
  products: "SẢN PHẨM",
  contact: "LIÊN HỆ",
  login: "ĐĂNG NHẬP",
  register: "ĐĂNG KÝ",
  brands: "THƯƠNG HIỆU NỔI BẬT",
  kienThuc: "KIẾN THỨC SUPPLEMENT",
  kienThucDinhDuong: "KIẾN THỨC ĐỊNH DƯỠNG"
}

// Section Titles
export const sectionTitles = {
  contactInfo: "Thông Tin Liên Hệ",
  contactForm: "Gửi Tin Nhắn",
  featuredProducts: "Sản Phẩm Nổi Bật",
  brands: "THƯƠNG HIỆU NỔI BẬT"
}

// Button Texts
export const buttonTexts = {
  addToCart: "Thêm vào giỏ",
  buyNow: "Mua Ngay",
  sendMessage: "Gửi Tin Nhắn",
  login: "Đăng nhập",
  register: "Đăng ký",
  showMore: "Xem thêm",
  showLess: "Thu gọn",
  switchToRegister: "Chưa có tài khoản? Đăng ký ngay",
  switchToLogin: "Đã có tài khoản? Đăng nhập"
}

// Messages
export const messages = {
  welcomeBack: "Chào mừng bạn quay trở lại!",
  createAccount: "Tạo tài khoản mới",
  rememberMe: "Ghi nhớ đăng nhập",
  forgotPassword: "Quên mật khẩu?",
  contactSuccess: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.",
  loginSuccess: "Đăng nhập thành công!",
  registerSuccess: "Đăng ký thành công!"
}

// Coupon Data
export const couponData = [
  {
    id: 1,
    code: "WHEY30",
    discount: "30.000₫",
    minOrder: "1.500.000₫",
    description: "Giảm 30K cho đơn hàng giá trị tối thiểu 1500K",
    conditions: [
      "Giá trị đơn hàng tối thiểu 1500k",
      "Áp dụng 1 mã giảm giá duy nhất trong cùng 1 lần",
      "Đơn hàng Whey, Mass riêng lẻ không được áp dụng thêm Voucher",
      "Các thương hiệu Amix, Rule One Protein, Optimum Nutrition, BPI Sports đã giảm giá SÂU nên không được áp dụng thêm mã giảm giá"
    ],
    color: "bg-red-500"
  },
  {
    id: 2,
    code: "WHEY70",
    discount: "70.000₫",
    minOrder: "2.500.000₫",
    description: "Giảm 70K cho đơn hàng giá trị tối thiểu 2500K",
    conditions: [
      "Giá trị đơn hàng tối thiểu 2500k",
      "Áp dụng 1 mã giảm giá duy nhất trong cùng 1 lần",
      "Đơn hàng Whey, Mass riêng lẻ không được áp dụng thêm Voucher",
      "Các thương hiệu Amix, Rule One Protein, Optimum Nutrition, BPI Sports đã giảm giá SÂU nên không được áp dụng thêm mã giảm giá"
    ],
    color: "bg-orange-500"
  },
  {
    id: 3,
    code: "WHEY100",
    discount: "100.000₫",
    minOrder: "3.500.000₫",
    description: "Mã giảm 100K cho đơn hàng tối thiểu 3500K",
    conditions: [
      "Giá trị đơn hàng tối thiểu 3500k",
      "Áp dụng 1 mã giảm giá duy nhất trong cùng 1 lần",
      "Đơn hàng Whey, Mass riêng lẻ không được áp dụng thêm Voucher",
      "Các thương hiệu Amix, Rule One Protein, Optimum Nutrition, BPI Sports đã giảm giá SÂU nên không được áp dụng thêm mã giảm giá"
    ],
    color: "bg-green-500"
  },
  {
    id: 4,
    code: "WHEY150",
    discount: "150.000₫",
    minOrder: "4.500.000₫",
    description: "Mã giảm 150K cho đơn hàng tối thiểu 4500K",
    conditions: [
      "Giá trị đơn hàng tối thiểu 4500k",
      "Áp dụng 1 mã giảm giá duy nhất trong cùng 1 lần",
      "Đơn hàng Whey, Mass riêng lẻ không được áp dụng thêm Voucher",
      "Các thương hiệu Amix, Rule One Protein, Optimum Nutrition, BPI Sports đã giảm giá SÂU nên không được áp dụng thêm mã giảm giá"
    ],
    color: "bg-purple-500"
  }
]

// Knowledge Articles Data
export const knowledgeArticlesData = [
  {
    id: 1,
    title: "Whey Protein là gì? Cách sử dụng hiệu quả cho người tập gym",
    excerpt: "Whey Protein là một loại protein chất lượng cao được chiết xuất từ sữa, chứa đầy đủ các axit amin thiết yếu...",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    category: "Kiến Thức Supplement",
    date: "Thứ Hai, 18/12/2023",
    readTime: "5 phút đọc",
    content: `
      <h2>Whey Protein là gì?</h2>
      <p>Whey Protein là một loại protein chất lượng cao được chiết xuất từ sữa trong quá trình sản xuất phô mai. Đây là một trong những nguồn protein tốt nhất cho người tập gym và thể thao.</p>
      
      <h3>Thành phần chính của Whey Protein:</h3>
      <ul>
        <li><strong>BCAA (Branched-Chain Amino Acids):</strong> Leucine, Isoleucine, Valine - hỗ trợ phục hồi cơ bắp</li>
        <li><strong>Glutamine:</strong> Tăng cường hệ miễn dịch</li>
        <li><strong>Lactoferrin:</strong> Kháng khuẩn tự nhiên</li>
        <li><strong>Immunoglobulins:</strong> Tăng cường sức đề kháng</li>
      </ul>
      
      <h3>Các loại Whey Protein:</h3>
      <ol>
        <li><strong>Whey Concentrate:</strong> Chứa 70-80% protein, có lactose và chất béo</li>
        <li><strong>Whey Isolate:</strong> Chứa 90%+ protein, ít lactose và chất béo</li>
        <li><strong>Whey Hydrolysate:</strong> Protein đã được thủy phân, hấp thu nhanh nhất</li>
      </ol>
      
      <h3>Cách sử dụng hiệu quả:</h3>
      <ul>
        <li><strong>Thời điểm uống:</strong> Sau khi tập 30 phút</li>
        <li><strong>Liều lượng:</strong> 20-30g protein/lần</li>
        <li><strong>Pha với:</strong> Nước, sữa, hoặc nước trái cây</li>
        <li><strong>Tần suất:</strong> 1-3 lần/ngày tùy mục tiêu</li>
      </ul>
      
      <h3>Lợi ích của Whey Protein:</h3>
      <ul>
        <li>✅ Tăng cường phát triển cơ bắp</li>
        <li>✅ Hỗ trợ phục hồi sau tập luyện</li>
        <li>✅ Tăng cường hệ miễn dịch</li>
        <li>✅ Giảm cảm giác đói</li>
        <li>✅ Hỗ trợ giảm cân</li>
      </ul>
    `
  },
  {
    id: 2,
    title: "Creatine Monohydrate: Bổ sung đúng cách để tăng sức mạnh",
    excerpt: "Creatine là một trong những chất bổ sung được nghiên cứu nhiều nhất trong lĩnh vực thể thao...",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    category: "Kiến Thức Supplement",
    date: "Thứ Ba, 11/07/2023",
    readTime: "4 phút đọc",
    content: `
      <h2>Creatine Monohydrate là gì?</h2>
      <p>Creatine là một hợp chất tự nhiên được tìm thấy trong cơ bắp và não bộ. Nó đóng vai trò quan trọng trong việc sản xuất năng lượng cho các hoạt động cường độ cao.</p>
      
      <h3>Cơ chế hoạt động:</h3>
      <p>Creatine giúp tái tạo ATP (Adenosine Triphosphate) - nguồn năng lượng chính cho cơ bắp. Khi bạn tập luyện cường độ cao, ATP bị phân hủy nhanh chóng, Creatine giúp tái tạo ATP để duy trì hiệu suất.</p>
      
      <h3>Lợi ích của Creatine:</h3>
      <ul>
        <li>💪 <strong>Tăng sức mạnh:</strong> Cải thiện hiệu suất trong các bài tập nặng</li>
        <li>🏃 <strong>Tăng sức bền:</strong> Kéo dài thời gian tập luyện</li>
        <li>🏋️ <strong>Tăng khối lượng cơ:</strong> Tích nước trong cơ bắp</li>
        <li>🧠 <strong>Cải thiện chức năng não:</strong> Tăng cường trí nhớ và nhận thức</li>
        <li>🩸 <strong>Hỗ trợ phục hồi:</strong> Giảm đau cơ sau tập luyện</li>
      </ul>
      
      <h3>Hướng dẫn sử dụng:</h3>
      <h4>Giai đoạn nạp (Loading Phase):</h4>
      <ul>
        <li>20g/ngày chia 4 lần (5g/lần)</li>
        <li>Thực hiện trong 5-7 ngày</li>
      </ul>
      
      <h4>Giai đoạn duy trì (Maintenance Phase):</h4>
      <ul>
        <li>3-5g/ngày</li>
        <li>Uống bất kỳ thời điểm nào trong ngày</li>
        <li>Không cần thiết phải uống trước/sau tập</li>
      </ul>
      
      <h3>Lưu ý quan trọng:</h3>
      <ul>
        <li>⚠️ Uống nhiều nước (2-3 lít/ngày)</li>
        <li>⚠️ Không dùng cho người có vấn đề về thận</li>
        <li>⚠️ Có thể gây đầy hơi, khó chịu dạ dày</li>
        <li>⚠️ Hiệu quả có thể khác nhau giữa các cá nhân</li>
      </ul>
    `
  },
  {
    id: 3,
    title: "Chế độ ăn tăng cơ: Hướng dẫn dinh dưỡng cho người tập gym",
    excerpt: "Dinh dưỡng đóng vai trò quan trọng không kém tập luyện trong việc xây dựng cơ bắp...",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    category: "Kiến Thức Dinh Dưỡng",
    date: "Thứ Năm, 20/12/2023",
    readTime: "8 phút đọc",
    content: `
      <h2>Chế độ ăn tăng cơ: Nền tảng của thành công</h2>
      <p>Dinh dưỡng chiếm 70% thành công trong việc xây dựng cơ bắp. Dù bạn tập luyện chăm chỉ đến đâu, nếu không có chế độ ăn phù hợp, kết quả sẽ rất hạn chế.</p>
      
      <h3>Nguyên tắc cơ bản của chế độ ăn tăng cơ:</h3>
      <ul>
        <li>🔥 <strong>Calorie Surplus:</strong> Ăn nhiều hơn lượng calo tiêu thụ (300-500 calo/ngày)</li>
        <li>💪 <strong>Protein cao:</strong> 1.6-2.2g protein/kg trọng lượng cơ thể</li>
        <li>⚡ <strong>Carbohydrate đầy đủ:</strong> 4-7g carb/kg trọng lượng cơ thể</li>
        <li>🥑 <strong>Chất béo vừa phải:</strong> 0.8-1.2g fat/kg trọng lượng cơ thể</li>
      </ul>
      
      <h3>Thực phẩm nên ăn:</h3>
      <h4>Nguồn Protein:</h4>
      <ul>
        <li>🥩 Thịt bò nạc, thịt gà, thịt heo</li>
        <li>🐟 Cá hồi, cá ngừ, cá thu</li>
        <li>🥚 Trứng (cả lòng trắng và lòng đỏ)</li>
        <li>🥛 Sữa, sữa chua, phô mai</li>
        <li>🫘 Đậu, đậu lăng, đậu gà</li>
      </ul>
      
      <h4>Nguồn Carbohydrate:</h4>
      <ul>
        <li>🍚 Gạo lứt, gạo trắng</li>
        <li>🥔 Khoai tây, khoai lang</li>
        <li>🍞 Bánh mì nguyên cám</li>
        <li>🍝 Mì ống, pasta</li>
        <li>🌾 Yến mạch, quinoa</li>
      </ul>
      
      <h4>Nguồn Chất béo tốt:</h4>
      <ul>
        <li>🥑 Bơ, dầu olive</li>
        <li>🥜 Hạt óc chó, hạnh nhân</li>
        <li>🥥 Dầu dừa, dầu hạt lanh</li>
        <li>🐟 Cá béo (cá hồi, cá thu)</li>
      </ul>
      
      <h3>Thời điểm ăn quan trọng:</h3>
      <ul>
        <li>🌅 <strong>Bữa sáng:</strong> Protein + Carb để khởi động ngày mới</li>
        <li>⏰ <strong>Trước tập 2-3h:</strong> Bữa ăn chính với đầy đủ dinh dưỡng</li>
        <li>⚡ <strong>Trước tập 30-60 phút:</strong> Carb đơn giản (chuối, táo)</li>
        <li>💪 <strong>Sau tập 30 phút:</strong> Protein + Carb để phục hồi</li>
        <li>🌙 <strong>Bữa tối:</strong> Protein + chất béo, ít carb</li>
      </ul>
      
      <h3>Ví dụ thực đơn mẫu:</h3>
      <h4>Bữa sáng:</h4>
      <ul>
        <li>3 quả trứng + 1 lát bánh mì + 1 quả chuối</li>
        <li>Hoặc: Yến mạch + sữa + hạt chia + mật ong</li>
      </ul>
      
      <h4>Bữa trưa:</h4>
      <ul>
        <li>150g thịt gà + 1 chén cơm + rau xanh</li>
        <li>Hoặc: Cá hồi + khoai lang + salad</li>
      </ul>
      
      <h4>Bữa tối:</h4>
      <ul>
        <li>200g thịt bò nạc + rau củ + ít cơm</li>
        <li>Hoặc: Đậu hũ + rau xanh + dầu olive</li>
      </ul>
      
      <h3>Lưu ý quan trọng:</h3>
      <ul>
        <li>💧 <strong>Uống đủ nước:</strong> 2-3 lít/ngày</li>
        <li>🥗 <strong>Ăn nhiều rau xanh:</strong> Vitamin và khoáng chất</li>
        <li>🕐 <strong>Ăn đều đặn:</strong> 5-6 bữa/ngày</li>
        <li>📊 <strong>Theo dõi cân nặng:</strong> Tăng 0.5-1kg/tuần</li>
        <li>🔄 <strong>Điều chỉnh linh hoạt:</strong> Theo phản ứng cơ thể</li>
      </ul>
    `
  },
  {
    id: 4,
    title: "Chế độ ăn giảm mỡ: Khoa học về calo deficit",
    excerpt: "Giảm mỡ không chỉ là ăn ít đi, mà là ăn thông minh để duy trì cơ bắp...",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
    category: "Kiến Thức Dinh Dưỡng",
    date: "Thứ Sáu, 22/12/2023",
    readTime: "6 phút đọc",
    content: `
      <h2>Chế độ ăn giảm mỡ: Khoa học về calo deficit</h2>
      <p>Giảm mỡ là quá trình tạo ra calo deficit (thâm hụt calo) - ăn ít hơn lượng calo cơ thể tiêu thụ. Tuy nhiên, cách thực hiện đúng mới là chìa khóa thành công.</p>
      
      <h3>Nguyên lý cơ bản:</h3>
      <ul>
        <li>📉 <strong>Calorie Deficit:</strong> Ăn ít hơn 300-500 calo so với TDEE</li>
        <li>💪 <strong>Bảo toàn cơ bắp:</strong> Duy trì protein cao (1.6-2.2g/kg)</li>
        <li>⚡ <strong>Carbohydrate thông minh:</strong> Giảm carb nhưng không cắt bỏ hoàn toàn</li>
        <li>🥑 <strong>Chất béo vừa phải:</strong> 0.8-1g fat/kg để duy trì hormone</li>
      </ul>
      
      <h3>Thực phẩm nên ăn khi giảm mỡ:</h3>
      <h4>Protein nạc:</h4>
      <ul>
        <li>🍗 Ức gà, thịt bò nạc</li>
        <li>🐟 Cá hồi, cá ngừ</li>
        <li>🥚 Lòng trắng trứng</li>
        <li>🥛 Sữa chua Hy Lạp</li>
        <li>🫘 Đậu, đậu lăng</li>
      </ul>
      
      <h4>Carbohydrate phức tạp:</h4>
      <ul>
        <li>🌾 Yến mạch, gạo lứt</li>
        <li>🥔 Khoai lang, khoai tây</li>
        <li>🍞 Bánh mì nguyên cám</li>
        <li>🍎 Trái cây ít đường</li>
        <li>🥬 Rau xanh các loại</li>
      </ul>
      
      <h4>Chất béo tốt:</h4>
      <ul>
        <li>🥑 Bơ, dầu olive</li>
        <li>🥜 Hạt óc chó, hạnh nhân</li>
        <li>🥥 Dầu dừa</li>
        <li>🐟 Cá béo (cá hồi)</li>
      </ul>
      
      <h3>Thực phẩm nên tránh:</h3>
      <ul>
        <li>🚫 <strong>Đồ ăn nhanh:</strong> Pizza, burger, gà rán</li>
        <li>🚫 <strong>Đồ ngọt:</strong> Bánh kẹo, nước ngọt</li>
        <li>🚫 <strong>Carb tinh chế:</strong> Bánh mì trắng, mì trắng</li>
        <li>🚫 <strong>Chất béo xấu:</strong> Mỡ động vật, dầu ăn đã qua chế biến</li>
        <li>🚫 <strong>Rượu bia:</strong> Calo rỗng, ảnh hưởng hormone</li>
      </ul>
      
      <h3>Chiến lược ăn uống:</h3>
      <h4>Intermittent Fasting (Nhịn ăn gián đoạn):</h4>
      <ul>
        <li>⏰ <strong>16:8:</strong> Ăn trong 8 giờ, nhịn 16 giờ</li>
        <li>⏰ <strong>18:6:</strong> Ăn trong 6 giờ, nhịn 18 giờ</li>
        <li>⏰ <strong>20:4:</strong> Ăn trong 4 giờ, nhịn 20 giờ</li>
      </ul>
      
      <h4>Carb Cycling (Xoay vòng carb):</h4>
      <ul>
        <li>📈 <strong>Ngày tập:</strong> Carb cao (3-5g/kg)</li>
        <li>📉 <strong>Ngày nghỉ:</strong> Carb thấp (1-2g/kg)</li>
        <li>🔄 <strong>Ngày refeed:</strong> Carb cao hơn (5-7g/kg)</li>
      </ul>
      
      <h3>Thực đơn mẫu giảm mỡ:</h3>
      <h4>Bữa sáng:</h4>
      <ul>
        <li>3 lòng trắng trứng + 1/2 chén yến mạch + 1/2 quả chuối</li>
        <li>Hoặc: Sữa chua Hy Lạp + hạt chia + quả mọng</li>
      </ul>
      
      <h4>Bữa trưa:</h4>
      <ul>
        <li>120g ức gà + 1/2 chén gạo lứt + rau xanh</li>
        <li>Hoặc: Cá hồi + khoai lang + salad</li>
      </ul>
      
      <h4>Bữa tối:</h4>
      <ul>
        <li>150g thịt bò nạc + rau củ + ít carb</li>
        <li>Hoặc: Đậu hũ + rau xanh + dầu olive</li>
      </ul>
      
      <h3>Lưu ý quan trọng:</h3>
      <ul>
        <li>⚖️ <strong>Giảm từ từ:</strong> 0.5-1kg/tuần, không quá nhanh</li>
        <li>💪 <strong>Duy trì tập luyện:</strong> Cardio + Strength training</li>
        <li>💧 <strong>Uống nhiều nước:</strong> 2-3 lít/ngày</li>
        <li>😴 <strong>Ngủ đủ giấc:</strong> 7-9 giờ/đêm</li>
        <li>📊 <strong>Theo dõi tiến độ:</strong> Cân nặng, vòng eo, ảnh chụp</li>
      </ul>
    `
  },
  {
    id: 5,
    title: "Vitamin D3 K2: Vai trò quan trọng cho sức khỏe xương khớp",
    excerpt: "Vitamin D3 và K2 là hai loại vitamin quan trọng có tác dụng hiệp đồng trong việc duy trì sức khỏe xương...",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop",
    category: "Kiến Thức Supplement",
    date: "Thứ Sáu, 23/06/2023",
    readTime: "6 phút đọc",
    content: `
      <h2>Vitamin D3 K2: Bộ đôi hoàn hảo cho xương khớp</h2>
      <p>Vitamin D3 và K2 là hai loại vitamin tan trong chất béo có vai trò quan trọng trong việc duy trì sức khỏe xương, tim mạch và hệ miễn dịch.</p>
      
      <h3>Vai trò của Vitamin D3:</h3>
      <ul>
        <li>🦴 <strong>Hấp thu Canxi:</strong> Tăng cường hấp thu canxi từ ruột</li>
        <li>🦴 <strong>Khoáng hóa xương:</strong> Tham gia vào quá trình tạo xương</li>
        <li>🛡️ <strong>Tăng cường miễn dịch:</strong> Kích hoạt các tế bào miễn dịch</li>
        <li>💪 <strong>Hỗ trợ cơ bắp:</strong> Cải thiện sức mạnh cơ</li>
        <li>😊 <strong>Cải thiện tâm trạng:</strong> Giảm nguy cơ trầm cảm</li>
      </ul>
      
      <h3>Vai trò của Vitamin K2:</h3>
      <ul>
        <li>🦴 <strong>Định hướng Canxi:</strong> Đưa canxi vào xương thay vì mạch máu</li>
        <li>❤️ <strong>Bảo vệ tim mạch:</strong> Ngăn ngừa vôi hóa động mạch</li>
        <li>🦷 <strong>Sức khỏe răng:</strong> Tăng cường men răng</li>
        <li>🧠 <strong>Chức năng não:</strong> Bảo vệ tế bào thần kinh</li>
      </ul>
      
      <h3>Tại sao cần kết hợp D3 + K2?</h3>
      <p>Vitamin D3 giúp hấp thu canxi, nhưng không định hướng canxi đi đâu. Vitamin K2 sẽ "dẫn đường" cho canxi vào xương thay vì tích tụ trong mạch máu, ngăn ngừa vôi hóa động mạch.</p>
      
      <h3>Liều lượng khuyến nghị:</h3>
      <ul>
        <li><strong>Vitamin D3:</strong> 1000-4000 IU/ngày</li>
        <li><strong>Vitamin K2 (MK-7):</strong> 100-200 mcg/ngày</li>
        <li><strong>Thời điểm uống:</strong> Cùng bữa ăn có chất béo</li>
      </ul>
      
      <h3>Đối tượng cần bổ sung:</h3>
      <ul>
        <li>👥 Người ít tiếp xúc ánh nắng mặt trời</li>
        <li>👥 Người cao tuổi</li>
        <li>👥 Người tập gym, thể thao</li>
        <li>👥 Người có vấn đề về xương khớp</li>
        <li>👥 Người ăn chay</li>
      </ul>
      
      <h3>Lưu ý:</h3>
      <ul>
        <li>⚠️ Không dùng quá liều Vitamin D3 (có thể gây ngộ độc)</li>
        <li>⚠️ Vitamin K2 có thể tương tác với thuốc chống đông máu</li>
        <li>⚠️ Nên tham khảo ý kiến bác sĩ trước khi sử dụng</li>
      </ul>
    `
  },
  {
    id: 6,
    title: "Omega-3: Lợi ích không ngờ cho người tập thể thao",
    excerpt: "Omega-3 không chỉ tốt cho tim mạch mà còn có nhiều lợi ích quan trọng cho người tập thể thao...",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    category: "Kiến Thức Supplement",
    date: "Thứ Tư, 15/05/2023",
    readTime: "7 phút đọc",
    content: `
      <h2>Omega-3: Chất béo thiết yếu cho người tập thể thao</h2>
      <p>Omega-3 là một nhóm axit béo không bão hòa đa chuỗi dài, bao gồm EPA, DHA và ALA. Đây là những chất béo thiết yếu mà cơ thể không thể tự sản xuất.</p>
      
      <h3>Các loại Omega-3 chính:</h3>
      <ul>
        <li><strong>EPA (Eicosapentaenoic Acid):</strong> Chống viêm, hỗ trợ tim mạch</li>
        <li><strong>DHA (Docosahexaenoic Acid):</strong> Tốt cho não bộ, mắt</li>
        <li><strong>ALA (Alpha-Linolenic Acid):</strong> Tiền chất của EPA và DHA</li>
      </ul>
      
      <h3>Lợi ích cho người tập thể thao:</h3>
      <ul>
        <li>💪 <strong>Giảm viêm cơ:</strong> EPA giúp giảm đau cơ sau tập luyện</li>
        <li>🫀 <strong>Tăng cường tim mạch:</strong> Cải thiện hiệu suất tim mạch</li>
        <li>🧠 <strong>Cải thiện nhận thức:</strong> DHA tốt cho chức năng não</li>
        <li>🩸 <strong>Lưu thông máu:</strong> Giảm độ nhớt máu</li>
        <li>🛡️ <strong>Tăng cường miễn dịch:</strong> Bảo vệ cơ thể khỏi bệnh tật</li>
        <li>😴 <strong>Cải thiện giấc ngủ:</strong> Tăng chất lượng giấc ngủ</li>
        <li>📈 <strong>Tăng hiệu suất:</strong> Cải thiện thời gian phản ứng</li>
      </ul>
      
      <h3>Nguồn Omega-3:</h3>
      <h4>Nguồn động vật (EPA + DHA):</h4>
      <ul>
        <li>🐟 Cá hồi, cá ngừ, cá mòi</li>
        <li>🦐 Tôm, cua, hàu</li>
        <li>🥚 Lòng đỏ trứng</li>
      </ul>
      
      <h4>Nguồn thực vật (ALA):</h4>
      <ul>
        <li>🥜 Hạt chia, hạt lanh</li>
        <li>🥜 Quả óc chó</li>
        <li>🥜 Dầu hạt cải</li>
      </ul>
      
      <h3>Liều lượng khuyến nghị:</h3>
      <ul>
        <li><strong>Người bình thường:</strong> 250-500mg EPA+DHA/ngày</li>
        <li><strong>Người tập thể thao:</strong> 1000-2000mg EPA+DHA/ngày</li>
        <li><strong>Người có vấn đề tim mạch:</strong> 2000-4000mg EPA+DHA/ngày</li>
      </ul>
      
      <h3>Thời điểm uống:</h3>
      <ul>
        <li>⏰ Cùng bữa ăn có chất béo</li>
        <li>⏰ Chia 2-3 lần/ngày</li>
        <li>⏰ Không uống khi đói</li>
      </ul>
      
      <h3>Lưu ý quan trọng:</h3>
      <ul>
        <li>⚠️ Chọn sản phẩm có hàm lượng EPA+DHA cao</li>
        <li>⚠️ Kiểm tra nguồn gốc và độ tinh khiết</li>
        <li>⚠️ Bảo quản trong tủ lạnh</li>
        <li>⚠️ Có thể gây ợ hơi, khó chịu dạ dày</li>
        <li>⚠️ Tương tác với thuốc chống đông máu</li>
      </ul>
    `
  }
]

// Company Features Data
export const companyFeaturesData = [
  {
    id: 1,
    title: "THƯƠNG HIỆU SUPPLEMENTS UY TÍN TỪ 2011",
    icon: "🏆",
    description: "Hơn 10 năm kinh nghiệm trong lĩnh vực thực phẩm bổ sung",
    detail: {
      content: `
        <h2>🏆 Thương hiệu uy tín hàng đầu Việt Nam</h2>
        <p>KVWheyShop được thành lập từ năm 2011, là một trong những cửa hàng đầu tiên chuyên về thực phẩm bổ sung tại Việt Nam. Với hơn 10 năm kinh nghiệm, chúng tôi đã phục vụ hàng trăm nghìn khách hàng và trở thành đối tác tin cậy của các thương hiệu supplement hàng đầu thế giới.</p>
        
        <h3>📈 Thành tựu đạt được:</h3>
        <ul>
          <li>✅ Hơn 100,000+ khách hàng tin tưởng</li>
          <li>✅ 50+ thương hiệu supplement chính hãng</li>
          <li>✅ 15+ chi nhánh trên toàn quốc</li>
          <li>✅ Đối tác chính thức của Optimum Nutrition, Dymatize, BSN</li>
        </ul>
        
        <h3>🎯 Cam kết chất lượng:</h3>
        <ul>
          <li>🔒 Chỉ bán hàng chính hãng 100%</li>
          <li>📋 Giấy tờ nhập khẩu đầy đủ</li>
          <li>🔍 Kiểm định chất lượng nghiêm ngặt</li>
          <li>💯 Bảo hành chính hãng</li>
        </ul>
      `
    }
  },
  {
    id: 2,
    title: "CAM KẾT CHUẨN 100% CHÍNH HÃNG",
    icon: "✅",
    description: "Tất cả sản phẩm đều được nhập khẩu chính hãng, có giấy tờ đầy đủ",
    detail: {
      content: `
        <h2>✅ Cam kết sản phẩm chính hãng 100%</h2>
        <p>KVWheyShop cam kết chỉ cung cấp các sản phẩm supplement chính hãng, được nhập khẩu trực tiếp từ các nhà sản xuất uy tín trên thế giới. Mọi sản phẩm đều có đầy đủ giấy tờ chứng minh nguồn gốc và chất lượng.</p>
        
        <h3>🔍 Quy trình kiểm soát chất lượng:</h3>
        <ol>
          <li><strong>Lựa chọn đối tác:</strong> Chỉ hợp tác với các thương hiệu uy tín, có chứng nhận GMP, FDA, ISO</li>
          <li><strong>Kiểm tra nguồn gốc:</strong> Xác minh xuất xứ, hạn sử dụng, điều kiện bảo quản</li>
          <li><strong>Kiểm định chất lượng:</strong> Test mẫu sản phẩm tại phòng lab độc lập</li>
          <li><strong>Giấy tờ đầy đủ:</strong> COA, CQ, Invoice, Packing List</li>
        </ol>
        
        <h3>📋 Chứng nhận và giấy tờ:</h3>
        <ul>
          <li>📄 Giấy phép nhập khẩu</li>
          <li>📄 Chứng nhận chất lượng (COA)</li>
          <li>📄 Chứng nhận xuất xứ (CQ)</li>
          <li>📄 Hóa đơn thương mại</li>
          <li>📄 Phiếu kiểm nghiệm</li>
        </ul>
        
        <h3>🛡️ Bảo vệ khách hàng:</h3>
        <ul>
          <li>💰 Hoàn tiền 200% nếu phát hiện hàng giả</li>
          <li>🔍 Công khai mã QR truy xuất nguồn gốc</li>
          <li>📞 Hotline hỗ trợ 24/7</li>
          <li>⚖️ Bảo hành theo chính sách hãng</li>
        </ul>
      `
    }
  },
  {
    id: 3,
    title: "GIAO HÀNG NỘI THÀNH SIÊU TỐC 1 - 4H",
    icon: "🚚",
    description: "Giao hàng nhanh chóng trong ngày cho khách hàng nội thành",
    detail: {
      content: `
        <h2>🚚 Dịch vụ giao hàng nội thành siêu tốc</h2>
        <p>KVWheyShop cung cấp dịch vụ giao hàng nội thành siêu tốc trong 1-4 giờ, đảm bảo khách hàng nhận được sản phẩm nhanh chóng và thuận tiện nhất.</p>
        
        <h3>⚡ Thời gian giao hàng:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-bold text-red-800">🚀 Giao hàng siêu tốc</h4>
            <p class="text-sm">Giao trong 1-2 giờ</p>
            <p class="text-sm font-semibold">Phí: 50,000₫</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h4 class="font-bold text-orange-800">⚡ Giao hàng nhanh</h4>
            <p class="text-sm">Giao trong 2-4 giờ</p>
            <p class="text-sm font-semibold">Phí: 30,000₫</p>
          </div>
        </div>
        
        <h3>📍 Khu vực áp dụng:</h3>
        <ul>
          <li>🏢 <strong>TP.HCM:</strong> Q1, Q3, Q7, Q10, Thủ Đức, Bình Thạnh, Phú Nhuận</li>
          <li>🏢 <strong>Hà Nội:</strong> Cầu Giấy, Đống Đa, Thanh Xuân, Ba Đình, Hoàn Kiếm</li>
          <li>🏢 <strong>Đà Nẵng:</strong> Hải Châu, Sơn Trà, Ngũ Hành Sơn</li>
        </ul>
        
        <h3>🕐 Thời gian nhận đơn:</h3>
        <ul>
          <li>🌅 <strong>Sáng:</strong> 7:00 - 11:00 (Giao 9:00 - 13:00)</li>
          <li>🌞 <strong>Chiều:</strong> 11:00 - 15:00 (Giao 13:00 - 17:00)</li>
          <li>🌙 <strong>Tối:</strong> 15:00 - 19:00 (Giao 17:00 - 21:00)</li>
        </ul>
        
        <h3>🔒 Bảo mật và an toàn:</h3>
        <ul>
          <li>📦 Đóng gói cẩn thận, chống va đập</li>
          <li>🌡️ Bảo quản nhiệt độ phù hợp</li>
          <li>📱 SMS thông báo trạng thái giao hàng</li>
          <li>📞 Gọi xác nhận trước khi giao</li>
          <li>✅ Kiểm tra hàng trước khi nhận</li>
        </ul>
      `
    }
  },
  {
    id: 4,
    title: "FREESHIP TOÀN QUỐC CHO ĐƠN HÀNG TỪ 1.500.000Đ",
    icon: "📦",
    description: "Miễn phí vận chuyển toàn quốc cho đơn hàng từ 1.5 triệu đồng",
    detail: {
      content: `
        <h2>📦 Chính sách freeship toàn quốc</h2>
        <p>KVWheyShop áp dụng chính sách miễn phí vận chuyển toàn quốc cho đơn hàng từ 1,500,000₫, giúp khách hàng tiết kiệm chi phí và mua sắm thuận tiện hơn.</p>
        
        <h3>💰 Điều kiện áp dụng:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800">✅ Đơn hàng từ 1,500,000₫</h4>
            <p class="text-sm">Freeship toàn quốc</p>
            <p class="text-sm font-semibold">Thời gian: 2-5 ngày</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800">✅ Đơn hàng từ 2,000,000₫</h4>
            <p class="text-sm">Freeship + Ưu đãi đặc biệt</p>
            <p class="text-sm font-semibold">Thời gian: 1-3 ngày</p>
          </div>
        </div>
        
        <h3>🚚 Đối tác vận chuyển:</h3>
        <ul>
          <li>📦 <strong>Giao Hang Nhanh:</strong> Giao hàng toàn quốc, thời gian 2-5 ngày</li>
          <li>📦 <strong>Giao Hang Tiet Kiem:</strong> Giá rẻ, thời gian 3-7 ngày</li>
          <li>📦 <strong>Viettel Post:</strong> Uy tín, thời gian 2-4 ngày</li>
          <li>📦 <strong>J&T Express:</strong> Nhanh chóng, thời gian 1-3 ngày</li>
        </ul>
        
        <h3>📍 Thời gian giao hàng theo khu vực:</h3>
        <ul>
          <li>🏢 <strong>TP.HCM, Hà Nội:</strong> 1-2 ngày</li>
          <li>🏢 <strong>Đà Nẵng, Cần Thơ, Bình Dương:</strong> 2-3 ngày</li>
          <li>🏢 <strong>Các tỉnh miền Trung:</strong> 3-4 ngày</li>
          <li>🏢 <strong>Các tỉnh miền Bắc:</strong> 2-4 ngày</li>
          <li>🏢 <strong>Các tỉnh miền Nam:</strong> 3-5 ngày</li>
          <li>🏢 <strong>Các tỉnh miền Tây:</strong> 4-7 ngày</li>
        </ul>
        
        <h3>💡 Mẹo tiết kiệm:</h3>
        <ul>
          <li>🛒 Mua theo combo để đạt mức freeship</li>
          <li>👥 Mua chung với bạn bè để chia sẻ chi phí</li>
          <li>🎫 Sử dụng mã giảm giá kết hợp</li>
          <li>📅 Theo dõi các chương trình khuyến mãi đặc biệt</li>
        </ul>
      `
    }
  },
  {
    id: 5,
    title: "ĐỔI TRẢ MIỄN PHÍ 15 NGÀY",
    icon: "🔄",
    description: "Chính sách đổi trả hàng miễn phí trong vòng 15 ngày",
    detail: {
      content: `
        <h2>🔄 Chính sách đổi trả miễn phí 15 ngày</h2>
        <p>KVWheyShop cam kết mang đến trải nghiệm mua sắm an tâm với chính sách đổi trả miễn phí trong vòng 15 ngày kể từ ngày nhận hàng. Chúng tôi đảm bảo quyền lợi tối đa cho khách hàng.</p>
        
        <h3>⏰ Thời gian đổi trả:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800">✅ Đổi trả miễn phí</h4>
            <p class="text-sm">Trong vòng 15 ngày</p>
            <p class="text-sm font-semibold">Không cần lý do</p>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg">
            <h4 class="font-bold text-yellow-800">⚠️ Đổi trả có điều kiện</h4>
            <p class="text-sm">16-30 ngày</p>
            <p class="text-sm font-semibold">Cần lý do chính đáng</p>
          </div>
        </div>
        
        <h3>📋 Điều kiện đổi trả:</h3>
        <ul>
          <li>✅ Sản phẩm còn nguyên vẹn, chưa sử dụng</li>
          <li>✅ Bao bì, nhãn mác còn nguyên</li>
          <li>✅ Hạn sử dụng còn ít nhất 6 tháng</li>
          <li>✅ Có hóa đơn mua hàng</li>
          <li>✅ Không phải sản phẩm khuyến mãi đặc biệt</li>
        </ul>
        
        <h3>🚫 Trường hợp không được đổi trả:</h3>
        <ul>
          <li>❌ Sản phẩm đã mở, sử dụng</li>
          <li>❌ Bao bì bị rách, mất nhãn</li>
          <li>❌ Hết hạn sử dụng</li>
          <li>❌ Sản phẩm khuyến mãi đặc biệt</li>
          <li>❌ Sản phẩm đặt theo yêu cầu riêng</li>
        </ul>
        
        <h3>🔄 Quy trình đổi trả:</h3>
        <ol>
          <li><strong>Liên hệ hỗ trợ:</strong> Gọi hotline hoặc chat với CSKH</li>
          <li><strong>Cung cấp thông tin:</strong> Mã đơn hàng, lý do đổi trả</li>
          <li><strong>Xác nhận:</strong> CSKH xác nhận điều kiện đổi trả</li>
          <li><strong>Gửi hàng:</strong> Gửi sản phẩm về kho</li>
          <li><strong>Kiểm tra:</strong> Kiểm tra tình trạng sản phẩm</li>
          <li><strong>Hoàn tất:</strong> Đổi trả hoặc hoàn tiền</li>
        </ol>
        
        <h3>💰 Chính sách hoàn tiền:</h3>
        <ul>
          <li>💳 <strong>Hoàn tiền 100%:</strong> Nếu sản phẩm có lỗi từ nhà sản xuất</li>
          <li>💳 <strong>Hoàn tiền 90%:</strong> Nếu đổi trả trong 7 ngày đầu</li>
          <li>💳 <strong>Hoàn tiền 70%:</strong> Nếu đổi trả từ 8-15 ngày</li>
          <li>💳 <strong>Hoàn tiền 50%:</strong> Nếu đổi trả từ 16-30 ngày</li>
        </ul>
      `
    }
  },
  {
    id: 6,
    title: "TƯ VẤN NHIỆT TÌNH 24/7",
    icon: "💬",
    description: "Đội ngũ tư vấn chuyên nghiệp, sẵn sàng hỗ trợ mọi lúc",
    detail: {
      content: `
        <h2>💬 Dịch vụ tư vấn nhiệt tình 24/7</h2>
        <p>KVWheyShop cung cấp dịch vụ tư vấn chuyên nghiệp 24/7 với đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực supplement và dinh dưỡng thể thao. Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi.</p>
        
        <h3>🎯 Các kênh hỗ trợ:</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div class="bg-red-50 p-4 rounded-lg">
            <h4 class="font-bold text-red-800">📞 Hotline</h4>
            <p class="text-lg font-bold">1900 1234</p>
            <p class="text-sm">Hỗ trợ 24/7</p>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <h4 class="font-bold text-blue-800">💬 Zalo</h4>
            <p class="text-lg font-bold">@KVWheyShop</p>
            <p class="text-sm">Phản hồi nhanh</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-800">📱 Facebook</h4>
            <p class="text-lg font-bold">KVWheyShop</p>
            <p class="text-sm">Cộng đồng lớn</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h4 class="font-bold text-purple-800">🤖 AI Assistant</h4>
            <p class="text-lg font-bold">Tư vấn tự động</p>
            <p class="text-sm">24/7 miễn phí</p>
          </div>
        </div>
        
        <h3>👥 Đội ngũ tư vấn:</h3>
        <ul>
          <li>🏋️‍♂️ <strong>Chuyên gia dinh dưỡng:</strong> Tư vấn chế độ ăn, supplement</li>
          <li>💪 <strong>Huấn luyện viên:</strong> Hướng dẫn tập luyện, lịch trình</li>
          <li>🏥 <strong>Dược sĩ:</strong> Tư vấn về tương tác thuốc, liều lượng</li>
          <li>📊 <strong>Chuyên viên kinh doanh:</strong> Hỗ trợ đặt hàng, thanh toán</li>
        </ul>
        
        <h3>🕐 Thời gian hỗ trợ:</h3>
        <ul>
          <li>🌅 <strong>Sáng:</strong> 7:00 - 12:00</li>
          <li>🌞 <strong>Chiều:</strong> 13:00 - 18:00</li>
          <li>🌙 <strong>Tối:</strong> 18:00 - 22:00</li>
          <li>🌃 <strong>Đêm:</strong> 22:00 - 7:00 (AI Assistant)</li>
        </ul>
        
        <h3>🎯 Dịch vụ tư vấn:</h3>
        <ul>
          <li>📋 <strong>Tư vấn sản phẩm:</strong> Chọn supplement phù hợp</li>
          <li>🍽️ <strong>Tư vấn dinh dưỡng:</strong> Chế độ ăn tăng cơ, giảm mỡ</li>
          <li>🏋️‍♂️ <strong>Tư vấn tập luyện:</strong> Lịch trình tập phù hợp</li>
          <li>💊 <strong>Tư vấn sức khỏe:</strong> Tương tác thuốc, liều lượng</li>
          <li>📦 <strong>Hỗ trợ đặt hàng:</strong> Hướng dẫn mua hàng, thanh toán</li>
          <li>🔄 <strong>Đổi trả:</strong> Hỗ trợ đổi trả, bảo hành</li>
        </ul>
      `
    }
  }
]

// AI Assistant Data
export const aiAssistantData = {
  name: "MyWhey AI",
  avatar: "🤖",
  welcomeMessage: "Xin chào! Tôi là MyWhey AI - trợ lý tư vấn sản phẩm và dinh dưỡng. Tôi có thể giúp bạn:",
  capabilities: [
    "💊 Tư vấn sản phẩm supplement phù hợp",
    "🥗 Hướng dẫn chế độ dinh dưỡng",
    "📊 Tính toán calo và macro",
    "🏋️ Tư vấn chế độ tập luyện",
    "❓ Trả lời thắc mắc về sản phẩm"
  ],
  quickQuestions: [
    "Tôi nên uống Whey Protein khi nào?",
    "Creatine có tác dụng gì?",
    "Làm sao để tăng cơ hiệu quả?",
    "Chế độ ăn giảm mỡ như thế nào?",
    "Vitamin D3 K2 có cần thiết không?"
  ]
}

// AI Knowledge Base
export const aiKnowledgeBase = {
  whey_protein: {
    keywords: ["whey", "protein", "đạm", "tăng cơ", "phục hồi"],
    responses: [
      "Whey Protein là nguồn protein chất lượng cao, chứa đầy đủ axit amin thiết yếu. Thời điểm uống tốt nhất là sau khi tập 30 phút với liều lượng 20-30g protein.",
      "Có 3 loại Whey chính: Concentrate (70-80% protein), Isolate (90%+ protein), và Hydrolysate (hấp thu nhanh nhất).",
      "Whey Protein giúp tăng cơ, phục hồi sau tập, tăng cường miễn dịch và giảm cảm giác đói."
    ]
  },
  creatine: {
    keywords: ["creatine", "tăng sức mạnh", "năng lượng", "atp"],
    responses: [
      "Creatine giúp tái tạo ATP - nguồn năng lượng chính cho cơ bắp. Liều lượng khuyến nghị: 3-5g/ngày.",
      "Giai đoạn nạp: 20g/ngày chia 4 lần trong 5-7 ngày. Giai đoạn duy trì: 3-5g/ngày.",
      "Creatine giúp tăng sức mạnh, sức bền, khối lượng cơ và cải thiện chức năng não."
    ]
  },
  nutrition: {
    keywords: ["dinh dưỡng", "ăn uống", "calo", "macro", "tăng cơ", "giảm mỡ"],
    responses: [
      "Để tăng cơ: Calorie surplus 300-500 calo/ngày, protein 1.6-2.2g/kg, carb 4-7g/kg, fat 0.8-1.2g/kg.",
      "Để giảm mỡ: Calorie deficit 300-500 calo/ngày, duy trì protein cao, giảm carb thông minh.",
      "Thời điểm ăn quan trọng: Bữa sáng (protein + carb), trước tập 2-3h (bữa chính), sau tập 30 phút (protein + carb)."
    ]
  },
  vitamin_d3k2: {
    keywords: ["vitamin d3", "vitamin k2", "canxi", "xương", "tim mạch"],
    responses: [
      "Vitamin D3 giúp hấp thu canxi, Vitamin K2 định hướng canxi vào xương thay vì mạch máu.",
      "Liều lượng: D3 1000-4000 IU/ngày, K2 100-200 mcg/ngày. Uống cùng bữa ăn có chất béo.",
      "Cần thiết cho người ít tiếp xúc ánh nắng, người cao tuổi, người tập gym."
    ]
  },
  omega3: {
    keywords: ["omega 3", "dầu cá", "epa", "dha", "tim mạch", "viêm"],
    responses: [
      "Omega-3 gồm EPA (chống viêm) và DHA (tốt cho não). Liều lượng: 1000-2000mg EPA+DHA/ngày cho người tập thể thao.",
      "Giúp giảm viêm cơ sau tập, tăng cường tim mạch, cải thiện nhận thức và giấc ngủ.",
      "Nguồn: Cá béo, hạt chia, quả óc chó. Uống cùng bữa ăn có chất béo."
    ]
  },
  general: {
    keywords: ["chung", "tổng quan", "bắt đầu"],
    responses: [
      "Chào bạn! Tôi có thể tư vấn về supplement và dinh dưỡng. Bạn muốn biết thêm về sản phẩm nào?",
      "Để tư vấn chính xác, hãy cho tôi biết mục tiêu của bạn (tăng cơ/giảm mỡ) và tình trạng hiện tại.",
      "Tôi có thể giúp bạn chọn sản phẩm phù hợp và hướng dẫn cách sử dụng hiệu quả."
    ]
  }
}

// Product Recommendations
export const productRecommendations = {
  beginner: {
    title: "Gói khởi đầu cho người mới tập",
    products: [
      { id: 1, name: "Whey Protein Gold Standard", reason: "Protein chất lượng cao, dễ tiêu hóa" },
      { id: 25, name: "Creatine Monohydrate", reason: "Tăng sức mạnh và hiệu suất tập luyện" },
      { id: 17, name: "Vitamin D3 K2", reason: "Hỗ trợ xương khớp và hệ miễn dịch" }
    ]
  },
  muscle_gain: {
    title: "Gói tăng cơ hiệu quả",
    products: [
      { id: 1, name: "Whey Protein Gold Standard", reason: "Protein cao cấp cho phát triển cơ bắp" },
      { id: 25, name: "Creatine Monohydrate", reason: "Tăng sức mạnh và khối lượng cơ" },
      { id: 33, name: "Mass Gainer", reason: "Bổ sung calo và protein cho tăng cân" },
      { id: 17, name: "Vitamin D3 K2", reason: "Hỗ trợ phát triển xương và cơ" }
    ]
  },
  fat_loss: {
    title: "Gói hỗ trợ giảm mỡ",
    products: [
      { id: 3, name: "Whey Isolate", reason: "Protein cao, ít calo" },
      { id: 17, name: "Vitamin D3 K2", reason: "Tăng cường trao đổi chất" },
      { id: 23, name: "Omega-3", reason: "Giảm viêm và hỗ trợ tim mạch" },
      { id: 19, name: "Pre-Workout", reason: "Tăng hiệu suất tập luyện" }
    ]
  },
  performance: {
    title: "Gói tăng hiệu suất thể thao",
    products: [
      { id: 1, name: "Whey Protein Gold Standard", reason: "Phục hồi cơ bắp nhanh chóng" },
      { id: 25, name: "Creatine Monohydrate", reason: "Tăng sức mạnh và sức bền" },
      { id: 19, name: "Pre-Workout", reason: "Tăng năng lượng và tập trung" },
      { id: 23, name: "Omega-3", reason: "Giảm viêm và tăng hiệu suất" }
    ]
  }
}
