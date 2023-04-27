// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        by: "andrep",
    },
];



showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("menubar").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("menubar").innerHTML += `
        <!-- Menubar -->
        <div class="menubar-area style-2 footer-fixed border-top rounded-0">
            <div class="toolbar-inner menubar-nav">
                <a href="/" class="nav-link">
                    <i class="ri-home-6-line"></i>
                </a>

                <a href="/m/search/" class="nav-link">
                    <i class="ri-search-2-line"></i>
                </a>

                <a href="order.html" class="nav-link">
                    <i class="ri-global-line"></i>
                </a>

                <a href="/m/profile/" class="nav-link">
                    <i class="ri-settings-line"></i>
                </a>
            </div>
        </div>
        <!-- Menubar -->
               `
    }

}