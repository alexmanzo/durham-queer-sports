var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e4abd81b = require("../../chunks/index-e4abd81b.js");
var import_supabase_js = require("@supabase/supabase-js");
var variableFull = "";
const supabaseUrl = "https://zhmmzhbccpsnteavvkjr.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpobW16aGJjY3BzbnRlYXZ2a2pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY2OTM3MTksImV4cCI6MTk3MjI2OTcxOX0.6q3rYDhFj-gX_cj2KtUk_LVghKqJ89_VxHJrUlULykA";
(0, import_supabase_js.createClient)(supabaseUrl, supabaseAnonKey);
const Routes = (0, import_index_e4abd81b.c)(($$result, $$props, $$bindings, slots) => {
  let imgSrc;
  let imgAlt;
  return `<header class="${"flex md:flex-row flex-col gap-4 md:gap-0 justify-between items-center py-5"}"><h1 class="${"font-bold text-3xl font-serif"}">Durham Queer Sports</h1>
	<nav class="${"w-full md:w-auto flex items-center justify-center md:justify-between gap-7"}"><a href="${"#about"}">About</a>
		<a href="${"#leagues"}">Leagues</a>
		<a href="${"mailto:durhamqueersports@gmail.com"}" target="${"_blank"}" class="${"bg-cyan-800 hover:bg-cyan-900 transition-colors duration-100 text-white font-medium tracking-wide px-4 py-2 border-white rounded"}">Contact Us</a></nav></header>

<main><section class="${"flex flex-col items-center justify-between md:flex-row-reverse lg:my-24 md:my-20 my-10"}"><div class="${"flex-1 leading-normal text-3xl"}"><p class="${"text-center md:text-left"}">At Durham Queer Sports, our mission is to create a <strong>free, empowering, social, and athletic</strong>
				space for the Triangle&#39;s Queer community.
			</p></div>
		<div class="${"flex-1"}"><script src="${"https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"}"><\/script>
			<lottie-player src="${"https://assets3.lottiefiles.com/private_files/lf30_fmcseocu.json"}" mode="${"bounce"}" background="${"transparent"}" speed="${"1"}" loop autoplay class="${"mt-8 md:mt-0 max-w-full md:max-w-lg"}"></lottie-player></div></section>
	<section id="${"about"}" class="${"lg:my-24 md:my-20 my-10"}"><div class="${"flex flex-col items-center justify-between gap-10 md:flex-row"}"><div class="${"flex-1"}"><h2 class="${"text-3xl mb-5 font-serif font-semibold"}">About DQS</h2>
				<p>Durham Queer Sports is an association of <strong>free</strong> social sports leagues for
					queer and trans people around North Carolina&#39;s Triangle region. There&#39;s
					<strong>no registration, no fees and no attendance requirements</strong> \u2013 just show
					up when you want to and play/watch as much or as little as you like.
				</p>
				<p class="${"mt-3"}">New players and spectators of <strong>all levels, bodies and backgrounds are always welcome</strong> (even at the last game of the season!) Kids welcome &amp; dogs (on leash) welcome unless otherwise
					specified.
				</p></div>
			<div class="${"flex-1"}"><img class="${"rounded-2xl"}"${(0, import_index_e4abd81b.a)("src", imgSrc, 0)}${(0, import_index_e4abd81b.a)("alt", imgAlt, 0)}></div></div></section>
	<section id="${"leagues"}" class="${"lg:my-24 md:my-20 my-10"}"><div class="${"flex flex-col items-center justify-between gap-10 md:flex-row"}"><div class="${"flex-1"}"><h2 class="${"text-3xl mb-5 font-serif font-semibold"}">Leagues</h2>
				<p>Join Facebook groups for each of our leagues to stay up to date on upcoming events.</p>
				<ul class="${"grid md:grid-cols-3 gap-4 mt-5"}"><li><a class="${"border rounded-lg p-4 block hover:bg-slate-50 hover:underline"}" href="${"https://www.facebook.com/groups/DurhamQueerKickball"}" target="${"_blank"}">Kickball</a></li>
					<li><a class="${"border rounded-lg p-4 block hover:bg-slate-50 hover:underline"}" href="${"https://www.facebook.com/groups/446538442593552"}" target="${"_blank"}">Soccer</a></li>
					<li><a class="${"border rounded-lg p-4 block hover:bg-slate-50 hover:underline"}" href="${"https://www.facebook.com/groups/DurmQueerBball/"}" target="${"_blank"}">Basketball</a></li>
					<li><a class="${"border rounded-lg p-4 block hover:bg-slate-50 hover:underline"}" href="${"https://www.facebook.com/groups/2198858146817694/"}" target="${"_blank"}">Ultimate</a></li>
					<li><a class="${"border rounded-lg p-4 block hover:bg-slate-50 hover:underline"}" href="${"https://www.facebook.com/groups/2227800064187253/"}" target="${"_blank"}">Run club</a></li>
					<li><a class="${"border rounded-lg p-4 block hover:bg-slate-50 hover:underline"}" href="${"https://www.facebook.com/groups/durhamqueertennis"}" target="${"_blank"}">Tennis</a></li></ul></div></div></section></main>`;
});
