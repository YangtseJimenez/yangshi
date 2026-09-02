import { createClient } from "@/utils/supabase/server";

const products = [
  { name: "Whopper Clásica", category: "Hamburguesas", price: "$14.50", icon: "🍔" },
  { name: "Combo King", category: "Combos", price: "$19.99", icon: "🍟" },
  { name: "Papas Crujientes", category: "Acompañamientos", price: "$6.50", icon: "🍟" },
  { name: "Pollo Crispy", category: "Pollo", price: "$12.75", icon: "🍗" },
  { name: "Bebida Cola", category: "Bebidas", price: "$3.50", icon: "🥤" },
  { name: "Nuggets", category: "Snacks", price: "$8.25", icon: "🍗" },
  { name: "Chick Burger", category: "Especiales", price: "$13.25", icon: "🍔" },
  { name: "Helado Milkshake", category: "Postres", price: "$7.99", icon: "🥤" },
];

export default async function Home() {
  const supabase = await createClient();

  if (!supabase) {
    return (
      <main className="min-h-screen bg-[#fffaf2] text-[#111111]">
        <header className="sticky top-0 z-20 border-b border-[#f4d98d] bg-[#111111]/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div className="text-xl font-black tracking-[0.12em] text-[#f7c948]">DON POLLO</div>
            <div className="flex items-center gap-3">
              <nav className="hidden items-center gap-6 text-sm font-semibold text-white md:flex">
                <a href="#">Inicio</a>
                <a href="#menu">Menú</a>
                <a href="#">Promociones</a>
              </nav>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-3xl border border-[#f4d98d] bg-white p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b10d17]">
              Supabase pendiente
            </p>
            <h1 className="mt-4 text-4xl font-black md:text-5xl">
              Faltan las variables de entorno.
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              Agrega tu NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY para que la app pueda conectarse a la base de datos.
            </p>
          </div>
        </div>
      </main>
    );
  }

  const { data: notes, error } = await supabase.from("notes").select();

  return (
    <main className="min-h-screen bg-[#fffaf2] text-[#111111]">
      <header className="sticky top-0 z-20 border-b border-[#f4d98d] bg-[#111111]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-black tracking-[0.12em] text-[#f7c948]">DON POLLO</div>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-sm font-semibold text-white md:flex">
              <a href="#">Inicio</a>
                <a href="#menu">Menú</a>
              <a href="#">Promociones</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10 rounded-3xl bg-[#111111] p-8 text-white shadow-lg">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f7c948]">
            Don Pollo
          </p>
          <h1 className="mt-4 text-4xl font-black md:text-6xl">
            Deliciosa comida en cada mordida.
          </h1>
          <p className="mt-4 max-w-xl text-base text-zinc-300 md:text-lg">
            La app ya está conectada con Supabase y lista para servir contenido dinámico.
          </p>
        </div>

        <section id="menu" className="rounded-3xl border border-[#f4d98d] bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b10d17]">Menú</p>
              <h2 className="mt-2 text-2xl font-bold">Elige tus favoritos</h2>
            </div>
            <a href="/login.html" className="rounded-full bg-[#d72638] px-4 py-2 text-sm font-bold text-white">
              Iniciar sesión para pedir
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="rounded-2xl border border-[#f4d98d] bg-[#fffaf2] p-4">
                <div className="flex h-24 items-center justify-center rounded-xl bg-[#ffe89e] text-5xl" aria-hidden="true">
                  {product.icon}
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-[#b10d17]">{product.category}</p>
                <h3 className="mt-2 font-bold">{product.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-black text-[#d72638]">{product.price}</span>
                  <a href="/login.html" className="text-sm font-bold text-[#111111] underline">Pedir</a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
