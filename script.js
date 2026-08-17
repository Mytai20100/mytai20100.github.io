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
  let currentEdition = "java";

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

  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/"/g, "&quot;");
  }

  const ESCAPABLE_CHARS = "\\`*_{}[]()#+-.!>~|";

  function protectEscapes(s) {
    return s.replace(/\\([\\`*_{}[\]()#+\-.!>~|])/g, (_, ch) => {
      return "\uE000" + ch.charCodeAt(0) + "\uE001";
    });
  }

  function restoreEscapes(s) {
    return s.replace(/\uE000(\d+)\uE001/g, (_, code) => String.fromCharCode(Number(code)));
  }

  function inline(raw) {
    let s = protectEscapes(raw);
    s = escapeHtml(s);

    s = s.replace(
      /!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g,
      (_, alt, src, title) => {
        const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
        return `<img src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"${titleAttr} loading="lazy">`;
      }
    );

    const codeSpans = [];
    s = s.replace(/`([^`]+)`/g, (_, code) => {
      const idx = codeSpans.push(code) - 1;
      return `\uE010${idx}\uE011`;
    });

    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/__([^_]+)__/g, "<strong>$1</strong>");

    s = s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    s = s.replace(/(^|[^\w])_([^_]+)_(?!\w)/g, "$1<em>$2</em>");

    s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");

    s = s.replace(
      /\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/g,
      (_, text, url, title) => {
        const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
        return `<a href="${escapeAttr(url)}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
    );

    s = s.replace(/&lt;(https?:\/\/[^\s&]+)&gt;/g, (_, url) => {
      return `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });

    s = s.replace(/\uE010(\d+)\uE011/g, (_, idx) => `<code>${codeSpans[Number(idx)]}</code>`);

    s = s.replace(/ {2,}$/gm, "<br>").replace(/\\$/gm, "<br>");

    return restoreEscapes(s);
  }

  function indentWidth(line) {
    let width = 0;
    for (const ch of line) {
      if (ch === "\t") width += 4;
      else if (ch === " ") width += 1;
      else break;
    }
    return width;
  }

  function isBlank(line) {
    return /^\s*$/.test(line);
  }
  function isHeading(line) {
    return /^ {0,3}#{1,6}\s+/.test(line);
  }
  function isHr(line) {
    return /^ {0,3}([-*_])(?:\s*\1){2,}\s*$/.test(line);
  }
  function isFence(line) {
    return /^ {0,3}(```|~~~)/.test(line);
  }
  function isBlockquote(line) {
    return /^ {0,3}>\s?/.test(line);
  }
  function isUl(line) {
    return /^ {0,3}[-*+]\s+/.test(line);
  }
  function isOl(line) {
    return /^ {0,3}\d+[.)]\s+/.test(line);
  }
  function isTableRow(line) {
    return /\|/.test(line) && !isBlockquote(line);
  }
  function isTableDivider(line) {
    return /^ {0,3}\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(line);
  }

  function parseBlock(lines) {
    let html = "";
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (isBlank(line)) {
        i++;
        continue;
      }

      if (isHr(line)) {
        html += "<hr>\n";
        i++;
        continue;
      }

      if (isHeading(line)) {
        const m = line.match(/^ {0,3}(#{1,6})\s+(.*?)\s*#*\s*$/);
        const level = m[1].length;
        html += `<h${level}>${inline(m[2])}</h${level}>\n`;
        i++;
        continue;
      }

      if (isFence(line)) {
        const fenceMatch = line.match(/^ {0,3}(```|~~~)(.*)$/);
        const fenceChar = fenceMatch[1];
        const lang = fenceMatch[2].trim();
        i++;
        const codeLines = [];
        while (i < lines.length && !lines[i].trim().startsWith(fenceChar)) {
          codeLines.push(lines[i]);
          i++;
        }
        i++;
        const langAttr = lang ? ` data-lang="${escapeAttr(lang)}"` : "";

        html += `<pre${langAttr}><code>${escapeHtml(codeLines.join("\n"))}</code></pre>\n`;
        continue;
      }

      if (isBlockquote(line)) {
        const quoteLines = [];
        while (i < lines.length && (isBlockquote(lines[i]) || (!isBlank(lines[i]) && quoteLines.length && isBlockquote(lines[i - 1] || "")))) {
          quoteLines.push(lines[i].replace(/^ {0,3}>\s?/, ""));
          i++;
        }
        html += `<blockquote>\n${parseBlock(quoteLines)}</blockquote>\n`;
        continue;
      }

      if (isTableRow(line) && lines[i + 1] && isTableDivider(lines[i + 1])) {
        const splitRow = (row) =>
          row
            .trim()
            .replace(/^\|/, "")
            .replace(/\|$/, "")
            .split("|")
            .map((cell) => cell.trim());

        const headerCells = splitRow(line);
        const alignCells = splitRow(lines[i + 1]).map((cell) => {
          const left = cell.startsWith(":");
          const right = cell.endsWith(":");
          if (left && right) return "center";
          if (right) return "right";
          if (left) return "left";
          return "";
        });
        i += 2;

        const bodyRows = [];
        while (i < lines.length && isTableRow(lines[i]) && !isBlank(lines[i])) {
          bodyRows.push(splitRow(lines[i]));
          i++;
        }

        const alignAttr = (idx) => (alignCells[idx] ? ` style="text-align:${alignCells[idx]}"` : "");
        let thead = "<thead><tr>";
        headerCells.forEach((cell, idx) => {
          thead += `<th${alignAttr(idx)}>${inline(cell)}</th>`;
        });
        thead += "</tr></thead>";

        let tbody = "<tbody>";
        bodyRows.forEach((row) => {
          tbody += "<tr>";
          headerCells.forEach((_, idx) => {
            tbody += `<td${alignAttr(idx)}>${inline(row[idx] || "")}</td>`;
          });
          tbody += "</tr>";
        });
        tbody += "</tbody>";

        html += `<div class="table-scroll"><table>${thead}${tbody}</table></div>\n`;
        continue;
      }

      if (isUl(line) || isOl(line)) {
        const ordered = isOl(line);
        const baseIndent = indentWidth(line);
        const items = [];

        while (i < lines.length) {
          const cur = lines[i];
          if (isBlank(cur)) {
            const next = lines[i + 1];
            if (next === undefined || (indentWidth(next) < baseIndent && !isBlank(next))) {
              break;
            }
            if (items.length) items[items.length - 1].childLines.push("");
            i++;
            continue;
          }
          const curIndent = indentWidth(cur);
          const curIsMarker = (ordered ? isOl(cur) : isUl(cur)) && curIndent === baseIndent;

          if (curIsMarker) {
            const markerRe = ordered ? /^ {0,3}\d+[.)]\s+(.*)$/ : /^ {0,3}[-*+]\s+(.*)$/;
            const m = cur.match(markerRe);
            items.push({ text: m[1], childLines: [] });
            i++;
            continue;
          }
          if (curIndent > baseIndent && items.length) {
            items[items.length - 1].childLines.push(cur.slice(Math.min(cur.length, baseIndent + 2)));
            i++;
            continue;
          }

          break;
        }

        items.forEach((it) => {
          while (it.childLines.length && isBlank(it.childLines[it.childLines.length - 1])) {
            it.childLines.pop();
          }
        });

        const isTaskList = items.length > 0 && items.every((it) => /^\[[ xX]\]\s+/.test(it.text));

        const tag = ordered ? "ol" : "ul";
        const listClass = isTaskList ? ' class="task-list"' : "";
        html += `<${tag}${listClass}>\n`;
        items.forEach((it) => {
          let itemText = it.text;
          let taskAttrs = "";
          let taskClass = "";
          if (isTaskList) {
            const checked = /^\[[xX]\]/.test(itemText);
            itemText = itemText.replace(/^\[[ xX]\]\s+/, "");
            taskAttrs = ` type="checkbox" disabled${checked ? " checked" : ""}`;
            taskClass = checked ? ' class="task-item is-done"' : ' class="task-item"';
          }
          const childHtml = it.childLines.length ? parseBlock(it.childLines) : "";
          const inner = isTaskList
            ? `<input${taskAttrs}>${inline(itemText)}`
            : inline(itemText);
          html += `<li${taskClass}>${inner}${childHtml ? "\n" + childHtml : ""}</li>\n`;
        });
        html += `</${tag}>\n`;
        continue;
      }

      const paraLines = [line];
      i++;
      while (
        i < lines.length &&
        !isBlank(lines[i]) &&
        !isHeading(lines[i]) &&
        !isHr(lines[i]) &&
        !isFence(lines[i]) &&
        !isBlockquote(lines[i]) &&
        !isUl(lines[i]) &&
        !isOl(lines[i]) &&
        !(isTableRow(lines[i]) && lines[i + 1] && isTableDivider(lines[i + 1]))
      ) {
        paraLines.push(lines[i]);
        i++;
      }
      html += `<p>${inline(paraLines.join("\n"))}</p>\n`;
    }

    return html;
  }

  function renderMarkdown(md) {
    const lines = md.replace(/\r\n/g, "\n").split("\n");
    return parseBlock(lines);
  }

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

  loadAbout();
})();