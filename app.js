document.documentElement.classList.add("js-ready");

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const AIGC_DETAILS = {
  "champion-cny": {
    type: "节日营销 / 产品广告",
    value: "用运动能量与马年节奏建立节日记忆，让产品进入更有传播感的 CNY 视觉叙事。",
    creative: "运动势能 × 东方节日符号",
    usage: "CNY 节点传播 / 社媒短视频",
  },
  "olay-red-jar": {
    type: "新品宣发 / 美妆广告",
    value: "围绕“超红瓶”的产品识别，把功效表达转化为高浓度、可记忆的视觉内容。",
    creative: "产品核心色 × 功效视觉化",
    usage: "新品发布 / 社媒种草 / 电商传播",
  },
  "olay-body-wash": {
    type: "节日营销 / 香氛沐浴",
    value: "以鎏金质感和圣诞氛围放大产品礼赠属性，建立轻奢节日感。",
    creative: "鎏金材质 × 圣诞氛围叙事",
    usage: "圣诞节点 / 产品推广 / 社媒广告",
  },
  "olay-mothers-day": {
    type: "节日礼赠 / 产品推广",
    value: "把母亲节情绪与礼盒卖点放进统一叙事，让产品表达更有温度也更有购买理由。",
    creative: "礼赠情绪 × 产品场景化",
    usage: "母亲节营销 / 礼盒推广 / 社媒内容",
  },
  "oppo-pad": {
    type: "新品宣发 / 3C 广告",
    value: "围绕星空粉配色构建轻盈视觉世界，把产品颜色转化为社媒传播钩子。",
    creative: "星空粉 × 超现实产品舞台",
    usage: "新品宣发 / 社媒广告 / 产品种草",
  },
  "oppo-phone": {
    type: "色彩营销 / 3C 广告",
    value: "以海芋色为视觉主角，在短时长内完成产品色彩、质感与年轻情绪的同步传递。",
    creative: "海芋色 × 轻幻想场景",
    usage: "新品传播 / 社媒短视频 / 色彩营销",
  },
  "joy-city": {
    type: "活动前宣 / 商业传播",
    value: "用动态影像为线下美陈提前制造期待，把活动视觉从现场延展到线上。",
    creative: "线下场景 × 动态预告",
    usage: "活动前宣 / 商场社媒 / 开幕传播",
  },
  "bright-yogurt": {
    type: "新品发布 / 食品广告",
    value: "把芦荟与酸奶的清爽卖点转成轻快视觉节奏，服务新品发布的第一眼认知。",
    creative: "清爽口感 × 产品成分想象",
    usage: "新品发布 / 社媒广告 / 产品种草",
  },
  "huawei-watch": {
    type: "节日营销 / 3C 广告",
    value: "以圣诞氛围包装智能穿戴产品，让科技表达更轻盈、更有赠礼场景感。",
    creative: "智能穿戴 × 节日礼赠",
    usage: "圣诞节点 / 产品合集 / 社媒传播",
  },
  corou: {
    type: "卖点视觉化 / 消费品广告",
    value: "围绕护鼻纸的柔软与舒适感构建直观画面，让功能卖点更快被看见。",
    creative: "柔软触感 × 情境化表达",
    usage: "产品推广 / 社媒种草 / 短视频广告",
  },
  gotukola: {
    type: "联名产品 / 护发广告",
    value: "连接奈娃家族 IP 与护理套装卖点，让联名角色、产品和使用场景形成完整记忆。",
    creative: "联名 IP × 产品世界观",
    usage: "联名发布 / 产品广告 / 社媒传播",
  },
  myo: {
    type: "联名产品 / 创意动画",
    value: "将护理喷雾转化为角色化动画叙事，增强联名内容的趣味度与传播辨识度。",
    creative: "奈娃 IP × 产品动画叙事",
    usage: "联名营销 / 新品传播 / 社媒短视频",
  },
  florasis: {
    type: "美妆产品 / 东方视觉",
    value: "围绕芙蓉浅粉饼的色彩与质感建立东方审美语境，强化产品高级感。",
    creative: "芙蓉意象 × 焕金质感",
    usage: "产品推广 / 美妆种草 / 社媒广告",
  },
  "estee-lauder": {
    type: "卖点视觉化 / 美妆广告",
    value: "把双乳产品的水润与透亮感转成更具想象力的动态画面，直达核心功效。",
    creative: "水乳质感 × 影视化场景",
    usage: "产品传播 / 功效表达 / 社媒广告",
  },
  chagee: {
    type: "城市营销 / 新品传播",
    value: "用上海城市语境连接「晴山栖谷」的产品气质，形成地域化的新品内容。",
    creative: "城市气质 × 新茶饮叙事",
    usage: "城市新品推广 / 社媒内容 / 门店传播",
  },
  "try-one-more-time": {
    type: "AIGC 叙事短片 / 情绪广告",
    value: "用雨夜与晴光的双场景对照，把“再试一次”的情绪转成电影感短片，让品牌态度和人物故事同时被看见。",
    creative: "雨夜低谷 × 晴光重启 × 电影海报感",
    usage: "品牌态度片 / 社媒传播 / 叙事短片",
  },
};

const COMMON_AIGC = {
  status: "已商用 · 已交付",
  process: "传播定位 → 创意策划 → 脚本分镜 → AIGC 视觉生成 → 动态制作 → 后期合成",
  deliverables: "竖版广告主片 / 社媒封面与传播适配",
  role: "创意策划 / AIGC 视觉 / 动态制作与后期",
};

const assetURL = (value = "") => {
  const source = String(value || "");
  return /^https?:\/\//i.test(source) ? source : `public/${source}`;
};

const escapeHTML = (value = "") =>
  String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));

class PartySound {
  constructor(button) {
    this.button = button;
    this.context = null;
    this.master = null;
    this.timer = null;
    this.suspendTimer = null;
    this.recoveryTimer = null;
    this.lastScheduleAt = 0;
    this.step = 0;
    this.noiseBuffer = null;
    this.started = false;
    this.suspendedByVideo = false;
    try {
      this.enabled = localStorage.getItem("seven-sound") !== "off";
    } catch {
      this.enabled = true;
    }
    this.updateButton();
  }

  ensureContext() {
    if (this.context) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    this.context = new AudioContext();
    this.master = this.context.createGain();
    const compressor = this.context.createDynamicsCompressor();
    compressor.threshold.value = -22;
    compressor.knee.value = 18;
    compressor.ratio.value = 5;
    compressor.attack.value = 0.004;
    compressor.release.value = 0.18;
    this.master.gain.value = 0;
    this.master.connect(compressor).connect(this.context.destination);
    this.noiseBuffer = this.context.createBuffer(1, this.context.sampleRate * 0.3, this.context.sampleRate);
    const noise = this.noiseBuffer.getChannelData(0);
    for (let index = 0; index < noise.length; index += 1) noise[index] = Math.random() * 2 - 1;
    this.context.addEventListener("statechange", () => {
      this.updateButton();
      if (this.shouldPlay() && document.visibilityState === "visible" && this.context?.state !== "running") {
        window.clearTimeout(this.recoveryTimer);
        this.recoveryTimer = window.setTimeout(() => this.recover(0.24), 120);
      }
    });
  }

  shouldPlay() {
    return this.enabled && this.started && !this.suspendedByVideo;
  }

  ensureScheduler() {
    const schedulerIsFresh = this.timer && performance.now() - this.lastScheduleAt < 1000;
    if (schedulerIsFresh) return;
    if (this.timer) window.clearInterval(this.timer);
    this.schedule();
    this.timer = window.setInterval(() => this.schedule(), 125);
  }

  kick(offset = 0) {
    if (!this.context || !this.master || this.context.state !== "running") return;
    const now = this.context.currentTime + offset;
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(108, now);
    oscillator.frequency.exponentialRampToValueAtTime(42, now + 0.19);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.095, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
    oscillator.connect(gain).connect(this.master);
    oscillator.start(now);
    oscillator.stop(now + 0.26);
  }

  hat(offset = 0, open = false) {
    if (!this.context || !this.master || !this.noiseBuffer || this.context.state !== "running") return;
    const now = this.context.currentTime + offset;
    const source = this.context.createBufferSource();
    const filter = this.context.createBiquadFilter();
    const gain = this.context.createGain();
    source.buffer = this.noiseBuffer;
    filter.type = "highpass";
    filter.frequency.value = open ? 5200 : 7600;
    gain.gain.setValueAtTime(open ? 0.018 : 0.012, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + (open ? 0.16 : 0.045));
    source.connect(filter).connect(gain).connect(this.master);
    source.start(now);
    source.stop(now + (open ? 0.18 : 0.06));
  }

  bass(frequency, offset = 0) {
    if (!this.context || !this.master || this.context.state !== "running") return;
    const now = this.context.currentTime + offset;
    const oscillator = this.context.createOscillator();
    const filter = this.context.createBiquadFilter();
    const gain = this.context.createGain();
    oscillator.type = "sawtooth";
    oscillator.frequency.value = frequency;
    filter.type = "lowpass";
    filter.frequency.value = 220;
    filter.Q.value = 5;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.026, now + 0.018);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    oscillator.connect(filter).connect(gain).connect(this.master);
    oscillator.start(now);
    oscillator.stop(now + 0.24);
  }

  metal(frequency, offset = 0) {
    if (!this.context || !this.master || this.context.state !== "running") return;
    const now = this.context.currentTime + offset;
    const oscillator = this.context.createOscillator();
    const filter = this.context.createBiquadFilter();
    const gain = this.context.createGain();
    oscillator.type = "square";
    oscillator.frequency.value = frequency;
    filter.type = "bandpass";
    filter.frequency.value = frequency;
    filter.Q.value = 11;
    gain.gain.setValueAtTime(0.012, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.085);
    oscillator.connect(filter).connect(gain).connect(this.master);
    oscillator.start(now);
    oscillator.stop(now + 0.1);
  }

  schedule() {
    if (!this.context || this.context.state !== "running") return;
    const step = this.step % 16;
    if ([0, 4, 8, 12].includes(step)) this.kick();
    if (step % 2 === 1) this.hat(0, step === 15);
    if ([0, 3, 8, 11].includes(step)) this.bass(step < 8 ? 55 : 65.41);
    if (step === 6) this.metal(740);
    if (step === 14) this.metal(990);
    this.step += 1;
    this.lastScheduleAt = performance.now();
  }

  async start() {
    this.started = true;
    this.updateButton();
    await this.recover(0.65);
  }

  async recover(fadeDuration = 0.4) {
    if (!this.shouldPlay() || document.visibilityState === "hidden") return;
    this.ensureContext();
    if (!this.context) return;
    window.clearTimeout(this.suspendTimer);
    this.suspendTimer = null;
    try {
      const wasRunning = this.context.state === "running";
      if (!wasRunning) await this.context.resume();
      if (this.context.state !== "running" || !this.shouldPlay()) return;
      this.ensureScheduler();
      if (this.master && (!wasRunning || this.master.gain.value < 0.1)) {
        const now = this.context.currentTime;
        this.master.gain.cancelScheduledValues(now);
        this.master.gain.setValueAtTime(0, now);
        this.master.gain.linearRampToValueAtTime(0.48, now + fadeDuration);
      }
    } catch { /* browser may require the next user gesture */ }
    this.updateButton();
  }

  async setEnabled(enabled, persist = true) {
    this.enabled = enabled;
    window.clearTimeout(this.suspendTimer);
    this.suspendTimer = null;
    if (persist) {
      try { localStorage.setItem("seven-sound", enabled ? "on" : "off"); } catch { /* no-op */ }
    }
    if (enabled && this.started) {
      await this.recover(0.35);
    } else if (this.context && this.master) {
      const now = this.context.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.linearRampToValueAtTime(0, now + 0.18);
      this.suspendTimer = window.setTimeout(() => {
        if (!this.shouldPlay() && this.context?.state === "running") this.context.suspend().catch(() => {});
        this.suspendTimer = null;
      }, 220);
    }
    this.updateButton();
  }

  async pauseForVideo() {
    this.suspendedByVideo = true;
    window.clearTimeout(this.suspendTimer);
    window.clearTimeout(this.recoveryTimer);
    this.suspendTimer = null;
    this.updateButton("VIDEO");
    if (!this.context || this.context.state === "closed") return;
    try {
      if (this.master) {
        this.master.gain.cancelScheduledValues(this.context.currentTime);
        this.master.gain.setValueAtTime(0, this.context.currentTime);
      }
      await this.context.suspend();
    } catch { /* no-op */ }
  }

  async resumeFromVideo() {
    if (!this.suspendedByVideo) return;
    this.suspendedByVideo = false;
    this.updateButton();
    await this.recover(0.45);
  }

  updateButton(mode) {
    if (!this.button) return;
    this.button.setAttribute("aria-pressed", String(this.enabled && this.started && !this.suspendedByVideo));
    const label = mode === "VIDEO" ? "SOUND · PAUSED" : !this.started ? "SOUND · READY" : this.enabled ? "SOUND · ON" : "SOUND · OFF";
    $("span", this.button).textContent = label;
  }
}

const sound = new PartySound($("#sound-control"));
const recoverPartySound = () => sound.recover(0.24);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") recoverPartySound();
});
window.addEventListener("pageshow", recoverPartySound);
window.addEventListener("focus", recoverPartySound);
document.addEventListener("pointerdown", recoverPartySound, { passive: true });

let aigcWorks = [];
let vmWorks = [];

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function renderAigcWorks(items) {
  const rail = $("#video-rail");
  rail.innerHTML = items
    .map((item, index) => {
      const details = AIGC_DETAILS[item.slug] || {};
      return `
        <button class="video-card" data-aigc="${escapeHTML(item.slug)}" aria-label="播放 ${escapeHTML(item.brand)} ${escapeHTML(item.title)}">
          <span class="video-card__media">
            <video class="video-card__preview" autoplay muted loop playsinline preload="metadata" poster="${escapeHTML(assetURL(item.cover))}" aria-hidden="true">
              <source src="${escapeHTML(assetURL(item.video))}" type="${escapeHTML(item.mimeType || "video/mp4")}" />
            </video>
            <span class="video-card__status">COMMERCIAL · 已商用</span>
            <span class="video-card__play"><b>▶</b><small>PLAY</small></span>
          </span>
          <span class="video-card__meta">
            <small><span>${String(index + 1).padStart(2, "0")}</span><span>${escapeHTML(details.type || "AIGC 商业影像")}</span></small>
            <strong>${escapeHTML(item.brand)}<br />${escapeHTML(item.title)}</strong>
          </span>
        </button>`;
    })
    .join("");

  $$('[data-aigc]', rail).forEach((card) => {
    card.addEventListener("click", () => openAigcModal(card.dataset.aigc));
    card.addEventListener("mouseenter", () => {
      $("#cursor-dot")?.classList.add("is-play");
      const preview = $("video", card);
      preview?.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      $("#cursor-dot")?.classList.remove("is-play");
      const preview = $("video", card);
      if (preview) {
        preview.pause();
        preview.currentTime = 0;
      }
    });
  });
  enableRailDrag(rail);
}

function renderVmWorks(items) {
  const stage = $("#vm-stage");
  const discover = $("#vm-discover-rail");
  const featuredItems = items.filter((item) => item.featured !== false);
  const discoverItems = items.filter((item) => item.featured === false);
  stage.innerHTML = featuredItems
    .map(
      (item, index) => `
        <button class="vm-project reveal" data-vm="${escapeHTML(item.slug)}" aria-label="查看 ${escapeHTML(item.name)} 项目详情">
          <span class="vm-project__visual">
            <img src="${escapeHTML(assetURL(item.cover))}" alt="${escapeHTML(item.name)}落地现场" loading="lazy" />
            <span class="vm-project__number">${String(index + 1).padStart(2, "0")}</span>
            <span class="vm-project__arrow">↗</span>
          </span>
          <span class="vm-project__meta">
            <span><small>${escapeHTML(item.location)} · ${escapeHTML(item.type)}</small><strong>${escapeHTML(item.name)}</strong></span>
            <span>${escapeHTML(item.value)}</span>
          </span>
        </button>`,
    )
    .join("");
  discover.innerHTML = discoverItems
    .map((item, index) => {
      return `
        <button class="vm-mini" data-vm="${escapeHTML(item.slug)}" aria-label="继续发现 ${escapeHTML(item.name)} 项目">
          <span class="vm-mini__visual">
            <img src="${escapeHTML(assetURL(item.cover))}" alt="${escapeHTML(item.name)}现场细节" loading="lazy" />
            <i>${item.gallery.length} IMAGES</i>
          </span>
          <span class="vm-mini__meta"><b>${String(index + 1).padStart(2, "0")}</b><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.type)}</small></span>
        </button>`;
    })
    .join("");
  $$('[data-vm]', $("#vm-works")).forEach((card) => {
    card.addEventListener("click", () => openVmModal(card.dataset.vm));
    card.addEventListener("mouseenter", () => $("#cursor-dot")?.classList.add("is-play"));
    card.addEventListener("mouseleave", () => $("#cursor-dot")?.classList.remove("is-play"));
  });
  enableRailDrag(discover);
  observeReveals();
}

function openAigcModal(slug) {
  const item = aigcWorks.find((work) => work.slug === slug);
  if (!item) return;
  const details = { ...COMMON_AIGC, ...(AIGC_DETAILS[slug] || {}) };
  $("#modal-content").innerHTML = `
    <article class="video-modal">
      <div class="video-modal__player">
        <video controls autoplay muted loop playsinline preload="auto" poster="${escapeHTML(assetURL(item.cover))}">
          <source src="${escapeHTML(assetURL(item.video))}" type="${escapeHTML(item.mimeType || "video/mp4")}" />
          你的浏览器暂不支持视频播放。
        </video>
        <button class="video-modal__sound-start" type="button"><b>▶</b><span>PLAY ORIGINAL SOUND</span><small>播放案例原声</small></button>
      </div>
      <div class="video-modal__details">
        <div class="modal-kicker"><span>${escapeHTML(details.status)}</span>${escapeHTML(details.type)}</div>
        <h3 class="modal-title">${escapeHTML(item.brand)}<br />${escapeHTML(item.title)}</h3>
        <p class="modal-lead">${escapeHTML(details.value)}</p>
        <dl class="modal-facts">
          <div><dt>PROJECT TYPE / 项目类型</dt><dd>${escapeHTML(details.type)}</dd></div>
          <div><dt>CREATIVE DIRECTION / 创意方向</dt><dd>${escapeHTML(details.creative)}</dd></div>
          <div><dt>PROCESS / 制作流程</dt><dd>${escapeHTML(details.process)}</dd></div>
          <div><dt>DELIVERABLES / 交付内容</dt><dd>${escapeHTML(details.deliverables)}</dd></div>
          <div><dt>USE CASE / 使用场景</dt><dd>${escapeHTML(details.usage)}</dd></div>
          <div><dt>MY ROLE / 我的角色</dt><dd>${escapeHTML(details.role)}</dd></div>
        </dl>
      </div>
    </article>`;
  sound.pauseForVideo();
  openModal();
  const video = $("video", $("#modal-content"));
  const soundStart = $(".video-modal__sound-start", $("#modal-content"));
  if (video) {
    const playWithOriginalSound = () => {
      sound.pauseForVideo();
      video.removeAttribute("muted");
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;
      const playback = video.play();
      if (playback) playback
        .then(() => soundStart?.classList.add("is-hidden"))
        .catch(() => {
          soundStart?.classList.remove("is-hidden");
          sound.resumeFromVideo();
        });
    };
    video.addEventListener("play", () => {
      video.muted = false;
      video.volume = 1;
      sound.pauseForVideo();
    });
    video.addEventListener("playing", () => soundStart?.classList.add("is-hidden"));
    video.addEventListener("pause", () => sound.resumeFromVideo());
    video.addEventListener("ended", () => sound.resumeFromVideo());
    video.addEventListener("error", () => sound.resumeFromVideo());
    soundStart?.addEventListener("click", playWithOriginalSound);
    playWithOriginalSound();
  }
}

function openVmModal(slug) {
  const item = vmWorks.find((work) => work.slug === slug);
  if (!item) return;
  const gallery = item.gallery
    .slice(1)
    .map((source) => `<img src="${escapeHTML(assetURL(source))}" alt="${escapeHTML(item.name)}项目现场" loading="lazy" />`)
    .join("");
  $("#modal-content").innerHTML = `
    <article class="vm-modal">
      <div class="vm-modal__hero">
        <img src="${escapeHTML(assetURL(item.cover))}" alt="${escapeHTML(item.name)}落地现场" />
        <div class="vm-modal__hero-title"><small>${escapeHTML(item.location)} · ${escapeHTML(item.type)}</small><h3>${escapeHTML(item.name)}</h3></div>
      </div>
      <div class="vm-modal__details">
        <div class="modal-kicker"><span>REALIZED · 已落地</span>COMMERCIAL EXPERIENCE DESIGN</div>
        <h3 class="modal-title">不只是空间，<br />是一整套体验。</h3>
        <p class="modal-lead">${escapeHTML(item.value)}</p>
        <dl class="modal-facts">
          <div><dt>PROJECT / 项目</dt><dd>${escapeHTML(item.location)} · ${escapeHTML(item.name)}</dd></div>
          <div><dt>TYPE / 项目类型</dt><dd>${escapeHTML(item.type)}</dd></div>
          <div><dt>KEYWORDS / 项目关键词</dt><dd>${item.keywords.map(escapeHTML).join(" / ")}</dd></div>
          <div><dt>SERVICE / 服务范围</dt><dd>${escapeHTML(item.services)}</dd></div>
          <div><dt>FULL-SCOPE ABILITY / 全案能力</dt><dd>创意定位 / IP 孵化 / 平面视觉 / 3D 场景 / 物料落地 / 线上传播延展</dd></div>
          <div><dt>MY ROLE / 我的角色</dt><dd>创意策划与全案设计把控</dd></div>
        </dl>
      </div>
      ${gallery ? `<div class="vm-modal__gallery">${gallery}</div>` : ""}
    </article>`;
  openModal();
}

function openModal() {
  const modal = $("#work-modal");
  document.body.classList.add("modal-open");
  modal.showModal();
  $("#modal-close").focus();
}

function closeModal() {
  const modal = $("#work-modal");
  const video = $("video", modal);
  if (video) {
    video.pause();
    video.removeAttribute("src");
  }
  if (modal.open) modal.close();
  document.body.classList.remove("modal-open");
  $("#modal-content").innerHTML = "";
  sound.resumeFromVideo();
}

function enableRailDrag(rail) {
  let active = false;
  let pointerId = null;
  let startX = 0;
  let startScroll = 0;
  let moved = false;
  rail.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch") return;
    active = true;
    pointerId = event.pointerId;
    moved = false;
    startX = event.clientX;
    startScroll = rail.scrollLeft;
  });
  rail.addEventListener("pointermove", (event) => {
    if (!active) return;
    const delta = event.clientX - startX;
    if (!moved && Math.abs(delta) > 8) {
      moved = true;
      rail.setPointerCapture(event.pointerId);
    }
    if (!moved) return;
    rail.scrollLeft = startScroll - delta;
  });
  const finishDrag = () => {
    active = false;
    if (pointerId !== null && rail.hasPointerCapture(pointerId)) rail.releasePointerCapture(pointerId);
    pointerId = null;
  };
  rail.addEventListener("pointerup", finishDrag);
  rail.addEventListener("pointercancel", finishDrag);
  rail.addEventListener("click", (event) => {
    if (moved) {
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    }
  }, true);
}

let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6%" },
    );
  }
  $$(".reveal:not(.is-visible)").forEach((element) => revealObserver.observe(element));
}

function initEntrance() {
  const counter = $("#loading-count");
  const bar = $("#loading-bar");
  const enter = $("#enter-site");
  const startTime = performance.now();
  const duration = 1350;

  function tick(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const number = Math.round(eased * 100);
    counter.textContent = String(number).padStart(2, "0");
    bar.style.width = `${number}%`;
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      enter.disabled = false;
    }
  }
  requestAnimationFrame(tick);

  const enterSite = async () => {
    enter.classList.add("is-clicked");
    sound.setEnabled(true);
    sound.start().catch(() => sound.updateButton());
    $("#entrance").classList.add("is-leaving");
    document.body.classList.add("is-entered");
    window.setTimeout(() => $("#entrance").setAttribute("hidden", ""), 900);
    observeReveals();
  };
  enter.addEventListener("click", enterSite);
}

function bindInteractiveTilt(element, strength = 13) {
  if (!element || !window.matchMedia("(pointer: fine)").matches) return;
  element.addEventListener("pointermove", (event) => {
    const bounds = element.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    element.style.setProperty("--ry", `${(x - 0.5) * strength * 2}deg`);
    element.style.setProperty("--rx", `${(0.5 - y) * strength * 2}deg`);
    element.style.setProperty("--mx", `${Math.round(x * 100)}%`);
    element.style.setProperty("--my", `${Math.round(y * 100)}%`);
  });
  element.addEventListener("pointerleave", () => {
    element.style.setProperty("--ry", "0deg");
    element.style.setProperty("--rx", "0deg");
    element.style.setProperty("--mx", "50%");
    element.style.setProperty("--my", "50%");
  });
}

function emitStarBurst(element, amount = 10) {
  if (!element || element.dataset.bursting === "true") return;
  element.dataset.bursting = "true";
  for (let index = 0; index < amount; index += 1) {
    const particle = document.createElement("i");
    const angle = (Math.PI * 2 * index) / amount + Math.random() * 0.35;
    const distance = 58 + Math.random() * 82;
    particle.className = "star-particle";
    particle.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    particle.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    particle.style.setProperty("--dr", `${Math.round(Math.random() * 300 - 150)}deg`);
    particle.style.setProperty("--size", `${5 + Math.random() * 8}px`);
    element.appendChild(particle);
    window.setTimeout(() => particle.remove(), 900);
  }
  window.setTimeout(() => { delete element.dataset.bursting; }, 520);
}

function initInteractions() {
  $("#sound-control").addEventListener("click", () => sound.setEnabled(!sound.enabled));

  const menu = $("#site-nav");
  const toggle = $("#menu-toggle");
  toggle.addEventListener("click", () => {
    const open = !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  $$('a', menu).forEach((link) => link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  $$(".service-stage__head").forEach((button) => {
    button.addEventListener("click", () => {
      const stage = button.closest(".service-stage");
      $$(".service-stage").forEach((other) => {
        const otherButton = $(".service-stage__head", other);
        const body = $(".service-stage__body", other);
        const open = other === stage;
        otherButton.setAttribute("aria-expanded", String(open));
        $("i", otherButton).textContent = open ? "−" : "+";
        body.hidden = !open;
      });
    });
  });

  $$(".interactive-tilt").forEach((element) => bindInteractiveTilt(element, element.id === "entrance-wordmark" ? 3 : 8));
  const serviceStar = $("#service-star");
  if (serviceStar) {
    serviceStar.addEventListener("pointerenter", () => emitStarBurst(serviceStar, 12));
    serviceStar.addEventListener("mouseenter", () => emitStarBurst(serviceStar, 12));
    serviceStar.addEventListener("pointermove", () => emitStarBurst(serviceStar, 12));
    serviceStar.addEventListener("focus", () => emitStarBurst(serviceStar, 12));
  }
  const contactObject = $(".contact-object");
  if (contactObject) {
    contactObject.addEventListener("pointerenter", () => emitStarBurst(contactObject, 8));
    contactObject.addEventListener("mouseenter", () => emitStarBurst(contactObject, 8));
    contactObject.addEventListener("pointermove", () => emitStarBurst(contactObject, 8));
  }

  let sparks = 0;
  $$(".spark").forEach((spark) => spark.addEventListener("click", () => {
    if (spark.classList.contains("is-collected")) return;
    spark.classList.add("is-collected");
    sparks += 1;
    $("#spark-count").textContent = `${sparks}/3`;
    if (sparks === 3) showToast("创意能量已满 ✦ 欢迎入场");
  }));

  $$('[data-copy]').forEach((button) => button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      showToast("微信号已复制：sevenisdreaming");
    } catch {
      showToast("微信号：sevenisdreaming");
    }
  }));

  $("#modal-close").addEventListener("click", closeModal);
  $("#work-modal").addEventListener("click", (event) => {
    if (event.target === $("#work-modal")) closeModal();
  });
  $("#work-modal").addEventListener("cancel", (event) => {
    event.preventDefault();
    closeModal();
  });

  const cursor = $("#cursor-dot");
  if (window.matchMedia("(pointer: fine)").matches) {
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    window.addEventListener("mousemove", (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-active");
    });
    const animate = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      cursor.style.transform = `translate(${x - cursor.offsetWidth / 2}px, ${y - cursor.offsetHeight / 2}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }

  let previousScroll = 0;
  window.addEventListener("scroll", () => {
    const current = window.scrollY;
    const header = $("#site-header");
    const shouldHide = current > previousScroll && current > 220 && !menu.classList.contains("is-open");
    header.classList.toggle("is-hidden", shouldHide);
    previousScroll = current;
  }, { passive: true });
}

async function loadWorks() {
  if (window.__SEVEN_WORKS__) {
    aigcWorks = window.__SEVEN_WORKS__.aigc;
    vmWorks = window.__SEVEN_WORKS__.vm;
    renderAigcWorks(aigcWorks);
    renderVmWorks(vmWorks);
    return;
  }
  try {
    const [aigcResponse, vmResponse] = await Promise.all([
      fetch("public/assets/aigc/manifest.json"),
      fetch("public/assets/vm/manifest.json"),
    ]);
    if (!aigcResponse.ok || !vmResponse.ok) throw new Error("Manifest request failed");
    [aigcWorks, vmWorks] = await Promise.all([aigcResponse.json(), vmResponse.json()]);
    renderAigcWorks(aigcWorks);
    renderVmWorks(vmWorks);
  } catch (error) {
    console.error(error);
    $("#video-rail").innerHTML = "<p>案例素材加载失败，请通过本地服务器打开网站。</p>";
    $("#vm-stage").innerHTML = "<p>案例素材加载失败，请刷新后重试。</p>";
  }
}

initEntrance();
initInteractions();
observeReveals();
loadWorks();
