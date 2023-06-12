//Dom content load
document.addEventListener("DOMContentLoaded", function () {

    const words = ["Analista de Dados", "Bioinformata", "Cientista de Dados", "Desenvolvedor"];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const word = words[currentWordIndex];
        const span = document.getElementById("word");

        if (isDeleting) {
            span.textContent = word.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            span.textContent = word.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === word.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(type, 200);
        } else {
            setTimeout(type, 30);
        }
    }
    type();


    // Adiciona evento de clique no .toggle-menu que adiciona a classe navbar-active do.navbar, se ja existir, ele remove.
    document.querySelector(".toggle-menu").addEventListener("click", function () {
        //verifica se a classe navbar-active existe, se existir ele remove ela
        if (document.querySelector(".navbar").classList.contains("navbar-active")) {
            document.querySelector(".navbar").classList.remove("navbar-active");
            document.querySelector(".navbar").classList.add("navbar-inactive");
        }
        //se não existir ele adiciona
        else {
            document.querySelector(".navbar").classList.remove("navbar-inactive");
            document.querySelector(".navbar").classList.add("navbar-active");
        }
    }
    );

    //Adiciona evento de clique fora do header para remover a classe navbar-active
    document.querySelector("body").addEventListener("click", function (event) {
        if (!event.target.closest("header")) {
            document.querySelector(".navbar").classList.remove("navbar-active");
            document.querySelector(".navbar").classList.add("navbar-inactive");
        }
    }
    );

    function scrollToSection(buttonSelector, sectionSelector) {
        const button = document.querySelector(buttonSelector);
        const section = document.querySelector(sectionSelector);

        button.addEventListener("click", function (event) {
            event.preventDefault();
            const elementPosition = section.offsetTop;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth"
            });
        });
    }
    scrollToSection(".home-btn-nav", ".home");
    scrollToSection(".logo", ".home");
    scrollToSection(".about-btn", ".about");
    scrollToSection(".services-btn", ".services-section");
    scrollToSection(".projetos-btn", ".portfolio-section");
    scrollToSection(".contact-btn-nav", ".contact");
    scrollToSection("#contact-me-btn", ".contact");
    scrollToSection(".footer-about", ".services-section");


    // Seleciona todos os elementos com a classe "teste-popover"
    const popoverElements = document.querySelectorAll(".teste-popover");

    // Percorre cada elemento e adiciona o evento de clique
    popoverElements.forEach(function (element) {
        element.addEventListener("click", function () {
            // Verifica se o popover está ativo
            const isActive = this.getAttribute("aria-describedby") !== null;

            // Fecha o popover caso esteja ativo
            if (isActive) {
                const popover = bootstrap.Popover.getInstance(this);
                popover.hide();
            } else {
                // Ativa o popover do Bootstrap
                const popover = new bootstrap.Popover(this);
                popover.show();

                // Fecha o popover automaticamente após 4 segundos
                setTimeout(function () {
                    popover.hide();
                }, 4000);
            }
        });
    });

    // Fecha o popover ao clicar fora dele
    document.addEventListener("click", function (event) {
        const popoverTrigger = event.target.closest(".teste-popover");
        if (!popoverTrigger) {
            const popovers = document.querySelectorAll(".popover");
            popovers.forEach(function (popover) {
                const instance = bootstrap.Popover.getInstance(popover);
                if (instance) {
                    instance.hide();
                }
            });
        }
    });

    // Reativa o popover quando ocultado
    document.addEventListener("hidden.bs.popover", function (event) {
        const popoverTrigger = event.target;
        const popover = bootstrap.Popover.getInstance(popoverTrigger);
        if (popover) {
            popover.dispose(); // Remove a instância existente do popover
        }
    });

    const wapp = document.querySelector(".wapp");
    const wappMini = document.querySelector(".whatsapp-mini");
    const instagram = document.querySelector(".instagram");
    const linkedin = document.querySelector(".linkedin")
    const linkedinMini = document.querySelector(".linkedin-mini")
    const hireMe = document.querySelector("#hire-me-btn");
    const instagramMini = document.querySelector(".instagram-mini");

    const mensagem = 'Olá, vi seu portfólio e gostaria de saber mais a respeito de você e seus serviços.'
    const hireMsg = 'Olá, vi seu portfólio e gostaria marcar uma entrevista.'

    wapp.addEventListener("click", function () {
        window.open(`https://api.whatsapp.com/send?phone=86995687211&text=${mensagem}`, '_blank');
    });

    wappMini.addEventListener("click", function () {
        window.open(`https://api.whatsapp.com/send?phone=86995687211&text=${mensagem}`, '_blank');
    });


    instagram.addEventListener("click", function () {
        window.open(`https://www.instagram.com/_eder.campos`, '_blank');
    }
    );

    instagramMini.addEventListener("click", function () {
        window.open(`https://www.instagram.com/_eder.campos`, '_blank');
    }
    );

    linkedin.addEventListener("click", function () {
        window.open(`https://www.linkedin.com/in/ederdk/`, '_blank');
    }
    );

    linkedinMini.addEventListener("click", function () {
        window.open(`https://www.linkedin.com/in/ederdk/`, '_blank');
    }
    );

    hireMe.addEventListener("click", function () {
        window.open(`https://api.whatsapp.com/send?phone=86995687211&text=${hireMsg}`, '_blank')
    }
    );



/*
    //Setas Portfolio

    // Obtém o container das divs
    var container = document.querySelector('.container-portfolio');

    // Obtém todas as divs com a classe "caixa"
    var divs = document.querySelectorAll('.caixa');

    // Variável para controlar o índice da div atualmente exibida
    var currentIndex = 0;

    // Função para exibir a div atual
    function showCurrentDiv() {
        // Itera sobre todas as divs
        divs.forEach(function (div, index) {
            // Define a opacidade da div com base se é a div atualmente exibida ou não
            div.style.opacity = index === currentIndex ? '1' : '0';
        });

        // Calcula o valor do scroll horizontal para a div atual
        var scrollValue = divs[currentIndex].offsetLeft - container.offsetLeft;

        // Rola suavemente para a div atual
        container.scrollTo({
            left: scrollValue,
            behavior: 'smooth'
        });
    }

    // Função para rolar suavemente para a próxima div
    function nextDiv() {
        if (currentIndex < divs.length - 1) {
            currentIndex++;
            showCurrentDiv();
        }
    }

    // Função para rolar suavemente para a div anterior
    function previousDiv() {
        if (currentIndex > 0) {
            currentIndex--;
            showCurrentDiv();
        }
    }

    // Adiciona os manipuladores de evento aos botões de seta
    document.querySelector('.left-arrow a').addEventListener('click', previousDiv);
    document.querySelector('.right-arrow a').addEventListener('click', nextDiv);

    // Exibe a primeira div inicialmente
    showCurrentDiv();*/


});