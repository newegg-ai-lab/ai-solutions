(function () {
  var T = {
    en: {
      'nav-back':'← All Solutions',
      'hero-h1':'Private AI &amp; <span>AI-First Analysis</span>',
      'hero-sub':'DataLLM connects OpenCowork to your BI cubes, so any employee can ask a business question in plain language and get an answer that\'s explainable, verifiable, and traceable.',
      'hero-badge':'Private · In Development',

      'nav-1':'What You Get','nav-2':'Use Cases','nav-3':'How It Works','nav-4':'Under the Hood',
      'stat-lbl-1':'AI Services Included','stat-lbl-2':'Private & On-Premise','stat-lbl-3':'Long-Term Memory',

      'eye-0':'Why You Need This',
      'h2-0':'Your AI-First data analyst — wherever the question comes from.',
      'overview-placeholder':'Overview graphic — placeholder',

      'eye-1':'What You Get',
      'h2-1':'Six AI services, running entirely on your own hardware.',
      'lede-1':'No cloud accounts to set up, no subscription fee. Every cube query stays on-premises.',
      'b1-title':'Ask in Plain Language','b2-title':'Understands Your BI Cubes','b3-title':'Remembers Team Knowledge',
      'b4-title':'Connects to Real BI Data','b5-title':'Mobile Access Anytime','b6-title':'Reusable Analysis Skills',
      'hub-tagline':'100% Local — Every Cube Query Stays On-Premises',
      'scene-ask':'Ask "why did sales drop this month?" the way you\'d ask a colleague — no SQL required.',
      'scene-knowledge':'Every cube\'s purpose, every metric\'s definition — indexed into an enterprise BI knowledge base.',
      'scene-chip-1':'Cube Definitions','scene-chip-2':'Metric Rules','scene-chip-3':'Past Analyses','scene-chip-4':'Team Feedback',
      'scene-memory':'Recalls validated analysis paths and team feedback — it gets sharper the more it\'s used.',
      'scene-clickhouse':'Connects directly to ClickHouse via MCP — real queries against real data, not a guess.',
      'scene-mobile':'Reach your AI analyst the same way at the office, at home, or on the road.',
      'scene-skills':'A senior analyst\'s validated method, saved as a Skill — reusable by anyone on the team.',

      'eye-2':'Real-World Use Cases',
      'h2-2':'Where your AI analyst earns its place.',
      'lede-2':'Common analysis workflows that benefit from an AI that already knows your cubes, metrics, and business rules.',
      'uc1-tag':'Sales Analysis','uc1-title':'"Why did sales drop this month?" — answered in minutes',
      'uc1-desc':'DataLLM picks the standard Sales cube, applies the right filters, and explains the answer — instead of a multi-day investigation across dashboards.',
      'uc2-tag':'Marketing Performance','uc2-title':'Campaign ROI without five open dashboards',
      'uc2-desc':'Ask about traffic, conversion, or campaign spend in one sentence and get a cross-cube answer with the sources cited.',
      'uc3-tag':'Inventory & Supply Chain','uc3-title':'Stockouts and inventory, explained',
      'uc3-desc':'Ask which SKUs are at risk of stocking out and why — DataLLM checks the right cube and the right definitions automatically.',
      'uc4-tag':'Financial Reporting','uc4-title':'Revenue and cost breakdowns, correctly defined',
      'uc4-desc':'DataLLM applies the company\'s actual financial definitions automatically — no more two reports disagreeing on the same number.',
      'uc5-tag':'Executive Summaries','uc5-title':'A plain-language summary, not a raw dashboard',
      'uc5-desc':'Leadership asks a question and gets a management-ready summary — verified against the correct data sources.',
      'uc6-tag':'Analyst Onboarding','uc6-title':'New analysts reuse senior Skills from day one',
      'uc6-desc':'Instead of memorizing hundreds of cubes, new hires call the same validated Skills their senior colleagues already built.',

      'eye-3':'How It Works',
      'h2-3':'Ask, verify, respond — all on your own hardware.',
      'lede-3':'A business question goes in, DataLLM checks the knowledge base and queries the right cube, and an explainable answer streams back.',
      'how-node1':'Ask a Business Question','how-sub1':'Type a plain-language question from any device — no SQL, no cube names required',
      'how-node2':'DataLLM Finds the Right Data','how-sub2':'Checks the BI knowledge base, confirms the standard cube and metrics, then queries ClickHouse',
      'how-node3':'Explainable, Sourced Answer','how-sub3':'A traceable answer streams back — never a black box, always verifiable',
      'callout-title':'Complete Privacy — No Cloud, No Compromise',
      'callout-p':'Every question and every query is processed entirely on your own hardware — never sent to an external AI provider. The RTX PRO 6000 handles reasoning, retrieval, and analysis locally, giving you enterprise-grade BI intelligence without giving up control of your data.',

      'eye-rf':'Request Flow',
      'h2-rf':'From a question to a finished analysis.',
      'lede-rf':'Every hop traced step by step — from your question to a sourced answer.',
      'rf-1':'Business<br>Question','rf-2':'BI Knowledge<br>Base + RAG','rf-3':'ClickHouse<br>MCP','rf-4':'Qwen 3.6<br>Analysis','rf-5':'Explained<br>Answer',

      'eye-4':'Under the Hood',
      'h2-4':'The actual stack.',
      'lede-4':'The hardware and software stack behind every analysis.',
      'spec-hw':'Hardware','hood-h3':'Software services',
      'svc-sub-llm':'reasoning · analysis','svc-sub-agt':'agent orchestration · Skills','svc-sub-kb':'cube & metric definitions',
      'svc-sub-mcp':'real BI data queries','svc-sub-mem':'long-term team knowledge','svc-sub-bot':'mobile gateway',

      'story-eyebrow':'Our Story',
      'story-title':'From BI OLAP cubes to an enterprise AI-First data analyst, built on the NVIDIA RTX PRO 6000.',
      'story-intro':'Every company talks about AI. The real question is whether AI can actually understand a company\'s own data — and know which number is correct. Our DataLLM project started with exactly that question.',

      'story-ch1-h':'Companies don\'t lack data — they lack the ability to find the right answer',
      'story-ch1-p1':'One day, a colleague on the business side asked a simple question: "Why did sales drop this month?" It sounds simple — but the moment a BI analyst opens the BI Portal, the real difficulty begins: hundreds of cubes, thousands of metrics, dozens of dimensions. Which cube first? GMV, Sales Amount, or Net Sales? Split by channel, category, seller, or customer type? A new hire might spend days asking around just to find the right data source — and even a 20-year veteran can\'t always be sure they picked correctly.',
      'story-ch1-p2':'The real problem was never a lack of data — it\'s too much of it. The same metric can live in multiple cubes, mean different things in each one, and two reports that both look correct can give completely different answers. Everyone is swimming in data but doesn\'t know which number to trust. That knowledge lives in Confluence pages, emails, and — often — a single senior analyst\'s memory. Data doesn\'t explain itself.',
      'story-ch1-p3':'So we asked ourselves: <strong style="color:var(--text);">what if AI didn\'t just help people query data, but actually understood our BI data, our business definitions, and our analysis experience?</strong> That\'s where the DataLLM project began — not just getting AI to write SQL, but letting every employee actually understand and use data.',

      'story-ch2-h':'What we needed wasn\'t a chatbot',
      'story-ch2-p1':'We quickly realized an ordinary chatbot wouldn\'t cut it. It can answer general knowledge and generate SQL, but what we actually needed was a platform that could connect to internal data systems, call real analysis tools, understand business knowledge, and keep accumulating institutional experience.',
      'story-ch2-p2':'We found <strong style="color:var(--text);">OpenCowork</strong> — it provides AI agents, MCP, and internal tool integration, and crucially, it could connect to our ClickHouse MCP. That meant AI could actually step into the real analysis workflow: understand the question, pick a data source, run the query, and explain why.',
      'story-ch2-p3':'At that point we made an important decision: <strong style="color:var(--text);">the entire DataLLM system had to run inside the company.</strong> BI data holds sales, inventory, customer, and financial information — none of it could leave the network.',

      'story-ch3-h':'Getting a private DataLLM actually running',
      'story-ch3-p1':'If the data couldn\'t leave the company, the LLM couldn\'t either. After several rounds of testing, we settled on <a href="https://huggingface.co/Qwen/Qwen3.6-35B-A3B" target="_blank" rel="noopener">Qwen 3.6 35B</a> — strong Chinese-language comprehension, long-context support, and well-suited to enterprise data analysis.',
      'story-ch3-p2':'But deploying it, we learned the model was only step one. A 35B model at high-precision inference already needs serious VRAM — add long context, knowledge retrieval, and multi-user concurrency, and an ordinary GPU hits a wall fast. What we needed wasn\'t a GPU that could launch a model — it was infrastructure that could carry a genuine enterprise AI workload.',
      'story-ch3-p3':'After evaluating our options, we landed on the <a href="https://www.newegg.com/p/pl?d=RTX+PRO+6000" target="_blank" rel="noopener">NVIDIA RTX PRO 6000</a>. <strong style="color:var(--text);">Its value wasn\'t just speed — it\'s what actually solved the deployment problem for enterprise private AI.</strong> Enterprise-grade private DataLLM finally went from architecture diagram to a real, working system.',

      'story-ch4-h':'AI could query data — but it didn\'t understand the company',
      'story-ch4-p1':'Once the system launched, the first users tried DataLLM, and the initial experience was impressive — what used to take multiple reports and manual comparison now took one plain-language question, with answers in minutes instead of half a day.',
      'story-ch4-q1':'Two users asked nearly identical questions and got two different cubes and two different answers — both well-written, both logically sound, but a senior analyst could tell one didn\'t fit the business context.',
      'story-ch4-p2':'As questions got more complex, DataLLM sometimes picked different analysis paths for the same question — each one reasonable on its own, but not necessarily what the company actually considered correct.',
      'story-ch4-p3':'That\'s when we realized: <strong style="color:var(--text);">AI\'s biggest problem wasn\'t that it couldn\'t analyze — it\'s that it didn\'t understand this company.</strong> It was like a highly capable new hire who didn\'t yet know the company\'s own rules.',

      'story-ch5-h':'Giving AI an enterprise data manual',
      'story-ch5-p1':'To make AI genuinely understand our data, we built a knowledge base for the BI system — a systematic write-up of years of accumulated data knowledge, including:',
      'story-ch5-li1':'Every cube\'s business purpose',
      'story-ch5-li2':'Every metric\'s exact definition',
      'story-ch5-li3':'Common filters and business rules',
      'story-ch5-li4':'Scenarios prone to misunderstanding',
      'story-ch5-p2':'We fed all of it into OpenCowork with RAG, so AI checks the knowledge base before ever querying data — confirming the standard cube, the right metrics, and the correct filters first, then calling ClickHouse MCP for the real data.',
      'story-ch5-q1':'"It really does feel more and more like a BI engineer who\'s been working alongside us the whole time."',
      'story-ch5-p3':'As the knowledge base improved, accuracy and stability rose clearly — the first time AI actually started speaking the company\'s own data language.',

      'story-ch6-h':'Knowing the data still wasn\'t the same as knowing how to analyze it',
      'story-ch6-p1':'DataLLM could now handle complex, cross-cube questions — but it still didn\'t have a stable analysis methodology. Facing "why did sales drop," it might check traffic first one time and price a third — not necessarily wrong, but more like a knowledgeable student than an experienced analyst.',
      'story-ch6-p2':'So we added a Feedback feature: senior analysts could tell the AI directly what to fix, for example:',
      'story-ch6-li1':'Wrong cube selected',
      'story-ch6-li2':'Not the key metric',
      'story-ch6-li3':'Inefficient analysis order',
      'story-ch6-li4':'Needs a second data source to verify',
      'story-ch6-p3':'We turned validated analysis flows into reusable Skills — a standardized method any employee could call on, instead of starting from scratch every time.',
      'story-ch6-q1':'"It\'s genuinely starting to feel like a senior data analyst who\'s been working with us the whole time."',

      'story-ch7-h':'What we actually solved was an industry problem',
      'story-ch7-p1':'Looking back, this project was never about chasing the newest model or building a cool-looking chatbot. It solves a problem across the data industry: companies have plenty of data, but struggle to let every employee actually, correctly, and efficiently use it — the entry point is too complex, definitions are hard to unify, and analysis experience is hard to pass on.',
      'story-ch7-p2':'DataLLM\'s value is building a bridge between business questions and enterprise data — <strong style="color:var(--text);">the user asks the question; AI understands the company\'s knowledge, picks the data, runs the analysis, and explains it in terms the business understands.</strong> Not a simple BI chatbot, but an AI data analyst that genuinely understands the company\'s data, rules, and methods.',

      'story-closing-h':'NVIDIA RTX PRO 6000 made all of this real',
      'story-closing-p1':'Today, this solution is no longer just a BI query tool — it\'s grown into a complete, private enterprise AI platform. Running on the NVIDIA RTX PRO 6000, we\'ve achieved:',
      'story-closing-li1':'100% private deployment — enterprise data always stays inside the internal network',
      'story-closing-li2':'Local LLM inference — Qwen 3.6 35B running stably',
      'story-closing-li3':'Enterprise knowledge base & RAG — AI understands the company\'s own knowledge and data',
      'story-closing-li4':'ClickHouse MCP data analysis — direct connection to real BI data',
      'story-closing-li5':'Long-term memory — retains team knowledge and past experience',
      'story-closing-li6':'Multi-user collaboration — many employees sharing one enterprise AI',
      'story-closing-li7':'Mobile access — reach the private AI from anywhere',
      'story-closing-li8':'Skills accumulation — senior analysts\' methodology, turned reusable',
      'story-closing-li9':'Room to grow — a shared foundation for future enterprise AI applications',

      'story-final-h':'One Last Note',
      'story-final-p1':'If, at the start, all we wanted was to save a PM some time hunting for the right BI cube — then today, what we really want is to give every employee more time to solve problems, instead of hunting for answers.',
      'story-final-p3':'AI\'s value isn\'t just answering a question faster. It\'s letting the company\'s knowledge actually stick, letting great employees\' experience be copied, and letting every employee have an AI analysis assistant they can trust.',
      'story-final-tagline':'From BI OLAP cubes to an enterprise AI-First data analyst.',
      'story-final-p4':'We believe the future of enterprise AI shouldn\'t just be smarter — it should understand the business and the data better, and be more worthy of trust.',

      'footer-meta':'<b>AI-First Analysis</b> &middot; DataLLM',
    },
    zh: {
      'nav-back':'← 返回全部方案',
      'hero-h1':'私有 AI 与 <span>AI-First 数据分析</span>',
      'hero-sub':'DataLLM 通过 OpenCowork 连接您的 BI Cube，让任何员工都可以用自然语言提问，获得可解释、可验证、可追溯的答案。',
      'hero-badge':'私有部署 · 开发中',

      'nav-1':'功能概览','nav-2':'应用场景','nav-3':'工作原理','nav-4':'技术细节',
      'stat-lbl-1':'内置 AI 服务','stat-lbl-2':'私有本地部署','stat-lbl-3':'长期记忆',

      'eye-0':'为什么需要它',
      'h2-0':'您的 AI-First 数据分析师——无论问题来自哪里。',
      'overview-placeholder':'概览图——占位符',

      'eye-1':'功能概览',
      'h2-1':'六项 AI 服务，完全运行在您自己的硬件上。',
      'lede-1':'无需开通云账户，无需订阅费用。每一次 Cube 查询都留在本地。',
      'b1-title':'用自然语言提问','b2-title':'理解您的 BI Cube','b3-title':'记住团队知识',
      'b4-title':'连接真实 BI 数据','b5-title':'随时移动访问','b6-title':'可复用的分析 Skills',
      'hub-tagline':'100% 本地运行——每一次 Cube 查询都留在企业内部',
      'scene-ask':'像问同事一样问"这个月销售为什么下降？"——无需编写 SQL。',
      'scene-knowledge':'每个 Cube 的用途、每个指标的定义——都被整理进企业 BI 知识库。',
      'scene-chip-1':'Cube 定义','scene-chip-2':'指标规则','scene-chip-3':'历史分析','scene-chip-4':'团队反馈',
      'scene-memory':'记住经过验证的分析路径与团队反馈——用得越多，就越精准。',
      'scene-clickhouse':'通过 MCP 直接连接 ClickHouse——真实查询真实数据，而不是猜测。',
      'scene-mobile':'无论在办公室、家里还是路上，都能以同样的方式访问您的 AI 分析师。',
      'scene-skills':'资深分析师验证过的方法，保存为 Skill——团队中任何人都可以复用。',

      'eye-2':'真实应用场景',
      'h2-2':'您的 AI 分析师，用在真正需要的地方。',
      'lede-2':'这些常见的分析工作流，都受益于一个已经了解您的 Cube、指标与业务规则的 AI。',
      'uc1-tag':'销售分析','uc1-title':'"这个月销售为什么下降？"——几分钟内得到答案',
      'uc1-desc':'DataLLM 选择标准的 Sales Cube，应用正确的过滤条件并解释答案——而不是花好几天时间在多个报表中排查。',
      'uc2-tag':'营销效果','uc2-title':'无需打开五个仪表盘就能看懂营销 ROI',
      'uc2-desc':'用一句话询问流量、转化率或营销支出，即可获得带来源引用的跨 Cube 答案。',
      'uc3-tag':'库存与供应链','uc3-title':'缺货与库存问题，一目了然',
      'uc3-desc':'询问哪些 SKU 有缺货风险以及原因——DataLLM 自动核对正确的 Cube 与定义。',
      'uc4-tag':'财务报告','uc4-title':'收入与成本拆解，口径始终正确',
      'uc4-desc':'DataLLM 自动应用企业实际的财务口径——不再出现两份报表对同一数字给出不同答案的情况。',
      'uc5-tag':'管理层摘要','uc5-title':'管理层可读的摘要，而非原始仪表盘',
      'uc5-desc':'管理层提出问题，即可获得一份基于正确数据来源验证过的、可直接阅读的摘要。',
      'uc6-tag':'分析师入职','uc6-title':'新分析师从第一天起就能复用资深经验',
      'uc6-desc':'新员工无需记住成百上千个 Cube，只需调用资深同事已经验证过的 Skills。',

      'eye-3':'工作原理',
      'h2-3':'提问、验证、回答——全部在您自己的硬件上完成。',
      'lede-3':'业务问题输入后，DataLLM 会查阅知识库并查询正确的 Cube，随后给出可解释的答案。',
      'how-node1':'提出业务问题','how-sub1':'从任意设备用自然语言提问——无需 SQL，无需知道 Cube 名称',
      'how-node2':'DataLLM 查找正确数据','how-sub2':'查阅 BI 知识库，确认标准 Cube 与指标，再查询 ClickHouse',
      'how-node3':'可解释、有据可查的答案','how-sub3':'可追溯的答案实时返回——绝非黑箱，始终可验证',
      'callout-title':'完全私有——无云端，无妥协',
      'callout-p':'每一次提问、每一次查询都完全在您自己的硬件上处理——绝不发送给外部 AI 服务商。RTX PRO 6000 在本地完成推理、检索与分析，让您获得企业级 BI 智能，而无需交出数据的控制权。',

      'eye-rf':'请求流程',
      'h2-rf':'从一个问题，到一份完整分析。',
      'lede-rf':'每一步都有迹可循——从您的问题，到有据可查的答案。',
      'rf-1':'业务<br>问题','rf-2':'BI 知识库<br>+ RAG','rf-3':'ClickHouse<br>MCP','rf-4':'Qwen 3.6<br>分析','rf-5':'可解释<br>答案',

      'eye-4':'技术细节',
      'h2-4':'实际的技术栈。',
      'lede-4':'每一次分析背后的硬件与软件技术栈。',
      'spec-hw':'硬件','hood-h3':'软件服务',
      'svc-sub-llm':'推理 · 分析','svc-sub-agt':'Agent 编排 · Skills','svc-sub-kb':'Cube 与指标定义',
      'svc-sub-mcp':'真实 BI 数据查询','svc-sub-mem':'团队长期知识','svc-sub-bot':'移动端网关',

      'story-eyebrow':'我们的故事',
      'story-title':'从 BI OLAP Cube，到企业 AI-First 资深数据分析师——基于 NVIDIA RTX PRO 6000。',
      'story-intro':'很多企业都在谈 AI。但真正的问题是：AI 到底能不能理解企业自己的数据，能不能知道哪个数字才是正确的。我们的 DataLLM 项目，就是从这样一个问题开始的。',

      'story-ch1-h':'企业不缺数据，缺的是找到正确答案的能力',
      'story-ch1-p1':'有一天，一位业务同事提出了一个非常普通的问题："为什么这个月的销售下降了？"这个问题听起来并不复杂，但当 BI 分析师打开 BI Portal 时，真正的困难才刚刚开始：眼前是几百个 Cube、上千个指标、几十个分析维度。到底应该先看哪个 Cube？应该看 GMV、Sales Amount，还是 Net Sales？应该按照 Channel、Category、Seller，还是 Customer Type 拆分？对于一位新员工，他可能要花几天时间才能大致确认正确的数据源——即使是工作了 20 年的老员工，也未必敢保证自己一定选对了。',
      'story-ch1-p2':'企业真正的问题，并不是没有数据，而是数据太多了。同一个业务指标可能存在于多个 Cube 中，同一个字段在不同 Cube 中可能有不同定义，两个看起来都正确的报表也可能给出完全不同的结果。大家每天都沉浸在数据的海洋里，却不知道应该相信哪一个数字。这些知识往往散落在 Confluence、邮件，甚至只存在于某一位资深分析师的脑海里。数据不会自己解释自己。',
      'story-ch1-p3':'于是，我们开始思考：<strong style="color:var(--text);">如果 AI 不只是帮助用户查询数据，而是真正理解公司的 BI 数据、业务口径和分析经验，会怎么样？</strong>这，就是 AI-Powered DataLLM 项目诞生的起点——我们想解决的，从来不只是"让 AI 写一段 SQL"，而是让企业中的每一个人，都能够真正理解数据、使用数据。',

      'story-ch2-h':'我们需要的，不是聊天机器人',
      'story-ch2-p1':'我们很快发现，普通的聊天机器人并不能解决这个问题。它可以回答通用知识，也可以生成 SQL，但企业真正需要的是一个能够连接内部数据系统、调用真实分析工具、理解企业业务知识，并持续沉淀企业经验的智能分析平台。',
      'story-ch2-p2':'我们找到了 <strong style="color:var(--text);">OpenCowork</strong>——它提供了 AI Agent、MCP 和企业内部工具集成能力，更重要的是，它可以连接我们的 ClickHouse MCP。这意味着 AI 可以真正进入企业的数据分析流程：理解问题、选择数据源、执行查询，再向用户解释原因。',
      'story-ch2-p3':'至此，我们也做出了一个非常重要的决定：<strong style="color:var(--text);">整套 DataLLM 系统必须部署在企业内部。</strong>因为 BI 数据中包含销售、库存、客户和财务等大量企业核心信息，这些数据不能离开公司网络。',

      'story-ch3-h':'让私有 DataLLM 真正跑起来',
      'story-ch3-p1':'既然数据不能离开企业，那么大语言模型也必须部署在本地。经过多轮测试，我们最终选择了 <a href="https://huggingface.co/Qwen/Qwen3.6-35B-A3B" target="_blank" rel="noopener">Qwen 3.6 35B</a>——它具有优秀的中文理解能力，支持长上下文，也适合企业数据分析场景。',
      'story-ch3-p2':'但当我们真正开始部署时，才发现模型只是第一步。35B 模型在高精度推理模式下本身就需要大量显存，如果还要支持长上下文、知识库检索和多用户并发，普通 GPU 很快就会遇到瓶颈。我们真正需要的，不是一张"能够启动模型"的 GPU，而是一套能够承载企业级 AI 工作负载的基础设施。',
      'story-ch3-p3':'经过评估，我们最终选择了 <a href="https://www.newegg.com/p/pl?d=RTX+PRO+6000" target="_blank" rel="noopener">NVIDIA RTX PRO 6000</a>。<strong style="color:var(--text);">它的价值并不仅仅是"速度更快"，它真正解决的是企业私有 AI 的落地问题。</strong>企业级私有 DataLLM，第一次从架构图变成了真实可用的系统。',

      'story-ch4-h':'AI 会查数据，却不一定理解公司',
      'story-ch4-p1':'系统上线后，第一批用户开始使用 DataLLM，最初的体验非常惊艳——过去需要打开多个报表、手动比较数据的问题，现在只需要输入一句自然语言，几分钟就可以得到初步答案。',
      'story-ch4-q1':'两个用户问了非常相似的问题，AI 却选择了不同的 Cube，最后得出了两个不同角度的答案——答案都写得很完整，逻辑也都说得通，但资深分析师一看就发现其中一个数据口径并不适合这个业务场景。',
      'story-ch4-p2':'随着问题越来越复杂，对于同一个问题，DataLLM 有时会选择不同的分析路径。每一条路径看起来似乎都有道理，但它们并不一定符合企业内部真正认可的分析方法。',
      'story-ch4-p3':'那一刻，我们意识到：<strong style="color:var(--text);">AI 最大的问题，不是不会分析，而是不懂这家公司。</strong>它就像一位能力很强、但刚刚入职的新员工，还不理解企业内部的规则。',

      'story-ch5-h':'给 AI 一本"企业数据说明书"',
      'story-ch5-p1':'为了让 AI 真正理解我们的数据，我们开始为 BI 系统建立知识库——把企业过去多年积累的数据知识系统性地整理出来，包括：',
      'story-ch5-li1':'每一个 Cube 的业务用途',
      'story-ch5-li2':'每一个 Metric 的定义',
      'story-ch5-li3':'常用过滤条件与业务规则',
      'story-ch5-li4':'容易产生误解的数据口径',
      'story-ch5-p2':'我们把这些内容接入 OpenCowork，并通过 RAG 让 AI 在查询数据之前先查阅企业知识库——先确认应该使用哪个标准 Cube、哪些指标和过滤条件，再调用 ClickHouse MCP 查询真实数据。',
      'story-ch5-q1':'"现在，它真的越来越像一位长期和我们一起工作的 BI 工程师。"',
      'story-ch5-p3':'随着知识库不断完善，分析结果的准确率和稳定性开始明显提升——这是 AI 第一次开始理解企业自己的数据语言。',

      'story-ch6-h':'知道数据，还不等于会做分析',
      'story-ch6-p1':'有了知识库之后，DataLLM 已经可以解决很多复杂问题，但我们很快又发现了新的瓶颈：AI 已经知道数据在哪里，可是它还没有一套稳定的分析方法论。面对"销售为什么下降"，它可能一次先分析流量，另一次先分析价格——在资深分析师眼中，它更像一位掌握了大量知识、却缺乏经验的学生。',
      'story-ch6-p2':'于是，我们为 DataLLM 加入了 Feedback 功能，资深分析师可以直接对 AI 的结果进行反馈，例如：',
      'story-ch6-li1':'这个 Cube 选错了',
      'story-ch6-li2':'这个指标不是关键指标',
      'story-ch6-li3':'这个分析顺序效率太低',
      'story-ch6-li4':'这个结论还需要另一个数据源验证',
      'story-ch6-p3':'我们将经过验证的分析流程沉淀成 Skills——一套企业可以重复使用的标准分析方法，让另一个员工遇到相似问题时不需要重新摸索。',
      'story-ch6-q1':'"现在，它已经越来越像一位长期与我们一起工作的资深数据分析师。"',

      'story-ch7-h':'我们真正解决的，是一个行业问题',
      'story-ch7-p1':'回头看，这个项目从来不是为了追逐某一个最新模型，也不是为了做一个看起来很酷的聊天机器人。它解决的是一个长期存在于数据行业的问题：企业拥有大量数据，却很难让所有员工真正、正确、高效地使用这些数据——数据入口太复杂，数据口径难以统一，分析经验也难以传承。',
      'story-ch7-p2':'DataLLM 的价值，就是在业务问题和企业数据之间建立一座新的桥梁——<strong style="color:var(--text);">用户负责提出业务问题，AI 负责理解企业知识、选择数据、执行分析，并用业务能够理解的方式进行解释。</strong>它不是一个简单的 BI Chatbot，而是一位真正理解企业内部数据、业务规则和分析方法的 AI 数据分析师。',

      'story-closing-h':'NVIDIA RTX PRO 6000，让这一切成为现实',
      'story-closing-p1':'今天，这套方案已经不再只是一个 BI 查询工具，它已经成长为一套完整的企业私有 AI 平台。依托 NVIDIA RTX PRO 6000，我们实现了：',
      'story-closing-li1':'100% 私有化部署——企业数据始终保留在内部网络',
      'story-closing-li2':'本地大模型推理——稳定运行 Qwen 3.6 35B',
      'story-closing-li3':'企业知识库与 RAG——让 AI 理解企业自己的知识和数据',
      'story-closing-li4':'ClickHouse MCP 数据分析——直接连接真实 BI 数据',
      'story-closing-li5':'长期记忆能力——持续保留团队知识和历史经验',
      'story-closing-li6':'多用户协同——多位员工可以同时使用统一的企业 AI',
      'story-closing-li7':'移动访问能力——员工可以通过移动端访问私有 AI',
      'story-closing-li8':'Skills 能力沉淀——将资深分析师的方法论转化为可复用能力',
      'story-closing-li9':'持续扩展能力——为未来更多企业 AI 应用提供统一基础设施',

      'story-final-h':'写在最后',
      'story-final-p1':'如果说最初，我们只是希望帮助一位 PM 少花一些时间寻找 BI Cube。那么今天，我们更希望帮助每一位员工，把时间花在解决问题上，而不是寻找答案。',
      'story-final-p3':'AI 的价值，不只是更快地回答一个问题。更重要的是，让企业的知识真正沉淀下来，让优秀员工的经验能够被复制，让每一位员工都拥有一位值得信赖的智能分析助手。',
      'story-final-tagline':'从 BI OLAP Cube，到企业 AI-First 资深数据分析师。',
      'story-final-p4':'我们相信，未来的企业 AI，不应该只是更聪明，它还应该更懂企业、更懂数据，也更值得信任。',

      'footer-meta':'<b>AI-First Analysis</b> &middot; DataLLM',
    }
  };

  function t(key) { var d=T[LANG]||T.en; return d[key]!==undefined?d[key]:(T.en[key]||key); }
  var LANG = 'en';

  function applyLang(lang) {
    LANG = lang;
    document.documentElement.lang = lang==='zh'?'zh-CN':'en';
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var v=t(el.getAttribute('data-i18n')); if(v!==undefined) el.textContent=v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var v=t(el.getAttribute('data-i18n-html')); if(v!==undefined) el.innerHTML=v;
    });
  }

  var LANG_MAP={'EN':'en','中文':'zh'};
  var langSel=document.querySelector('.lang-select');
  if(langSel){
    var saved=localStorage.getItem('lang')||'en';
    Array.from(langSel.options).find(function(o){ if(LANG_MAP[o.value]===saved){langSel.value=o.value;return true;} });
    applyLang(saved);
    langSel.addEventListener('change',function(){ var l=LANG_MAP[this.value]||'en'; localStorage.setItem('lang',l); applyLang(l); });
  } else { applyLang(localStorage.getItem('lang')||'en'); }

  /* ---- Hero mockup carousel ---- */
  (function () {
    var carousel = document.getElementById('heroCarousel');
    if (!carousel) return;
    var slides = carousel.querySelectorAll('.mock-slide');
    var dots = document.querySelectorAll('#heroCarouselDots .mock-nav-dot');
    var current = 0;
    var timer = null;

    function goTo(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, idx) { s.classList.toggle('active', idx === current); });
      dots.forEach(function (d, idx) { d.classList.toggle('active', idx === current); });
    }

    function next() { goTo(current + 1); }

    function start() { timer = setInterval(next, 4000); }
    function stop() { clearInterval(timer); }

    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        goTo(parseInt(d.dataset.goto, 10));
        stop(); start();
      });
    });

    var prevBtn = document.getElementById('heroPrev');
    var nextBtn = document.getElementById('heroNext');
    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); stop(); start(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); stop(); start(); });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);

    start();
  })();

  /* ---- Story carousel ---- */
  (function () {
    var carousel = document.getElementById('storyCarousel');
    if (!carousel) return;
    var slides = carousel.querySelectorAll('.story-slide');
    var dots = document.querySelectorAll('#storyDots .story-dot');
    var prev = document.getElementById('storyPrev');
    var next = document.getElementById('storyNext');
    var current = 0;

    function goTo(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, idx) { s.classList.toggle('active', idx === current); });
      dots.forEach(function (d, idx) { d.classList.toggle('active', idx === current); });
    }

    prev.addEventListener('click', function () { goTo(current - 1); });
    next.addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (d) { d.addEventListener('click', function () { goTo(parseInt(this.dataset.goto, 10)); }); });
  })();

  /* ---- Hub diagram ---- */
  (function () {
    var diagram = document.getElementById('hubDiagram');
    if (!diagram) return;
    var nodes = diagram.querySelectorAll('.hub-node[data-scene]');
    var scenes = diagram.querySelectorAll('.hub-scene');

    function showScene(key) {
      scenes.forEach(function (s) { s.classList.toggle('active', s.dataset.scene === key); });
      nodes.forEach(function (n) { n.classList.toggle('active', n.dataset.scene === key); });
    }

    nodes.forEach(function (n) {
      n.addEventListener('click', function () {
        showScene(n.classList.contains('active') ? 'default' : n.dataset.scene);
      });
      n.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); n.click(); }
      });
    });
  })();

  /* ---- Use-case tabs ---- */
  (function () {
    var tabs = document.querySelectorAll('.uc-tab');
    var panels = document.querySelectorAll('.uc-panel');
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        tab.classList.add('active');
        document.querySelector('.uc-panel[data-panel="' + tab.dataset.tab + '"]').classList.add('active');
      });
    });
  })();
})();
