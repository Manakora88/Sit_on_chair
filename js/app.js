document.addEventListener("DOMContentLoaded", function(){
    //menu rozwijane
    var li = document.querySelectorAll("nav>ul>li");
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("mouseover", function(){
            if (this.querySelector("ul")) {
            this.querySelector("ul").style.display = "block";
            }
        });
        li[i].addEventListener("mouseout", function(){
            if (this.querySelector("ul")) {
            this.querySelector("ul").style.display = "none";
            }
        });
    }

    //znikający blok z nazwą
    var block = document.querySelectorAll(".photo-block");
    for (var i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseover", function() {
            this.querySelector(".ground").style.display = "none";
        });
        block[i].addEventListener("mouseout", function() {
            this.querySelector(".ground").style.display = "block";
        });
    }

    //slider
    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next")
    var list = document.querySelectorAll(".image li");
    var record = 0;

    list[record].classList.add("visible");
    prev.addEventListener("click", function() {

        list[record].classList.remove("visible");
        record = record - 1 < 0 ? list.length - 1 : record - 1;
        list[record].classList.add("visible");

    });
    next.addEventListener("click", function() {

        list[record].classList.remove("visible");
        record = record + 1 < list.length ? record + 1 : 0;
        list[record].classList.add("visible");
    });

    //lista drop-down
    var dropDown = document.querySelectorAll(".drop_down_list");
        for (var i = 0; i < dropDown.length; i++) {
            var arrow = dropDown[i].querySelector(".list_arrow");
            arrow.addEventListener("click", function() {
                this.querySelector(".list_panel").classList.toggle("visib");
            });
        }

    //PODSUMOWANIE
    var panel = document.querySelectorAll(".list_panel");
    var label = document.querySelectorAll(".list_label");
    //zmienne - rodzaj
    var type = panel[0].children;
    var chair = document.querySelector(".tit");
    var chairValue = document.querySelector(".title_value");
    //zmienne - kolor
    var col = panel[1].children;
    var colorChair = document.querySelector(".color");
    var colorChairValue = document.querySelector(".color_value");
    //zmienne - materiał
    var pattern = panel[2].children;
    var patternChair = document.querySelector(".pattern");
    var patternChairValue = document.querySelector(".pattern_value");
    //zmienne - transport
    var transport = document.querySelector("#transport");
    var transportPrice = transport.dataset.transportPrice;
    var checkTransport = document.querySelector("#transport");
    var transp = document.querySelector(".transport_ofert .check-text");
    var transports = document.querySelector(".transports");
    var transportsValue = document.querySelector(".transports_value");
    //zmienne - suma
    var sum = document.querySelector(".sum strong");
    function sumary(){
    var suma = Number(chairValue.innerText) + Number(colorChairValue.innerText) + Number(patternChairValue.innerText) + Number(transportsValue.innerText);
    sum.innerText = suma + " zł";
    }

    //rodzaje - zdarzenia
    for (var i = 0; i < type.length; i++) {
        type[i].addEventListener("click", function() {
            chair.innerText = "Chair " + this.innerText;
            label[0].innerText = "Chair " + this.innerText;
            chairValue.innerText = this.value;
            sumary();
        });
    }
    //kolory - zdarzenia
    for (var i = 0; i < col.length; i++) {
        col[i].addEventListener("click", function() {
            colorChair.innerText = this.innerText;
            label[1].innerText = this.innerText + " kolor";
            colorChairValue.innerText = this.value;
            sumary();
        });
    }
    //tkaniny - zdarzenia
    for (var i = 0; i < pattern.length; i++) {
        pattern[i].addEventListener("click", function() {
            patternChair.innerText = this.innerText;
            label[2].innerText = this.innerText;
            patternChairValue.innerText = this.value;
            sumary();
        });
    }
    //transport - zdarzenia
    checkTransport.addEventListener("change", function() {
        if (this.checked == true) {
            transports.innerText = transp.innerText;
            transportsValue.innerText = transportPrice;
            sumary();
        } else {
            transports.innerText = "";
            transportsValue.innerText = "";
            sumary();
        }
    });
});
