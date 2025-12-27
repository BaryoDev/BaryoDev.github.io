// node_modules/@arnelirobles/tiny-time-ago/dist/index.js
var h = [{ unit: "second", ms: 1e3, max: 60 }, { unit: "minute", ms: 6e4, max: 60 }, { unit: "hour", ms: 36e5, max: 24 }, { unit: "day", ms: 864e5, max: 7 }, { unit: "week", ms: 6048e5, max: 4 }, { unit: "month", ms: 2592e6, max: 12 }, { unit: "year", ms: 31536e6, max: 1 / 0 }];
var g = { en: { second: { singular: "second ago", plural: "seconds ago" }, minute: { singular: "minute ago", plural: "minutes ago" }, hour: { singular: "hour ago", plural: "hours ago" }, day: { singular: "day ago", plural: "days ago" }, week: { singular: "week ago", plural: "weeks ago" }, month: { singular: "month ago", plural: "months ago" }, year: { singular: "year ago", plural: "years ago" } }, es: { second: { singular: "hace 1 segundo", plural: "hace {n} segundos" }, minute: { singular: "hace 1 minuto", plural: "hace {n} minutos" }, hour: { singular: "hace 1 hora", plural: "hace {n} horas" }, day: { singular: "hace 1 día", plural: "hace {n} días" }, week: { singular: "hace 1 semana", plural: "hace {n} semanas" }, month: { singular: "hace 1 mes", plural: "hace {n} meses" }, year: { singular: "hace 1 año", plural: "hace {n} años" } } };
function p(e, n, r) {
  let a = g[r] ?? g.en, t = Math.abs(e);
  return t === 1 ? a[n].singular : a[n].plural.includes("{n}") ? a[n].plural.replace("{n}", String(t)) : `${t} ${a[n].plural}`;
}
function u(e, n = {}) {
  let { locale: r = "en", useIntl: a = true } = n, t = typeof e == "string" ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e, i = Date.now() - t, c = Math.abs(i), m = "second", s = 0;
  for (let o of h) if (c < o.ms * o.max) {
    m = o.unit, s = Math.round(c / o.ms);
    break;
  }
  if (s = i < 0 ? s : -s, a && typeof Intl < "u" && Intl.RelativeTimeFormat) try {
    return new Intl.RelativeTimeFormat(r, { numeric: "auto" }).format(s, m);
  } catch {
  }
  return p(s, m, r);
}
function f(e) {
  return (n) => u(n, { locale: e });
}
u.live = function(e, n, r = {}) {
  let { interval: a = 6e4, ...t } = r, l = () => {
    e.textContent = u(n, t);
  };
  l();
  let i = setInterval(l, a);
  return () => clearInterval(i);
};
var T = u;
export {
  f as createTimeAgo,
  T as default,
  u as timeAgo
};
//# sourceMappingURL=@arnelirobles_tiny-time-ago.js.map
