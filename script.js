(function () {
  "use strict";
  let SERVERS = [];
  try {
    SERVERS = JSON.parse(document.body.dataset.servers || "[]");
  } catch (e) {
    SERVERS = [];
  }
  if (!SERVERS.length) {
    SERVERS = [{ label: "server", java: "localhost:25565", bedrock: "localhost:19132" }];
  }
  let currentServerIndex = 0;
  let currentEdition = "java"; // "java" | "bedrock"
  const ipValueEl = document.getElementById("ip-value");
  const copyBtn = document.getElementById("copy-btn");
  const statusPill = document.getElementById("status-pill");
  const statusDotLabel = document.getElementById("status-label");
  const playerCountEl = document.getElementById("player-count");
  const playerMaxEl = document.getElementById("player-max");
  const motdEl = document.getElementById("motd");
  const markdownBody = document.getElementById("markdown-body");
  const serverPickerEl = document.getElementById("server-picker");
  const editionPickerEl = document.getElementById("edition-picker");
  function currentIp() {
    return SERVERS[currentServerIndex][currentEdition];
  }
  function updateIpDisplay() {
    if (ipValueEl) ipValueEl.textContent = currentIp();
  }
  function buildServerPicker() {
    if (!serverPickerEl) return;
    if (SERVERS.length < 2) {
      serverPickerEl.style.display = "none";
      return;
    }
    serverPickerEl.innerHTML = "";
    SERVERS.forEach((srv, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "picker-btn" + (idx === currentServerIndex ? " is-active" : "");
      btn.textContent = srv.label || srv.java;
      btn.dataset.index = String(idx);
      btn.addEventListener("click", () => {
        currentServerIndex = idx;
        [...serverPickerEl.children].forEach((c) => c.classList.remove("is-active"));
        btn.classList.add("is-active");
        updateIpDisplay();
        resetPlayerCounts();
        fetchServerStatus();
      });
      serverPickerEl.appendChild(btn);
    });
  }
  if (editionPickerEl) {
    editionPickerEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".picker-btn");
      if (!btn) return;
      currentEdition = btn.dataset.edition;
      [...editionPickerEl.children].forEach((c) => c.classList.remove("is-active"));
      btn.classList.add("is-active");
      updateIpDisplay();
    });
  }
  function resetPlayerCounts() {
    playerCountEl.textContent = "–";
    playerCountEl.classList.add("is-loading");
    playerMaxEl.textContent = "–";
    motdEl.classList.remove("show");
    motdEl.textContent = "";
  }
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const ip = currentIp();
      try {
        await navigator.clipboard.writeText(ip);
        showCopied();
      } catch (err) {
        const ta = document.createElement("textarea");
        ta.value = ip;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          showCopied();
        } catch (e) {
          copyBtn.textContent = "Không copy được";
        }
        document.body.removeChild(ta);
      }
    });
  }
  function showCopied() {
    const original = copyBtn.textContent;
    copyBtn.textContent = "Đã copy!";
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove("copied");
    }, 1800);
  }
  async function fetchServerStatus() {
    const javaHost = SERVERS[currentServerIndex].java;
    const url = `https://api.mcsrvstat.us/3/${javaHost}`;
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Bad response");
      const data = await res.json();
      if (data.online) {
        setOnline(data);
      } else {
        setOffline();
      }
    } catch (err) {
      setUnknown();
    }
  }
  function setOnline(data) {
    const online = data.players && typeof data.players.online === "number" ? data.players.online : "—";
    const max = data.players && typeof data.players.max === "number" ? data.players.max : "—";
    playerCountEl.textContent = online;
    playerCountEl.classList.remove("is-loading");
    playerMaxEl.textContent = max;

    statusPill.classList.remove("offline");
    statusPill.classList.add("online");
    statusDotLabel.textContent = "Online";

    const motdLines = data.motd && data.motd.clean ? data.motd.clean : null;
    if (motdLines && motdLines.length) {
      motdEl.textContent = motdLines.join(" · ");
      motdEl.classList.add("show");
    }
  }

  function setOffline() {
    playerCountEl.textContent = "0";
    playerCountEl.classList.remove("is-loading");
    playerMaxEl.textContent = "—";

    statusPill.classList.remove("online");
    statusPill.classList.add("offline");
    statusDotLabel.textContent = "Offline";
  }

  function setUnknown() {
    playerCountEl.textContent = "?";
    playerCountEl.classList.remove("is-loading");
    playerMaxEl.textContent = "?";
    statusDotLabel.textContent = "Không rõ";
  }
  buildServerPicker();
  updateIpDisplay();
  fetchServerStatus();
  setInterval(fetchServerStatus, 60000);
  async function loadAbout() {
    if (!markdownBody) return;
    try {
      const res = await fetch("content/about/about.md", { cache: "no-store" });
      if (!res.ok) throw new Error("Không tìm thấy about.md");
      const text = await res.text();
      markdownBody.innerHTML = renderMarkdown(text);
      markdownBody.classList.remove("is-loading");
    } catch (err) {
      markdownBody.textContent = "Không thể tải nội dung giới thiệu (content/about/about.md).";
      markdownBody.classList.remove("is-loading");
      markdownBody.classList.add("is-error");
    }
  }
  function renderMarkdown(md) {
    const escapeHtml = (s) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const inline = (s) => {
      s = escapeHtml(s);
      s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
      s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
      s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
      return s;
    };
    const lines = md.replace(/\r\n/g, "\n").split("\n");
    let html = "";
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^\s*$/.test(line)) {
        i++;
        continue;
      }
      let m = line.match(/^(#{1,6})\s+(.*)$/);
      if (m) {
        const level = m[1].length;
        html += `<h${level}>${inline(m[2])}</h${level}>\n`;
        i++;
        continue;
      }
      if (/^\s*[-*]\s+/.test(line)) {
        html += "<ul>\n";
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
          html += `<li>${inline(lines[i].replace(/^\s*[-*]\s+/, ""))}</li>\n`;
          i++;
        }
        html += "</ul>\n";
        continue;
      }
      if (/^\s*\d+\.\s+/.test(line)) {
        html += "<ol>\n";
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          html += `<li>${inline(lines[i].replace(/^\s*\d+\.\s+/, ""))}</li>\n`;
          i++;
        }
        html += "</ol>\n";
        continue;
      }
      let para = [line];
      i++;
      while (
        i < lines.length &&
        !/^\s*$/.test(lines[i]) &&
        !/^(#{1,6})\s+/.test(lines[i]) &&
        !/^\s*[-*]\s+/.test(lines[i]) &&
        !/^\s*\d+\.\s+/.test(lines[i])
      ) {
        para.push(lines[i]);
        i++;
      }
      html += `<p>${inline(para.join(" "))}</p>\n`;
    }

    return html;
  }

  loadAbout();
})();
