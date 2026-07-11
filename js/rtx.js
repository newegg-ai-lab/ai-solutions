(function () {
  var T = {
    en: {
      'nav-1':'What You Get','nav-2':'Use Cases','nav-3':'How It Works','nav-4':'Under the Hood','nav-5':'Setup Guide',
      'hero-badge':'Included with Your Purchase',
      'hero-sub-1':'Your own private AI — no subscriptions, no data leaks, always on.',
      'hero-sub-2':'Multi-user · Remembers Everything · Fully private · Always on',
      'stat-lbl-1':'AI Services Included','stat-lbl-2':'Private & On-Premise','stat-lbl-3':'Long-Term Memory',
      'eye-0':'Why You Need This',
      'eye-1':'What You Get','eye-2':'Real-World Use Cases','eye-3':'How It Works',
      'eye-4':'Under the Hood','eye-5':'Request Flow','eye-6':'Architecture Details',
      'h2-0':'Your private AI — wherever life happens.',

      'story-eyebrow':'Our Story',
      'story-title':'How a private AI knowledge base grew, built on the NVIDIA RTX PRO 6000.',
      'story-intro':'Many successful AI projects don\'t start with a grand architecture diagram — they start with a small problem that happens every single day. Ours is one of those stories.',

      'story-ch1-h':'Why did a simple question take fifteen minutes to answer?',
      'story-ch1-p1':'Every day, our Customer Service (CS) team fielded a steady stream of customer questions. The workflow was always the same: open the internal Wiki, search for keywords, open a few different documents, compare versions, find the answer, then reply.',
      'story-ch1-p2':'None of it was technically hard — it just ate up a huge amount of time. Worse, the same question could turn up different answers depending on who went looking, and as the company\'s knowledge kept growing, the Wiki kept growing right along with it.',
      'story-ch1-p3':'So we asked ourselves: <strong style="color:var(--text);">what if AI could search our internal knowledge for us, instead of making people dig through the Wiki?</strong> We didn\'t need a chatbot that knew everything — we needed one that only knew our company.',

      'story-ch2-h':'Looking for an AI Search built for the enterprise',
      'story-ch2-p1':'With that in mind, we went looking for a solution — and found an excellent open-source project, <a href="https://github.com/onyx-dot-app/onyx" target="_blank" rel="noopener">Onyx</a>: an AI Search + Knowledge Base platform built for enterprises. It indexes internal documents and uses RAG (Retrieval-Augmented Generation) to answer questions grounded in company knowledge. It was almost exactly what we\'d been looking for.',
      'story-ch2-p2':'But a new problem came up fast: our Wiki, product materials, design docs, and business workflows are all core company assets, and none of it could ever go to a public cloud.',
      'story-ch2-p3':'So we made a decision: <strong style="color:var(--text);">the entire AI system had to run 100% inside the company.</strong>',

      'story-ch3-h':'Why we landed on the NVIDIA RTX PRO 6000',
      'story-ch3-p1':'If the data couldn\'t leave the company, the LLM couldn\'t either. After several rounds of testing, we settled on <a href="https://huggingface.co/Qwen/Qwen3.6-35B-A3B" target="_blank" rel="noopener">Qwen 3.6 35B</a>, for a few simple reasons:',
      'story-ch3-li1':'Excellent Chinese-language ability',
      'story-ch3-li2':'Multimodal support',
      'story-ch3-li3':'Roughly 250K tokens of long context',
      'story-ch3-li4':'A strong fit for enterprise knowledge Q&A',
      'story-ch3-p2':'But once we actually tried to deploy it, the real challenge turned out to be bigger than expected — running a 35B model at FP16 precision with very long context needs a huge amount of VRAM to cache both the model and the context, more than an ordinary GPU can hold. After evaluating our options, we landed on the <a href="https://www.newegg.com/p/pl?d=RTX+PRO+6000" target="_blank" rel="noopener">NVIDIA RTX PRO 6000</a>. Its large VRAM capacity and strong AI inference performance run Qwen 35B smoothly, while still supporting long context, multiple concurrent users, and enterprise-grade retrieval.',
      'story-ch3-p3':'For us, the RTX PRO 6000 wasn\'t just about faster compute — <strong style="color:var(--text);">it\'s what actually made enterprise-grade private AI something we could ship.</strong> Every piece of data, every model, every inference run — all inside our own servers. Truly 100% on-premises.',

      'story-ch4-h':'The AI was smart — but it kept forgetting',
      'story-ch4-p1':'Once the system launched, the CS team started using it every day, and feedback was strong overall. Then one day, a teammate told us something:',
      'story-ch4-q1':'"The AI\'s answers are great, but it doesn\'t remember what we already talked about."',
      'story-ch4-p2':'The model supported roughly 250K tokens of context, but context is always finite. As conversations got longer, important early details quietly got pushed out and forgotten — users had to keep re-explaining background, the AI kept re-learning the same question, and retrieval accuracy started slipping.',
      'story-ch4-p3':'What was actually missing wasn\'t a bigger model. <strong style="color:var(--text);">It was long-term memory.</strong>',

      'story-ch5-h':'Giving the AI long-term memory',
      'story-ch5-p1':'To make the AI a real work assistant, we went looking for a long-term memory solution and settled on the open-source project <a href="https://github.com/mem0ai/mem0" target="_blank" rel="noopener">Mem0</a>. Instead of depending on a limited context window, Mem0 holds onto what actually matters for the long run, like:',
      'story-ch5-li1':'Project background',
      'story-ch5-li2':'User preferences',
      'story-ch5-li3':'Common business workflows',
      'story-ch5-li4':'Past discussions and accumulated experience',
      'story-ch5-p2':'After integrating Mem0, the whole knowledge-base experience changed noticeably. Users no longer had to re-explain project background every time — the AI understood what had already been discussed, and knew which information mattered most to this team. Answer accuracy improved clearly.',
      'story-ch5-q1':'"It really does feel more and more like a coworker who\'s been working alongside us the whole time."',
      'story-ch5-p3':'That\'s the exact phrase a lot of CS teammates started using to describe it.',

      'story-ch6-h':'From the office, to anywhere',
      'story-ch6-p1':'Just when it seemed like the system was already working well, another CS teammate raised a new idea:',
      'story-ch6-q1':'"If I\'m away from my desk, can I still reach our AI knowledge base?"',
      'story-ch6-p2':'That question made us realize knowledge shouldn\'t be confined to the office. So we connected Telegram — now, whether at the office, at home, traveling, or on-site with a customer, a phone is all it takes to securely reach the company\'s internal AI.',
      'story-ch6-p3':'Truly, <strong style="color:var(--text);">anywhere access.</strong>',

      'story-closing-h':'NVIDIA RTX PRO 6000 made all of this real',
      'story-closing-p1':'Today, our solution is no longer just an AI search system — it\'s grown into a complete, private enterprise AI platform. Running on the NVIDIA RTX PRO 6000, we\'ve achieved:',
      'story-closing-li1':'100% private deployment — company data never leaves the internal network',
      'story-closing-li2':'Local LLM inference — Qwen 3.6 35B running for high-quality Q&A',
      'story-closing-li3':'An enterprise knowledge base (RAG) — a dedicated AI Search built on Onyx',
      'story-closing-li4':'Long-term memory — AI keeps hold of team knowledge and past experience',
      'story-closing-li5':'Multi-user collaboration — many employees sharing one knowledge base',
      'story-closing-li6':'Mobile access — reach the company AI anytime through Telegram',
      'story-closing-li7':'Room to grow — a single foundation ready for whatever comes next',

      'story-final-h':'One Last Note',
      'story-final-p1':'If, at the start, all we wanted was to save the CS team a few minutes of digging through the Wiki — then today, what we really want is to give every employee more time to solve problems, instead of hunting for answers.',
      'story-final-p3':'AI\'s real value isn\'t just answering questions. It\'s letting a company\'s knowledge actually stick, letting experience carry forward, and giving every employee an AI assistant they can actually trust.',
      'story-final-tagline':'Our story isn\'t over yet.',
      'story-final-p4':'We hope more companies join in — pushing private AI knowledge bases forward together, and helping AI become a real force behind enterprise digital transformation.',

      'h2-1':'Six AI services, running entirely on your own hardware.',
      'h2-2':'Where your private AI earns its place.',
      'h2-3':'Ask, reason, respond — all on your machine.',
      'h2-4':'The actual stack.',
      'h2-5':'From your phone to a finished answer.',
      'h2-6':'The full system, laid out.',
      'lede-1':'No cloud accounts to set up, no subscription fee. Models run locally the moment you turn it on.',
      'hub-tagline':'100% Local — Nothing Ever Leaves Your Building',
      'scene-assistant':'Qwen3.6 runs entirely on the RTX PRO 6000 — no cloud, no API calls.',
      'scene-docs':'Upload manuals, policies, and reports — indexed straight into your private knowledge base.',
      'scene-memory':'Recalls context across sessions — like a second brain that never forgets.',
      'scene-chip-1':'Past Chats','scene-chip-2':'Preferences','scene-chip-3':'Work Notes','scene-chip-4':'History',
      'scene-image':'Type a prompt, get a finished image — rendered locally, no per-image fees.',
      'scene-image-prompt':'"a mountain lake"',
      'scene-mobile':'Reach your AI the same way at school, at work, or in the park.',
      'scene-private':'Every document and every answer stays sealed inside your own hardware.',
      'lede-2':'Common workflows that benefit from an always-on AI that never sends data outside your building.',
      'lede-3':'A question goes in, the AI reasons through it, and a private answer streams back — the reasoning happens entirely on your hardware.',
      'lede-4':'The hardware and software stack behind every response.',
      'lede-5':'Every hop traced step by step — Telegram, the hub, the model, and back.',
      'lede-6':'Service boundaries, message paths, and every component in one diagram.',
      'b1-title':'Personal AI Assistant ran locally',
      'b1-desc':'Ask questions, get answers, draft content, and brainstorm ideas. Powered by an advanced AI model running entirely on your own hardware — not a distant server.',
      'b2-title':'Chat about your own documents',
      'b2-desc':'Upload your files, manuals, reports, or internal knowledge and get instant answers based on your content — not generic internet data.',
      'b3-title':'Remembers preferences & history',
      'b3-desc':'Your AI recalls past conversations and learns your preferences over time. No need to re-explain yourself every session. It picks up right where you left off.',
      'b4-title':'On-demand Image Generation',
      'b4-desc':'Create visuals, illustrations, and design assets on request. All generated instantly on your own hardware without any external service or usage fees.',
      'b5-title':'Mobile Access Anytime',
      'b5-desc':'Chat with your AI through Telegram, a free messaging app. Just like texting a contact, available 24/7 from any device. (Messages relay through Telegram\'s servers, the same as any Telegram chat, but the AI itself only ever runs on your hardware.)',
      'b6-title':'Data Stays Private',
      'b6-desc':'Unlike ChatGPT or Copilot, your AI model runs entirely on your own hardware — not a third-party AI service. Your documents and conversations are never sent to an external AI provider.',
      'uc1-tag':'Onboarding','uc1-title':'New hires get answers instantly',
      'uc1-desc':'Upload your employee handbook, policies, and benefits docs. New staff can ask questions through Private AI & KB instead of waiting on HR.',
      'uc2-tag':'IT Support','uc2-title':'Self service troubleshooting',
      'uc2-desc':'Index your internal runbooks and help articles. Staff resolve common issues on their own without having to ask IT or open a ticket.',
      'uc3-tag':'Incident Resolution','uc3-title':'Log incidents for easy future fixes',
      'uc3-desc':'After resolving an incident, document the solution, error codes, and prevention steps. The next time a similar issue hits, your AI surfaces the fix instantly.',
      'uc4-tag':'Legal & Contracts','uc4-title':'Search contracts & policies in seconds',
      'uc4-desc':'Ask what the termination clause in a vendor agreement is and get a fast, sourced answer pulled straight from the document. No need to read through 40 pages hunting for it.',
      'uc5-tag':'Product Docs','uc5-title':'Turn spec sheets into expert assistant',
      'uc5-desc':'Sales and support teams query product manuals, datasheets, and release notes conversationally. No expertise required.',
      'uc6-tag':'Training','uc6-title':'Make training materials interactive',
      'uc6-desc':'Upload course content, safety guides, or certification materials and let learners ask follow-up questions at their own pace.',
      'how-node1':'Ask Anything','how-sub1':'Type a question, request a summary, or start a conversation from any device',
      'how-node2':'Your AI Gets to Work','how-sub2':'Searches your documents, recalls your history, and reasons through the answer',
      'how-node3':'Instant, Private Response','how-sub3':'A personalized answer delivered entirely on your hardware — no cloud, no wait',
      'callout-title':'Complete Privacy — No Cloud, No Compromise',
      'callout-p':'Every question you ask and every document you upload is processed entirely on your machine — never sent to an external AI provider, no data-sharing agreement, no monthly AI subscription. The RTX Pro 6000 handles all reasoning, retrieval, and generation locally, giving you the power of a top-tier AI system without giving up control of your data.',
      'spec-hw':'Hardware',
      'hood-h3':'Software services',
      'svc-sub-llm':'reasoning · chat','svc-sub-kb':'knowledge base','svc-sub-rnk':'result scoring',
      'svc-sub-vec':'semantic vector search','svc-sub-mem':'long-term memory','svc-sub-bot':'mobile gateway',
      'rf-1':'Telegram<br>Mobile','rf-2':'Mem0<br>Memory','rf-3':'Onyx KB<br>+ Embed',
      'rf-4':'Rerank<br>Score','rf-5':'Qwen3<br>Inference','rf-6':'Image<br>Gen',
      'arch-title':'Data Flow Diagrams',
      'arch-desc':'Full message processing sequence, service architecture across Windows / WSL2 / Docker, and multi-user memory isolation — with annotated Mermaid diagrams.',
      'arch-pill-1':'Message flow','arch-pill-2':'Service architecture','arch-pill-3':'Multi-user isolation',
      'footer-meta':'<b>Private AI & KB</b> · Private AI · On-Premise',
      'footer-note':'Powered by NVIDIA RTX Pro 6000',
    },
    zh: {
      'nav-1':'功能介绍','nav-2':'应用场景','nav-3':'工作原理','nav-4':'技术细节','nav-5':'安装指南',
      'hero-badge':'随硬件附赠',
      'hero-sub-1':'您的专属私有 AI——无订阅费、无数据泄露、全天候在线。',
      'hero-sub-2':'多用户 · 永久记忆 · 完全私密 · 全天候在线',
      'stat-lbl-1':'内置 AI 服务','stat-lbl-2':'私有本地部署','stat-lbl-3':'长期记忆',
      'eye-0':'为什么需要它',
      'eye-1':'功能介绍','eye-2':'真实应用场景','eye-3':'工作原理',
      'eye-4':'技术细节','eye-5':'请求流程','eye-6':'架构详情',
      'h2-0':'您的私有 AI ——生活中的每一处场景。',

      'story-eyebrow':'我们的故事',
      'story-title':'一个私有 AI 知识库，是如何一步步成长起来的？—— 基于 NVIDIA RTX PRO 6000 的企业 AI 实践',
      'story-intro':'很多成功的 AI 项目，并不是从一张宏伟的架构图开始，而是从一个每天都会发生的小问题开始。我们的故事，也是如此。',

      'story-ch1-h':'为什么一个简单的问题，需要十几分钟才能回答？',
      'story-ch1-p1':'每天，Customer Service（CS）同事都会收到大量客户咨询。一个客户提出问题后，CS 的工作流程通常是这样的：打开公司内部 Wiki，输入关键字搜索，打开几篇不同的文档，比较不同版本的内容，找到最终答案，再回复客户。',
      'story-ch1-p2':'整个流程没有任何技术难度，但却占用了大量时间。更大的问题是，同一个问题，不同的人可能会找到不同版本的答案——随着公司知识越来越多，Wiki 越来越庞大，查找知识也变得越来越困难。',
      'story-ch1-p3':'于是，我们开始思考：<strong style="color:var(--text);">为什么不能让 AI 帮我们查找内部知识，而不是让员工自己翻 Wiki？</strong> 我们需要的，不是一个什么都知道的聊天机器人，而是一个只懂公司内部知识的 AI。',

      'story-ch2-h':'寻找属于企业自己的 AI Search',
      'story-ch2-p1':'带着这个想法，我们开始寻找解决方案，最终发现了一个优秀的开源项目——<a href="https://github.com/onyx-dot-app/onyx" target="_blank" rel="noopener">Onyx</a>：一个专门面向企业的 AI Search + Knowledge Base 平台。它能够把企业内部文档建立索引，通过 RAG（Retrieval-Augmented Generation）技术，让 AI 基于企业知识回答问题。它几乎就是我们一直在寻找的产品。',
      'story-ch2-p2':'但是，很快又出现了新的问题：我们的 Wiki、产品资料、设计文档、业务流程……全部都是公司的核心资产，这些数据绝不能上传到公有云。',
      'story-ch2-p3':'因此，我们做出了一个决定：<strong style="color:var(--text);">整个 AI 系统必须 100% 部署在企业内部。</strong>',

      'story-ch3-h':'为什么最终选择了 NVIDIA RTX PRO 6000？',
      'story-ch3-p1':'既然数据不能离开公司，那么大语言模型也必须部署在本地。经过多轮测试，我们最终选择了 <a href="https://huggingface.co/Qwen/Qwen3.6-35B-A3B" target="_blank" rel="noopener">Qwen 3.6 35B</a>，原因很简单：',
      'story-ch3-li1':'拥有优秀的中文能力',
      'story-ch3-li2':'支持多模态',
      'story-ch3-li3':'拥有约 250K 的长上下文',
      'story-ch3-li4':'非常适合企业知识问答',
      'story-ch3-p2':'但是，真正部署的时候，我们才发现挑战远比想象的大——35B 模型采用 FP16 推理，并支持超长上下文时，需要非常大的显存来缓存模型和上下文信息，普通 GPU 很难满足这一需求。经过评估，我们最终选择了 <a href="https://www.newegg.com/p/pl?d=RTX+PRO+6000" target="_blank" rel="noopener">NVIDIA RTX PRO 6000</a>。它提供了大容量显存和强大的 AI 推理能力，不仅能够稳定运行 Qwen 35B，还能支持长上下文、多用户同时访问以及企业级知识检索。',
      'story-ch3-p3':'对于我们来说，RTX PRO 6000 不只是提供了更快的计算速度——<strong style="color:var(--text);">它真正让企业级私有 AI 成为了一件可以落地的事情。</strong>所有数据、所有模型、所有推理，全部运行在企业自己的服务器中。真正做到 100% On-Premises。',

      'story-ch4-h':'AI 很聪明，但它会"忘记"',
      'story-ch4-p1':'系统上线以后，CS 同事开始每天使用它，整体反馈非常不错。直到有一天，一位同事告诉我们：',
      'story-ch4-q1':'"AI 回答很好，但是它不记得我们之前聊过什么。"',
      'story-ch4-p2':'虽然模型支持约 250K 的上下文，但是上下文始终是有限的。聊天越来越长之后，早期的重要信息会逐渐被遗忘——用户不得不重复介绍背景，AI 又重新开始理解问题，知识检索的准确率也开始下降。',
      'story-ch4-p3':'真正缺少的，并不是更大的模型，<strong style="color:var(--text);">而是长期记忆。</strong>',

      'story-ch5-h':'让 AI 拥有长期记忆',
      'story-ch5-p1':'为了让 AI 真正成为工作助手，我们开始寻找长期记忆方案，最终选择了开源项目 <a href="https://github.com/mem0ai/mem0" target="_blank" rel="noopener">Mem0</a>。它不再依赖有限的上下文窗口，而是能够把真正重要的信息长期保存下来，例如：',
      'story-ch5-li1':'项目背景',
      'story-ch5-li2':'用户偏好',
      'story-ch5-li3':'常见业务流程',
      'story-ch5-li4':'历史讨论结果与企业经验',
      'story-ch5-p2':'接入 Mem0 之后，整个知识库体验发生了明显变化。用户不再需要每次重新介绍项目背景，AI 能够理解过去讨论过什么，也知道哪些信息对这个团队来说最重要，知识库回答的准确率明显提升。',
      'story-ch5-q1':'"现在，它真的越来越像一位长期一起工作的同事。"',
      'story-ch5-p3':'很多 CS 同事都这样告诉我们。',

      'story-ch6-h':'从办公室，走向任何地方',
      'story-ch6-p1':'就在大家都觉得系统已经很好用了的时候，又有一位 CS 同事提出了一个新的想法：',
      'story-ch6-q1':'"如果我在外面，能不能也访问公司的 AI 知识库？"',
      'story-ch6-p2':'这个问题让我们意识到，知识不应该只存在办公室。于是，我们接入了 Telegram——现在，无论是在办公室、家里、出差途中，还是客户现场，只要拿起手机，就可以安全访问企业内部 AI。',
      'story-ch6-p3':'真正实现了：<strong style="color:var(--text);">Anywhere Access。</strong>',

      'story-closing-h':'NVIDIA RTX PRO 6000，让这一切成为现实',
      'story-closing-p1':'今天，我们的方案已经不仅仅是一个 AI 搜索系统，它已经成长为一个完整的企业私有 AI 平台。依托 NVIDIA RTX PRO 6000，我们实现了：',
      'story-closing-li1':'100% 私有化部署 —— 企业数据始终留在内部网络',
      'story-closing-li2':'本地大模型推理 —— 稳定运行 Qwen 3.6 35B，实现高质量知识问答',
      'story-closing-li3':'企业知识库（RAG） —— 基于 Onyx 构建企业专属 AI Search',
      'story-closing-li4':'长期记忆（Mem0） —— AI 持续记住团队知识和历史经验',
      'story-closing-li5':'多用户协同 —— 多位员工同时访问，共享统一知识',
      'story-closing-li6':'移动办公 —— 通过 Telegram 随时随地访问企业 AI',
      'story-closing-li7':'可持续扩展 —— 为未来更多 AI 应用提供统一基础平台',

      'story-final-h':'最后',
      'story-final-p1':'如果说最初，我们只是希望帮助 CS 同事少花几分钟查 Wiki——那么今天，我们更希望帮助每一位员工，把时间花在解决问题，而不是寻找答案。',
      'story-final-p3':'AI 的价值，不只是回答问题，而是让企业的知识真正沉淀下来，让经验能够传承，让每一位员工都拥有一位值得信赖的智能助手。',
      'story-final-tagline':'我们的故事还在继续。',
      'story-final-p4':'也期待有更多企业，一起推动私有化 AI 知识库的发展，让 AI 真正成为企业数字化转型的重要力量。',

      'h2-1':'六项 AI 服务，完全运行在您的硬件上。',
      'h2-2':'私有 AI 发挥实际价值的场景。',
      'h2-3':'提问、推理、响应——全部在您的机器上。',
      'h2-4':'实际的技术栈。',
      'h2-5':'从手机消息到最终答案。',
      'h2-6':'完整的系统架构图。',
      'lede-1':'无需创建账户，无需管理密钥，无使用计量。模型一次拉取，此后全部本地运行。',
      'hub-tagline':'100% 本地运行 — 数据永不离开您的场所',
      'scene-assistant':'Qwen3.6 完全运行在 RTX PRO 6000 上——无需云端，无需 API 调用。',
      'scene-docs':'上传手册、政策与报告——直接建立索引，进入您的私有知识库。',
      'scene-memory':'跨会话记住上下文——如同永不遗忘的第二大脑。',
      'scene-chip-1':'历史对话','scene-chip-2':'个人偏好','scene-chip-3':'工作笔记','scene-chip-4':'历史记录',
      'scene-image':'输入提示词，即刻获得成品图像——本地渲染，无需按张付费。',
      'scene-image-prompt':'"山间湖泊"',
      'scene-mobile':'无论在学校、公司还是公园，都能以同样的方式访问您的 AI。',
      'scene-private':'每一份文档、每一次回答都完全封存在您自己的硬件中。',
      'lede-2':'受益于全天候在线 AI 的常见工作流——数据永不离开您的建筑。',
      'lede-3':'提问后，AI 进行推理，私密答案流式返回——推理过程完全在您的硬件上完成。',
      'lede-4':'每次响应背后的硬件与软件技术栈。',
      'lede-5':'逐步追踪每个环节——Telegram、中枢、模型，再到返回结果。',
      'lede-6':'包含服务边界、消息路径与每个组件的完整架构图。',
      'b1-title':'本地运行的个人 AI 助手',
      'b1-desc':'提问、获取答案、起草内容、头脑风暴——完全由运行在您自己硬件上的先进 AI 模型驱动，无需连接远程服务器。',
      'b2-title':'与您的私有文档对话',
      'b2-desc':'上传您的文件、手册、报告或内部知识库，即可基于您的内容获取即时答案——而非来自互联网的通用数据。',
      'b3-title':'记住您的偏好与历史',
      'b3-desc':'您的 AI 能回忆过往对话并随时间了解您的偏好。无需每次重新解释，它会从上次中断的地方继续。',
      'b4-title':'按需图像生成',
      'b4-desc':'随时创建视觉内容、插图和设计素材。全部在您的硬件上即时生成，无需任何外部服务或使用费用。',
      'b5-title':'随时随地移动访问',
      'b5-desc':'通过 Telegram 与您的 AI 对话——就像给联系人发短信一样简单，全天候 24/7 可从任意设备访问。（消息会通过 Telegram 自身的服务器中转以送达您的手机，与普通 Telegram 聊天相同；但 AI 本身始终只运行在您的硬件上。）',
      'b6-title':'数据完全私密',
      'b6-desc':'与 ChatGPT 或 Copilot 不同，您的 AI 模型完全运行在您自己的硬件上——而非第三方 AI 服务。您的文档与对话内容不会发送给任何外部 AI 服务商。',
      'uc1-tag':'员工入职','uc1-title':'新员工即时获得答案',
      'uc1-desc':'上传员工手册、政策和福利文件。新员工可直接向 Private AI & KB 提问，无需等待人事部门回复。',
      'uc2-tag':'IT 支持','uc2-title':'自助式故障排查',
      'uc2-desc':'将内部操作手册和帮助文章建立索引。员工可自行解决常见问题，无需联系 IT 或提交工单。',
      'uc3-tag':'事故处理','uc3-title':'记录事故以便未来快速修复',
      'uc3-desc':'问题解决后，记录解决方案、错误代码和预防措施。下次遇到类似问题时，您的 AI 会立即给出修复方案。',
      'uc4-tag':'法律与合同','uc4-title':'秒速搜索合同与政策',
      'uc4-desc':'直接询问供应商协议中的终止条款是什么，即可获得有据可查的快速答案，直接引自文档原文，无需翻阅 40 页文件。',
      'uc5-tag':'产品文档','uc5-title':'将规格表转化为专家助手',
      'uc5-desc':'销售和支持团队可用自然语言查询产品手册、数据表和发布说明，无需专业知识。',
      'uc6-tag':'培训','uc6-title':'让培训材料具有互动性',
      'uc6-desc':'上传课程内容、安全指南或认证材料，让学员按自己的节奏提出后续问题。',
      'how-node1':'随时提问','how-sub1':'从任意设备输入问题、请求摘要或开始对话',
      'how-node2':'AI 开始工作','how-sub2':'搜索您的文档、调取历史记录并推理出答案',
      'how-node3':'即时私密响应','how-sub3':'完全在您的硬件上生成个性化答案——无云端、无等待',
      'callout-title':'完全私密——无云端、零妥协',
      'callout-p':'您提出的每个问题、上传的每份文档，均完全在您的设备上处理——不会发送给任何外部 AI 服务商，没有数据共享协议，也没有月度 AI 订阅费。RTX Pro 6000 在本地完成全部推理、检索与生成，让您拥有顶级 AI 系统的能力，同时完全掌控自己的数据。',
      'spec-hw':'硬件',
      'hood-h3':'软件服务',
      'svc-sub-llm':'推理 · 对话','svc-sub-kb':'知识库','svc-sub-rnk':'结果评分',
      'svc-sub-vec':'语义向量搜索','svc-sub-mem':'长期记忆','svc-sub-bot':'移动端入口',
      'rf-1':'Telegram<br>移动端','rf-2':'Mem0<br>记忆','rf-3':'Onyx KB<br>+ 向量化',
      'rf-4':'Rerank<br>重排序','rf-5':'Qwen3<br>推理','rf-6':'图像<br>生成',
      'arch-title':'数据流程图',
      'arch-desc':'完整的消息处理流程、Windows / WSL2 / Docker 跨平台服务架构以及多用户记忆隔离——附注释 Mermaid 图表。',
      'arch-pill-1':'消息流程','arch-pill-2':'服务架构','arch-pill-3':'多用户隔离',
      'footer-meta':'<b>Private AI & KB</b> · 私有 AI · 本地部署',
      'footer-note':'由 NVIDIA RTX Pro 6000 驱动',
    }
  };

  window.ProductI18n.init(T);
})();

(function () {
  var tabs = document.querySelectorAll('.uc-tab');
  var panels = document.querySelectorAll('.uc-panel');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelector('.uc-panel[data-panel="' + tab.dataset.tab + '"]').classList.add('active');
    });
  });
})();

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

(function () {
  var carousel = document.getElementById('storyCarousel');
  if (!carousel) return;
  var slides = carousel.querySelectorAll('.story-slide');
  var dots = document.querySelectorAll('#storyDots .story-dot');
  var current = 0;

  function goTo(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) { s.classList.toggle('active', idx === current); });
    dots.forEach(function (d, idx) { d.classList.toggle('active', idx === current); });
  }

  dots.forEach(function (d) {
    d.addEventListener('click', function () { goTo(parseInt(d.dataset.goto, 10)); });
  });

  var prevBtn = document.getElementById('storyPrev');
  var nextBtn = document.getElementById('storyNext');
  if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
})();