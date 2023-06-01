window.onload = () => {
    const instructions = [
        {
            title: "Убедиться в собственной безопасности",
            content: [
                {
                    description: [
                        "Осмотреться вокруг, нет ли угрозы для собственной жизни и жизни пострадавшего, устранить угрожающие факторы",
                    ],
                },
            ],
        },
        {
            title: "Оценить состояние пострадавшего",
            content: [
                {
                    description: [
                        "Обратить внимание на положение пострадавшего, двигательную активность, необходимо проверить наличие сознания у пострадавшего. Для проверки сознания аккуратно потормошите пострадавшего за плечи и громко спросить: «Что с Вами? Нужна ли Вам помощь?». Человек, находящийся в бессознательном состоянии, не сможет отреагировать и ответить на эти вопросы",
                    ],
                },
            ],
        },
        {
            title: "Вызвать скорую помощь",
            content: [
                {
                    description: [
                        "Телефон СМП - 103,112",
                        "Вам необходимо четко назвать адрес, пол, возраст и характер травмы, описать состояние пострадавшего",
                    ],
                },
            ],
        },
        {
            title: "Убедиться в собственной безопасности",
            content: [
                {
                    description: [
                        "Осмотреться вокруг, нет ли угрозы для собственной жизни и жизни пострадавшего, устранить угрожающие факторы",
                    ],
                },
            ],
        },
        {
            title: "Остановить кровотечение (при наличии) давящей повязкой. По возможности, приложить холод к голове",
            content: [
                {
                    img: "./assets/injury.jpg",
                    description: [
                        "Определить тип кровотечения: при артериальном кровотечении кровь алого цвета и выходит под большим давлением («Бьет фонтаном»)",
                        "Если кровотечение артериальное, то немедленно определить место раны и выполнить пальцевое прижатие раны.",
                        "Далее на рану накладывается марля (чистый платок, ткань), поверх неё укладывается несколько слоёв ваты (если нет ваты — чистое полотенце), туго бинтуется. Если давящая повязка промокает, сильно надавите на неё ладонью",
                    ],
                },
            ],
        },
        {
            title: "Проверить наличие пульса",
            content: [
                {
                    img: "./assets/t5.png",
                    description: [
                        "Для определения пульса на сонной артерии необходимо расположить четыре пальца на шее пострадавшего между хрящами гортани и кивательной мышцей и осторожно прижать их в сторону позвоночного столба. Пульс следует определять в течение 10 секунд, так как при волнении можно ошибиться и принять свой пульс за пульс пострадавшего",
                    ],
                },
            ],
        },
        {
            title: "Проверить наличие дыхания",
            content: [
                {
                    img: "./assets/t6.png",
                    description: [
                        "Для проверки дыхания следует наклониться щекой и ухом ко рту и носу пострадавшего и в течение 10 сек. попытаться услышать его дыхание, почувствовать выдыхаемый воздух на своей щеке и увидеть движения грудной клетки у пострадавшего. При отсутствии дыхания грудная клетка пострадавшего останется неподвижной, звуков его дыхания не будет слышно, выдыхаемый воздух изо рта и носа не будет ощущаться щекой",
                    ],
                },
            ],
        },

        {
            title: "При отсутствии дыхания освободить дыхательные пути",
            content: [
                {
                    img: "./assets/t7.png",
                    description: [
                        "Открыть и осмотреть рот. При обнаружении во рту и глотке крови, слизи, рвотных масс, мешающих дыханию, их удаляют при помощи марлевой салфетки или носового платка на пальце",
                    ],
                },
            ],
        },

        {
            title: "Если нет пульса и дыхания, то и приступить к сердечно-легочной реанимации",
            content: [
                {
                    img: "./assets/t8.png",
                    description: [
                        "Запрокинуть голову пострадавшего и отодвинуть нижнюю челюсть",
                        "Выполнить 30 ритмичных сдавливаний грудной клетки. Ладони сложить в замок, руки выпрямлены, корпус перпендикулярно ладоням.",
                        "Положение рук – на 2 пальца выше мечевидного отростка (см. рисунок ниже)",
                    ],
                },
                {
                    img: "./assets/t9.png",
                    description: [
                        "Далее осуществить 2 выдоха в рот пострадавшему, придерживая челюсть и лоб. Выдох осуществлять через платок или иную ткань.",
                        "Повторять данный алгоритм до восстановления пульса и дыхания у пострадавшего, или до прибытия бригады скорой помощи.",
                    ],
                },
            ],
        },

        {
            title: 'Если пульс и дыхание возобновились придать положение "лежа на боку"',
            content: [
                {
                    img: "./assets/t10.png",
                    description: [
                        "Это необходимо сделать во избежание попадания в дыхательные пути крови и/или рвотных масс",
                    ],
                },
            ],
        },
        {
            title: "Контролировать состояние пострадавшего до прибытия скорой медицинской помощи",
        },
    ];

    const main = document.querySelector(".instruction-section");

    instructions.forEach((el, index) => {
        const container = document.createElement("div");
        container.classList.add("instruction-section__container");
        const block = document.createElement("div");
        block.classList.add("instruction-section__elem");
        const header = document.createElement("div");
        header.classList.add("instruction-section__header");

        const title = document.createElement("h5");
        title.classList.add("instruction-section__title");
        title.textContent = el.title;
        header.appendChild(title);

        container.appendChild(header);

        if (el.content?.length) {
            const button = document.createElement("button");
            button.classList.add("instruction-section__button", "not-active");
            const buttonIcon = document.createElement("img");
            buttonIcon.src = "./assets/icons/arrow.svg";
            button.appendChild(buttonIcon);
            header.appendChild(button);

            const contentWrapper = document.createElement("div");
            contentWrapper.classList.add(
                "instruction-section__wrapper",
                "hidden"
            );
            el.content.forEach((element) => {
                element?.description.forEach((text) => {
                    const parapgrpah = document.createElement("p");
                    parapgrpah.classList.add("instruction-section__paragraph");
                    parapgrpah.textContent = text;
                    contentWrapper.appendChild(parapgrpah);
                });
                if (element.img) {
                    const image = document.createElement("img");
                    image.src = element.img;
                    contentWrapper.appendChild(image);
                }
            });

            header.onclick = () => {
                button.classList.toggle("not-active");
                contentWrapper.classList.toggle("hidden");
            };

            container.appendChild(contentWrapper);
        }

        block.appendChild(container);
        if (index !== instructions.length - 1) {
            const arrow = document.createElement("div");
            block.appendChild(arrow);
            arrow.classList.add("instruction-section__arrow");
        }

        main.appendChild(block);
    });
};
