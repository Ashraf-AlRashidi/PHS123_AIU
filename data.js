// ==================== بيانات منصة البشمهندس أشروووف - Professionalism (AIU) ====================

const COURSE_DATA = {
  // ========================================================================
  // إعدادات إشعار دخول الزوار (Visitor Notification Settings)
  // ========================================================================
  config: {
    siteTitle: "ليلة الامتحان",
    subjectName: "Professionalism - الاحترافية المهنية (جامعة العلمين الدولية)",
    professor: "Dr. Engy Elhakeem (د. إنجي الحكيم)",
    developerName: "البشمهندس أشروووف",
    notifications: {
      enabled: true,
      notifyOncePerSession: true,
      ntfyTopic: "ashraf_climate_midterm_2026",
      emailWeb3FormsKey: "",
      emailFormSubmitAddress: "",
      telegramBotToken: "",
      telegramChatId: "",
      customWebhookUrl: ""
    }
  },

  meta: {
    courseTitle: "Professionalism (الاحترافية المهنية)",
    university: "Alamein International University (جامعة العلمين الدولية)",
    professor: "Dr. Engy Elhakeem",
    author: "البشمهندس أشروووف",
    pdfs: [
      { title: "1. Thinking 1", file: "Thinking 1_461914.pdf" },
      { title: "2. Thinking 2", file: "thinking 2_461915.pdf" },
      { title: "3. Teamwork", file: "teamwork_503360.pdf" },
      { title: "4. Medical Ethics", file: "ethics_468028.pdf" },
      { title: "5. Confidentiality", file: "confedentiality_477582.pdf" },
      { title: "6. CV Writing", file: "CV WRITING.pdf" },
      { title: "ملخص المراجعة (صور)", file: "WhatsApp Image 2026-11-23 at 10.55.56 AM.pdf" }
    ]
  },

  // ========================================================================
  // المحاضرات الـ 6 (كل محاضرة: تلخيص ثنائي اللغة + أسئلة تدريب + أسئلة الدكتورة)
  // ========================================================================
  parts: [
    // ==================== PART 1: THINKING 1 ====================
    {
      id: "part1",
      shortLabel: "🧠 1. Thinking 1",
      navTitle: "المحاضرة 1",
      title: "Thinking 1 — التفكير ومهاراته والمنطق الاستنباطي والاستقرائي",
      icon: "🧠",
      pdfFile: "Thinking 1_461914.pdf",
      summaryBlocks: [
        {
          heading: "1. Definition of Thinking (تعريف التفكير)",
          items: [
            `<span class="en-quote">Thinking: Is a goal-oriented flow of ideas and associations that leads to a reality-oriented conclusion.</span>التفكير هو تدفق الأفكار وترابطها معاً بهدف محدد يؤدي إلى نتائج واقعية.`,
            `<strong>يشمل التفكير 4 عمليات أساسية (Encompassing 4 things):</strong><br>1. <span class="en-key">Processing information</span> (معالجة البيانات)<br>2. <span class="en-key">Solving problems</span> (حل المشكلات)<br>3. <span class="en-key">Decision making</span> (اتخاذ القرارات)<br>4. <span class="en-key">Creating ideas</span> (ابتكار الأفكار)`
          ]
        },
        {
          heading: "2. The 9 Thinking Skills (مهارات التفكير التسع — مهمة جداً MCQ)",
          ordered: true,
          items: [
            `<span class="en-key">Focus (التركيز):</span> To pay attention to a selected part of information while ignoring other information. (التركيز على معلومة محددة وتجاهل غيرها)`,
            `<span class="en-key">Organize (التنظيم):</span> Arrange available information according to a certain variable. (ترتيب المعلومات المتاحة وفق متغير معين)`,
            `<span class="en-key">Interpret (التفسير):</span> To understand the meaning of a given information. (فهم معنى المعلومة المعطاة)`,
            `<span class="en-key">Analyze (التحليل):</span> To break down information into basic parts. (تقسيم المعلومات إلى أجزائها الأساسية)`,
            `<span class="en-key">Integrate (البناء والتكامل):</span> To put parts together to form a single whole. (تجميع الأجزاء لتكوين كل واحد متكامل)`,
            `<span class="en-key">Correlate (الربط):</span> To make connections between parts of the information. (إيجاد روابط وعلاقات بين أجزاء المعلومات)`,
            `<span class="en-key">Evaluate (التقييم):</span> To assess the relevance and importance of the information. (تقييم مدى صلة وأهمية المعلومة)`,
            `<span class="en-key">Reasoning (المنطق):</span> To direct the flow of ideas with logic. (توجيه تدفق الأفكار بالمنطق)`,
            `<span class="en-key">Generating (الابتكار):</span> To produce new information from the available information. (إنتاج معلومات أو أفكار جديدة من المتاح)`
          ]
        },
        {
          heading: "3. Four Types of Thinking Relevant to Your Profession (أنواع التفكير الأربعة)",
          ordered: true,
          items: [
            `<span class="en-key">Logical Thinking (التفكير المنطقي):</span> Relevant to <strong>research planning</strong>, <strong>research data analysis</strong>, and <strong>planning case management in clinical practice</strong>.`,
            `<span class="en-key">Analytical Thinking (التفكير التحليلي):</span> Relevant to <strong>clinical thinking &amp; problem solving</strong> in clinical practice.`,
            `<span class="en-key">Critical Thinking (التفكير الناقد):</span> Relevant to <strong>reading and appraisal of scientific papers</strong>. (قراءة وتقييم الأبحاث العلمية)`,
            `<span class="en-key">Creative Thinking (التفكير الإبداعي):</span> Relevant to <strong>research planning</strong>. (تخطيط الأبحاث)`
          ]
        },
        {
          heading: "4. Logical Thinking: Deductive vs. Inductive Reasoning",
          subBlocks: [
            {
              subTitle: "طبيعة التفكير المنطقي (Logical Thinking)",
              bullets: [
                `يتكون من القدرة على فهم الروابط بين مفهومين أو معلومتين (<span class="en-key">connections between two concepts or pieces of information</span>).`,
                `يعتمد على منهج تتابعي خطوة بخطوة في اتجاه واحد (<span class="en-key">Sequential approach: step-by-step and in one direction</span>) وليس منهجاً شمولياً (<span class="en-key">Holistic approach: seeing the big picture in multiple directions</span>).`
              ]
            },
            {
              subTitle: "الاستدلال الاستنباطي (Deductive Reasoning) ⬅️ General → Specific",
              bullets: [
                `<span class="en-quote">Process of reasoning from one or more statements to reach a logically certain conclusion or rule (General Principle → Special Case).</span>`,
                `<strong>القاعدة الذهبية:</strong> لو المقدمة صح، النتيجة <strong>لازم تكون صح 100%</strong> (<span class="en-key">If the premise is true, conclusion MUST BE true</span>).`,
                `<strong>أمثلة السلايد:</strong> (1) Down syndrome = trisomy 21 + Sara has Down syndrome → Sara has trisomy 21. (2) Doctors wear glasses + Mona will be a doctor → Mona will wear glasses (Deductive!).`
              ]
            },
            {
              subTitle: "الاستدلال الاستقرائي (Inductive Reasoning) ⬅️ Specific → General",
              bullets: [
                `<span class="en-quote">A conclusion is reached by generalizing or extrapolating from specific statements to general rules (Special Case → General Principle).</span>`,
                `<strong>القاعدة الذهبية:</strong> التعميم من حالات فردية يجعل النتيجة <strong>غالباً غير صحيحة</strong> (<span class="en-key">Conclusion is mostly not true</span>).`,
                `<strong>أمثلة السلايد:</strong> (1) Samia is obese &amp; diabetic → Therefore ALL diabetic patients are obese. (2) Sara &amp; Murad are doctors wearing glasses → Therefore ALL those wearing glasses are doctors (Inductive!).`
              ]
            }
          ]
        }
      ],
      practiceQuestions: [
        {
          id: "p1_q1",
          type: "MCQ",
          q: "Thinking is defined as a goal-oriented flow of ideas and associations that leads to a:",
          options: [
            "Random emotional reaction",
            "Reality-oriented conclusion",
            "Subjective imagination only",
            "Holistic intuition without facts"
          ],
          ans: 1,
          exp: "تعريف التفكير في السلايد: goal-oriented flow of ideas and associations that leads to a reality-oriented conclusion."
        },
        {
          id: "p1_q2",
          type: "MCQ",
          q: "Which thinking skill means 'to pay attention to a selected part of information while ignoring other information'?",
          options: ["Organize", "Interpret", "Focus", "Correlate"],
          ans: 2,
          exp: "Focus (التركيز) تعني الانتباه لجزء محدد من المعلومات وتجاهل باقي المعلومات."
        },
        {
          id: "p1_q3",
          type: "MCQ",
          q: "Putting parts together to form a single whole describes which thinking skill?",
          options: ["Analyze", "Integrate", "Evaluate", "Generating"],
          ans: 1,
          exp: "Integrate (البناء/التكامل) = تجميع الأجزاء لتكوين كل واحد، وعكسها Analyze (التحليل) = تفكيك الكل لأجزاء."
        },
        {
          id: "p1_q4",
          type: "MCQ",
          q: "Arranging available information according to a certain variable is known as:",
          options: ["Organize", "Focus", "Correlate", "Reasoning"],
          ans: 0,
          exp: "Organize (التنظيم) = ترتيب المعلومات المتاحة وفق متغير معين."
        },
        {
          id: "p1_q5",
          type: "MCQ",
          q: "Which thinking skill is defined as 'assessing the relevance and importance of information'?",
          options: ["Interpret", "Evaluate", "Generating", "Analyze"],
          ans: 1,
          exp: "Evaluate (التقييم) = تقييم مدى صلة وأهمية المعلومات."
        },
        {
          id: "p1_q6",
          type: "MCQ",
          q: "Producing new information from the available information refers to:",
          options: ["Correlate", "Reasoning", "Generating", "Integrate"],
          ans: 2,
          exp: "Generating (الابتكار) = إنتاج معلومات جديدة من المعلومات المتاحة."
        },
        {
          id: "p1_q7",
          type: "MCQ",
          q: "Which type of thinking is specifically relevant to reading and appraisal of scientific papers?",
          options: ["Logical thinking", "Analytical thinking", "Critical thinking", "Creative thinking"],
          ans: 2,
          exp: "التفكير الناقد (Critical thinking) هو المختص بقراءة وتقييم الأبحاث العلمية (reading and appraisal of scientific papers)."
        },
        {
          id: "p1_q8",
          type: "MCQ",
          q: "Logical thinking involves which type of approach?",
          options: [
            "Holistic approach (big picture, multiple directions)",
            "Sequential approach (step-by-step and in one direction)",
            "Random brainstorming approach",
            "Emotional intuitive approach"
          ],
          ans: 1,
          exp: "التفكير المنطقي يعتمد على منهج تتابعي (Sequential: step-by-step and in one direction) وليس شمولي (Holistic)."
        },
        {
          id: "p1_q9",
          type: "MCQ",
          q: "Which of the following is NOT one of the 4 processes encompassed by thinking?",
          options: [
            "Processing information",
            "Solving problems",
            "Decision making",
            "Memorizing blindly without logic"
          ],
          ans: 3,
          exp: "التفكير يشمل 4 عمليات: Processing information, Solving problems, Decision making, Creating ideas."
        },
        {
          id: "p1_q10",
          type: "MCQ",
          q: "Making connections between parts of information is the definition of:",
          options: ["Correlate", "Focus", "Interpret", "Organize"],
          ans: 0,
          exp: "Correlate (الربط) = الربط وإيجاد العلاقات بين أجزاء المعلومات."
        },
        {
          id: "p1_q11",
          type: "True / False",
          q: "In deductive reasoning, we move from a special case to a general principle.",
          options: ["True", "False"],
          ans: 1,
          exp: "خطأ (False) — الاستنباطي (Deductive) ينتقل من العام إلى الخاص (General → Specific)، أما من الخاص للعام فهو الاستقرائي (Inductive)."
        },
        {
          id: "p1_q12",
          type: "True / False",
          q: "In inductive reasoning, the conclusion is mostly NOT true.",
          options: ["True", "False"],
          ans: 0,
          exp: "صواب (True) — لأن الاستقراء يعمم من حالات فردية قليلة، فغالباً تكون النتيجة غير صحيحة تماماً (Conclusion is mostly not true)."
        }
      ],
      officialQuestions: [
        {
          id: "p1_o1",
          examRef: "مثال سلايد 13 — Thinking 1",
          q: "Down syndrome is caused by trisomy of chromosome 21. Sara has Down syndrome. Therefore, Sara has trisomy of chromosome 21. Which type of reasoning is this?",
          options: ["Deductive reasoning", "Inductive reasoning", "Divergent thinking", "Creative reasoning"],
          ans: 0,
          exp: "Deductive reasoning (استنباطي) — انتقلنا من قاعدة عامة (كل مصابي متلازمة داون لديهم تثلث كروموسوم 21) إلى حالة خاصة (سارة)."
        },
        {
          id: "p1_o2",
          examRef: "مثال سلايد 14 — Thinking 1",
          q: "Doctors wear eye glasses. Mona is a medical student, she will be a doctor. Therefore, Mona will wear eye glasses. This is an example of:",
          options: [
            "Inductive reasoning (conclusion is mostly not true)",
            "Deductive reasoning (if the premise is true, conclusion MUST BE true)",
            "Analytical reasoning",
            "Critical appraisal"
          ],
          ans: 1,
          exp: "Deductive reasoning — طالما المقدمة (القاعدة العامة) صحيحة، فالنتيجة منطقياً لا بد أن تكون صحيحة (If premise is true, conclusion MUST BE true)."
        },
        {
          id: "p1_o3",
          examRef: "مثال سلايد 15 — Thinking 1",
          q: "Samia is obese. She is also diabetic. Therefore, ALL diabetic patients are obese. Which type of reasoning is this?",
          options: ["Deductive reasoning", "Inductive reasoning", "Sequential verification", "Convergent reasoning"],
          ans: 1,
          exp: "Inductive reasoning (استقرائي) — تعميم خاطئ من حالة فردية خاصة (سامية) إلى قاعدة عامة (كل مرضى السكري)."
        },
        {
          id: "p1_o4",
          examRef: "مثال سلايد 16 — Thinking 1",
          q: "Sara and Murad are doctors. They are wearing glasses. Therefore, all those wearing glasses are doctors. What is true about this reasoning?",
          options: [
            "It is deductive and always true",
            "It is inductive and the conclusion is mostly not true",
            "It is critical thinking",
            "It is convergent creative thinking"
          ],
          ans: 1,
          exp: "مثال استقرائي (Inductive) من السلايد: التعميم من شخصين فقط يجعل النتيجة غالباً غير صحيحة (Conclusion is mostly not true)."
        }
      ]
    },

    // ==================== PART 2: THINKING 2 ====================
    {
      id: "part2",
      shortLabel: "🔬 2. Thinking 2",
      navTitle: "المحاضرة 2",
      title: "Thinking 2 — التحليلي، الناقد، الإبداعي، وحل المشكلات",
      icon: "🔬",
      pdfFile: "thinking 2_461915.pdf",
      summaryBlocks: [
        {
          heading: "1. Analytical Thinking (التفكير التحليلي)",
          items: [
            `<span class="en-quote">Analysis is a process of separating a whole into its parts. Analytical thinking involves a methodical step-by-step approach to break down complex information/systems into single manageable components.</span>`,
            `<strong>الأهمية:</strong> التفكير التحليلي جزء لا يتجزأ من حل المشكلات السريرية (<span class="en-key">Integral component of clinical problem-solving</span>).`,
            `<strong>المهارات العقلية الثلاث المطلوبة للتفكير التحليلي (3 Mental Skills):</strong><br>a) <span class="en-key">Analytical reasoning:</span> Discern patterns, comprehend structure, recognize relations, infer what could be true.<br>b) <span class="en-key">Deductive reasoning:</span> Reasoning from statements to a logically certain conclusion.<br>c) <span class="en-key">Information management:</span> Effectively collect, organize information, and assess its reliability.`,
            `<strong>طريقة الـ 5 Whys (الخمسة لماذا):</strong> أداة تحليلية للوصول إلى <strong>السبب الجذري للمشكلة (Root cause)</strong> بسؤال «لماذا؟» 5 مرات على الأقل.`
          ]
        },
        {
          heading: "2. Critical Thinking (التفكير الناقد)",
          items: [
            `<span class="en-quote">Critical thinking is the ability to carefully evaluate and judge information to determine its: Credibility, Authenticity, Validity, and Value.</span>`,
            `يشمل: <span class="en-key">Objective analysis, synthesis, evaluation, reflection &amp; reconstruction / explanation of facts</span> لتكوين حكم دقيق.`,
            `أساسي ومطلوب عند <strong>قراءة وتقييم الأوراق العلمية (<span class="en-key">Reading &amp; appraising scientific papers</span>)</strong>.`,
            `<strong>مخطط K-W-L Chart:</strong> أداة للتفكير الناقد وحل المشكلات: <strong>K</strong> (What I Know) — <strong>W</strong> (What I Want to know) — <strong>L</strong> (What I Learnt).`
          ]
        },
        {
          heading: "3. Creative Thinking (التفكير الإبداعي)",
          subBlocks: [
            {
              subTitle: "التعريف والمراحل الأربع للإبداع (4 Phases — احفظ الترتيب!)",
              bullets: [
                `<span class="en-key">Creativity:</span> A phenomenon whereby something <strong>new and valuable</strong> is formed (idea, theory, activity) away from established rules/procedures. Relevant to <strong>Research planning</strong>.`,
                `<strong>1. Incubation (الحضانة):</strong> Acquires an insight of the problem. (استيعاب وفهم المشكلة)`,
                `<strong>2. Intimation (التنويه):</strong> <em>Subconscious phase</em> where the person feels &amp; thinks of the idea. (مرحلة اللاوعي)`,
                `<strong>3. Illumination (التنوير):</strong> The idea <em>bursts from the subconscious to the conscious awareness</em>. (لحظة وميض الفكرة للوعي)`,
                `<strong>4. Verification (التأكيد):</strong> The idea is <em>consciously shaped, elaborated, and verified</em>. (التشكيل والتدقيق الواعي)`
              ]
            },
            {
              subTitle: "التفكير المتباعد (Divergent) vs المتقارب (Convergent) + اختبار Torrance",
              bullets: [
                `<span class="en-key">Divergent Thinking (التفكير المتباعد):</span> Uses <strong>imagination</strong> to generate <strong>multiple solutions/possibilities</strong>. Also called: <em>Creative / Horizontal thinking (Brainstorming)</em>.`,
                `<span class="en-key">Convergent Thinking (التفكير المتقارب):</span> Uses <strong>logic</strong> to put possibilities together focusing on <strong>one potential solution</strong>. Also called: <em>Critical / Vertical / Analytical / Linear thinking</em>.`,
                `<span class="en-key">Torrance Test of Creative Thinking (TTCT):</span> Gives higher points for <strong>rich imagery, humor, or fantasy</strong>.`
              ]
            }
          ]
        },
        {
          heading: "4. Logical vs. Creative Thinking (جدول المقارنة — سؤال امتحان مضمون!)",
          table: {
            headers: ["Aspect (وجه المقارنة)", "Logical Thinking (المنطقي)", "Creative Thinking (الإبداعي)"],
            rows: [
              ["Dominant Brain Hemisphere", "Left hemisphere (الفص الأيسر)", "Right hemisphere (الفص الأيمن)"],
              ["Thinking Style", "Focused (مركّز)", "Diffuse (منتشر/منفتح)"],
              ["Philosophy", "Logical (منطقي)", "Intuitive (حدسي)"],
              ["Thinking Skills", "Deductive / Inductive", "Divergent / Convergent"],
              ["Personality Pattern", "Rational (عقلاني)", "Emotional (عاطفي)"],
              ["Approach", "Objective (موضوعي)", "Subjective (ذاتي)"],
              ["Outcome", "Single possibility (احتمال واحد)", "Multiple possibility (احتمالات متعددة)"],
              ["Purpose", "Looks at probability (الاحتمالية)", "Looks at possibility (الإمكانية)"]
            ]
          }
        },
        {
          heading: "5. Problem Solving (حل المشكلات — الـ 8 خطوات بالترتيب)",
          items: [
            `<strong>المواقف التقليدية الخاطئة (Traditional attitudes):</strong> (1) Being uncomfortable &amp; seeing conflicts، (2) Wanting the right solution، (3) Blaming someone. <br><strong>الصحيح:</strong> المشاكل تحدث دائماً ويجب رؤيتها كـ <strong>فرصة للتحسين (<span class="en-key">Opportunity for improvement</span>)</strong>.`,
            `<strong>الخطوات الـ 8 بالترتيب (8 Steps of Problem Solving):</strong><br>1. <span class="en-key">Identify and assess the problem</span> (تحديد وتقييم المشكلة بدقة: ماذا/متى/أين)<br>2. <span class="en-key">Define the cause</span> (تحديد السبب الجذري — Why? How? Who?)<br>3. <span class="en-key">Identify the interest of persons involved</span> (تحديد مصالح الأشخاص المعنيين)<br>4. <span class="en-key">Collect appropriate information</span> (جمع معلومات موثوقة ومرتبطة)<br>5. <span class="en-key">Organize the information</span> (استبعاد غير الموثوق، عمل جداول ومخططات)<br>6. <span class="en-key">Analyze the information</span> (مقارنة المعلومات وإيجاد علاقة السبب والنتيجة)<br>7. <span class="en-key">Propose a solution</span> (توليد حلول، تقييم البدائل والفوائد والمخاطر)<br>8. <span class="en-key">Make a decision</span> (تنفيذ الحل، اختباره أثناء التنفيذ، تعديله إذا لزم الأمر)`
          ]
        }
      ],
      practiceQuestions: [
        {
          id: "p2_q1",
          type: "MCQ",
          q: "Analytical thinking is best defined as the process of:",
          options: [
            "Creating fantasy stories with humor",
            "Separating a whole into its manageable parts step-by-step",
            "Judging a scientific paper's authenticity only",
            "Generalizing a rule from one case"
          ],
          ans: 1,
          exp: "التحليل (Analysis) هو تفكيك الكل إلى أجزائه (separating a whole into its parts) بخطوات منهجية."
        },
        {
          id: "p2_q2",
          type: "MCQ",
          q: "Which of the following is NOT one of the 3 mental skills required for analytical thinking?",
          options: [
            "Analytical reasoning",
            "Deductive reasoning",
            "Information management",
            "Emotional intuition"
          ],
          ans: 3,
          exp: "المهارات الـ 3 للتفكير التحليلي: Analytical reasoning + Deductive reasoning + Information management."
        },
        {
          id: "p2_q3",
          type: "MCQ",
          q: "The 'Five Whys' method is used in analytical thinking to:",
          options: [
            "Blame a team member",
            "Reach the root cause of a problem",
            "Measure rich imagery and humor",
            "Write a personal statement"
          ],
          ans: 1,
          exp: "طريقة الخمسة لماذا (Five Whys) تُستخدم للوصول إلى السبب الجذري للمشكلة (root cause)."
        },
        {
          id: "p2_q4",
          type: "MCQ",
          q: "Critical thinking evaluates information to determine all of the following EXCEPT:",
          options: ["Credibility", "Authenticity", "Validity and Value", "Fantasy and Humor"],
          ans: 3,
          exp: "التفكير الناقد يقيّم 4 أشياء: Credibility, Authenticity, Validity, Value. أما Fantasy & Humor فتخص اختبار تورانس (TTCT)."
        },
        {
          id: "p2_q5",
          type: "MCQ",
          q: "Which phase of creativity is where the idea 'bursts from the subconscious to the conscious awareness'?",
          options: ["Incubation", "Intimation", "Illumination", "Verification"],
          ans: 2,
          exp: "Illumination (التنوير) هي لحظة قفز الفكرة من اللاوعي إلى الوعي (bursts from subconscious to conscious)."
        },
        {
          id: "p2_q6",
          type: "MCQ",
          q: "In which phase of creative thinking is the idea consciously shaped, elaborated, and verified?",
          options: ["Incubation", "Intimation", "Illumination", "Verification"],
          ans: 3,
          exp: "Verification (التأكيد) هي المرحلة الرابعة والأخيرة، حيث يتم تشكيل الفكرة وتدقيقها بوعي."
        },
        {
          id: "p2_q7",
          type: "MCQ",
          q: "Which phase of creativity is a subconscious phase where the person feels and thinks of the idea?",
          options: ["Incubation", "Intimation", "Illumination", "Verification"],
          ans: 1,
          exp: "Intimation (التنويه) هي المرحلة اللاواعية (subconscious phase) التي يشعر ويفكر فيها الشخص بالفكرة."
        },
        {
          id: "p2_q8",
          type: "MCQ",
          q: "Divergent thinking is also called:",
          options: [
            "Vertical / Linear thinking",
            "Creative / Horizontal thinking (Brainstorming)",
            "Analytical / Critical thinking",
            "Deductive / Objective thinking"
          ],
          ans: 1,
          exp: "Divergent thinking (المتباعد) = الخيال وتوليد أفكار متعددة، ويُسمى Creative / Horizontal thinking (Brainstorming)."
        },
        {
          id: "p2_q9",
          type: "MCQ",
          q: "Convergent thinking focuses on:",
          options: [
            "Generating multiple unrelated possibilities using imagination",
            "Putting multiple possibilities together focusing on ONE potential solution using logic",
            "Ignoring facts and relying on emotions",
            "Avoiding any decision"
          ],
          ans: 1,
          exp: "Convergent thinking (المتقارب) يستخدم المنطق لدمج الاحتمالات والتركيز على حل واحد محتمل (one potential solution)."
        },
        {
          id: "p2_q10",
          type: "MCQ",
          q: "Which brain hemisphere is dominant in Creative Thinking vs. Logical Thinking?",
          options: [
            "Left for creative, Right for logical",
            "Right for creative, Left for logical",
            "Both use Left hemisphere only",
            "Both use Right hemisphere only"
          ],
          ans: 1,
          exp: "المنطقي (Logical) = الفص الأيسر (Left hemisphere)، والإبداعي (Creative) = الفص الأيمن (Right hemisphere)."
        },
        {
          id: "p2_q11",
          type: "MCQ",
          q: "Comparing Logical vs. Creative thinking: Logical thinking looks at ______ while Creative thinking looks at ______.",
          options: [
            "Possibility / Probability",
            "Probability / Possibility",
            "Subjective / Objective",
            "Emotional / Rational"
          ],
          ans: 1,
          exp: "احفظها بصمجة! Logical = Looks at PROBABILITY (الاحتمالية)، أما Creative = Looks at POSSIBILITY (الإمكانية)."
        },
        {
          id: "p2_q12",
          type: "MCQ",
          q: "In the Torrance Test of Creative Thinking (TTCT), higher points are awarded for:",
          options: [
            "Strict mathematical calculation",
            "Rich imagery, humor, or fantasy",
            "Copying standard textbook drawings",
            "Speed without detail"
          ],
          ans: 1,
          exp: "اختبار تورانس للإبداع (TTCT) يعطي درجات أعلى للصور الغنية والفكاهة والخيال (rich imagery, humor, or fantasy)."
        },
        {
          id: "p2_q13",
          type: "MCQ",
          q: "What is the FIRST step in the 8-step problem-solving process?",
          options: [
            "Propose a solution",
            "Collect appropriate information",
            "Identify and assess the problem accurately",
            "Make a decision"
          ],
          ans: 2,
          exp: "الخطوة الأولى دائماً: Identify and assess the problem accurately (تحديد وتقييم المشكلة بدقة)."
        },
        {
          id: "p2_q14",
          type: "True / False",
          q: "Problems should be seen as an opportunity for improvement rather than just conflicts or blaming someone.",
          options: ["True", "False"],
          ans: 0,
          exp: "صواب (True) — السلايد يؤكد: Problems happen all the time and they should be seen as an opportunity for improvement."
        }
      ],
      officialQuestions: [
        {
          id: "p2_o1",
          examRef: "نشاط سلايد 7 — Thinking 2 (Analytical Puzzle)",
          q: "7 subjects (1 per day): Anatomy is on Thursday; Histology on Saturday; Communication immediately after Histology; 1 lecture between Biochemistry & Anatomy; 2 lectures between Physiology & Histology; Research is neither on Monday nor Sunday. Professionalism is taught on which day?",
          options: ["Sunday", "Monday", "Tuesday", "Friday"],
          ans: 1,
          exp: "الحل بالترتيب: السبت Histology ← الأحد Communication ← الثلاثاء Biochemistry (بينها وبين الخميس Anatomy يوم واحد) ← الأربعاء Physiology (بينها وبين السبت Histology يومان: الخميس والجمعة) ← الجمعة Research (لأنها ليست الإثنين ولا الأحد) ← إذن <strong>Professionalism = الإثنين (Monday)</strong>!"
        },
        {
          id: "p2_o2",
          examRef: "نشاط سلايد 12 و 29 — Thinking 2",
          q: "In the K-W-L chart used as a critical thinking & problem-solving activity, what do K, W, and L stand for?",
          options: [
            "Key, Work, Logic",
            "What I Know, What I Want to know, What I Learnt",
            "Knowledge, Wisdom, Leadership",
            "Keep, Write, Listen"
          ],
          ans: 1,
          exp: "مخطط K-W-L: K = What I Know (ما أعرفه)، W = What I Want to know (ما أريد معرفته)، L = What I Learnt (ما تعلمته)."
        },
        {
          id: "p2_o3",
          examRef: "نشاط سلايد 11 — Thinking 2",
          q: "Two professors evaluating 15 first-year medical students discovered 'plagiarism' in their assignment. Which type of thinking is primarily applied to analyze, reason, evaluate, and decide on this case?",
          options: ["Critical thinking", "Diffuse imagination", "Social loafing", "Inductive generalization"],
          ans: 0,
          exp: "سلايد 11 (Building silent conversation) يطبق مهارات التفكير الناقد (Critical Thinking: Analyzing, Reasoning, Evaluating, Problem Solving, Decision Making)."
        }
      ]
    },

    // ==================== PART 3: TEAMWORK ====================
    {
      id: "part3",
      shortLabel: "🤝 3. Teamwork",
      navTitle: "المحاضرة 3",
      title: "Teamwork — العمل الجماعي ومراحله ومعوقاته",
      icon: "🤝",
      pdfFile: "teamwork_503360.pdf",
      summaryBlocks: [
        {
          heading: "1. Definition & Why Teamwork? (التعريف ولماذا نحتاج العمل الجماعي؟)",
          items: [
            `<span class="en-quote">Teamwork: It is the collaborative effort of members of a team to achieve a task in the most effective and efficient way.</span>`,
            `<strong>لماذا نحتاج العمل الجماعي (3 أسباب):</strong><br>1. <span class="en-key">Task is too big for one person to handle.</span> (المهمة أكبر من قدرة فرد واحد — خلي بالك: مش مهمة صغيرة!)<br>2. <span class="en-key">A single person does not have all the required skills</span> for a specific task.<br>3. <span class="en-key">Diversity of ideas fosters creative problem management.</span> (تنوع الأفكار يعزز الإبداع)`
          ]
        },
        {
          heading: "2. Basic Requirements (5) & Member Characteristics (6)",
          subBlocks: [
            {
              subTitle: "المتطلبات الأساسية الخمسة (5 Basic Requirements)",
              bullets: [
                `1. <span class="en-key">Team size: 6–8 members</span> (العدد المثالي للفريق: 6 إلى 8 أعضاء — سؤال امتحان شهير!)`,
                `2. <span class="en-key">Sufficient resources</span> (موارد وإمكانيات كافية)`,
                `3. <span class="en-key">Supervisor (Team leader)</span> (مشرف / قائد للفريق)`,
                `4. <span class="en-key">Defined roles</span> (أدوار محددة وواضحة لكل عضو)`,
                `5. <span class="en-key">Clear and attainable goal</span> (هدف واضح وقابل للتحقيق)`
              ]
            },
            {
              subTitle: "صفات أعضاء الفريق الستة (6 Characteristics of Team Members)",
              bullets: [
                `1. <span class="en-key">Interdependence</span> (الترابط) — 2. <span class="en-key">Open communication</span> (التواصل المفتوح)`,
                `3. <span class="en-key">Effective coordination</span> (التنسيق الفعال) — 4. <span class="en-key">Effective cooperation</span> (التعاون الفعال)`,
                `5. <span class="en-key">Respect and equality</span> (الاحترام والمساواة) — 6. <span class="en-key">Integration</span> (التكامل)`
              ]
            }
          ]
        },
        {
          heading: "3. Stages of Team Development (مراحل تطور الفريق — احفظ بالترتيب!)",
          ordered: true,
          items: [
            `<span class="en-key">Forming (التكوين):</span> Starting stage. Internal conflicts about independence vs. merging. Careful, avoid risk-taking, treated as strangers. Teamwork is at its <strong>lowest level</strong>.`,
            `<span class="en-key">Storming (الصراع/العصف):</span> Characterized by <strong>competition for power and authority</strong>, doubt about success, hostility, lack of coordination. Teamwork is <strong>LOW</strong>! Enhanced by open communication, group discussions &amp; building mutual respect.`,
            `<span class="en-key">Norming (وضع القواعد):</span> Increasing <strong>solidarity and interdependence</strong>, adjusting to team environment, accepting other viewpoints. Shows a <strong>higher level</strong> of teamwork performance.`,
            `<span class="en-key">Performing (الأداء):</span> Comfortable, open &amp; trusting environment; flexibility is key &amp; hierarchy is of little importance. Characterized by the <strong>HIGHEST level of teamwork success and maturity</strong>.`,
            `<span class="en-key">Adjourning (الانتهاء — في الرسم التوضيحي):</span> Task completed, assessment of the year, transitioning roles, recognizing contributions, and team separates.`
          ]
        },
        {
          heading: "4. Five Impediments of Success of Teamwork (معوقات نجاح الفريق الـ 5)",
          ordered: true,
          items: [
            `<span class="en-key">Social loafing (التسكع الاجتماعي):</span> A member places <strong>less effort than he can</strong> towards a task → creates un-equality, conflicts, and low performance.`,
            `<span class="en-key">Ingrained individualism (الفردية المتأصلة):</span> Members in a <strong>higher job ranking</strong> tend to be authoritative and work individually → less satisfaction, motivation, and performance.`,
            `<span class="en-key">Social disrespect (عدم الاحترام الاجتماعي):</span> Members of different social levels do not respect each other → disrupted team dynamics &amp; failure.`,
            `<span class="en-key">Absence of motivation (غياب التحفيز):</span> Placing a team to complete an <strong>individual task</strong> OR allocating <strong>too many goals</strong> → reluctance, exhaustion, despair.`,
            `<span class="en-key">Intrusion of personal conflicts (تداخل الصراعات الشخصية):</span> Outside personal conflicts intrude into the working team → cooperation fails.`
          ]
        }
      ],
      practiceQuestions: [
        {
          id: "p3_q1",
          type: "MCQ",
          q: "Which stage of team development is characterized by 'competition for power and authority' and low teamwork?",
          options: ["Forming", "Storming", "Norming", "Performing"],
          ans: 1,
          exp: "مرحلة Storming (الصراع) تتميز بالتنافس على السلطة والقيادة وانخفاض العمل الجماعي."
        },
        {
          id: "p3_q2",
          type: "MCQ",
          q: "Which stage of team development shows the HIGHEST level of teamwork success and maturity?",
          options: ["Forming", "Storming", "Norming", "Performing"],
          ans: 3,
          exp: "مرحلة Performing (الأداء) هي أعلى مستوى لنجاح ونضج العمل الجماعي (highest level of teamwork success and maturity)."
        },
        {
          id: "p3_q3",
          type: "MCQ",
          q: "Increasing levels of solidarity and interdependence as members adjust to the team environment occur in:",
          options: ["Forming", "Storming", "Norming", "Adjourning"],
          ans: 2,
          exp: "مرحلة Norming (وضع القواعد) تتميز بزيادة التضامن والترابط (solidarity and interdependence)."
        },
        {
          id: "p3_q4",
          type: "MCQ",
          q: "When a team member places LESS effort than he can towards a task, this impediment is called:",
          options: [
            "Ingrained individualism",
            "Social loafing",
            "Social disrespect",
            "Absence of motivation"
          ],
          ans: 1,
          exp: "Social loafing (التسكع الاجتماعي) = عضو يبذل مجهوداً أقل من قدرته فيسبب عدم مساواة وصراعات."
        },
        {
          id: "p3_q5",
          type: "MCQ",
          q: "When members in a higher job ranking tend to be authoritative and work individually, this is known as:",
          options: [
            "Social loafing",
            "Ingrained individualism",
            "Intrusion of personal conflicts",
            "Forming stage"
          ],
          ans: 1,
          exp: "Ingrained individualism (الفردية المتأصلة) = أصحاب الدرجات الوظيفية الأعلى يتصرفون بتسلط ويعملون بمفردهم."
        },
        {
          id: "p3_q6",
          type: "MCQ",
          q: "Placing a whole team to complete a simple individual task or allocating too many goals leads to:",
          options: [
            "Higher maturity",
            "Absence of motivation (exhaustion & despair)",
            "Open communication",
            "Integration"
          ],
          ans: 1,
          exp: "إسناد مهمة فردية لفريق أو تحميل الفريق أهدافاً كثيرة يؤدي إلى غياب التحفيز والإرهاق (Absence of motivation)."
        },
        {
          id: "p3_q7",
          type: "MCQ",
          q: "In which stage are team members careful, avoid risk-taking, and have internal conflicts about being independent vs. merging?",
          options: ["Forming", "Storming", "Norming", "Performing"],
          ans: 0,
          exp: "مرحلة Forming (التكوين): البداية، حذرين، يتجنبون المخاطرة، ولديهم صراع داخلي بين الاستقلال والاندماج."
        },
        {
          id: "p3_q8",
          type: "MCQ",
          q: "All of the following are basic requirements for teamwork EXCEPT:",
          options: [
            "Team size of 6–8 members",
            "Defined roles and supervisor",
            "Clear and attainable goal",
            "Unattainable secret goals"
          ],
          ans: 3,
          exp: "الهدف يجب أن يكون واضحاً وقابلاً للتحقيق (Clear and attainable goal)."
        },
        {
          id: "p3_q9",
          type: "MCQ",
          q: "How should low teamwork during the Storming stage be enhanced?",
          options: [
            "By hiding personal opinions",
            "By open communication, group discussions, and building mutual respect",
            "By dissolving the team immediately",
            "By encouraging competition for authority"
          ],
          ans: 1,
          exp: "تُعالج مرحلة Storming بالتواصل المفتوح والمناقشات الجماعية وبناء الاحترام المتبادل."
        },
        {
          id: "p3_q10",
          type: "MCQ",
          q: "Which of the following is NOT one of the 6 characteristics of team members?",
          options: [
            "Interdependence",
            "Effective coordination",
            "Respect and equality",
            "Authoritative hierarchy"
          ],
          ans: 3,
          exp: "الصفات الستة هي: Interdependence, Open communication, Effective coordination, Effective cooperation, Respect & equality, Integration."
        },
        {
          id: "p3_q11",
          type: "MCQ",
          q: "Which stage involves assessing the year, transitioning roles, and recognizing members' contributions after task completion?",
          options: ["Forming", "Norming", "Performing", "Adjourning"],
          ans: 3,
          exp: "مرحلة Adjourning (الانتهاء) تكون بعد إتمام المهمة لتقييم العام وتقدير المساهمات وتفريق الفريق."
        },
        {
          id: "p3_q12",
          type: "True / False",
          q: "Diversity of ideas in a team fosters creative problem management.",
          options: ["True", "False"],
          ans: 0,
          exp: "صواب (True) — أحد الأسباب الثلاثة للحاجة للعمل الجماعي."
        }
      ],
      officialQuestions: [
        {
          id: "p3_o1",
          examRef: "Formative Assessment — سلايد 14 (Teamwork)",
          q: "1. Adequate size for any team should be:",
          options: ["A. 3-5", "B. 6-8", "C. 9-11", "D. 12-14", "E. 15-17"],
          ans: 1,
          exp: "سؤال رسمي من د. إنجي — الإجابة النموذجية B: من 6 إلى 8 أعضاء (6-8 members)."
        },
        {
          id: "p3_o2",
          examRef: "Formative Assessment — سلايد 15 (Teamwork)",
          q: "Team occurs when a number of people have ...... and recognize their success depends on others:",
          options: [
            "A. Shared place",
            "B. Common goal",
            "C. Shared management",
            "D. Shared environment",
            "E. All of the above"
          ],
          ans: 1,
          exp: "سؤال رسمي من د. إنجي — الإجابة النموذجية B: هدف مشترك (Common goal)."
        },
        {
          id: "p3_o3",
          examRef: "Formative Assessment — سلايد 16 (Teamwork)",
          q: "True or False: It is better for a team to have a small task to work on.",
          options: ["True", "False"],
          ans: 1,
          exp: "سؤال رسمي — الإجابة False ❌ لأن العمل الجماعي للمهام الكبيرة التي يعجز عنها فرد واحد، وإسناد مهمة فردية صغيرة لفريق يسبب غياب التحفيز!"
        },
        {
          id: "p3_o4",
          examRef: "Formative Assessment — سلايد 16 (Teamwork)",
          q: "True or False: Teamwork is higher in the storming stage of team development.",
          options: ["True", "False"],
          ans: 1,
          exp: "سؤال رسمي — الإجابة False ❌ العمل الجماعي يكون منخفضاً (LOW) في مرحلة Storming، وأعلى ما يمكن في مرحلة Performing."
        },
        {
          id: "p3_o5",
          examRef: "Formative Assessment — سلايد 16 (Teamwork)",
          q: "True or False: Team development starts with the forming stage.",
          options: ["True", "False"],
          ans: 0,
          exp: "سؤال رسمي — الإجابة True ✅ أول مرحلة دائماً هي التكوين (Forming)."
        }
      ]
    },

    // ==================== PART 4: MEDICAL ETHICS ====================
    {
      id: "part4",
      shortLabel: "⚖️ 4. Ethics",
      navTitle: "المحاضرة 4",
      title: "Medical Ethics — أخلاقيات المهنة الطبية ومبادئها ومواثيقها",
      icon: "⚖️",
      pdfFile: "ethics_468028.pdf",
      summaryBlocks: [
        {
          heading: "1. Definition, History & Governance (التعريف والتاريخ والقواعد الحاكمة)",
          items: [
            `<span class="en-quote">Medical Ethics: The application of moral values and legal responsibilities in the areas of medical practice and research.</span>`,
            `<strong>النبذة التاريخية (Historical Overview):</strong><br>• بدأت في <strong>مصر القديمة (<span class="en-key">Ancient Egypt</span>)</strong>.<br>• اليونان القديمة: <strong>قسم أبقراط (<span class="en-key">Greece — Hippocratic Oath</span>)</strong>.<br>• العالم الإسلامي: <strong>إسحاق بن علي الرهاوي (<span class="en-key">Ishaq ibn Ali Al-Ruhawi</span>)</strong> كتب <strong>أول كتاب في أخلاقيات الطب</strong>.`,
            `<strong>تُحكم ممارسة الطب بنوعين من القواعد:</strong><br>1. <span class="en-key">Legal rules:</span> Put by <strong>law</strong> to control the practice of medicine. (قوانين ملزمة)<br>2. <span class="en-key">Codes of conduct (نظم سلوكية):</span> Regulate professional work; <strong>NOT enforced by law</strong>, accepted by <strong>voluntary agreement</strong> within the profession (مثل: لائحة آداب المهنة).`
          ]
        },
        {
          heading: "2. Importance of Medical Ethics (6 أسباب) & International Codes",
          subBlocks: [
            {
              subTitle: "أهمية أخلاقيات الطب (6 نقاط)",
              bullets: [
                `1. <span class="en-key">Advances in medical technology, research, and telecommunications.</span>`,
                `2. <span class="en-key">Better awareness of society about patient's rights.</span>`,
                `3. <span class="en-key">Increasing subspecialties</span> and shift from individual practice to larger groups of physicians.`,
                `4. <span class="en-key">Changes in doctor-patient relationship.</span>`,
                `5. <span class="en-key">Focusing of the media</span> and public searching for mistakes/failures from doctors.`,
                `6. <span class="en-key">Financial issues</span> especially when third parties (insurance companies or governments) are involved.`
              ]
            },
            {
              subTitle: "المواثيق الدولية الشهيرة (احفظ التواريخ!)",
              bullets: [
                `• <span class="en-key">Nuremberg Code (1947)</span> — مدونة نورمبرج`,
                `• <span class="en-key">Declaration of Helsinki (1964 to 2000)</span> — إعلان هلسنكي (<strong>لأخلاقيات الأبحاث البشرية — human research ethics</strong>)`,
                `• <span class="en-key">Declaration of Geneva (2002)</span> — إعلان جنيف`
              ]
            }
          ]
        },
        {
          heading: "3. The 7 Principles of Medical Ethics (المبادئ السبعة — أهم جزء!)",
          ordered: true,
          items: [
            `<span class="en-key">Autonomy (استقلالية المريض):</span> Competent patients have the right to choose actions consistent with their values, goals, and life plan — even against family wishes or doctor's recommendation.`,
            `<span class="en-key">Non-Maleficence (عدم الإضرار):</span> Means <strong>"Do no harm to the patient"</strong>.`,
            `<span class="en-key">Beneficence (الإحسان):</span> Means <strong>"Acting in the best interests of the patients"</strong> (updating skills/training, respecting individual differences).<br><em>قيود الإحسان (3 Constraints on Beneficence):</em> (1) Respecting patient's autonomy، (2) Financial problems، (3) Considering rights of others (e.g., patient's partner).`,
            `<span class="en-key">Confidentiality (السرية):</span> Patient's right to keep privacy and secrecy.`,
            `<span class="en-key">Social responsibility &amp; Justice (العدالة):</span> Right to receive treatment regardless of sex, age, race, socioeconomic status, religious or cultural backgrounds.`,
            `<span class="en-key">Truth telling (قول الحقيقة):</span> Lying destroys trust in doctor-patient relationship and breaks <strong>autonomy</strong>.`,
            `<span class="en-key">Preservation of Life (الحفاظ على الحياة):</span> Do NOT approve <strong>euthanasia (mercy killing / قتل الرحمة)</strong> even on the patient's request.`
          ]
        },
        {
          heading: "4. General Rules in the Egyptian Code of Ethics (القواعد العامة للائحة المصرية)",
          items: [
            `• Doing the best of knowledge and skill for patients <strong>without differentiation</strong>.`,
            `• <strong>Continuous education</strong> (التعليم المستمر — احذر فخ Discontinuous!).`,
            `• <strong>Respecting professors</strong> &amp; <strong>Teaching new generations</strong>.`,
            `• <strong>Keeping good relations with colleagues</strong> &amp; <strong>Respecting confidentiality</strong>.`,
            `• <strong>Not doing harm</strong> by giving a poison, doing criminal abortion, or approving euthanasia.`
          ]
        }
      ],
      practiceQuestions: [
        {
          id: "p4_q1",
          type: "MCQ",
          q: "Where did medical ethics originally start in history?",
          options: ["Ancient Greece", "Ancient Egypt", "Modern Europe", "Declaration of Geneva"],
          ans: 1,
          exp: "السلايد ينص بوضوح: Medical ethics started in ancient Egypt."
        },
        {
          id: "p4_q2",
          type: "MCQ",
          q: "Who wrote the FIRST book on medical ethics in the Islamic world?",
          options: ["Hippocrates", "Ibn Sina", "Ishaq ibn Ali Al-Ruhawi", "Al-Razi"],
          ans: 2,
          exp: "إسحاق بن علي الرهاوي (Ishaq ibn Ali Al-Ruhawi) كتب أول كتاب في أخلاقيات الطب."
        },
        {
          id: "p4_q3",
          type: "MCQ",
          q: "Codes of conduct (نظم سلوكية) are characterized by being:",
          options: [
            "Strictly enforced by criminal courts only",
            "NOT enforced by law, but accepted by voluntary agreement within the profession",
            "Applicable only to patients, not doctors",
            "Identical across all centuries without change"
          ],
          ans: 1,
          exp: "Codes of conduct ليست مفروضة بالقانون بل مقبولة باتفاق طوعي داخل المهنة (voluntary agreement)."
        },
        {
          id: "p4_q4",
          type: "MCQ",
          q: "Which international code was specifically developed for 'human research ethics' (1964 to 2000)?",
          options: [
            "Nuremberg Code (1947)",
            "Declaration of Helsinki",
            "Declaration of Geneva (2002)",
            "Hippocratic Oath"
          ],
          ans: 1,
          exp: "إعلان هلسنكي (Declaration of Helsinki 1964–2000) مخصص لأخلاقيات الأبحاث على البشر (human research ethics)."
        },
        {
          id: "p4_q5",
          type: "MCQ",
          q: "The principle of 'Acting in the best interests of the patients' is called:",
          options: ["Autonomy", "Non-maleficence", "Beneficence", "Justice"],
          ans: 2,
          exp: "Beneficence (الإحسان) = العمل لمصلحة المريض (Acting in the best interests of the patients)."
        },
        {
          id: "p4_q6",
          type: "MCQ",
          q: "Which of the following is NOT one of the 3 constraints on Beneficence?",
          options: [
            "The need to respect patient's autonomy",
            "Financial problems",
            "Considering rights of others (e.g. patient's partner)",
            "Continuous medical education"
          ],
          ans: 3,
          exp: "قيود الإحسان الثلاثة: احترام استقلالية المريض + المشاكل المالية + حقوق الآخرين (مثل شريك المريض)."
        },
        {
          id: "p4_q7",
          type: "MCQ",
          q: "If a doctor lies to a patient about his condition, it destroys trust and directly breaks which principle?",
          options: ["Autonomy", "Euthanasia", "Financial justice", "Legal rules"],
          ans: 0,
          exp: "الكذب يدمر الثقة ويخالف مبدأ الاستقلالية (breaks the principle of autonomy) لأن المريض لا يستطيع اتخاذ قرار صحيح بدون الحقيقة."
        },
        {
          id: "p4_q8",
          type: "MCQ",
          q: "The principle of 'Preservation of Life' forbids physicians from approving:",
          options: [
            "Continuous education",
            "Euthanasia (mercy killing) even on patient's request",
            "Pain relief medication",
            "Consulting colleagues"
          ],
          ans: 1,
          exp: "الحفاظ على الحياة (Preservation of Life) يمنع الموافقة على القتل الرحيم (euthanasia / mercy killing) حتى لو بطلب المريض."
        },
        {
          id: "p4_q9",
          type: "MCQ",
          q: "Treating all patients regardless of sex, age, race, socioeconomic status, or religion represents:",
          options: [
            "Social responsibility and justice",
            "Confidentiality",
            "Truth telling",
            "Autonomy"
          ],
          ans: 0,
          exp: "المسؤولية الاجتماعية والعدالة (Social responsibility and justice) = المساواة في حق العلاج بدون أي تمييز."
        },
        {
          id: "p4_q10",
          type: "MCQ",
          q: "In which year was the Nuremberg Code issued, and in which year was the Declaration of Geneva updated (per slide)?",
          options: [
            "1964 and 1947",
            "1947 and 2002",
            "2000 and 1964",
            "1947 and 1990"
          ],
          ans: 1,
          exp: "Nuremberg Code = 1947، Declaration of Helsinki = 1964–2000، Declaration of Geneva = 2002."
        },
        {
          id: "p4_q11",
          type: "True / False",
          q: "According to the Egyptian Code of Ethics, a physician must not give poison, do criminal abortion, or approve euthanasia.",
          options: ["True", "False"],
          ans: 0,
          exp: "صواب (True) — من القواعد الأساسية السبع في لائحة آداب المهنة المصرية."
        },
        {
          id: "p4_q12",
          type: "True / False",
          q: "Competent patients can only choose medical actions that agree with their family members' wishes.",
          options: ["True", "False"],
          ans: 1,
          exp: "خطأ (False) — مبدأ Autonomy يمنح المريض الواعي الراشد الحق في القرار حتى لو خالف رغبة أسرته أو توصية الطبيب."
        }
      ],
      officialQuestions: [
        {
          id: "p4_o1",
          examRef: "Formative Assessment — سلايد 12 (Ethics)",
          q: "Do no harm to the patient:",
          options: ["A. Autonomy", "B. Non-maleficence", "C. Beneficence", "D. Maleficence"],
          ans: 1,
          exp: "سؤال رسمي من د. إنجي — الإجابة B: عدم الإضرار (Non-maleficence)."
        },
        {
          id: "p4_o2",
          examRef: "Formative Assessment — سلايد 13 (Ethics)",
          q: "Egyptian code of ethics includes all EXCEPT:",
          options: [
            "A. Doing the best of knowledge and skill for patients without any differentiation between them",
            "B. Discontinuous education",
            "C. Respecting professors",
            "D. Teaching new generations"
          ],
          ans: 1,
          exp: "سؤال رسمي من د. إنجي — الإجابة B: Discontinuous education ❌ (القاعدة الصحيحة هي Continuous education التعليم المستمر!)."
        },
        {
          id: "p4_o3",
          examRef: "Case Study — سلايد 7 (Ethics)",
          q: "A conscious, sane 34-year-old man had a crushed leg; the surgeon recommended amputation, but the patient refused. How should the doctor deal with this?",
          options: [
            "Perform amputation immediately without consent",
            "Neglect the patient and discharge him",
            "Respect his autonomy, try to convince him & warn of risks, and involve family ONLY if patient permits",
            "Ask the family to sign consent against his will"
          ],
          ans: 2,
          exp: "حالة سلايد 7 الرسمية: يجب احترام استقلالية المريض (بالغ، عاقل، واعٍ)، عدم إهماله، محاولة إقناعه وتحذيره من مخاطر الرفض، ولا يُستعان بالأسرة إلا بإذن المريض فقط!"
        }
      ]
    },

    // ==================== PART 5: MEDICAL CONFIDENTIALITY & RECORDS ====================
    {
      id: "part5",
      shortLabel: "🔒 5. Confidentiality",
      navTitle: "المحاضرة 5",
      title: "Medical Confidentiality, Records & Certificates — السرية والسجلات الطبية",
      icon: "🔒",
      pdfFile: "confedentiality_477582.pdf",
      summaryBlocks: [
        {
          heading: "1. Definition & Scope of Medical Confidentiality (التعريف وما تشمله)",
          items: [
            `<span class="en-quote">Medical Confidentiality: The right of an individual to have his personal and medical information kept private.</span>`,
            `<strong>قواعد أساسية:</strong> متاحة فقط للطبيب المعالج والفريق الطبي المشارك في رعاية المريض • <strong>تستمر حتى بعد وفاة المريض (<span class="en-key">continues even after patient's death</span>)</strong> • لا تُفشى إلا بإذن محدد أو الحالات المسموحة.`,
            `<strong>ما تشمله السرية (Includes):</strong><br>1. <span class="en-key">Info about the disease:</span> Type, cause, diagnosis, treatment, prognosis, complications.<br>2. <span class="en-key">Info NOT related to the disease:</span> Personal, social, economic.`,
            `<strong>الأشكال التي تغطيها (Covers):</strong><br>1. <span class="en-key">Identifiable material in medical records:</span> Written records, photographs, video films.<br>2. <span class="en-key">Oral information:</span> Obtained from the patient or his relatives.`
          ]
        },
        {
          heading: "2. Importance (5) & Breach of Confidentiality (خرق السرية)",
          items: [
            `<strong>أهمية السرية (5 نقاط):</strong> (1) Respects patient's <strong>autonomy</strong>، (2) Respects natural desire for <strong>privacy</strong>، (3) Protects from <strong>social discrimination</strong>، (4) Prevents <strong>misuse of information</strong>، (5) Builds <strong>confidence</strong> between doctor and patient.`,
            `<strong>خرق السرية (<span class="en-key">Breach</span>):</strong> إفشاء الطبيب لبيانات المريض لأطراف أخرى بدون <strong>موافقة المريض أو أمر محكمة (<span class="en-key">without patient's consent or court order</span>)</strong>.`,
            `<strong>الأضرار والعقوبة:</strong> قد يسبب ضرراً جسدياً أو نفسياً أو مادياً (<span class="en-key">physical, psychological, or financial harm</span>) ويعرّض الطبيب لعقوبة قانونية: <strong>الحبس 6 أشهر وغرامة (<span class="en-key">imprisonment for 6 months and a fine</span>)</strong>.`,
            `<strong>ملاحظة ذهبية:</strong> السرية <strong>ليست التزاماً مطلقاً (<span class="en-key">NOT an absolute obligation</span>)</strong>! في حالات معينة يكون ضرر إخفاء المعلومة أكبر من ضرر إفشائها.`
          ]
        },
        {
          heading: "3. When Breach Is Allowed & 4 Mandatory Principles",
          table: {
            headers: ["For the sake of the COMMUNITY (لصالح المجتمع)", "For the sake of the PATIENT (لصالح المريض)"],
            rows: [
              ["Notification of births and deaths (المواليد والوفيات)", "Victims of neglect or abuse (e.g., child abuse)"],
              ["Infectious diseases (AIDS, hepatitis)", "In times of emergency (حالات الطوارئ)"],
              ["Accidents, poisoning, criminal cases, malpractice", "Patients requiring special care (e.g., mental illness)"],
              ["Prevent crimes (murder, psychotic violent patients)", "Incompetent or minor → delivered to parents/guardians"],
              ["Safeguard national security (terrorist activity)", "—"]
            ]
          },
          items: [
            `<strong>المبادئ الـ 4 عند السماح بالإفشاء (Principles on allowing breach):</strong><br>1. To <strong>proper authorities</strong> (للجهات المختصة فقط)<br>2. <strong>Not beyond</strong> what is required or relevant (المعلومات الضرورية فقط)<br>3. <strong>Reason documented</strong> in medical records (توثيق السبب في السجل الطبي)<br>4. <strong>Patients are informed</strong> about such disclosure (إبلاغ المريض بالإفشاء)`
          ]
        },
        {
          heading: "4. Medical Records & Certificates (السجلات والشهادات الطبية)",
          subBlocks: [
            {
              subTitle: "السجل الطبي وأهميته وحفظه (Medical Records)",
              bullets: [
                `<strong>التعريف:</strong> وثيقة مكتوبة بحالة المريض والرعاية المقدمة له. يحق للمريض الحصول على نسخة منه <strong>بشرط ألا يضر ذلك بصحته</strong> (<span class="en-key">provided this does not endanger their health</span>).`,
                `<strong>أهمية السجلات (6 نقاط a–f):</strong> التخطيط للرعاية، المتابعة المستمرة، توثيق التواصل بين الفريق الطبي، <strong>إلزامي في التحقيق في قضايا الإهمال الطبي (malpractice)</strong>، تعليم الطلاب والأطباء المقيمين، التدقيق وضمان الجودة والأبحاث.`,
                `<strong>الالتزام بحفظ السجلات (3 أسباب):</strong> (1) Follow up (immunization, operative notes, chemotherapy)، (2) Legal requirements (criminal injuries)، (3) Investigating medical malpractice claims.`
              ]
            },
            {
              subTitle: "الشهادات الطبية الـ 11 + حالات منع توقيع شهادة الوفاة + عقوبة التزوير",
              bullets: [
                `<strong>11 حالة للتقارير/الشهادات:</strong> Birth, Death, Vaccination, Infectious diseases, Work accidents, Occupational diseases, Injuries (primary medico-legal report), Age determination, Test for sanity, Sick-leave reports, Insurance.`,
                `<strong>ممنوع على الطبيب توقيع شهادة الوفاة (Forbidden to sign Death Certificate) في 3 حالات:</strong><br>a) وفاة عنيفة مشتبه بها أو مؤكدة (قتل/انتحار/حادث — homicidal, suicidal, accidental)<br>b) لم يفحص المتوفى بنفسه (<span class="en-key">did not examine deceased himself</span>)<br>c) عجز عن تحديد سبب الوفاة ← <strong>يجب إبلاغ الطب الشرعي (medico-legal authority)</strong>.`,
                `<strong>عقوبة التقرير الكاذب أو المضلل:</strong> يُتهم بـ <strong>التزوير (<span class="en-key">Forgery</span>)</strong> ويُعاقب بالحبس أو الغرامة <strong>وشطب اسمه من السجل الطبي (<span class="en-key">erasure of his name from the medical register</span>)</strong>.`,
                `<strong>القواعد القانونية الـ 6 لإصدار الشهادة:</strong> (1) دقة واكتمال، (2) معايير علمية فقط بدون توقعات شخصية، (3) ذكر كل التفاصيل المطلوبة، (4) عدم كتابة بيانات مُملَاة من أي شخص (<span class="en-key">no dictated data</span>)، (5) التأكد من هوية الشخص، (6) تُسلَّم للمريض نفسه (أو الوصي للقاصر/المجنون) ولا يوقّع الطبيب إلا ما كتبه وتأكد منه بنفسه.`
              ]
            }
          ]
        }
      ],
      practiceQuestions: [
        {
          id: "p5_q1",
          type: "MCQ",
          q: "Medical professional secrecy continues to apply:",
          options: [
            "Only while the patient is hospitalized",
            "Only until the patient pays the bill",
            "Even after the patient's death",
            "Only for infectious diseases"
          ],
          ans: 2,
          exp: "السرية الطبية تستمر حتى بعد وفاة المريض (continues to apply even after patient's death)."
        },
        {
          id: "p5_q2",
          type: "MCQ",
          q: "Medical confidentiality includes information NOT related to the disease, such as:",
          options: [
            "Personal, social, and economic information",
            "Diagnosis and prognosis only",
            "Hospital building plans",
            "Public news reports"
          ],
          ans: 0,
          exp: "السرية تشمل معلومات المرض (النوع/السبب/التشخيص/العلاج/المضاعفات) والمعلومات غير المتعلقة بالمرض (الشخصية والاجتماعية والاقتصادية)."
        },
        {
          id: "p5_q3",
          type: "MCQ",
          q: "What is the legal penalty mentioned for an unlawful break of medical record confidentiality?",
          options: [
            "Warning letter only",
            "Imprisonment for 6 months and a fine",
            "10 years in prison",
            "No legal penalty, only ethical"
          ],
          ans: 1,
          exp: "سلايد 13: عقوبة الإفشاء غير القانوني للسرية هي الحبس 6 أشهر وغرامة (imprisonment for 6 months and a fine)."
        },
        {
          id: "p5_q4",
          type: "MCQ",
          q: "Disclosing AIDS or hepatitis to health authorities is an allowed breach of confidentiality:",
          options: [
            "For the sake of the community",
            "For financial benefit",
            "For social media awareness",
            "It is strictly forbidden"
          ],
          ans: 0,
          exp: "الإبلاغ عن الأمراض المعدية (AIDS, hepatitis) والمواليد والوفيات والأمن القومي يُسمح به لصالح المجتمع (For the sake of the community)."
        },
        {
          id: "p5_q5",
          type: "MCQ",
          q: "Reporting a case of child abuse (victim of neglect or abuse) is an allowed breach:",
          options: [
            "For the sake of the patient",
            "For insurance marketing",
            "Unlawful breach",
            "Only after the child turns 18"
          ],
          ans: 0,
          exp: "ضحايا الإهمال أو الإيذاء (مثل child abuse) وحالات الطوارئ والقصّر يُسمح بالإفشاء لصالح المريض (For the sake of the patient)."
        },
        {
          id: "p5_q6",
          type: "MCQ",
          q: "All of the following are principles to follow when allowing a breach of confidentiality EXCEPT:",
          options: [
            "Disclosure must be to proper authorities",
            "Not beyond what is required or relevant",
            "Reason for disclosure must be documented in medical records",
            "Hide the disclosure from the patient and skip documentation"
          ],
          ans: 3,
          exp: "المبادئ الـ 4: للجهة المختصة + في حدود المطلوب فقط + توثيق السبب في السجل + إبلاغ المريض."
        },
        {
          id: "p5_q7",
          type: "MCQ",
          q: "A physician is FORBIDDEN to sign a death certificate in all of the following cases EXCEPT:",
          options: [
            "Suspected or confirmed violent death (homicidal, suicidal, accidental)",
            "Death where the physician did not examine the deceased himself",
            "Death where the physician is unable to establish the cause of death",
            "Natural death examined by the treating physician with a known clear cause"
          ],
          ans: 3,
          exp: "يُمنع توقيع شهادة الوفاة في الوفاة العنيفة/عدم الفحص المباشر/عدم معرفة السبب، ويجب إبلاغ الطب الشرعي."
        },
        {
          id: "p5_q8",
          type: "MCQ",
          q: "A physician who writes an untrue or misleading medical report or certificate is accused of ______ and punished by imprisonment/fine and ______.",
          options: [
            "Negligence / temporary leave",
            "Forgery / erasure of his name from the medical register",
            "Autonomy / warning",
            "Malpractice / extra training"
          ],
          ans: 1,
          exp: "سلايد 16: التقرير الكاذب أو المضلل يُعد تزويراً (Forgery) وعقوبته الحبس أو الغرامة وشطب اسمه من السجل الطبي (erasure from medical register)."
        },
        {
          id: "p5_q9",
          type: "MCQ",
          q: "Patients have the right to obtain a copy of their own medical records:",
          options: [
            "Under no circumstances",
            "Provided this does not endanger their health",
            "Only through a court order",
            "Only after 10 years"
          ],
          ans: 1,
          exp: "يحق للمريض نسخة من سجله الطبي بشرط ألا يهدد ذلك صحته (provided this does not endanger their health)."
        },
        {
          id: "p5_q10",
          type: "MCQ",
          q: "Which legal rule applies when issuing a medical certificate for an underage or insane patient?",
          options: [
            "It can include dictated data from relatives",
            "It is delivered to his guardian",
            "Any colleague can sign it without examining the patient",
            "It is based on personal expectations"
          ],
          ans: 1,
          exp: "تُسلّم الشهادة للمريض نفسه إلا إذا كان غير مؤهل (قاصر أو فاقد للعقل) فتُسلّم للوصي (guardian)، ولا يُكتب أي بيانات مُملاة ولا يوقّع الطبيب ما لم يتحقق منه بنفسه."
        },
        {
          id: "p5_q11",
          type: "True / False",
          q: "Medical confidentiality is an absolute obligation that can never be broken under any circumstances.",
          options: ["True", "False"],
          ans: 1,
          exp: "خطأ (False) — السرية ليست التزاماً مطلقاً (Confidentiality is NOT an absolute obligation)؛ يجوز كسرها لحماية المجتمع أو المريض أو بأمر محكمة."
        },
        {
          id: "p5_q12",
          type: "True / False",
          q: "Patient's confidential information covers photographs, video films, and oral information obtained from relatives.",
          options: ["True", "False"],
          ans: 0,
          exp: "صواب (True) — السرية تشمل السجلات المكتوبة والصور والفيديوهات والمعلومات الشفهية من المريض أو أقاربه."
        }
      ],
      officialQuestions: [
        {
          id: "p5_o1",
          examRef: "Case Study 1 — سلايد 9 (Confidentiality)",
          q: "A physician meets his assistant on a social occasion. The assistant starts discussing a particular patient using the patient's name and personal data. What should the physician do?",
          options: [
            "Join the discussion since both are doctors",
            "Postpone the conversation until they meet at the hospital",
            "Ask the guests for their opinion",
            "Share the patient's medical record at the party"
          ],
          ans: 1,
          exp: "حالة سلايد 9 الرسمية: يجب تأجيل الحديث لحين الالتقاء في المستشفى؛ لأن مناقشة حالة مريض محدد بالاسم في مكان عام يُعد انتهاكاً غير أخلاقي للسرية الطبية."
        },
        {
          id: "p5_o2",
          examRef: "Case Study 2 — سلايد 19 (Medical Certificates)",
          q: "While examining a deceased person to issue a death certificate, a physician noticed scratches and bruises especially around the neck. Relatives claimed he fell unconscious. Does the physician have the right to refuse issuing the death certificate?",
          options: [
            "No, he must trust the relatives and sign immediately",
            "Yes, he should refuse due to suspicion of criminal death and notify the medicolegal authority",
            "Yes, and he should keep it secret without telling anyone",
            "No, unless the police arrive first"
          ],
          ans: 1,
          exp: "حالة سلايد 19 الرسمية: نعم، يجب رفض إصدار شهادة الوفاة لوجود شبهة وفاة جنائية (خدوش وكدمات حول الرقبة)، ويجب إبلاغ جهة الطب الشرعي (medicolegal authority)."
        }
      ]
    },

    // ==================== PART 6: CV WRITING ====================
    {
      id: "part6",
      shortLabel: "📄 6. CV Writing",
      navTitle: "المحاضرة 6",
      title: "CV Writing — كتابة السيرة الذاتية وأقسامها الـ 13 وقواعدها",
      icon: "📄",
      pdfFile: "CV WRITING.pdf",
      summaryBlocks: [
        {
          heading: "1. Definition, Origin & Why a CV? (التعريف والأصل والهدف)",
          items: [
            `<span class="en-quote">CV (Curriculum Vitae): A written short account of a person's career and qualifications prepared by ONESELF.</span>`,
            `<strong>الأصل اللاتيني:</strong> كلمة <span class="en-key">Curriculum Vitae</span> لاتينية ومعناها <strong>«مسار حياتي» (<span class="en-key">Course of (my) life</span>)</strong>.`,
            `<strong>لماذا نكتب الـ CV (الاستخدامات):</strong> Job position • Postgraduate study programs &amp; fellowships • Training • Academic promotion • Grants (المنح) &amp; project proposals • Membership &amp; international professional awards.`
          ]
        },
        {
          heading: "2. Forms of CV: Complete CV vs. Short CV / Resume (مقارنة مضمونة!)",
          table: {
            headers: ["Feature", "Complete C.V (الكاملة)", "Short C.V / Resume (المختصرة)"],
            rows: [
              ["Length (عدد الصفحات)", "5–6 pages (or more for experienced)", "2–3 pages maximum"],
              ["Content (المحتوى)", "Comprehensive + details of publications & research", "Short summary about the person"],
              ["Main Use (الاستخدام)", "Academic field (المجال الأكاديمي)", "Job applications (التقديم للوظائف)"]
            ]
          }
        },
        {
          heading: "3. Rules (9), How to Write (8 Steps) & Submission (3 Ways)",
          subBlocks: [
            {
              subTitle: "قواعد كتابة الـ CV التسع (9 Rules for Writing a CV)",
              bullets: [
                `1. Write it <strong>yourself</strong> • 2. Keep text <strong>concise</strong> • 3. Divide into <strong>sections</strong>`,
                `4. Be <strong>accurate</strong> • 5. Be <strong>truthful</strong> • 6. Get the <strong>language right</strong>`,
                `7. Use an <strong>appropriate font</strong> • 8. Add <strong>personal reflections</strong> • 9. Insert a <strong>personal decent photograph</strong>.`
              ]
            },
            {
              subTitle: "طرق التقديم (3 Ways of Submission) وخطوات الكتابة (8 Steps)",
              bullets: [
                `<strong>طرق التقديم (3):</strong> (a) Written form on <strong>A4</strong> papers (each page on separate sheet)، (b) Electronic text through <strong>e-mail</strong>، (c) Job-oriented websites (such as <strong>LinkedIn</strong>).`,
                `<strong>أهم خطوات الكتابة (8):</strong> جمع المعلومات الدائمة → زيارة موقع المؤسسة → فحص المتطلبات المحددة → ترتيب الخبرات زمنياً → العصف الذهني للمهارات والهوايات → اختيار تنسيق احترافي → استخدام صفات قوية بأمثلة حقيقية (confident, proactive, reliable, innovative) → مراجعة الإملاء والقواعد وعرضه على صديق كأنه صاحب العمل.`
              ]
            }
          ]
        },
        {
          heading: "4. The 13 Sections of a CV (الأقسام الـ 13 — ركّز على الأرقام والتفاصيل!)",
          ordered: true,
          items: [
            `<span class="en-key">Personal Details:</span> Name, Date of birth, Address, E-mail, Contact info.`,
            `<span class="en-key">Languages:</span> Classify by competence: Mother tongue + Writing, Speaking, Listening, Maintain conversation.`,
            `<span class="en-key">Personal Statement:</span> Generally the <strong>first thing</strong> included; brief summary (Who you are / What you offer / Career goals). <strong>No more than 150 words (4–5 lines)</strong>, begins with <strong>"I am a..."</strong>, authentic, avoiding clichés.`,
            `<span class="en-key">Education:</span> Listed with <strong>most recent at the top</strong> (qualification, institute, dates, optional grades).`,
            `<span class="en-key">Work Experience:</span> Most recent first (job title, organization, dates, key responsibilities).`,
            `<span class="en-key">Publications:</span> Listed in <strong>reverse chronological order</strong>, written in <strong>Vancouver style</strong>, highlight your <strong>name in bold</strong>.`,
            `<span class="en-key">Presentations:</span> Reverse chronological order (title, conference, location &amp; dates; Poster / Invited / Awarded).`,
            `<span class="en-key">Research Experience:</span> Performed or ongoing (title, organization, dates).`,
            `<span class="en-key">Teaching Experience</span> &amp; <strong>10.</strong> <span class="en-key">Training Experience</span> (courses &amp; workshops).`,
            `<span class="en-key">Skills — THE MOST IMPORTANT SECTION employers look at!</span><br>• <strong>Technical skills:</strong> Specific to discipline (data analysis, programming, accounting, scientific presentation, advanced life support).<br>• <strong>Soft (personal) skills:</strong> Less tangible, harder to demonstrate (teamwork, leadership, creativity, digital skills, social media management).`,
            `<span class="en-key">Additional Sections:</span> Professional memberships, fellowships/awards, consultancy, social service, travel/hobbies (if relevant).`,
            `<span class="en-key">References:</span> Usually <strong>TWO references</strong> (professors, directors, employers) after obtaining their <strong>consent</strong>; "available on request" is acceptable.`
          ]
        }
      ],
      practiceQuestions: [
        {
          id: "p6_q1",
          type: "MCQ",
          q: "The Latin term 'Curriculum Vitae' literally means:",
          options: [
            "Summary of jobs",
            "Course of (my) life",
            "Academic certificate",
            "Professional letter"
          ],
          ans: 1,
          exp: "الكلمة لاتينية ومعناها Course of (my) life (مسار الحياة)."
        },
        {
          id: "p6_q2",
          type: "MCQ",
          q: "A Complete C.V generally contains ______ pages and is mainly used in the ______ field.",
          options: [
            "1–2 / industrial",
            "2–3 / job application",
            "5–6 or more / academic",
            "10–15 / social media"
          ],
          ans: 2,
          exp: "السيرة الكاملة (Complete CV) = 5–6 صفحات أو أكثر وتُستخدم في المجال الأكاديمي (academic field)."
        },
        {
          id: "p6_q3",
          type: "MCQ",
          q: "How long should a Personal Statement in a C.V be?",
          options: [
            "No more than 150 words (4 or 5 lines)",
            "At least 500 words (2 full pages)",
            "Only 10 words",
            "1000 words"
          ],
          ans: 0,
          exp: "الـ Personal Statement لا يزيد عن 150 كلمة (4 أو 5 سطور) ويبدأ عادةً بـ 'I am a...'."
        },
        {
          id: "p6_q4",
          type: "MCQ",
          q: "Which section of a C.V is considered 'the MOST IMPORTANT section that employers want to look at'?",
          options: ["Hobbies", "Skills", "Date of birth", "Travel experience"],
          ans: 1,
          exp: "سلايد 16: قسم المهارات (Skills) هو أهم قسم يركز عليه أصحاب العمل، ويجب ذكر المهارات التي تمتلكها فعلاً وكيف استخدمتها."
        },
        {
          id: "p6_q5",
          type: "MCQ",
          q: "In a C.V, Publications should be listed in ______ order, written in ______ style, with your name in ______.",
          options: [
            "Alphabetical / APA / italic",
            "Reverse chronological / Vancouver / bold",
            "Random / Harvard / underlined",
            "Oldest first / Chicago / red"
          ],
          ans: 1,
          exp: "المنشورات (Publications): ترتيب زمني عكسي (Reverse chronological) + أسلوب فانكوفر (Vancouver style) + اسمك بخط عريض (bold)."
        },
        {
          id: "p6_q6",
          type: "MCQ",
          q: "Which of the following is an example of TECHNICAL skills (NOT soft skills) according to the lecture?",
          options: [
            "Leadership",
            "Teamwork",
            "Advanced life support & data analysis",
            "Creativity"
          ],
          ans: 2,
          exp: "المهارات التقنية (Technical): data analysis, programming, accounting, scientific presentation, advanced life support."
        },
        {
          id: "p6_q7",
          type: "MCQ",
          q: "Soft (personal) skills are characterized as being:",
          options: [
            "More tangible and easier to prove than technical skills",
            "Less tangible than technical skills and much harder to demonstrate",
            "Only related to computer programming",
            "Not allowed in a C.V"
          ],
          ans: 1,
          exp: "سلايد 16: المهارات الشخصية (Soft skills) أقل ملموسية وأصعب في إثباتها من المهارات التقنية (less tangible & harder to demonstrate)."
        },
        {
          id: "p6_q8",
          type: "MCQ",
          q: "How many total sections of a C.V are presented in Dr. Engy's lecture?",
          options: ["5 sections", "8 sections", "13 sections", "20 sections"],
          ans: 2,
          exp: "عدد أقسام السيرة الذاتية في المحاضرة 13 قسماً (من Personal Details حتى References)."
        },
        {
          id: "p6_q9",
          type: "MCQ",
          q: "Before listing someone as a reference in your C.V, you must:",
          options: [
            "Obtain their consent first",
            "Keep it a secret from them",
            "List at least 6 relatives",
            "Avoid professors and employers"
          ],
          ans: 0,
          exp: "يجب أخذ موافقتهم أولاً (after obtaining their consent)، وعبارة 'references are available on request' مقبولة."
        },
        {
          id: "p6_q10",
          type: "MCQ",
          q: "In the Education and Work Experience sections, entries should be listed with:",
          options: [
            "The oldest at the top",
            "The most recent at the top (first)",
            "Random order",
            "Alphabetical order only"
          ],
          ans: 1,
          exp: "الأحدث دائماً في الأعلى أولاً (most recent at the top / first)."
        },
        {
          id: "p6_q11",
          type: "True / False",
          q: "Stating that 'references are available on request' in a C.V is acceptable.",
          options: ["True", "False"],
          ans: 0,
          exp: "صواب (True) — مذكورة حرفياً في سلايد 17."
        },
        {
          id: "p6_q12",
          type: "True / False",
          q: "You should add skills you do not really possess just because they appear in the job description.",
          options: ["True", "False"],
          ans: 1,
          exp: "خطأ (False) — السلايد يحذر: Don't be tempted to add a skill that you do not really possess (Be truthful!)."
        }
      ],
      officialQuestions: [
        {
          id: "p6_o1",
          examRef: "Formative Assessment — سلايد 18 (CV Writing)",
          q: "True or False: A C.V is a written short account of a person's career and qualifications prepared by his manager.",
          options: ["True", "False"],
          ans: 1,
          exp: "سؤال رسمي من د. إنجي — الإجابة False ❌ لأن الـ CV يُكتب بواسطة الشخص نفسه (prepared by oneself)، وليس مديره!"
        },
        {
          id: "p6_o2",
          examRef: "Formative Assessment — سلايد 18 (CV Writing)",
          q: "True or False: References are mentioned in a resume.",
          options: ["True", "False"],
          ans: 0,
          exp: "سؤال رسمي من د. إنجي — الإجابة النموذجية في السلايد True ✅."
        },
        {
          id: "p6_o3",
          examRef: "Formative Assessment — سلايد 18 (CV Writing)",
          q: "True or False: A C.V is an oral presentation about yourself.",
          options: ["True", "False"],
          ans: 1,
          exp: "سؤال رسمي من د. إنجي — الإجابة False ❌ لأن الـ CV وثيقة مكتوبة (written short account) وليست عرضاً شفهياً!"
        },
        {
          id: "p6_o4",
          examRef: "Formative Assessment — سلايد 19 (CV Writing)",
          q: "How many references are usually given in a C.V?",
          options: ["a. Two", "b. Three", "c. Four", "d. Five"],
          ans: 0,
          exp: "سؤال رسمي من د. إنجي — الإجابة a: اثنان (Two references)."
        },
        {
          id: "p6_o5",
          examRef: "Formative Assessment — سلايد 20 (CV Writing)",
          q: "How long should a resume be?",
          options: [
            "A. 1 page",
            "B. 2-3 pages",
            "C. 4-5 pages",
            "D. As long as it needs to in order to list all the important information"
          ],
          ans: 1,
          exp: "سؤال رسمي من د. إنجي — الإجابة B: من 2 إلى 3 صفحات (2-3 pages)."
        }
      ]
    }
  ],

  // ========================================================================
  // قسم البصمجة الذكية 🔥 (فلاش كاردز + شفرات + أرقام + فخاخ صح وغلط)
  // ========================================================================
  basmaga: {
    triggers: [
      { seen: "Goal-oriented flow of ideas → reality-oriented conclusion", choose: "Thinking (التفكير)", tag: "Thinking 1" },
      { seen: "Pay attention to selected part & ignore others", choose: "Focus (التركيز)", tag: "Thinking 1" },
      { seen: "Arrange info according to a certain variable", choose: "Organize (التنظيم)", tag: "Thinking 1" },
      { seen: "Understand the meaning of given info", choose: "Interpret (التفسير)", tag: "Thinking 1" },
      { seen: "Break down info into basic parts / Separate whole into parts", choose: "Analyze / Analytical Thinking", tag: "Thinking 1 & 2" },
      { seen: "Put parts together to form a single whole", choose: "Integrate (البناء والتكامل)", tag: "Thinking 1" },
      { seen: "Make connections between parts of info", choose: "Correlate (الربط)", tag: "Thinking 1" },
      { seen: "Assess relevance and importance of info", choose: "Evaluate (التقييم)", tag: "Thinking 1" },
      { seen: "Direct flow of ideas with logic", choose: "Reasoning (المنطق)", tag: "Thinking 1" },
      { seen: "Produce new info from available info", choose: "Generating (الابتكار)", tag: "Thinking 1" },
      { seen: "Sequential approach (step-by-step, one direction)", choose: "Logical Thinking (وليس Holistic)", tag: "Thinking 1" },
      { seen: "General Principle → Special Case (If premise true, conclusion MUST BE true)", choose: "Deductive Reasoning (استنباطي)", tag: "Thinking 1" },
      { seen: "Specific observations → General rule (Conclusion mostly NOT true)", choose: "Inductive Reasoning (استقرائي)", tag: "Thinking 1" },
      { seen: "Reading & appraisal of scientific papers / Credibility, Authenticity, Validity, Value", choose: "Critical Thinking (التفكير الناقد)", tag: "Thinking 2" },
      { seen: "Clinical thinking & problem solving", choose: "Analytical Thinking (التفكير التحليلي)", tag: "Thinking 2" },
      { seen: "Research planning (new & valuable ideas)", choose: "Creative Thinking (وأيضاً Logical)", tag: "Thinking 2" },
      { seen: "Five Whys method", choose: "Reach the ROOT CAUSE (السبب الجذري)", tag: "Thinking 2" },
      { seen: "Idea bursts from subconscious to conscious", choose: "Illumination (التنوير — المرحلة 3)", tag: "Thinking 2" },
      { seen: "Subconscious phase (feels & thinks of idea)", choose: "Intimation (التنويه — المرحلة 2)", tag: "Thinking 2" },
      { seen: "Consciously shaped, elaborated & verified", choose: "Verification (التأكيد — المرحلة 4)", tag: "Thinking 2" },
      { seen: "Imagination / Multiple solutions / Horizontal / Brainstorming", choose: "Divergent Thinking (متباعد)", tag: "Thinking 2" },
      { seen: "Logic / ONE potential solution / Vertical / Linear", choose: "Convergent Thinking (متقارب)", tag: "Thinking 2" },
      { seen: "Left hemisphere / Focused / Rational / Objective / Probability", choose: "Logical Thinking", tag: "Thinking 2" },
      { seen: "Right hemisphere / Diffuse / Emotional / Subjective / Possibility", choose: "Creative Thinking", tag: "Thinking 2" },
      { seen: "Torrance Test (TTCT) higher points", choose: "Rich imagery, humor, or fantasy", tag: "Thinking 2" },
      { seen: "Adequate size for any team", choose: "6–8 members", tag: "Teamwork" },
      { seen: "Team occurs when people have _____ and depend on others", choose: "Common goal", tag: "Teamwork" },
      { seen: "Starting stage / Careful / Avoid risk / Lowest teamwork", choose: "Forming (التكوين)", tag: "Teamwork" },
      { seen: "Competition for power & authority / Hostility / LOW teamwork", choose: "Storming (الصراع)", tag: "Teamwork" },
      { seen: "Increasing solidarity & interdependence / Accept viewpoints", choose: "Norming (وضع القواعد)", tag: "Teamwork" },
      { seen: "HIGHEST level of teamwork success & maturity / Flexibility is key", choose: "Performing (الأداء)", tag: "Teamwork" },
      { seen: "Task completed / Assessment / Team separates", choose: "Adjourning (الانتهاء)", tag: "Teamwork" },
      { seen: "Member places LESS effort than he can", choose: "Social Loafing (التسكع الاجتماعي)", tag: "Teamwork" },
      { seen: "Higher job ranking → authoritative & work individually", choose: "Ingrained Individualism (الفردية المتأصلة)", tag: "Teamwork" },
      { seen: "Team assigned an individual task OR too many goals", choose: "Absence of Motivation", tag: "Teamwork" },
      { seen: "Where did medical ethics start?", choose: "Ancient Egypt (مصر القديمة)", tag: "Ethics" },
      { seen: "Wrote the FIRST book on medical ethics", choose: "Ishaq ibn Ali Al-Ruhawi (إسحاق بن علي الرهاوي)", tag: "Ethics" },
      { seen: "NOT enforced by law — accepted by voluntary agreement", choose: "Codes of Conduct (نظم سلوكية)", tag: "Ethics" },
      { seen: "Human research ethics code (1964–2000)", choose: "Declaration of Helsinki", tag: "Ethics" },
      { seen: "Competent patient's right to choose (even against doctor/family)", choose: "Autonomy (الاستقلالية)", tag: "Ethics" },
      { seen: "Do no harm to the patient", choose: "Non-Maleficence (عدم الإضرار)", tag: "Ethics" },
      { seen: "Acting in the best interests of the patient", choose: "Beneficence (الإحسان)", tag: "Ethics" },
      { seen: "Do NOT approve euthanasia (mercy killing)", choose: "Preservation of Life", tag: "Ethics" },
      { seen: "Lying to patient destroys trust & breaks...", choose: "Autonomy (الاستقلالية)", tag: "Ethics" },
      { seen: "Unlawful break of confidentiality penalty", choose: "Imprisonment for 6 months + Fine", tag: "Confidentiality" },
      { seen: "Untrue or misleading medical certificate/report", choose: "Forgery (تزوير) → Imprisonment/Fine + Erasure from medical register", tag: "Confidentiality" },
      { seen: "Assistant discusses named patient at social occasion", choose: "Postpone conversation until they meet at the hospital", tag: "Confidentiality" },
      { seen: "Scratches & bruises around deceased's neck", choose: "Refuse death certificate & notify medicolegal authority", tag: "Confidentiality" },
      { seen: "Latin meaning of Curriculum Vitae", choose: "Course of (my) life", tag: "CV Writing" },
      { seen: "Complete CV vs Short CV (Resume)", choose: "Complete: 5–6+ pages (Academic) | Resume: 2–3 pages max (Jobs)", tag: "CV Writing" },
      { seen: "Personal Statement max length", choose: "No more than 150 words (4–5 lines) — starts with 'I am a...'", tag: "CV Writing" },
      { seen: "Publications format in CV", choose: "Reverse chronological + Vancouver style + Name in BOLD", tag: "CV Writing" },
      { seen: "MOST IMPORTANT section employers look at in CV", choose: "Skills (Technical vs Soft)", tag: "CV Writing" },
      { seen: "How many references in a CV?", choose: "Two references (after obtaining consent)", tag: "CV Writing" }
    ],
    numbers: [
      { num: "4 عمليات", label: "يشملها التفكير (Processing, Solving, Decision making, Creating)" },
      { num: "9 مهارات", label: "مهارات التفكير (Focus → Generating)" },
      { num: "4 أنواع", label: "أنواع التفكير (Logical, Analytical, Critical, Creative)" },
      { num: "5 Whys", label: "عدد الأسئلة على الأقل للوصول للسبب الجذري (Root cause)" },
      { num: "4 مراحل", label: "مراحل الإبداع (Incubation → Intimation → Illumination → Verification)" },
      { num: "8 خطوات", label: "خطوات حل المشكلات (Identify → Make a decision)" },
      { num: "6 – 8 أعضاء", label: "الحجم المثالي لأي فريق عمل (Team size)" },
      { num: "5 مراحل", label: "مراحل الفريق (Forming → Storming → Norming → Performing → Adjourning)" },
      { num: "5 معوقات", label: "معوقات نجاح العمل الجماعي (Social loafing → Personal conflicts)" },
      { num: "1947", label: "مدونة نورمبرج (Nuremberg Code)" },
      { num: "1964 – 2000", label: "إعلان هلسنكي لأخلاقيات الأبحاث البشرية (Declaration of Helsinki)" },
      { num: "2002", label: "إعلان جنيف (Declaration of Geneva)" },
      { num: "7 مبادئ", label: "مبادئ أخلاقيات الطب في سلايد د. إنجي (Autonomy → Preservation of Life)" },
      { num: "6 أشهر + غرامة", label: "عقوبة كسر سرية السجل الطبي بشكل غير قانوني" },
      { num: "11 حالة", label: "الحالات التي يُطلب فيها من الطبيب إصدار تقرير أو شهادة طبية" },
      { num: "5 – 6 صفحات+", label: "طول السيرة الذاتية الكاملة (Complete CV — أكاديمي)" },
      { num: "2 – 3 صفحات", label: "الحد الأقصى للـ Resume / Short CV (للوظائف)" },
      { num: "≤ 150 كلمة", label: "طول الـ Personal Statement (4 إلى 5 سطور)" },
      { num: "13 قسماً", label: "عدد أقسام السيرة الذاتية في المحاضرة" },
      { num: "2 (Two)", label: "عدد المراجع (References) المطلوبة عادةً في الـ CV بعد موافقتهم" }
    ],
    tfTraps: [
      {
        statement: "It is better for a team to have a small task to work on.",
        answer: "False ❌ (سؤال الدكتورة الرسمي)",
        fix: "الفريق للمهام الكبيرة التي يعجز عنها فرد واحد؛ وضع فريق على مهمة فردية صغيرة يسبب Absence of motivation."
      },
      {
        statement: "Teamwork is higher in the storming stage of team development.",
        answer: "False ❌ (سؤال الدكتورة الرسمي)",
        fix: "في مرحلة Storming العمل الجماعي يكون منخفضاً (LOW)، وأعلى مستوى يكون في مرحلة Performing."
      },
      {
        statement: "Team development starts with the forming stage.",
        answer: "True ✅ (سؤال الدكتورة الرسمي)",
        fix: "الترتيب الصحيح يبدأ دائماً بـ Forming."
      },
      {
        statement: "Egyptian code of ethics includes 'Discontinuous education'.",
        answer: "False / EXCEPT ❌ (سؤال الدكتورة الرسمي)",
        fix: "اللائحة المصرية تنص على التعليم المستمر (Continuous education) وليس المتقطع!"
      },
      {
        statement: "Codes of conduct are strictly enforced by law.",
        answer: "False ❌",
        fix: "القواعد السلوكية (Codes of conduct) غير مفروضة بالقانون بل باتفاق طوعي داخل المهنة (voluntary agreement)، بعكس Legal rules."
      },
      {
        statement: "Medical confidentiality ends immediately after the patient's death.",
        answer: "False ❌",
        fix: "السرية الطبية تستمر حتى بعد وفاة المريض (continues even after patient's death)."
      },
      {
        statement: "Medical confidentiality is an absolute obligation that can never be broken.",
        answer: "False ❌",
        fix: "السرية ليست مطلقة (NOT an absolute obligation)؛ يجوز كسرها لحماية المجتمع أو المريض أو بأمر المحكمة أو بموافقة المريض."
      },
      {
        statement: "A physician can sign a death certificate even if he did not examine the deceased himself or suspects violent death.",
        answer: "False ❌",
        fix: "ممنوع قانوناً (Forbidden)! ويجب إبلاغ الطب الشرعي (medicolegal authority)."
      },
      {
        statement: "A C.V is a written short account prepared by his manager.",
        answer: "False ❌ (سؤال الدكتورة الرسمي)",
        fix: "يُكتب بواسطة الشخص نفسه (prepared by oneself)."
      },
      {
        statement: "A C.V is an oral presentation about yourself.",
        answer: "False ❌ (سؤال الدكتورة الرسمي)",
        fix: "الـ CV حساب مكتوب مختصر (written short account) وليس عرضاً شفهياً."
      },
      {
        statement: "References are mentioned in a resume.",
        answer: "True ✅ (سؤال الدكتورة الرسمي)",
        fix: "معتمدة كـ True في التقييم التكويني لسلايد 18 من محاضرة CV Writing."
      },
      {
        statement: "In inductive reasoning, if the premise is true, the conclusion MUST BE true.",
        answer: "False ❌",
        fix: "هذا ينطبق على الاستنباطي (Deductive)؛ أما الاستقرائي (Inductive) فالنتيجة غالباً غير صحيحة (mostly not true)."
      },
      {
        statement: "Logical thinking uses the right brain hemisphere and looks at possibility.",
        answer: "False ❌",
        fix: "العكس! المنطقي = الفص الأيسر (Left) + Probability؛ الإبداعي = الفص الأيمن (Right) + Possibility."
      },
      {
        statement: "Soft skills are more tangible and easier to demonstrate than technical skills.",
        answer: "False ❌",
        fix: "المهارات الشخصية (Soft skills) أقل ملموسية وأصعب في إثباتها (less tangible & much harder to demonstrate)."
      }
    ]
  }
};
