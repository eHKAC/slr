(() => {
  "use strict";

  const html = document.documentElement;
  const svg = document.querySelector(".plate-svg");
  const parts = Array.from(svg.querySelectorAll(".part"));
  const cards = new Map(
    Array.from(document.querySelectorAll(".pcard")).map((card) => [card.dataset.part, card])
  );
  const readoutNum = document.getElementById("readout-num");
  const readoutName = document.getElementById("readout-name");
  const readoutLink = document.getElementById("readout-link");
  const srStatus = document.getElementById("sr-status");
  const countEn = document.getElementById("count-en");
  const countZh = document.getElementById("count-zh");
  const plateStatusEn = document.querySelector(".plate__status .en");
  const plateStatusZh = document.querySelector(".plate__status .zh");
  const stateButtons = Array.from(document.querySelectorAll("[data-plate-state]"));
  const chips = Array.from(document.querySelectorAll("[data-filter]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let pinned = "01";
  let hovered = null;
  let filter = "all";
  let assembled = false;

  const NS = "http://www.w3.org/2000/svg";

  function makeSvg(name, attrs) {
    const node = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  }

  // Oblique extrusion: each drawn part gets a solid side face, so the plate
  // reads as a 3D technical illustration while the front face stays crisp.
  function extrudePart(part, layers = 5, step = 3) {
    const art = makeSvg("g", { class: "art" });
    Array.from(part.children).forEach((child) => {
      if (child.classList.contains("hit")) return;
      art.appendChild(child);
    });
    part.appendChild(art);

    for (let i = layers; i >= 1; i -= 1) {
      const clone = art.cloneNode(true);
      clone.setAttribute("class", "extrude" + (i === layers ? " extrude--back" : ""));
      clone.setAttribute("aria-hidden", "true");
      clone.setAttribute("focusable", "false");
      clone.setAttribute("transform", `translate(${i * step} ${i * step})`);
      clone.querySelectorAll("text").forEach((node) => node.remove());
      part.insertBefore(clone, art);
    }
  }

  parts.forEach((part) => extrudePart(part));

  // Numbered tabs are generated inside each part so they move with it.
  parts.forEach((part) => {
    const coords = (part.dataset.tab || "").split(",").map(Number);
    if (coords.length !== 2 || coords.some(Number.isNaN)) return;
    const [x, y] = coords;
    const tab = makeSvg("g", { class: "tab", "aria-hidden": "true" });
    tab.appendChild(makeSvg("rect", { class: "tab-hit", x: x - 24, y: y - 24, width: 48, height: 48 }));
    tab.appendChild(makeSvg("rect", { class: "tab__box", x: x - 20, y: y - 15, width: 40, height: 30 }));
    const text = makeSvg("text", { class: "tab__num", x, y });
    text.textContent = part.dataset.part;
    tab.appendChild(text);
    part.appendChild(tab);
  });

  // Give every SVG part a bilingual screen-reader label.
  parts.forEach((part) => {
    const card = cards.get(part.dataset.part);
    if (!card) return;
    const name = card.querySelector(".pcard__name");
    const en = name.querySelector(".en")?.textContent || "";
    const zh = name.querySelector(".zh")?.textContent || "";
    part.setAttribute("aria-label", `Part ${part.dataset.part}, ${en} / ${zh}. Read the note.`);
  });

  function cardName(num) {
    const card = cards.get(num);
    if (!card) return "";
    const name = card.querySelector(".pcard__name");
    const en = name.querySelector(".en")?.textContent || "";
    const zh = name.querySelector(".zh")?.textContent || "";
    return `${en} / ${zh}`;
  }

  function updateReadout(num) {
    if (!num) {
      readoutNum.textContent = "00";
      readoutName.innerHTML =
        '<span class="en">Select a numbered tab</span><span class="zh">選取一個編號</span>';
      readoutLink.hidden = true;
      return;
    }
    readoutNum.textContent = num;
    const card = cards.get(num);
    if (card) readoutName.innerHTML = card.querySelector(".pcard__name").innerHTML;
    readoutLink.hidden = false;
    readoutLink.href = `#part-${num}`;
    readoutLink.setAttribute("aria-label", `Read the note for part ${num}, ${cardName(num)}`);
  }

  function announce(num) {
    if (!num || !srStatus) return;
    srStatus.textContent = `Part ${num}. ${cardName(num)}.`;
  }

  function render() {
    const live = hovered || pinned;
    const dimming = hovered !== null;

    parts.forEach((part) => {
      const num = part.dataset.part;
      const matches = filter === "all" || part.dataset.group === filter;
      part.classList.toggle("is-live", num === live);
      part.classList.toggle("is-dim", dimming && num !== live && matches);
      part.classList.toggle("is-filtered", filter !== "all" && !matches);
    });

    cards.forEach((card, num) => {
      card.classList.toggle("is-hidden", filter !== "all" && card.dataset.group !== filter);
      card.classList.toggle("is-live", num === live);
    });

    updateReadout(live);
  }

  function pinPart(num) {
    pinned = num;
    hovered = null;
    render();
    announce(num);
  }

  parts.forEach((part) => {
    const num = part.dataset.part;

    part.addEventListener("mouseenter", () => {
      hovered = num;
      render();
    });
    part.addEventListener("mouseleave", () => {
      hovered = null;
      render();
    });
    part.addEventListener("focus", () => {
      hovered = num;
      render();
    });
    part.addEventListener("blur", () => {
      hovered = null;
      render();
    });
    part.addEventListener("click", (event) => {
      event.stopPropagation();
      pinPart(num);
    });
    part.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        pinPart(num);
      }
    });
  });

  svg.addEventListener("click", (event) => {
    if (event.target.closest(".part")) return;
    pinned = null;
    hovered = null;
    render();
  });

  cards.forEach((card, num) => {
    card.addEventListener("mouseenter", () => {
      hovered = num;
      render();
    });
    card.addEventListener("mouseleave", () => {
      hovered = null;
      render();
    });
    card.addEventListener("focusin", () => {
      hovered = num;
      render();
    });
    card.addEventListener("focusout", (event) => {
      if (!card.contains(event.relatedTarget)) {
        hovered = null;
        render();
      }
    });
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) return;
      pinPart(num);
    });
  });

  readoutLink.addEventListener("click", () => {
    if (pinned) pinPart(pinned);
  });

  function setPlateState(state) {
    assembled = state === "assembled";
    svg.classList.toggle("is-exploded", !assembled);
    svg.classList.toggle("is-assembled", assembled);
    svg.classList.remove("is-booting");
    svg.setAttribute("viewBox", assembled ? "60 330 1690 700" : "0 60 1750 1000");
    stateButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.plateState === state));
    });

    parts
      .filter((part) => part.classList.contains("is-internal"))
      .forEach((part) => {
        part.setAttribute("tabindex", assembled ? "-1" : "0");
        if (assembled && pinned === part.dataset.part) pinned = null;
      });

    plateStatusEn.textContent = assembled ? "Fig. 01 — assembled" : "Fig. 01 — field-stripped";
    plateStatusZh.textContent = assembled ? "圖 01 — 組合狀態" : "圖 01 — 分解狀態";
    render();
  }

  stateButtons.forEach((button) => {
    button.addEventListener("click", () => setPlateState(button.dataset.plateState));
  });

  const groupNames = {
    gas: { en: "Gas", zh: "氣動" },
    action: { en: "Action", zh: "機件" },
    feed: { en: "Feed", zh: "供彈" },
    body: { en: "Body", zh: "槍身" }
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filter = chip.dataset.filter;
      chips.forEach((other) => {
        other.setAttribute("aria-pressed", String(other === chip));
      });
      if (pinned && filter !== "all" && cards.get(pinned)?.dataset.group !== filter) {
        pinned = null;
      }
      const count = filter === "all"
        ? 18
        : Array.from(cards.values()).filter((card) => card.dataset.group === filter).length;
      if (countEn && countZh) {
        countEn.textContent = filter === "all"
          ? "18 parts · 4 groups"
          : `${count} parts · ${groupNames[filter].en}`;
        countZh.textContent = filter === "all"
          ? "18 個零件 · 4 組"
          : `${count} 個零件 · ${groupNames[filter].zh}`;
      }
      render();
    });
  });

  // Mobile plate sections: front / action / rear.
  const plateScroll = document.querySelector(".plate__scroll");
  const viewButtons = Array.from(document.querySelectorAll("[data-view]"));
  const viewOffsets = { front: 0, action: 470, rear: 9999 };

  function setPlateView(viewName) {
    if (!plateScroll) return;
    const left = viewOffsets[viewName] ?? 0;
    plateScroll.scrollTo({
      left: left === 9999 ? plateScroll.scrollWidth : left,
      behavior: reduceMotion ? "auto" : "smooth"
    });
    viewButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.view === viewName));
    });
  }

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => setPlateView(button.dataset.view));
  });

  if (plateScroll) {
    plateScroll.addEventListener("scroll", () => {
      if (window.innerWidth > 760) return;
      const x = plateScroll.scrollLeft;
      const view = x < 160 ? "front" : x < 520 ? "action" : "rear";
      viewButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.view === view));
      });
    }, { passive: true });

    if (window.matchMedia("(max-width: 760px)").matches) {
      plateScroll.scrollLeft = viewOffsets.front;
      viewButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.view === "front"));
      });
    }
  }

  const langButtons = Array.from(document.querySelectorAll("[data-lang-set]"));
  function setLanguage(lang) {
    const useZh = lang === "zh";
    html.dataset.lang = useZh ? "zh" : "en";
    html.lang = useZh ? "zh-Hant-HK" : "en-HK";
    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.langSet === lang));
    });
    try {
      localStorage.setItem("l1a1-lang", useZh ? "zh" : "en");
    } catch (_) {
      /* storage can be blocked; the toggle still works for this view */
    }
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langSet));
  });

  try {
    const saved = localStorage.getItem("l1a1-lang");
    if (saved === "zh") setLanguage("zh");
  } catch (_) {
    /* no saved preference */
  }

  // Cycle diagram
  const cycleSvg = document.getElementById("cycle-svg");
  const steps = Array.from(document.querySelectorAll(".step"));
  const playButton = document.getElementById("play-cycle");
  const playLabelEn = playButton.querySelector(".en");
  const playLabelZh = playButton.querySelector(".zh");
  const playIcon = playButton.querySelector(".btn__arrow");
  let currentStep = 1;
  let timer = null;

  function setStep(step) {
    currentStep = step;
    cycleSvg.dataset.step = String(step);
    steps.forEach((button) => {
      const on = Number(button.dataset.step) === step;
      button.classList.toggle("is-active", on);
      button.setAttribute("aria-pressed", String(on));
    });
  }

  function stopPlayback() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
    playButton.setAttribute("aria-pressed", "false");
    playLabelEn.textContent = "Play the cycle";
    playLabelZh.textContent = "播放循環";
    playIcon.textContent = "▶";
  }

  function startPlayback() {
    if (timer) {
      stopPlayback();
      return;
    }
    playButton.setAttribute("aria-pressed", "true");
    playLabelEn.textContent = "Pause";
    playLabelZh.textContent = "暫停";
    playIcon.textContent = "❚❚";
    let step = currentStep >= 6 ? 0 : currentStep;
    timer = window.setInterval(() => {
      step += 1;
      setStep(step);
      if (step >= 6) stopPlayback();
    }, 2000);
  }

  steps.forEach((button) => {
    button.addEventListener("click", () => {
      stopPlayback();
      setStep(Number(button.dataset.step));
    });
  });

  playButton.addEventListener("click", startPlayback);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopPlayback();
  });

  // Opening gesture: the plate separates once, on load.
  if (reduceMotion) {
    svg.classList.remove("is-booting");
  } else {
    window.setTimeout(() => svg.classList.remove("is-booting"), 420);
  }

  render();
})();
