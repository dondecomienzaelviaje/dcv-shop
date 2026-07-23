import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Philosophy() {
  return (
    <section className="bg-neutral-950 py-32 text-white">
      <Container>
        <SectionTitle
          badge="FILOSOFÍA DCV"
          title="La disciplina es libertad."
          description="Creemos que una vida extraordinaria no se construye con motivación, sino con hábitos y disciplina diaria."
        />

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl leading-9 text-gray-300">
            En DCV Shop seleccionamos cuidadosamente cada producto para ayudarte
            a crecer, organizar tu tiempo y construir la mejor versión de ti
            mismo.
          </p>

          <div className="mt-12">
            <Button>Conoce nuestra filosofía</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}