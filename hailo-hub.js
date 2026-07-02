(function () {
  var LANG = 'en';
  var T = {
    en: {
      'nav-1':'Use Cases','nav-2':'Features','nav-3':'How It Works','nav-4':'Benefits','nav-5':'Hardware',
      'hero-badge':'Now Available &mdash; Windows',
      'hero-sub-1':'Private AI Hub on Windows &mdash; Powered by Hailo-10H',
      'hero-sub-2':'Chat &nbsp;&middot;&nbsp; Vision &nbsp;&middot;&nbsp; Object Detection &nbsp;&middot;&nbsp; Speech &nbsp;&mdash;&nbsp; All on-device. No cloud.',
      'stat-lbl-1':'AI Modes','stat-lbl-2':'On-Device / Private',
      'stat-val-3':'Low Cost','stat-lbl-3':'No Cloud Fees · Low Total Hardware Cost','stat-lbl-4':'Cloud Dependencies',
      'eye-1':'Real-World Use Cases','eye-2':'What You Get','eye-3':'How It Works','eye-4':'Key Benefits','eye-5':'Hardware & Models',
      'uc1-title':'Touchless Returns Triage',
      'uc1-desc':'A returned item arrives and gets automatically scanned for damage, labeled, and routed — all before a human touches it. Damage is detected visually, the RMA number is read off the label, and the system decides where it goes.',
      'uc2-title':'Package Integrity Gate',
      'uc2-desc':'Every outbound box passes a camera before leaving the dock. Crushed corners, torn tape, and compromised packaging are flagged automatically — stopping damaged shipments before they reach the customer.',
      'uc3-title':'PPE & Safety Monitoring',
      'uc3-desc':'Automatically detect whether workers in restricted zones are wearing required safety gear. Get real-time alerts without a supervisor needing to physically walk the floor.',
      'uc4-title':'Multilingual Meeting Transcription',
      'uc4-desc':'Record a meeting or vendor call and get a full transcript — translated into any language — entirely offline. No audio ever leaves your building.',
      'uc5-title':'Visual Product Q&A',
      'uc5-desc':'Take a photo of a product, a damaged item, or a shelf and ask questions about it in plain language. Instantly get answers without needing a specialist on hand.',
      'uc6-title':'Private Document Assistant',
      'uc6-desc':'Ask questions about internal manuals, policies, or product specs in plain language. Your documents stay on your hardware — nothing gets sent to an external AI service.',
      'callout-title':'The First App to Unlock What Your UGen300 Can Do. <span>No $3,000 GPU Required.</span>',
      'callout-p':'Dedicated AI workstations run $3,000 or more. Cloud AI bills you every month. The UGen300 gives you the same on-device inference power at a fraction of either &mdash; but until now, no Windows app existed to actually use it. Hailo Hub is the first: chat, vision, object detection, and speech transcription, all in one place, the moment you plug in.',
      'sc1-name':'LLM Chat','sc1-desc':'Local AI assistant for conversational Q&A, reasoning, and writing—runs entirely on the Hailo-10H NPU.',
      'sc2-name':'Image Analysis','sc2-desc':'Upload an image and ask questions in natural language. Multi-turn conversation with full image context.',
      'sc3-name':'Image Detection','sc3-desc':'Point a camera or upload an image and instantly identify objects on-screen — each one labeled and highlighted in real time.',
      'sc4-name':'Speech-to-Text','sc4-desc':'Private, offline voice transcription and translation. Record from microphone, get timestamped segments.',
      'flow-1':'User<br>Input','flow-2':'Hailo<br>Hub UI','flow-3':'VDevice<br>Hailo-10H','flow-4':'NPU<br>Inference','flow-5':'Streamed<br>Output',
      'flow-leg-txt-lbl':'Text','flow-leg-txt-sub':'Prompt &#x2192; LLM &#x2192; Token stream',
      'flow-leg-vis-lbl':'Vision','flow-leg-vis-sub1':'Image + text &#x2192; VLM &#x2192; Answer','flow-leg-vis-sub2':'Image &#x2192; YOLO &#x2192; Detections',
      'flow-leg-aud-lbl':'Audio','flow-leg-aud-sub':'Mic &#x2192; Whisper &#x2192; Transcript',
      'ben1-h3':'Completely Private &mdash; Zero Cloud',
      'ben1-p':'Every inference runs locally on the Hailo-10H accelerator inside your Windows PC. No data leaves your machine. No API keys, no subscriptions, no rate limits. Your conversations, images, and voice recordings never touch an external server.',
      'ben1-pill1':'On-device inference','ben1-pill2':'No internet required','ben1-pill3':'No API costs',
      'ben2-h3':'One App &mdash; Chat, Vision, Speech',
      'ben2-p':'A single purpose-built web interface consolidates all AI workloads. Switch between LLM chat, image analysis, object detection, and speech transcription from the sidebar. Models are swapped on demand — no separate tools, no configuration, no command line required.',
      'ben2-pill1':'Unified interface','ben2-pill2':'Hot model switching','ben2-pill3':'FastAPI backend','ben2-pill4':'Runs at localhost:8000',
      'footer-meta':'<b>Hailo Hub</b> · Standalone Windows AI for Hailo-10H',
      'footer-note':'100% On-Device · No Cloud',
    },
    zh: {
      'nav-1':'应用场景','nav-2':'功能介绍','nav-3':'工作原理','nav-4':'核心优势','nav-5':'硬件规格',
      'hero-badge':'现已上市 &mdash; Windows 版',
      'hero-sub-1':'Windows 私有 AI 中枢——由 Hailo-10H 驱动',
      'hero-sub-2':'对话 &nbsp;&middot;&nbsp; 视觉 &nbsp;&middot;&nbsp; 目标检测 &nbsp;&middot;&nbsp; 语音 &nbsp;&mdash;&nbsp; 全本地运行，零云端。',
      'stat-lbl-1':'AI 模式','stat-lbl-2':'本地 / 私有',
      'stat-val-3':'低成本','stat-lbl-3':'无云端费用 · 极低硬件成本','stat-lbl-4':'云端依赖',
      'eye-1':'真实应用场景','eye-2':'功能介绍','eye-3':'工作原理','eye-4':'核心优势','eye-5':'硬件与模型',
      'uc1-title':'退货无人化分拣',
      'uc1-desc':'退回商品自动扫描损坏情况、贴标并路由分流——全程无需人工介入。视觉检测损坏、读取 RMA 标签编号，系统自动决定商品去向。',
      'uc2-title':'包裹完整性检测关卡',
      'uc2-desc':'每个出库箱在离开码头前经过摄像头检测。角落压损、胶带撕裂、包装破损均自动标记，在损坏货物到达客户前将其拦截。',
      'uc3-title':'安全防护装备监测',
      'uc3-desc':'自动检测限制区域工人是否佩戴了必要的安全装备，实时发出警报，无需监督人员亲自巡检。',
      'uc4-title':'多语言会议转录',
      'uc4-desc':'录制会议或供应商通话，获取完整转录——可翻译成任意语言——全程离线进行。音频永远不离开您的建筑。',
      'uc5-title':'视觉产品问答',
      'uc5-desc':'拍摄产品、受损物品或货架的照片，用自然语言提问，即时获得答案，无需专家在场。',
      'uc6-title':'私有文档助手',
      'uc6-desc':'用自然语言查询内部手册、政策或产品规格。您的文档留在硬件上——不会发送到任何外部 AI 服务。',
      'callout-title':'首款真正释放您的 UGen300 潜力的应用。 <span>无需 3000 美元 GPU。</span>',
      'callout-p':'专用 AI 工作站售价 3000 美元以上。云端 AI 按月收费。UGen300 以极低成本为您提供同等的本地推理能力——但此前从未有 Windows 应用真正将其发挥出来。Hailo Hub 是第一款：对话、视觉、目标检测、语音转录，一站式集成，即插即用。',
      'sc1-name':'LLM 对话','sc1-desc':'本地 AI 助手，支持对话问答、推理与写作——完全运行在 Hailo-10H NPU 上。',
      'sc2-name':'图像分析','sc2-desc':'上传图片并用自然语言提问，支持多轮对话，保留完整图像上下文。',
      'sc3-name':'图像检测','sc3-desc':'对准摄像头或上传图片，实时识别画面中的物体——每个目标均标注并高亮显示。',
      'sc4-name':'语音转文字','sc4-desc':'私密离线语音转录与翻译，从麦克风录音，输出带时间戳的分段文本。',
      'flow-1':'用户<br>输入','flow-2':'Hailo<br>Hub 界面','flow-3':'VDevice<br>Hailo-10H','flow-4':'NPU<br>推理','flow-5':'流式<br>输出',
      'flow-leg-txt-lbl':'文本','flow-leg-txt-sub':'提示词 &#x2192; LLM &#x2192; Token 流',
      'flow-leg-vis-lbl':'视觉','flow-leg-vis-sub1':'图像 + 文本 &#x2192; VLM &#x2192; 答案','flow-leg-vis-sub2':'图像 &#x2192; YOLO &#x2192; 检测结果',
      'flow-leg-aud-lbl':'音频','flow-leg-aud-sub':'麦克风 &#x2192; Whisper &#x2192; 转录文本',
      'ben1-h3':'完全私密——零云端',
      'ben1-p':'每次推理均在您 Windows PC 内部的 Hailo-10H 加速器上本地运行。数据不离开您的设备，无需 API 密钥、无订阅费、无速率限制。您的对话、图像和语音录音永远不会触及外部服务器。',
      'ben1-pill1':'本地设备推理','ben1-pill2':'无需联网','ben1-pill3':'无 API 费用',
      'ben2-h3':'一个应用——对话、视觉、语音',
      'ben2-p':'单一专用 Web 界面整合所有 AI 工作负载。从侧边栏切换 LLM 对话、图像分析、目标检测和语音转录，模型按需切换——无需单独工具、无需配置、无需命令行。',
      'ben2-pill1':'统一界面','ben2-pill2':'热切换模型','ben2-pill3':'FastAPI 后端','ben2-pill4':'运行于 localhost:8000',
      'footer-meta':'<b>Hailo Hub</b> · Hailo-10H Windows 独立 AI',
      'footer-note':'100% 本地运行 · 零云端',
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