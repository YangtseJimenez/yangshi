import { createClient } from "@/utils/supabase/server";

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
                <a href="#">Menú</a>
                <a href="#">Promociones</a>
              </nav>
              <button
                type="button"
                className="relative inline-flex items-center gap-2 rounded-full bg-[#d72638] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-red-900/20"
              >
                <span aria-hidden="true">🛒</span>
                Carrito
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f7c948] text-[10px] font-black text-[#111111]">
                  2
                </span>
              </button>
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
              <a href="#">Menú</a>
              <a href="#">Promociones</a>
            </nav>
            <button
              type="button"
              className="relative inline-flex items-center gap-2 rounded-full bg-[#d72638] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-red-900/20"
            >
              <span aria-hidden="true">🛒</span>
              Carrito
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f7c948] text-[10px] font-black text-[#111111]">
                2
              </span>
            </button>
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

        <section className="rounded-3xl border border-[#f4d98d] bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-2xl font-bold">Notas desde Supabase</h2>

          {error ? (
            <div className="rounded-2xl bg-red-50 p-4 text-red-700">
              Error: {error.message}
            </div>
          ) : (
            <pre className="overflow-auto rounded-2xl bg-[#111111] p-4 text-sm text-[#f7c948]">
              {JSON.stringify(notes, null, 2)}
            </pre>
          )}
        </section>
      </div>
    </main>
  );
}
