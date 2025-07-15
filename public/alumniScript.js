// Alumni Data.
const alumniData = [
  {
    name: "Chandan Sharma",
    batch: "2020",
    role: "Physicswallah",
    quote: "Guided by discipline",
    testimonial:
      "Dhirah had been an integral part of my family. The amount of selfless love and care I received is really fascinating but not only that I got opportunity to learn and meet exciting personalities. \nDhirah gave me a platform to learn and share the wisdom of bhagavad gita. It gave me a boost in self confidence and simultaneously I discovered the areas of improvement.",
    img: "images/alumniImages/ChandanSharmaPrji.jpg",
  },
  {
    name: "Abhinandan Jain",
    batch: "2016",
    role: "State Bank of India",
    quote: "Found peace through service",
    testimonial:
      "Dhirah gave me a fresh perspective on life. The values I imbibed here shaped my personality and helped me remain peaceful and purposeful even amidst corporate chaos.",
    img: "images/alumniImages/AbhinandanaPrji.jpg",
  },
  {
    name: "Kshitij Kansal",
    batch: "2016",
    role: "INDIAN OIL CORPORATION LIMITED",
    quote: "Inner light awakened gently",
    testimonial:
      "The wisdom I gained from Dhirah continues to guide me in both my spiritual and professional journey. It helped me grow not just as an employee, but as a human being.",
    img: "images/alumniImages/KshitijkansalPrji.jpg",
  },
  {
    name: "Abhinav Goswami",
    batch: "2025",
    role: "Astrotalk",
    quote: "Grateful for the journey",
    testimonial:
      "Once an introvert, grappling with depression and dissatisfaction, I have now blossomed into a person filled with joy and many newfound virtues.\nMy involvement with Dhirah has profoundly impacted my life, providing a structured way to step into spirituality. Dhirah feels like an oasis amid the college’s throat-cutting competition. Here, everyone is genuinely connected by a shared love for Divinity. This community has shown me that spirituality is for all and free, but not cheap, emphasising the depth and value of true spiritual connection.",
    img: "images/alumniImages/AbhinavGoswamiPrji.jpg",
  },
  {
    name: "Vansh Taneja",
    batch: "2023",
    role: "Instantly.ai",
    quote: "Dhirah changed my path",
    testimonial:
      "Dhirah gave us a life less ordinary—filled with purpose, devotion, and deep bonds. From feasts to festivals, camps to spiritual growth, we built a fraternity rooted in selfless love and shared wisdom. Every day became a celebration of a higher calling.",
    img: "images/alumniImages/VanshTanejaPrji.jpg",
  },
  {
    name: "Ashish Gupta",
    batch: "2017",
    role: "IIT Jodhpur",
    quote: "Learned love through service",
    testimonial:
      "Being part of Dhirah taught me humility and discipline. The lifestyle I lead today is because of the foundation laid during my time in the Dhirah community.",
    img: "images/alumniImages/AshishGuptaPrji.jpg",
  },
  {
    name: "Vivek",
    batch: "2014",
    role: "Indraprastha Gas Limited",
    quote: "Enlightenment through small steps",
    testimonial:
      "Dhirah shaped my values and strengthened my relationships. I feel deeply blessed to have spent those years in such an enlightening environment.",
    img: "images/alumniImages/VivekGoyalPrji.jpg",
  },
  {
    name: "Parth",
    batch: "2023",
    role: "Airtel Payments Bank",
    quote: "Walking with mindful purpose",
    testimonial:
      "Dhirah has been my spiritual anchor. It gifted me a family of genuine friends and a purpose rooted in timeless wisdom.",
    img: "images/alumniImages/ParthPrji.jpg",
  },
  // {
  //   name: "Vikrami Raghav",
  //   batch: "2024",
  //   role: "Rastriya Ispat Nigam Limited Visakhapatnam",
  //   quote: "My soul found direction",
  //   testimonial:
  //     "Dhirah gave me the strength to remain humble and peaceful even in the face of big responsibilities. It offered not just mere association but true friendships and life lessons rooted in ancient wisdom of the Bhagavad Gita.",
  //   img: "images/alumniImages/VikramiRaghavPrji.jpg",
  // },
  {
    name: "Gaurav Kumar",
    batch: "2025",
    role: "Rockman Industries",
    quote: "Inspired by humble teachings",
    testimonial:
      "Dhirah helped me align my ambitions with a deeper sense of purpose. The balance I've found between work and life is solely due to the association and teachings at Dhirah.",
    img: "images/alumniImages/GauravKumarPrji.jpg",
  },
  {
    name: "Pawan Joshi",
    batch: "2024",
    role: "Cognizant Technology Solutions India Private Ltd",
    quote: "Steadfast in sacred values",
    testimonial:
      "Dhirah has been a lighthouse in the stormy ocean of student life. Its teachings on Bhagavad Gita and life wisdom grounded me and gave clarity in every step I took in life.",
    img: "images/alumniImages/PawanJoshiPrji.jpg",
  },
  {
    name: "Ashish Kumar",
    batch: "2025",
    role: "instantly.ai",
    quote: "Faith found, heart awakened",
    testimonial:
      "Dhirah transformed my life—from atheism to deep faith in God. I found a family that supports self-growth, spirituality, and true friendship. With inspiring mentors and like-minded peers, I gained purpose, discipline, and joy. Joining Dhirah was the best decision for my mind, body, and soul.",
    img: "images/alumniImages/AshishKumarPrji.jpg",
  },
  {
    name: "Aryan Rohela",
    batch: "2025",
    role: "BharatPe",
    quote: "Rooted in joyful experiences",
    testimonial:
      "Dhirah brought direction into my daily life. The association of wise people and the structured sessions helped me grow into a more grounded, joyful person.",
    img: "images/alumniImages/AryanRohelaPrji.jpg",
  },
  {
    name: "Sanjay Saini",
    batch: "2020",
    role: "DOITC, RAJASTHAN GOVT",
    quote: "Balance through clarity",
    testimonial:
      "At Dhirah, I learned the art of balancing work and life. The principles and association I received still guide me through every decision I take today.",
    img: "images/alumniImages/SanjaySainiPrji.jpg",
  },
  {
    name: "Krish Tayal",
    batch: "2021",
    role: "Vardhman Mahavir Medical College",
    quote: "Anchored in timeless knowledge",
    testimonial:
      "Dhirah Society connected me with sincere people, guiding my growth with genuine support. Their uplifting community kept me focused on devotion, helping me resist distractions of the world and stay aligned with my path to success. It's been a blessing on my journey.",
    img: "images/alumniImages/KrishTayalPrji.jpg",
  },
  {
    name: "Manshu Tuteja",
    batch: "2019",
    role: "Forvis Mazars",
    quote: "Gratitude shaped my journey",
    testimonial:
      "Dhirah gave me more than a spiritual foundation—it gave me clarity, resilience, and a heart full of gratitude. The impact of this society still reflects in how I deal with people and life today.",
    img: "images/alumniImages/ManshuTutejaPrji.jpg",
  },
  {
    name: "Sachin Tiwari",
    batch: "2020",
    role: "UnitedHealth Group",
    quote: "Dhirah calmed my chaos",
    testimonial:
      "Through Dhirah, I learned how to channel my energy positively. It provided me with a unique perspective that helps me manage both work stress and life aspirations together.",
    img: "images/alumniImages/SachinTiwariPrji.jpg",
  },
  {
    name: "Gautam Singh",
    batch: "2016",
    role: "Deputy Manager at Steel Authority of India Limited",
    quote: "Compassion grew through association",
    testimonial:
      "Dhirah's influence continues to bless my life. The values I cultivated here make me a more compassionate and thoughtful leader in my workplace.",
    img: "images/alumniImages/GautamSinghPrji.jpg",
  },
  {
    name: "Hemant Kumar",
    batch: "2025",
    role: "Freelancer",
    quote: "Purpose rooted in simplicity",
    testimonial:
      "Dhirah gave me more than knowledge—it gave me purpose. Amidst chaos, it grounded me in simplicity and knowledge. The time I spent with Dhirah devotees has been life-altering.",
    img: "images/alumniImages/hemantKumarPrji.webp",
  },
  {
    name: "Ashok Kumar Sharma",
    batch: "2020",
    role: "Physics Wallah Pvt Ltd",
    quote: "Dhirah shaped my teaching",
    testimonial:
      "Dhirah introduced me to a world of wisdom I never imagined I'd explore. Its influence helped me become a better teacher, and a professional.",
    img: "images/alumniImages/AshokKumarPrji.jpg",
  },
  {
    name: "Raghav Soni",
    batch: "2025",
    role: "Jarvis - Technology, Strategy & Consulting",
    quote: "Happiness lies in service",
    testimonial:
      "Before Dhirah, I explored many things but still felt a void inside. Dhirah helped me discover that true happiness lies within, not outside. It gave me real friends, deep reflection, and a path to growth. I'm truly grateful for this life-changing community.",
    img: "images/alumniImages/RaghavSoniPrji.jpg",
  },
  {
    name: "Saurabh Gupt",
    batch: "2017",
    role: "Qualcomm",
    quote: "Rooted while reaching high",
    testimonial:
      "My experience with Dhirah helped me prioritize what truly matters. It shaped my values and gave me tools to navigate a career in tech while staying rooted.",
    img: "images/alumniImages/SaurabhPrji.jpg",
  },
  {
    name: "Sanjeev Kumar",
    batch: "2016",
    role: "FMI BUILDING INNOVATION",
    quote: "Peace through spiritual goals",
    testimonial:
      "Dhirah helped me align my daily actions with spiritual goals. This clarity has made me more peaceful, efficient, and grateful both in personal and professional life.",
    img: "images/alumniImages/SanjeevKumarPrji.jpg",
  },
  {
    name: "Aditya Bist",
    batch: "2024",
    role: "Polestar Solutions",
    quote: "Transformation through inner work",
    testimonial:
      "Joining DHIRAH was life-changing, deeply connecting me with spirituality and providing immense support from seniors and fellow devotees. The classes helped overcome anger issues and procrastination.",
    img: "images/alumniImages/AdityaBist.jpg",
  },
  {
    name: "Anish Kumar",
    batch: "2024",
    role: "GAIL",
    quote: "Confidence built through faith",
    testimonial:
      "Despite COVID, we had practical online seminars on various life aspects. Post-COVID, we enjoyed camps, trips, and activities like presentations and debates, which boosted my confidence.",
    img: "images/alumniImages/AnishKumarPrji.jpg",
  },
  {
    name: "Jitin Panwar",
    batch: "2022",
    role: "Self Employed",
    quote: "Meaning beyond the mundane",
    testimonial:
      "Initially excited about hostel life, I found deeper meaning through the society Dhirah at NSUT, where I made genuine friends and learned valuable life lessons.",
    img: "images/alumniImages/JitinPanwarPrji.jpg",
  },
  {
    name: "Aditya Sachdeva",
    batch: "2020",
    role: "Bain & Company",
    quote: "Grounded in corporate storm",
    testimonial:
      "Dhirah helped me stay grounded in my fast-paced corporate journey. Its teachings gave me strength and clarity during crucial phases of life.",
    img: "images/alumniImages/AdityaSachdevaPrji.jpg",
  },
  {
    name: "Priyanshu",
    batch: "2023",
    role: "Expedia",
    quote: "Bliss in all seasons",
    testimonial:
      "Dhirah introduced me to tools and wisdom that help navigate both success and failure with grace. It's a community where I found both joy and purpose.",
    img: "images/alumniImages/PriyanshuPrji.jpg",
  },
  {
    name: "Gopesh",
    batch: "2016",
    role: "Servicenow",
    quote: "Values that still guide",
    testimonial:
      "Even years after college, Dhirah remains close to my heart. The values and foundation I gained there continue to shape my personal and professional life.",
    img: "images/alumniImages/GopeshPrji.jpg",
  },
  {
    name: "Dr Lakshay Yadav",
    batch: "2023",
    role: "Safdarjung Hospital",
    quote: "Peace amidst life's urgency",
    testimonial:
      "In the demanding field of medicine, Dhirah taught me how to stay peaceful and centered. It's been a guiding force throughout my journey.",
    img: "images/alumniImages/LakshayYadavPrji.jpg",
  },
  {
    name: "Raghavendra Datt Pathak",
    batch: "2012",
    role: "Coal India Limited",
    quote: "Integrity through divine values",
    testimonial:
      "Dhirah instilled in me timeless values that helped me rise with integrity and humility in a competitive world. It's more than a society — it's a family rooted in divinity.",
    img: "images/alumniImages/RaghavendraPrji.jpg",
  },
  {
    name: "Nand Kishor",
    batch: "2020",
    role: "Mahindra & Mahindra ltd Swaraj division Mohali",
    quote: "Work became meaningful service",
    testimonial:
      "Dhirah helped me transform ordinary work into meaningful service. The spiritual foundation I built here continues to support me in both personal and professional life.",
    img: "images/alumniImages/NandKishorPrji.jpg",
  },
  {
    name: "Arun Chandel",
    batch: "2012",
    role: "Axtria",
    quote: "Purpose shaped by dharma",
    testimonial:
      "Even after years, the values and guidance I received through Dhirah remain close to my heart. It shaped not just my outlook but also my purpose in life.",
    img: "images/alumniImages/ArunChandelPrji.jpeg",
  },
  {
    name: "Nihal Singh",
    batch: "2012",
    role: "Ericsson",
    quote: "Foundation for lasting peace",
    testimonial:
      "Joining Dhirah helped me build a foundation of inner peace and clarity that continues to guide me through professional life. The spiritual grounding I received back then has stayed with me even after all these years. I’m grateful for the values Dhirah instilled.",
    img: "images/alumniImages/NihalSinghPrji.jpg",
  },
  {
    name: "Robin Kumar",
    batch: "2012",
    role: "Nagarro Softwares, Gurgaon",
    quote: "Balance of heart and head",
    testimonial:
      "Even after stepping into the corporate world, the lessons and association from Dhirah remain deeply impactful. It taught me to balance ambition with mindfulness and service, something I strive to carry into every project and team I work with.",
    img: "images/alumniImages/RobinKumarPrji.jpg",
  },
];

function renderAlumni(filter = "all") {
  const container = document.getElementById("alumniContainer");
  container.innerHTML = "";

  const filteredAlumni =
    filter === "all"
      ? alumniData
      : filter === "others"
      ? alumniData.filter((alum) => parseInt(alum.batch) < 2022)
      : alumniData.filter((alum) => alum.batch === filter);

  filteredAlumni.forEach((alum) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 mb-4";
    card.innerHTML = `
    <div class="alumni-card reveal-on-scroll">
      <div class="alumni-card">
        <div class="card-inner">
          <div class="card-front">
            <div class="alumni-img-wrapper">
              <img src="${alum.img}" alt="${alum.name}" class="alumni-img">
            </div>
            <h3>${alum.name}</h3>
            <span class="batch-badge">Batch ${alum.batch}</span>
            <div class="alumni-role">${alum.role}</div>
            <div class="alumni-quote">"${alum.quote}"</div>
          </div>
          <div class="card-back">
            <p class="testimonial-text">"${alum.testimonial}"</p>
            <div class="alumni-signature">
              <div class="dash-line"></div>
              <p>${alum.name}</p>
              <small>${alum.role}</small>
            </div>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  //ScrollReveal for alumni cards
  ScrollReveal().reveal(".reveal-on-scroll", {
    distance: "50px",
    origin: "bottom",
    duration: 800,
    easing: "ease-in-out",
    reset: true,
    interval: 100, //this makes cards appear one by one
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAlumni();

  // Filter buttons
  document.querySelectorAll(".btn-filter").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".btn-filter")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      renderAlumni(this.dataset.batch);
    });
  });
});
