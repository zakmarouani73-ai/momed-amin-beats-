```javascript
/* =================================
   MOMED AMIN BEAT STORE
================================= */

let currentAudio = null;
let currentButton = null;


/* =================================
   MUSIC PREVIEW
================================= */

function playPreview(file, button) {

    // If clicking the same beat that's playing
    if (currentAudio && currentAudio.src.includes(file)) {

        if (!currentAudio.paused) {

            currentAudio.pause();

            button.innerHTML = "▶";

            return;
        }

        currentAudio.play();

        button.innerHTML = "❚❚";

        return;
    }


    // Stop previous beat
    if (currentAudio) {

        currentAudio.pause();

        if (currentButton) {
            currentButton.innerHTML = "▶";
        }
    }


    // Create new audio
    currentAudio = new Audio(file);

    currentButton = button;

    currentAudio.play();

    button.innerHTML = "❚❚";


    // When song finishes
    currentAudio.addEventListener("ended", function () {

        button.innerHTML = "▶";

        currentAudio = null;
        currentButton = null;

    });

}


/* =================================
   PAYMENT PAGE
================================= */

const params = new URLSearchParams(window.location.search);

const beat = params.get("beat");
const price = params.get("price");


if (beat) {

    const beatElement = document.getElementById("selectedBeat");

    if (beatElement) {
        beatElement.textContent = beat;
    }

}


if (price) {

    const priceElement = document.getElementById("selectedPrice");

    if (priceElement) {
        priceElement.textContent = price;
    }

}


/* =================================
   ORDER FORM
================================= */

const orderForm = document.getElementById("orderForm");


if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const payment =
            document.getElementById("paymentMethod").value;


        if (!name || !email || !payment) {

            alert("Please complete all fields.");

            return;
        }


        /*
        This does NOT process payment.

        It creates an order message that can
        later be connected to a real payment
        provider.
        */


        const message =
            "New Beat Order\n\n" +
            "Beat: " + (beat || "Unknown") + "\n" +
            "Price: €" + (price || "0") + "\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Payment: " + payment;


        console.log(message);


        alert(
            "Order received! Momed Amin will contact you about the payment and beat delivery."
        );

    });

}
```

