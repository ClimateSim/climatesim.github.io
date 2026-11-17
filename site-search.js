// ClimateSim Site-Wide Search (shared across all pages & PWA)
(function initClimateSimSiteSearch() {
  if (window.__climateSimSearchInitialized) return;
  window.__climateSimSearchInitialized = true;

  const SITE_SEARCH_INDEX = [
    {
      title: "Earth's Energy Imbalance (Plain-English Intro)",
      page: "Introduction",
      url: "index.html#Intro",
      tags: "greenhouse effect heat trap blanket infrared co2 warming basics simple mode",
      desc: "Interactive 1D atmospheric column explaining how greenhouse gases trap outgoing infrared heat."
    },
    {
      title: "Earth's Heat Trap (Plain-English Climate Guide)",
      page: "Heat Trap Guide",
      url: "earth_heat_trap.html",
      tags: "earth heat trap plain english climate guide sun reader intro",
      desc: "Standalone plain-English guide explaining why our planet is warming and practical pathways to restore balance."
    },
    {
      title: "Warming Simulator (1D Radiative Transfer & 500-Year Trajectory)",
      page: "Warming Simulator",
      url: "index.html#WarmingSim",
      tags: "1d radiative transfer keeling curve temperature projection 1750 2100 climate sensitivity",
      desc: "Simulate CO₂ emissions or drawdown from -3.0 to +4.0 ppm/yr and inspect radiative forcing & warming."
    },
    {
      title: "Climate Tipping Points (Greenland, AMOC, Permafrost, Amazon)",
      page: "Warming Simulator",
      url: "index.html#WarmingSim",
      tags: "tipping points greenland ice sheet west antarctica amoc permafrost amazon rainforest boreal tundra coral reefs",
      desc: "Peer-reviewed temperature thresholds and feedback loops on the 500-year warming curve."
    },
    {
      title: "1-Million-Year Paleoclimate Comparison (500-Year Warming Rate)",
      page: "Warming Simulator",
      url: "index.html#1-million-year",
      tags: "1 million year comparison 1000000 800000 epica dome c ice core glacial interglacial termination paleoclimate",
      desc: "Compare modern 500-year warming and CO₂ rates against 1,000,000 years of ice-age cycles."
    },
    {
      title: "Carbon Budgets & Unburnable Fossil Reserves",
      page: "Carbon Budgets",
      url: "index.html#CarbonBudgets",
      tags: "carbon budget 1.5c 1.7c 2.0c 3400 gt proven reserves unburnable oil gas coal",
      desc: "Compare remaining 1.5°C/2.0°C carbon budgets against ~3,400 Gt CO₂ of proven commercial fossil reserves."
    },
    {
      title: "Global Emissions by Economic Sector (Our World in Data)",
      page: "GHG Sources",
      url: "index.html#sector-emissions",
      tags: "ghg sources sectors energy transport industry agriculture buildings waste 54.6 gt 40.9 gt",
      desc: "Interactive donut chart of global greenhouse gas and CO₂ emissions by economic sector."
    },
    {
      title: "Current & Historical Emissions by Country (Top 50 & Rest of World)",
      page: "GHG Sources",
      url: "index.html#country-emissions",
      tags: "country emissions treemap china usa uk india eu 1750 cumulative per capita exclude top 20 rest of world",
      desc: "Interactive treemap & ranked table of annual, cumulative historical, and per-capita emissions with Top 20 exclusions."
    },
    {
      title: "Climate Change Performance Index (CCPI Country Ranking ↗)",
      page: "External · ccpi.org",
      url: "https://ccpi.org/ranking/",
      tags: "ccpi ranking climate change performance index country comparison policy renewables germanwatch",
      desc: "Independent monitoring tool comparing 63 countries & EU across emissions, renewables, energy use, and climate policy."
    },
    {
      title: "Fossil Fuel Breakdown & What Replaces It",
      page: "GHG Sources",
      url: "index.html#fossil-breakdown",
      tags: "coal oil gas cement land use change exxon 1998 playbook disinformation drilled",
      desc: "Primary fossil CO₂ shares alongside what replaces fossil fuels and the 1998 Exxon disinformation playbook."
    },
    {
      title: "UK Dünkelflaute & Seasonal Storage Simulator",
      page: "UK Dünkelflaute",
      url: "index.html#Dunkelflaute",
      tags: "uk dunkelflaute dünkelflaute wind drought winter storage salt caverns hydrogen grid demand",
      desc: "Model Great Britain's electricity demand and multi-week winter wind-drought storage requirements."
    },
    {
      title: "Clean Energy Solutions & 75,000 TWh Goal",
      page: "Energy Solutions",
      url: "index.html#EnergySolutions",
      tags: "energy solutions 75000 twh electrification efficiency dividend solar wind nuclear hydro geothermal biomass marine",
      desc: "Build global clean generation and storage portfolios with LCOE, LCOS, RTE, amortized cost, and feasible max limits."
    },
    {
      title: "Battery Storage: Li-ion, LFP, Sodium-ion & Flow Batteries",
      page: "Energy Solutions",
      url: "index.html#EnergySolutions",
      tags: "battery storage lithium ion lfp sodium ion na-ion flow battery vanadium iron lcos rte",
      desc: "Separated estimates for Li-ion (NMC/NCA), LFP, Sodium-ion (NaCl, zero Li/Co), and Flow batteries (8-12+ hr)."
    },
    {
      title: "Pumped Hydro, CAES, Gravity, Flywheels & Hydrogen Caverns",
      page: "Energy Solutions",
      url: "index.html#EnergySolutions",
      tags: "pumped hydro phs compressed air caes gravity flywheel hydrogen salt caverns uk valleys feasible max",
      desc: "Compare grid storage technologies, round-trip efficiency (RTE), LCOS, and geographical/geological limits."
    },
    {
      title: "The Royal Society (2023) — Sir Chris Llewellyn Smith",
      page: "Energy Solutions",
      url: "index.html#llewellyn-smith",
      tags: "royal society 2023 sir chris llewellyn smith oxford large scale electricity storage 60 100 twh hydrogen salt caverns",
      desc: "37-year hourly UK weather analysis showing 60–100 TWh hydrogen salt-cavern storage need."
    },
    {
      title: "Sustainable Energy – without the hot air (Prof. Sir David MacKay)",
      page: "Energy Solutions",
      url: "index.html#mackay-hot-air",
      tags: "david mackay sustainable energy without the hot air cambridge decc numbers not adjectives",
      desc: "Foundational open-access energy physics book & tribute to Prof. Sir David J. C. MacKay FRS (1967–2016)."
    },
    {
      title: "Project Drawdown Solutions Explorer (Electricity · Highly Recommended ↗)",
      page: "External · drawdown.org",
      url: "https://drawdown.org/explorer?sector=155&classification=256",
      tags: "project drawdown explorer climate solutions electricity solar wind storage heat pumps efficiency highly recommended sector 155 classification 256",
      desc: "Interactive Project Drawdown database of Highly Recommended electricity & grid solutions ranked by Gt CO₂-eq avoided, speed, and cost."
    },
    {
      title: "UK Temperature Stripes (1500–2025) & HadCET",
      page: "UK Impacts",
      url: "uk_climate_impacts_500_years.html#temperature-stripes",
      tags: "ed hawkins warming stripes temperature cet hadcet central england 1684 frost fair 2022 40.3c",
      desc: "525 years of Central England Temperature (HadCET) stripes, frost fairs, heatwaves, and CET explainers."
    },
    {
      title: "UK Annual Rainfall Stripes (1500–2025) & Little Ice Age",
      page: "UK Impacts",
      url: "uk_climate_impacts_500_years.html#rainfall-stripes",
      tags: "uk rainfall stripes precipitation 5 year rolling mean 1629 1702 maunder minimum towneley little ice age floods droughts",
      desc: "Annual UK rainfall stripes with 5-year rolling mean, 1766 instrumental boundary, and Little Ice Age popups."
    },
    {
      title: "UK Peak Storm Wind Stripes (1500–2025)",
      page: "UK Impacts",
      url: "uk_climate_impacts_500_years.html#storm-wind-stripes",
      tags: "storm wind stripes gusts 1703 great storm 1987 gale 1969 met office 5 year rolling mean",
      desc: "Historical and instrumental UK storm peak wind-gust stripes with 5-year rolling mean."
    },
    {
      title: "October 2024 Valencia Flash Floods (DANA) & WWA Attribution",
      page: "UK Impacts",
      url: "uk_climate_impacts_500_years.html#valencia-floods",
      tags: "valencia floods dana chiva spain 491mm world weather attribution wwa imperial grantham frederike otto",
      desc: "Imperial / World Weather Attribution analysis: human-driven warming made the 491 mm/8 hr Chiva downpour 2× more likely and ~12% heavier."
    },
    {
      title: "National Emergency Briefing on Climate & Nature",
      page: "Briefing",
      url: "national_emergency_briefing.html",
      tags: "national emergency briefing uk security food water flooding infrastructure",
      desc: "UK National Emergency Briefing on climate, nature loss, and national resilience."
    },
    {
      title: "We Only Have One Pale Blue Dot (Resource Overshoot)",
      page: "Pale Blue Dot",
      url: "we_only_have_one_pale_blue_dot.html",
      tags: "pale blue dot carl sagan resource overshoot earth overshoot day ecological footprint",
      desc: "Interactive resource overshoot simulator inspired by Carl Sagan's Pale Blue Dot."
    },
    {
      title: "Doughnut Economics (Kate Raworth / DEAL · CC BY-SA 4.0)",
      page: "Doughnut Economics",
      url: "doughnut_economics.html",
      tags: "doughnut donut economics kate raworth deal planetary boundaries social foundation overshoot",
      desc: "Interactive Doughnut Economics model balancing human social foundations within planetary boundaries."
    },
    {
      title: "Climate Podcasts & Drilled (Exxon 1998 Memo)",
      page: "Podcasts",
      url: "climate_podcasts.html#drilled",
      tags: "podcasts drilled amy westervelt exxon 1998 nyt memo climate question outrage optimism volts zero",
      desc: "Curated climate science, energy transition, and investigative journalism podcasts including Drilled Season 1."
    },
    {
      title: "What Can I Do? Personal Carbon Dial & Net-Zero Pathfinder",
      page: "What Can I Do?",
      url: "what_can_i_do.html",
      tags: "what can i do personal carbon dial heat pump ev electric car diet flights pensions systemic action",
      desc: "Interactive personal carbon footprint dial and high-impact individual & systemic climate actions."
    }
  ];

  // Inject CSS
  const style = document.createElement("style");
  style.textContent = `
    .cs-search-trigger {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(56, 189, 248, 0.12);
      color: #e0f2fe;
      border: 1px solid rgba(56, 189, 248, 0.4);
      border-radius: 6px;
      padding: 5px 11px;
      font-size: 0.76rem;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      white-space: nowrap;
      transition: background 0.15s ease, border-color 0.15s ease, transform 0.12s ease;
    }
    .cs-search-trigger:hover {
      background: rgba(56, 189, 248, 0.24);
      border-color: #38bdf8;
      color: #ffffff;
    }
    .cs-search-kbd {
      font-family: ui-monospace, monospace;
      font-size: 0.66rem;
      padding: 1px 5px;
      border-radius: 4px;
      background: rgba(15, 23, 42, 0.8);
      border: 1px solid rgba(148, 163, 184, 0.35);
      color: #94a3b8;
    }
    .cs-search-floating {
      position: fixed;
      top: 12px;
      right: 12px;
      z-index: 9900;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(8px);
    }
    .cs-search-backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(3, 7, 18, 0.84);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 28000;
      align-items: flex-start;
      justify-content: center;
      padding: 8vh 12px 24px;
      box-sizing: border-box;
    }
    .cs-search-backdrop.open {
      display: flex;
    }
    .cs-search-modal {
      width: min(640px, calc(100vw - 24px));
      max-height: 82vh;
      background: #0b1220;
      border: 1.5px solid rgba(56, 189, 248, 0.5);
      border-radius: 12px;
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.9), 0 0 28px rgba(56, 189, 248, 0.2);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      font-family: system-ui, -apple-system, sans-serif;
      color: #e2e8f0;
    }
    .cs-search-input-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      background: #080e1a;
    }
    .cs-search-input {
      flex: 1;
      min-width: 0;
      background: transparent;
      border: none;
      outline: none;
      color: #ffffff;
      font-size: 0.95rem;
      font-family: inherit;
    }
    .cs-search-input::placeholder {
      color: #64748b;
    }
    .cs-search-results {
      overflow-y: auto;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .cs-search-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.06);
      background: rgba(255, 255, 255, 0.025);
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      transition: background 0.12s ease, border-color 0.12s ease;
    }
    .cs-search-item:hover, .cs-search-item.active {
      background: rgba(56, 189, 248, 0.14);
      border-color: rgba(56, 189, 248, 0.45);
    }
    .cs-search-item-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .cs-search-item-title {
      font-weight: 700;
      font-size: 0.86rem;
      color: #ffffff;
    }
    .cs-search-item-badge {
      font-size: 0.68rem;
      font-weight: 700;
      font-family: ui-monospace, monospace;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 4px;
      padding: 1px 6px;
    }
    .cs-search-item-desc {
      font-size: 0.75rem;
      color: #94a3b8;
      line-height: 1.4;
    }
    @media (max-width: 600px) {
      .cs-search-kbd { display: none; }
    }
  `;
  document.head.appendChild(style);

  // Build Modal
  const backdrop = document.createElement("div");
  backdrop.id = "csSearchBackdrop";
  backdrop.className = "cs-search-backdrop";
  backdrop.setAttribute("role", "dialog");
  backdrop.setAttribute("aria-modal", "true");
  backdrop.setAttribute("aria-label", "Search ClimateSim");
  backdrop.innerHTML = `
    <div class="cs-search-modal" onclick="event.stopPropagation()">
      <div class="cs-search-input-row">
        <span style="font-size: 1rem;">🔍</span>
        <input type="search" id="csSearchInput" class="cs-search-input" placeholder="Search pages, topics, scientists, LCOE, CET, sodium-ion, #anchors..." autocomplete="off">
        <button type="button" id="csSearchCloseBtn" style="background: none; border: none; color: #94a3b8; font-size: 1.3rem; line-height: 1; cursor: pointer;" aria-label="Close search">&times;</button>
      </div>
      <div id="csSearchResults" class="cs-search-results"></div>
    </div>
  `;

  function getCurrentPageItems() {
    const items = [];
    const seen = new Set();
    document.querySelectorAll("h1, h2, h3, .card-title").forEach(el => {
      const text = el.textContent.replace(/\s+/g, " ").trim();
      if (!text || text.length < 4 || seen.has(text)) return;
      seen.add(text);
      const idEl = el.closest("[id]") || el;
      const anchor = idEl && idEl.id ? "#" + idEl.id : "";
      items.push({
        title: text,
        page: "On This Page",
        url: window.location.pathname.split("/").pop() + anchor,
        tags: "current page section " + text.toLowerCase(),
        desc: anchor ? "Jump to " + anchor + " on the current page." : "Section on the current page.",
        _el: el
      });
    });
    return items;
  }

  let selectedIdx = 0;
  let currentMatches = [];

  function navigateToResult(item) {
    closeSearch();
    if (!item) return;
    if (item._el && document.body.contains(item._el)) {
      item._el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (/^https?:\/\//i.test(item.url)) {
      window.open(item.url, "_blank", "noopener,noreferrer");
      return;
    }
    const [targetFile, targetHash] = item.url.split("#");
    const curFile = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const normTarget = targetFile.toLowerCase();
    const isMainSim = (f) => f === "" || f === "index.html" || f === "interactive_1d_atmospheric_radiative_transfer_earth_energy_balance_simulator.html";
    const isSamePage = curFile === normTarget || (isMainSim(curFile) && isMainSim(normTarget));
    if (isSamePage && targetHash) {
      window.location.hash = "#" + targetHash;
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      window.location.href = item.url;
    }
  }

  function renderResults(query) {
    const container = document.getElementById("csSearchResults");
    if (!container) return;
    const q = (query || "").trim().toLowerCase();
    const tokens = q ? q.split(/\s+/).filter(Boolean) : [];

    const pool = SITE_SEARCH_INDEX.concat(q ? getCurrentPageItems() : []);
    currentMatches = pool.filter(item => {
      if (tokens.length === 0) return true;
      const hay = (item.title + " " + item.page + " " + item.url + " " + item.tags + " " + item.desc).toLowerCase();
      return tokens.every(t => hay.includes(t));
    }).slice(0, 18);

    selectedIdx = 0;
    if (currentMatches.length === 0) {
      container.innerHTML = `<div style="padding: 18px; text-align: center; color: #94a3b8; font-size: 0.82rem;">No matching pages or topics found for "<strong>${q.replace(/</g, "&lt;")}</strong>".</div>`;
      return;
    }

    container.innerHTML = currentMatches.map((item, idx) => {
      const hashPart = item.url.includes("#") ? "#" + item.url.split("#")[1] : item.page;
      return `
        <a class="cs-search-item${idx === 0 ? " active" : ""}" data-idx="${idx}" href="${item.url}">
          <div class="cs-search-item-top">
            <span class="cs-search-item-title">${item.title}</span>
            <span class="cs-search-item-badge">${hashPart}</span>
          </div>
          <div class="cs-search-item-desc">${item.desc}</div>
        </a>
      `;
    }).join("");

    container.querySelectorAll(".cs-search-item").forEach(a => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const i = Number(a.getAttribute("data-idx"));
        navigateToResult(currentMatches[i]);
      });
    });
  }

  function openSearch() {
    backdrop.classList.add("open");
    const input = document.getElementById("csSearchInput");
    renderResults(input ? input.value : "");
    if (input) {
      setTimeout(() => { input.focus(); input.select(); }, 20);
    }
  }

  function closeSearch() {
    backdrop.classList.remove("open");
  }

  function injectSearchTrigger() {
    document.body.appendChild(backdrop);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = "btnSiteSearchTrigger";
    btn.className = "cs-search-trigger";
    btn.title = "Search across all ClimateSim pages (Shortcut: / or Ctrl+K)";
    btn.innerHTML = `<span>🔍</span><span>Search</span><span class="cs-search-kbd">/</span>`;
    btn.addEventListener("click", openSearch);

    const guideBtn = document.getElementById("openModalBtn");
    const navTarget = document.querySelector(".mode-switch-group, .mode-switch, .header-nav, .nav-links, header nav");
    if (guideBtn && guideBtn.parentElement) {
      guideBtn.parentElement.style.display = "flex";
      guideBtn.parentElement.style.alignItems = "center";
      guideBtn.parentElement.style.gap = "8px";
      guideBtn.parentElement.style.flexWrap = "wrap";
      guideBtn.parentElement.insertBefore(btn, guideBtn);
    } else if (navTarget) {
      navTarget.appendChild(btn);
    } else {
      btn.classList.add("cs-search-floating");
      document.body.appendChild(btn);
    }

    backdrop.addEventListener("click", closeSearch);
    const closeBtn = document.getElementById("csSearchCloseBtn");
    if (closeBtn) closeBtn.addEventListener("click", closeSearch);

    const input = document.getElementById("csSearchInput");
    if (input) {
      input.addEventListener("input", () => renderResults(input.value));
      input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          if (currentMatches.length > 0) {
            selectedIdx = (selectedIdx + 1) % currentMatches.length;
            updateActiveHighlight();
          }
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (currentMatches.length > 0) {
            selectedIdx = (selectedIdx - 1 + currentMatches.length) % currentMatches.length;
            updateActiveHighlight();
          }
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (currentMatches[selectedIdx]) navigateToResult(currentMatches[selectedIdx]);
        } else if (e.key === "Escape") {
          e.preventDefault();
          closeSearch();
        }
      });
    }
  }

  function updateActiveHighlight() {
    const items = document.querySelectorAll("#csSearchResults .cs-search-item");
    items.forEach((el, i) => {
      el.classList.toggle("active", i === selectedIdx);
      if (i === selectedIdx) el.scrollIntoView({ block: "nearest" });
    });
  }

  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) || "";
    const inField = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || (e.target && e.target.isContentEditable);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openSearch();
    } else if (!inField && e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      openSearch();
    } else if (e.key === "Escape" && backdrop.classList.contains("open")) {
      closeSearch();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectSearchTrigger);
  } else {
    injectSearchTrigger();
  }
  window.openClimateSimSearch = openSearch;
})();
