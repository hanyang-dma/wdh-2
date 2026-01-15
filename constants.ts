import { Content, Language } from './types';

const ZH_CONTENT: Content = {
  courseInfo: {
    department: "设计系",
    syllabus: "教学大纲 2025-2026",
    name: "西方设计史",
    enName: "History of Western Design",
    code: "ART-HIST-101",
    credits: "3 学分 / 48 学时",
    semester: "第一学年 第一学期",
    description: "从传统的“美术意识”向现代“设计理性”转型。不仅是历史的罗列，更是对人类造物逻辑的系统复演。",
    required: "必修课程",
    foundation: "专业基础课",
    school: "设计学院"
  },
  objectives: [
    {
      title: "认知目标",
      subtitle: "全景式时空观",
      description: "从1750年工业革命前夕到21世纪数字全球化，构建设计文明全景。理解设计如何从个体手工艺演变为社会化协作。",
      icon: 'eye'
    },
    {
      title: "能力目标",
      subtitle: "批判性思维",
      description: "具备“史论结合”的分析力。从包豪斯家具中读出钢铁革新与社会理想，寻找解决当代技术焦虑的方案。",
      icon: 'brain'
    },
    {
      title: "素质目标",
      subtitle: "设计伦理内化",
      description: "明确设计师在资源短缺、老龄化社会前的伦理立场，建立“中国方案”的全球视野。",
      icon: 'heart'
    }
  ],
  chapters: [
    {
      id: 1,
      periodLabel: "1750-1850",
      hoursLabel: "4 学时",
      title: "工业革命与视觉危机",
      subtitle: "Industrial Revolution",
      description: "人类生产方式从“工匠手作”向“机器大生产”转变的历史拐点。水晶宫博览会暴露了技术与审美的鸿沟。",
      keyPoints: ["蒸汽机与城市化", "1851水晶宫博览会", "机器产品的审美贫困化"],
      keyFigures: ["约瑟夫·帕克斯顿", "奥古斯都·普金"],
      homework: "分析水晶宫展品装饰过载原因的调研报告",
      imageAlt: "Crystal Palace structure sketch",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    },
    {
      id: 2,
      periodLabel: "1850-1900",
      hoursLabel: "6 学时",
      title: "设计觉醒：工艺美术运动",
      subtitle: "Arts & Crafts Movement",
      description: "对机器异化的第一次反思。核心宗旨是“诚实的材料、简单的结构、自然的装饰”。",
      keyPoints: ["拉斯金的机械批判", "威廉·莫里斯的红屋", "艺术为民的乌托邦"],
      keyFigures: ["约翰·拉斯金", "威廉·莫里斯"],
      homework: "手绘莫里斯风格纹样并解析自然结构逻辑",
      imageAlt: "William Morris wallpaper pattern",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    },
    {
      id: 3,
      periodLabel: "1890-1910",
      hoursLabel: "6 学时",
      title: "新艺术运动",
      subtitle: "Art Nouveau",
      description: "世纪末的有机形态研究。从自然界提取流线型线条，尝试铁艺、玻璃等新材料的审美化。",
      keyPoints: ["有机曲线风格", "维也纳分离派", "高迪的建筑"],
      keyFigures: ["穆夏", "吉马德", "麦金托什", "高迪"],
      homework: "巴黎地铁入口或高迪建筑的形态结构分析笔记",
      imageAlt: "Art Nouveau metro entrance curves",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    },
    {
      id: 4,
      periodLabel: "1900-1925",
      hoursLabel: "6 学时",
      title: "现代主义的黎明",
      subtitle: "Early Modernism",
      description: "彻底摆脱历史主义枷锁。装饰即罪恶，建筑是居住的机器。",
      keyPoints: ["德意志制造联盟 (DWB)", "荷兰风格派", "俄国构成主义"],
      keyFigures: ["彼得·贝伦斯", "蒙德里安", "勒·柯布西耶"],
      homework: "基于风格派逻辑的海报排版实验",
      imageAlt: "De Stijl composition",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    },
    {
      id: 5,
      periodLabel: "1919-1933",
      hoursLabel: "8 学时",
      title: "包豪斯：全球原点",
      subtitle: "The Bauhaus",
      description: "现代设计教育的基石。艺术与技术的新统一，基础课程体系的建立。",
      keyPoints: ["魏玛/德绍/柏林三阶段", "三大构成", "工作坊制度"],
      keyFigures: ["格罗皮乌斯", "康定斯基", "马塞尔·布劳耶"],
      homework: "制作1:5瓦西里椅模型及结构分析册",
      imageAlt: "Bauhaus building geometric",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    },
    {
      id: 6,
      periodLabel: "1930-1960",
      hoursLabel: "6 学时",
      title: "美国商业设计",
      subtitle: "American Streamlining",
      description: "设计成为商业驱动力。流线型风格与计划废止制。",
      keyPoints: ["流线型运动", "职业设计师诞生", "MAYA原则"],
      keyFigures: ["雷蒙德·罗维", "诺曼·贝尔·盖茨"],
      homework: "关于“消费主义设计在数字变体”的短文",
      imageAlt: "Streamlined locomotive sketch",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    },
    {
      id: 7,
      periodLabel: "1945-1970",
      hoursLabel: "4 学时",
      title: "国际主义与波普反叛",
      subtitle: "International Style & Pop",
      description: "理性的瑞士网格系统 vs 感性的青年波普文化。",
      keyPoints: ["瑞士平面风格", "波普设计", "激进设计"],
      keyFigures: ["阿明·霍夫曼", "汉密尔顿"],
      homework: "运用网格系统设计“反思波普”排版方案",
      imageAlt: "Swiss style typography poster",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    },
    {
      id: 8,
      periodLabel: "1970-1995",
      hoursLabel: "4 学时",
      title: "后现代与数字化",
      subtitle: "Postmodernism",
      description: "少即是乏味。历史符号拼贴与孟菲斯集团的感官解放。",
      keyPoints: ["文丘里的复杂性", "孟菲斯集团", "Apple Macintosh"],
      keyFigures: ["索特萨斯", "菲利普·斯塔克"],
      homework: "1980年代数字界面设计进化史年表",
      imageAlt: "Memphis style furniture pattern",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    },
    {
      id: 9,
      periodLabel: "Contemporary",
      hoursLabel: "4 学时",
      title: "未来已至：可持续与交互",
      subtitle: "Future & Sustainability",
      description: "数字交互、生态伦理与可持续设计。从形态创造转向算法调优。",
      keyPoints: ["AIGC辅助设计", "摇篮到摇篮 (C2C)", "老龄化设计"],
      keyFigures: ["Neri Oxman", "深泽直人"],
      homework: "针对社会议题（如独居老人）的综合设计提案",
      imageAlt: "Parametric structure wireframe",
      labels: { summary: "摘要", keyConcepts: "核心概念", keyFigures: "关键人物", assignment: "课后作业", figureRef: "图例" }
    }
  ],
  grading: {
    title: "评估体系",
    description: "课程评估采取“全程嵌套、过程导向、多维高阶”的方案。\n摒弃单一填鸭式教学，严密遵循“生产力决定生产关系”逻辑。",
    items: [
      { label: "平时表现", percentage: 40, details: "出勤 (10%) + 讨论 (10%) + 笔记 (20%)" },
      { label: "期中考核", percentage: 20, details: "微型学术论文 (1500字)" },
      { label: "期末考核", percentage: 40, details: "闭卷考试 或 开放式专题论文" },
    ]
  },
  footer: {
    essentialReadingsTitle: "核心书目",
    digitalResourcesTitle: "数字资源",
    readings: [
      { title: "王受之 《世界现代设计史》", note: "第二版, 2015 - 史料支撑" },
      { title: "大卫·瑞兹曼 《现代设计史》", note: "2013 - 社会文化视角" },
      { title: "尼古劳斯·佩夫斯纳 《现代设计的先驱者》", note: "扩展阅读 - 精神脉络" }
    ],
    resources: [
      { name: "V&A Museum Archives", linkText: "访问 ->" },
      { name: "MoMA Design Collection", linkText: "访问 ->" },
      { name: "China MOOC Library", linkText: "访问 ->" }
    ],
    copyright: "© 2025 设计史教研室 教学大纲 VER 12.05"
  },
  ui: {
    marquee1: "设计史 /// 生产 · 美学 · 伦理 /// 设计史 ///",
    marquee2: "阅读 · 分析 · 创造 · 批判 · 阅读 · 分析 · 创造 · 批判 ·",
    fig: "图",
    ref: "参考"
  }
};

const EN_CONTENT: Content = {
  courseInfo: {
    department: "Department of Design",
    syllabus: "Syllabus 2025-2026",
    name: "Western Design History",
    enName: "History of Western Design",
    code: "ART-HIST-101",
    credits: "3 Credits / 48 Hours",
    semester: "Year 1 Semester 1",
    description: "Transitioning from traditional 'Art Consciousness' to modern 'Design Rationality'. It is not just a list of history, but a systematic reenactment of the logic of human creation.",
    required: "REQUIRED COURSE",
    foundation: "Professional Foundation",
    school: "School of Design"
  },
  objectives: [
    {
      title: "Cognitive",
      subtitle: "Panoramic View",
      description: "Construct a panorama of design civilization from the Industrial Revolution (1750) to 21st-century digital globalization. Understand how design evolved from individual craftsmanship to socialized collaboration.",
      icon: 'eye'
    },
    {
      title: "Capability",
      subtitle: "Critical Thinking",
      description: "Develop analytical skills combining 'history and theory'. Read steel innovation and social ideals from Bauhaus furniture, and find solutions to contemporary technological anxiety.",
      icon: 'brain'
    },
    {
      title: "Ethics",
      subtitle: "Design Ethics",
      description: "Clarify the ethical stance of designers in a resource-scarce and aging society, establishing a global vision with local solutions.",
      icon: 'heart'
    }
  ],
  chapters: [
    {
      id: 1,
      periodLabel: "1750-1850",
      hoursLabel: "4 Hours",
      title: "Industrial Revolution & Visual Crisis",
      subtitle: "Industrial Revolution",
      description: "The historical turning point from 'craftsmanship' to 'machine mass production'. The Crystal Palace Exhibition exposed the gap between technology and aesthetics.",
      keyPoints: ["Steam Engine & Urbanization", "1851 Crystal Palace", "Aesthetic Poverty of Products"],
      keyFigures: ["Joseph Paxton", "Augustus Pugin"],
      homework: "Research report on the reasons for decorative overload in Crystal Palace exhibits",
      imageAlt: "Crystal Palace structure sketch",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    },
    {
      id: 2,
      periodLabel: "1850-1900",
      hoursLabel: "6 Hours",
      title: "Design Awakening: Arts & Crafts",
      subtitle: "Arts & Crafts Movement",
      description: "The first reflection on machine alienation. Core mission: 'honest materials, simple structure, natural decoration'.",
      keyPoints: ["Ruskin's Critique", "William Morris's Red House", "Art for the People"],
      keyFigures: ["John Ruskin", "William Morris"],
      homework: "Hand-draw Morris-style patterns and analyze natural structural logic",
      imageAlt: "William Morris wallpaper pattern",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    },
    {
      id: 3,
      periodLabel: "1890-1910",
      hoursLabel: "6 Hours",
      title: "Art Nouveau",
      subtitle: "Art Nouveau",
      description: "Study of organic forms at the fin de siècle. Extracting streamlined lines from nature, attempting aestheticization of iron and glass.",
      keyPoints: ["Organic Curve Style", "Vienna Secession", "Gaudi's Architecture"],
      keyFigures: ["Mucha", "Guimard", "Mackintosh", "Gaudi"],
      homework: "Structural analysis notes on Paris Metro entrances or Gaudi's architecture",
      imageAlt: "Art Nouveau metro entrance curves",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    },
    {
      id: 4,
      periodLabel: "1900-1925",
      hoursLabel: "6 Hours",
      title: "Dawn of Modernism",
      subtitle: "Early Modernism",
      description: "Complete break from historicism. Ornament is crime; the house is a machine for living.",
      keyPoints: ["Deutscher Werkbund (DWB)", "De Stijl", "Russian Constructivism"],
      keyFigures: ["Peter Behrens", "Mondrian", "Le Corbusier"],
      homework: "Poster layout experiment based on De Stijl logic",
      imageAlt: "De Stijl composition",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    },
    {
      id: 5,
      periodLabel: "1919-1933",
      hoursLabel: "8 Hours",
      title: "Bauhaus: Global Origin",
      subtitle: "The Bauhaus",
      description: "Cornerstone of modern design education. New unity of art and technology, establishment of the basic course system.",
      keyPoints: ["Weimar/Dessau/Berlin", "Three Compositions", "Workshop System"],
      keyFigures: ["Gropius", "Kandinsky", "Marcel Breuer"],
      homework: "Make a 1:5 Wassily Chair model and structural analysis booklet",
      imageAlt: "Bauhaus building geometric",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    },
    {
      id: 6,
      periodLabel: "1930-1960",
      hoursLabel: "6 Hours",
      title: "American Commercial Design",
      subtitle: "American Streamlining",
      description: "Design becomes a commercial driver. Streamlining style and planned obsolescence.",
      keyPoints: ["Streamlining Movement", "Birth of Profession", "MAYA Principle"],
      keyFigures: ["Raymond Loewy", "Norman Bel Geddes"],
      homework: "Short essay on 'Consumerist Design in Digital Variants'",
      imageAlt: "Streamlined locomotive sketch",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    },
    {
      id: 7,
      periodLabel: "1945-1970",
      hoursLabel: "4 Hours",
      title: "International Style & Pop Revolt",
      subtitle: "International Style & Pop",
      description: "Rational Swiss grid systems vs. emotional youth Pop culture.",
      keyPoints: ["Swiss Typography", "Pop Design", "Radical Design"],
      keyFigures: ["Armin Hofmann", "Richard Hamilton"],
      homework: "Design a 'Reflecting Pop' layout using grid systems",
      imageAlt: "Swiss style typography poster",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    },
    {
      id: 8,
      periodLabel: "1970-1995",
      hoursLabel: "4 Hours",
      title: "Postmodernism & Digital",
      subtitle: "Postmodernism",
      description: "Less is a bore. Historical symbol collage and Memphis Group's sensory liberation.",
      keyPoints: ["Venturi's Complexity", "Memphis Group", "Apple Macintosh"],
      keyFigures: ["Ettore Sottsass", "Philippe Starck"],
      homework: "Timeline of 1980s digital interface design evolution",
      imageAlt: "Memphis style furniture pattern",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    },
    {
      id: 9,
      periodLabel: "Contemporary",
      hoursLabel: "4 Hours",
      title: "Future: Sustainability & Interaction",
      subtitle: "Future & Sustainability",
      description: "Digital interaction, ecological ethics, and sustainable design. From form creation to algorithm tuning.",
      keyPoints: ["AIGC Design", "Cradle to Cradle (C2C)", "Design for Aging"],
      keyFigures: ["Neri Oxman", "Naoto Fukasawa"],
      homework: "Comprehensive design proposal for social issues (e.g., elderly living alone)",
      imageAlt: "Parametric structure wireframe",
      labels: { summary: "Summary", keyConcepts: "Key Concepts", keyFigures: "Key Figures", assignment: "Assignment", figureRef: "FIG" }
    }
  ],
  grading: {
    title: "Evaluation System",
    description: "Course assessment adopts a 'process-oriented, multi-dimensional' scheme.\nAbandoning single rote learning, strictly following the logic of 'productivity determines production relations'.",
    items: [
      { label: "Performance", percentage: 40, details: "Attendance (10%) + Discussion (10%) + Notes (20%)" },
      { label: "Midterm", percentage: 20, details: "Micro Academic Essay (1500 words)" },
      { label: "Final", percentage: 40, details: "Closed-book Exam OR Open Topic Essay" },
    ]
  },
  footer: {
    essentialReadingsTitle: "Essential Readings",
    digitalResourcesTitle: "Digital Resources",
    readings: [
      { title: "Wang Shouzhi, 'History of Modern Design'", note: "2nd Ed, 2015 - Historical Support" },
      { title: "David Raizman, 'History of Modern Design'", note: "2013 - Socio-cultural Perspective" },
      { title: "Nikolaus Pevsner, 'Pioneers of Modern Design'", note: "Extended Reading - Spiritual Context" }
    ],
    resources: [
      { name: "V&A Museum Archives", linkText: "ACCESS ->" },
      { name: "MoMA Design Collection", linkText: "ACCESS ->" },
      { name: "China MOOC Library", linkText: "ACCESS ->" }
    ],
    copyright: "© 2025 DEPARTMENT OF DESIGN HISTORY. SYLLABUS VER 12.05"
  },
  ui: {
    marquee1: "Design History /// Production · Aesthetics · Ethics /// Design History ///",
    marquee2: "Read · Analyze · Create · Critique · Read · Analyze · Create · Critique ·",
    fig: "FIG",
    ref: "REF"
  }
};

export const CONTENT: Record<Language, Content> = {
  zh: ZH_CONTENT,
  en: EN_CONTENT
};