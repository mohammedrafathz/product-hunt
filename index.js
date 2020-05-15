function loadProducts() {
    var productData = JSON.parse(this.response);
    var productContainer = document.getElementById("productContainer");

    // loop through the products array
    var htmlText = "";
    for (i = 0; i < productData.length; i++) { // 1
        var product = productData[i]; // productData[1] // product 2

        // place all the html inside a string
        htmlText = htmlText + `<div class="row mt-3 justify-content-center align-items-center">
                    <div class="col-6">
                        <div class="card centered ">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-3">
                                        <img src="${product.image}"
                                            alt="Product Logo">
                                    </div>
                                    <div class="col-7">
                                        <h5 class="card-title">${product.title}</h5>
                                        <p class="card-text info">${product.description}</p>
                                    </div>
                                    <div class="col-2">
                                        <button class="up-vote" id="upVoteButton${product.id}">
                                            <img src="https://cdn4.iconfinder.com/data/icons/geomicons/32/672416-triangle-up-512.png"
                                                alt="" class="arrow-icon">
                                           <div>${product.voteCount}</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    }

    // add the newly generated html to the DOM
    productContainer.innerHTML = htmlText;


    for (var j = 0; j < productData.length; j++) {
        var product = productData[j]; // productData[1] // product 2

        var upVoteButton = document.getElementById("upVoteButton" + product.id);

        upVoteButton.addEventListener("click", function (event) {
            var parentElement = event.target.parentElement;
            // console.log(event.target.parentElement);

            var countDiv = parentElement.querySelector("div");
            // console.log(countDiv)
            var count = parseInt(countDiv.innerText);

            countDiv.innerText = count + 1;
        })
    }
}

var xhrRequest = new XMLHttpRequest();
xhrRequest.open("GET", "data.json", true);
xhrRequest.onload = loadProducts
xhrRequest.send()
