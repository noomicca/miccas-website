const $grid = document.querySelector(".grid");

function createMasonryGrid(columns, posts) {
    $grid.innerHTML = "";
    //store column arrays for relevant posts
    var columnWrappers = {};

    //create column item-array
    for (let i = 0; i < columns; i++) {
        columnWrappers[`column${i}`] = [];
    }
    for (let i = 0; i < posts.length; i++) {
        const column = i % columns;
        columnWrappers[`column${column}`].push(posts[i]);
    }

    for (let i = 0; i < columns; i++) {
        var columnPosts = columnWrappers[`column${i}`];
        var column = document.createElement(`div`);
        column.classList.add("col");

        columnPosts.forEach((post) => {
            var postDiv = document.createElement("div");
            postDiv.classList.add("post");
            var image = document.createElement("img");
            image.src = post.img.img;
            var overlay = document.createElement("div");
            overlay.classList.add("overlay");
            var title = document.createElement("h4");
            title.innerText = post.title;
            var text = document.createElement("p");
            text.innerText = post.text;

            overlay.append(title, text);
            postDiv.append(image, overlay);
            column.appendChild(postDiv);
        });
        $grid.appendChild(column);
    }
}

window.addEventListener("resize", () => {
    ilusIndex = 0;

    if (window.innerWidth < 600 && previousScreenSize >= 600) {
        createMasonryGrid(2, ilusPosts);
    } else if (
        window.innerWidth >= 600 &&
        window.innerWidth < 1000 &&
        (previousScreenSize < 600 || previousScreenSize >= 1000)
    ) {
        createMasonryGrid(3, ilusPosts);
    } else if (window.innerWidth >= 1000 && previousScreenSize < 1000) {
        createMasonryGrid(4, ilusPosts);
    }
    previousScreenSize = window.innerWidth;
});

//  Page Load
if (previousScreenSize < 600) {
    createMasonryGrid(2, ilusPosts);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
    createMasonryGrid(3, ilusPosts);
} else {
    createMasonryGrid(4, ilusPosts);
}
