export const Carrousel = () => {
    const data = [
      {
        titulo: "ERA ANTIGA",
        imagem: "/museu-do-tempo/src/assets/museuLogo.png/eraAntiga.png",
        texto:
          "A arte na Idade Antiga revela os primeiros registros da expressão humana através de formas visuais. Civilizações como Egito, Mesopotâmia, Grécia e Roma deixaram legados que vão muito além da estética: cada escultura, pintura ou construção carregava significados religiosos, políticos e sociais. De pirâmides monumentais a vasos decorados com cenas do cotidiano, a arte antiga nos conecta aos valores, mitos e avanços técnicos desses povos, sendo uma janela essencial para compreender a formação das sociedades humanas."
      },
      {
        titulo: "ERA MEDIEVAL",
        imagem: "/museu-do-tempo/src/assets/museuLogo.png/idadeMedia.png",
        texto:
          "A arte medieval reflete um período marcado pela forte influência da religião e pelo surgimento de estilos que buscavam expressar o espiritual e o divino. Entre castelos, igrejas e manuscritos iluminados, a arte ganhou formas simbólicas e detalhadas, combinando fé e funcionalidade. Do estilo românico ao gótico, as obras medievais revelam uma época de transformação cultural, onde a arte era tanto uma forma de devoção quanto uma ferramenta para transmitir histórias e valores para a sociedade."
      },
      {
        titulo: "REVOLUÇÃO INDUSTRIAL",
        imagem: "/museu-do-tempo/src/assets/museuLogo.png/revolucaoIndustrial.png",
        texto:
          "Durante a Revolução Industrial, a arte refletiu as profundas mudanças sociais, econômicas e tecnológicas que transformaram o mundo. Surgiram novos movimentos artísticos que reagiam à industrialização, como o Romantismo, que exaltava a natureza e a emoção, e o Realismo, que retratava a vida cotidiana das classes trabalhadoras. A arte desse período é um registro vivo das tensões entre progresso e tradição, celebrando avanços ao mesmo tempo que questionava os impactos da modernidade."
      }
    ];
    return(
        <>
        {/* TODO: colocar imagem no carrossel pelo css */}
            <section className="carousel-container">
                <div>
                    <div class="carousel" id="carousel"></div>
                    <button class="arrow-btn">&#9654;</button>
                </div>
            </section>
        </>
    )
}
