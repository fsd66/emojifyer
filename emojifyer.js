const emojifyTranslationTable = {
    a: "🅰️",
    b: "🅱️",
    c: "©️",
    d: "↩",
    e: "↪",
    f: "🎏",
    g: "🎼",
    h: "♓",
    i: "ℹ",
    j: "🗾",
    k: "🤟",
    l: "🛴",
    m: "Ⓜ",
    n: "♑",
    o: "🅾",
    p: "🅿",
    q: "🧶",
    r: "®",
    s: "💲",
    t: "✝",
    u: "⛎",
    v: "✔",
    w: "〰",
    x: "❌",
    y: "💹",
    z: "💤",
    0: "0️⃣",
    1: "1️⃣",
    2: "2️⃣",
    3: "3️⃣",
    4: "4️⃣",
    5: "5️⃣",
    6: "6️⃣",
    7: "7️⃣",
    8: "8️⃣",
    9: "9️⃣"
}

const EMOJIFY_TEST_PHRASE = "the quick brown fox jumped over the lazy dogs";

function emojifyString(string = EMOJIFY_TEST_PHRASE) {
    return [...string.toLowerCase()].map(c => emojifyTranslationTable[c] || c).join("");
}
