import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Philosophy() {
  return (
    <section className="bg-black py-32 text-white">
      <Container>
        <SectionTitle
          badge="FILOSOFÍA DCV"
          title="Construye la vida que quieres vivir."
          description="DCV nace de una idea sencilla: lo que haces todos los días termina construyendo quién eres."
        />

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl leading-9 text-gray-300">
            Disciplina para actuar. Mentalidad para avanzar. Hábitos para
            construir consistencia. Crecimiento para seguir evolucionando.
          </p>

          <p className="mt-6 text-xl leading-9 text-gray-300">
            Cuatro pilares que representan una misma filosofía: convertir tus
            intenciones en acciones y tus acciones en progreso.
          </p>

          <div className="mt-12 flex justify-center">
            <Button href="/philosophy" variant="primary">
              Conoce nuestra filosofía
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}