function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

document.addEventListener('click', (e) => {
    const menuHamburguesa = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    });

const frases = [
      {
        texto: "Procuremos más ser padres de nuestro porvenir que hijos de nuestro pasado.",
        autor: "Miguel de Unamuno"
      },
      {
        texto: "El secreto de la vida consiste en saber lo que quieres y recordar lo que eres.",
        autor: "Pío Baroja"
      },
      {
        texto: "Vencerse a sí mismo es la mayor de las victorias.",
        autor: "Pedro Calderón de la Barca"
      },
      {
        texto: "El esfuerzo es la magia que transforma los éxitos en realidad",
        autor: "Rafael Nadal"
      }
    ];

    const fraseEl = document.getElementById("frase");
    const autorEl = document.getElementById("autor");
    const botonesContainer = document.querySelector(".botones");

    let indice = 0;

    // Crear botones
    frases.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.classList.add("boton");
      if (i === 0) btn.classList.add("activo");
      btn.addEventListener("click", () => mostrarFrase(i));
      botonesContainer.appendChild(btn);
    });

    function mostrarFrase(i) {
      indice = i;
      fraseEl.textContent = "“" + frases[i].texto + "”";
      autorEl.textContent = "— " + frases[i].autor;

      document.querySelectorAll(".boton").forEach((btn, idx) => {
        btn.classList.toggle("activo", idx === i);
      });
    }
 
  const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("active");
        let sign = item.querySelector("span");
        sign.textContent = item.classList.contains("active") ? "−" : "+";
      });
    });
