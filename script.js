// A-B-O-U-T  U-S ---------------------

// S.Y. 2018-2019
// var span1 = document.getElementsByClassName('span1');
// var div1 = document.getElementsByClassName('div1');
// var m = 0;
// span1[1].onclick = ()=>{
//     m++;
//     for(var i of div1)
//     {
//         if (m==0) {i.style.left = "0px";}
//         if (m==1) {i.style.left = "-300px";}
//         if (m==2) {i.style.left = "-600px";}
//         if (m==3) {i.style.left = "-900px";}
//         if (m==4) {i.style.left = "-1350px";}
//         if (m>6) {m=6;}
//     }
// }


(function () {
    "use strict";

    // Vertical Slider object
    const vertical_slider = {

        // Slide class name
        slider_class: ".slider",

        // Show slide
        show_slide: function (slide_id, context_item) {
            const slide_container = context_item.closest(this.slider_class).querySelector(".slides");
            if (slide_container) {
                const slides = slide_container.querySelectorAll(".slide");
                if (slides && slides[slide_id]) {

                    // Scroll to active slide
                    slide_container.scrollTo({
                        top: slides[slide_id].offsetTop,
                        behavior: "smooth"
                    });


                    // Set active context item
                    const active_context_item = context_item.closest(".slide_navigation").querySelector(".active");
                    if (active_context_item) {
                        active_context_item.classList.remove("active");
                    }

                    context_item.classList.add("active");
                }
            }
        },

        // Initialize slide
        init_slider: function (slider) {

            const navigation_items = slider.querySelectorAll(".slide_navigation a");

            if (navigation_items) {
                Object.keys(navigation_items).forEach(function (key) {
                    navigation_items[key].onclick = function (e) {
                        e.preventDefault();

                        vertical_slider.show_slide(key, navigation_items[key]);
                    };
                });
            }

        },

        // Initialize sliders
        init: function () {

            // Iterate over each slider
            document.querySelectorAll(this.slider_class).forEach((slider) => this.init_slider(slider));

        }
    };

    // Initialize sliders
    vertical_slider.init();
}());




// G-A-L-L-E-R-Y ---------------------

// Get the modal
// var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = $('.myImg');
// var modalImg = $("#img01");
// var captionText = document.getElementById("caption");
// $('.myImg').click(function(){
//     modal.style.display = "block";
//     var newSrc = this.src;
//     modalImg.attr('src', newSrc);
//     captionText.innerHTML = this.alt;
// });

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
