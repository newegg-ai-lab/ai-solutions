(function () {
  var LANG = 'en';
  var T = {
    en: {
      'nav-1':'What You Get','nav-2':'Use Cases','nav-3':'How It Works','nav-4':'Under the Hood',
      'hero-badge':'Included with Your Purchase',
      'hero-sub-1':'Your own private AI — no subscriptions, no data leaks, always on.',
      'hero-sub-2':'Multi-user · Remembers Everything · Fully private · Always on',
      'stat-lbl-1':'AI Services Included','stat-lbl-2':'Private & On-Premise','stat-lbl-3':'Long-Term Memory',
      'eye-1':'What You Get','eye-2':'Real-World Use Cases','eye-3':'How It Works',
      'eye-4':'Under the Hood','eye-5':'Request Flow','eye-6':'Architecture Details',
      'b1-title':'Personal AI Assistant ran locally',
      'b1-desc':'Ask questions, get answers, draft content, and brainstorm ideas. Powered by an advanced AI model running entirely on your own hardware — not a distant server.',
      'b2-title':'Chat about your own documents',
      'b2-desc':'Upload your files, manuals, reports, or internal knowledge and get instant answers based on your content — not generic internet data.',
      'b3-title':'Remembers preferences & history',
      'b3-desc':'Your AI recalls past conversations and learns your preferences over time. No need to re-explain yourself every session. It picks up right where you left off.',
      'b4-title':'On-demand Image Generation',
      'b4-desc':'Create visuals, illustrations, and design assets on request. All generated instantly on your own hardware without any external service or usage fees.',
      'b5-title':'Mobile Access Anytime',
      'b5-desc':'Chat with your AI through Telegram, a free messaging app. It is just like texting a contact. Available 24/7 from any mobile device anywhere.',
      'b6-title':'Data Stays Private',
      'b6-desc':'Unlike ChatGPT or Copilot, nothing you ask or upload ever touches a third-party cloud. Everything only runs on your hardware and under your control.',
      'uc1-tag':'Onboarding','uc1-title':'New hires get answers instantly',
      'uc1-desc':'Upload your employee handbook, policies, and benefits docs. New staff can ask questions through the RTX PRO 6000 Hub instead of waiting on HR.',
      'uc2-tag':'IT Support','uc2-title':'Self service troubleshooting',
      'uc2-desc':'Index your internal runbooks and help articles. Staff resolve common issues on their own without having to ask IT or open a ticket.',
      'uc3-tag':'Incident Resolution','uc3-title':'Log incidents for easy future fixes',
      'uc3-desc':'After resolving an incident, document the solution, error codes, and prevention steps. The next time a similar issue hits, your AI surfaces the fix instantly.',
      'uc4-tag':'Legal & Contracts','uc4-title':'Search contracts & policies in seconds',
      'uc4-desc':'Ask what the termination clause in a vendor agreement is and get the exact answer. No need to read through 40 pages hunting for it.',
      'uc5-tag':'Product Docs','uc5-title':'Turn spec sheets into expert assistant',
      'uc5-desc':'Sales and support teams query product manuals, datasheets, and release notes conversationally. No expertise required.',
      'uc6-tag':'Training','uc6-title':'Make training materials interactive',
      'uc6-desc':'Upload course content, safety guides, or certification materials and let learners ask follow-up questions at their own pace.',
      'how-node1':'Ask Anything','how-sub1':'Type a question, request a summary, or start a conversation from any device',
      'how-node2':'Your AI Gets to Work','how-sub2':'Searches your documents, recalls your history, and reasons through the answer',
      'how-node3':'Instant, Private Response','how-sub3':'A personalized answer delivered entirely on your hardware — no cloud, no wait',
      'callout-title':'Complete Privacy — No Cloud, No Compromise',
      'callout-p':'Every question you ask, every document you upload, every conversation you have — all of it stays on your machine. There are no third-party servers, no data agreements, and no monthly AI subscriptions. The RTX Pro 6000 handles everything locally, giving you the power of a top-tier AI system without giving up control of your data.',
      'hood-h3':'Software services',
      'svc-sub-llm':'reasoning · chat','svc-sub-kb':'knowledge base','svc-sub-rnk':'result scoring',
      'svc-sub-vec':'semantic vector search','svc-sub-mem':'long-term memory','svc-sub-bot':'mobile gateway',
      'rf-1':'Telegram<br>Mobile','rf-2':'Mem0<br>Memory','rf-3':'Onyx KB<br>+ Embed',
      'rf-4':'Rerank<br>Score','rf-5':'Qwen3<br>Inference','rf-6':'Image<br>Gen',
      'arch-title':'Data Flow Diagrams',
      'arch-desc':'Full message processing sequence, service architecture across Windows / WSL2 / Docker, and multi-user memory isolation — with annotated Mermaid diagrams.',
      'arch-pill-1':'Message flow','arch-pill-2':'Service architecture','arch-pill-3':'Multi-user isolation',
      'footer-meta':'<b>RTX PRO 6000 Hub</b> · Private AI · On-Premise',
      'footer-note':'Powered by NVIDIA RTX Pro 6000',
    },
    zh: {
      'nav-1':'功能介绍','nav-2':'应用场景','nav-3':'工作原理','nav-4':'技术细节',
      'hero-badge':'随硬件附赠',
      'hero-sub-1':'您的专属私有 AI——无订阅费、无数据泄露、全天候在线。',
      'hero-sub-2':'多用户 · 永久记忆 · 完全私密 · 全天候在线',
      'stat-lbl-1':'内置 AI 服务','stat-lbl-2':'私有本地部署','stat-lbl-3':'长期记忆',
      'eye-1':'功能介绍','eye-2':'真实应用场景','eye-3':'工作原理',
      'eye-4':'技术细节','eye-5':'请求流程','eye-6':'架构详情',
      'b1-title':'本地运行的个人 AI 助手',
      'b1-desc':'提问、获取答案、起草内容、头脑风暴——完全由运行在您自己硬件上的先进 AI 模型驱动，无需连接远程服务器。',
      'b2-title':'与您的私有文档对话',
      'b2-desc':'上传您的文件、手册、报告或内部知识库，即可基于您的内容获取即时答案——而非来自互联网的通用数据。',
      'b3-title':'记住您的偏好与历史',
      'b3-desc':'您的 AI 能回忆过往对话并随时间了解您的偏好。无需每次重新解释，它会从上次中断的地方继续。',
      'b4-title':'按需图像生成',
      'b4-desc':'随时创建视觉内容、插图和设计素材。全部在您的硬件上即时生成，无需任何外部服务或使用费用。',
      'b5-title':'随时随地移动访问',
      'b5-desc':'通过 Telegram 与您的 AI 对话，就像给联系人发短信一样简单。全天候 24/7 可从任意移动设备访问。',
      'b6-title':'数据完全私密',
      'b6-desc':'与 ChatGPT 或 Copilot 不同，您提问或上传的任何内容都不会接触第三方云端。一切仅在您的硬件上运行，由您掉揧控。',
      'uc1-tag':'员工入职','uc1-title':'新员工即时获得答案',
      'uc1-desc':'上传员工手册、政策和福利文件。新员工可直接向 RTX PRO 6000 Hub 提问，无需等待人事部门回复。',
      'uc2-tag':'IT 支持','uc2-title':'自助式故障排查',
      'uc2-desc':'将内部操作手册和帮助文章建立索引。员工可自行解决常见问题，无需联系 IT 或提交工单。',
      'uc3-tag':'事故处理','uc3-title':'记录事故以便未来快速修复',
      'uc3-desc':'问题解决后，记录解决方案、错误代码和预防措施。下次遇到类似问题时，您的 AI 会立即给出修复方案。',
      'uc4-tag':'法律与合同','uc4-title':'秒汽搜索合同与政策',
      'uc4-desc':'直接问“供应商 X 协议中的终止条款是什么？”即可获得精确答案，无需翻阅 40 页文件。',
      'uc5-tag':'产品文档','uc5-title':'将规格表转化为专家助手',
      'uc5-desc':'销售和支持团队可用自然语言查询产品手册、数据表和发布说明，无需专业知识。',
      'uc6-tag':'培训','uc6-title':'让培训材料具有互动性',
      'uc6-desc':'上传课程内容、安全指南或认证材料，让学员按自己的节奏提出后续问题。',
      'how-node1':'随时提问','how-sub1':'从任意设备输入问题、请求摘要或开始对话',
      'how-node2':'AI 开始工作','how-sub2':'搜索您的文档、调取历史记录并推理出答案',
      'how-node3':'即时私密响应','how-sub3':'完全在您的硬件上生成个性化答案——无云端、无等待',
      'callout-title':'完全私密——无云端、零妥协',
      'callout-p':'您提出的每个问题、上传的每份文档、进行的每次对话——全部留在您的设备上。没有第三方服务器，没有数据协议，也没有月度 AI 订阅费。RTX Pro 6000 在本地处理一切，让您拥有顶级 AI 系统的能力，同时完全掌控自己的数据。',
      'hood-h3':'软件服务',
      'svc-sub-llm':'推理 · 对话','svc-sub-kb':'知识库','svc-sub-rnk':'结果评分',
      'svc-sub-vec':'语义向量搜索','svc-sub-mem':'长期记忆','svc-sub-bot':'移动端入口',
      'rf-1':'Telegram<br>移动端','rf-2':'Mem0<br>记忆','rf-3':'Onyx KB<br>+ 向量化',
      'rf-4':'Rerank<br>重排序','rf-5':'Qwen3<br>推理','rf-6':'图像<br>生成',
      'arch-title':'数据流程图',
      'arch-desc':'完整的消息处理流程、Windows / WSL2 / Docker 跨平台服务架构以及多用户记忆隔离——附注释 Mermaid 图表。',
      'arch-pill-1':'消息流程','arch-pill-2':'服务架构','arch-pill-3':'多用户隔离',
      'footer-meta':'<b>RTX PRO 6000 Hub</b> · 私有 AI · 本地部署',
      'footer-note':'由 NVIDIA RTX Pro 6000 驱动',
    }
  };

  function t(key) { var d=T[LANG]||T.en; return d[key]!==undefined?d[key]:(T.en[key]||key); }

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
})();