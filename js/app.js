document.addEventListener("DOMContentLoaded", () => {

    let value = [{
        image : "./asset/new_york.jpg",
        alt : "new york",
        titre : "Ville de New York",
        contenu : "lorem bla bla"
    },
    {
        image : "./asset/los_angeles.jpg",
        alt : "los angeles",
        titre : "Ville de Los Angeles",
        contenu : "lorem bla bla 2"
    }
    ]

    let section_article = document.querySelector("main");

    class article{
        constructor(image, alt, titre, contenu){
            this.image = image;
            this.alt = alt;
            this.titre = titre;
            this.contenu = contenu;
        }

        add_content(section_article){
            let section_element = document.createElement("section");

            let figure_element = document.createElement("figure");

            figure_element .innerHTML = `
            <img src="${this.image}" alt="${this.alt}">
            <figcaption>
                <h2>${this.titre}</h2>
                <p>${this.contenu}</p>
                <button aria-label="button like">
                    <span>0</span>
                </button>
            </figcaption>`


            section_element.appendChild(figure_element);
            section_article.appendChild(section_element);
        }
    }

    for(let element of value){
        let article_obj = new article(element["image"], element["alt"], element["titre"], element["contenu"])
        article_obj.add_content(section_article)
    }

    /* like */

    let footer_p = document.querySelector("footer p");
    footer_p.innerHTML+= new Date().getFullYear()

    let button = document.querySelectorAll("figcaption button");
    for(let element of button){
        element.addEventListener("click", function(){
            let span = element.querySelector("span");
            span.innerText = 1;
            element.disabled = true;
        })
    }


});